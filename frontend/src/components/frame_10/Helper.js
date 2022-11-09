import React from 'react'
import { useState } from 'react';
import axios from 'axios';
// import { Elements } from "@stripe/react-stripe-js";

import {
    useStripe,
    useElements,
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    // CardElement,
  } from "@stripe/react-stripe-js";

import { useNavigate } from 'react-router-dom';

const Helper = (props) => {
  const [name, setname] = useState("")
  console.log(props.values)

    const stripe = useStripe();
    const elements = useElements();
      // const tokens = localStorage.getItem("token");

    const cardStyle = {
      style: {
        base: {
          color: "#575757",
          fontWeight: 600,
          fontFamily: "Nunito, sans-serif",
          fontSmoothing: "antialiased",
          fontSize: "16px",
          letterSpacing: "0px",
          ":-webkit-autofill": {
            color: "#575757",
          },
          "::placeholder": {
            color: "#9C9C9C",
            fontSize: "14px",
            letterSpacing: "0.46px",
            fontWeight: "400",
            fontFamily: "Nunito, sans-serif",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
          fontSize: "23px"
        },
      },
    };

    
   
    

    const handleSubmit = async (e) => {
      // console.log(userName)

      if (!stripe || !elements) {
          alert("all details are mandatory")
          return;
      }

      let cardElement = elements.getElement(CardNumberElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
      });
      if (error) {
          console.log("error", error)
      } else {
          await createPaymentIntent(cardElement, paymentMethod);

      }
  };
  const createPaymentIntent = async (cardElement, paymentMethod) => {
      let card_token = await stripe.createToken(cardElement);
      console.log("asdd: ", card_token);

      try {
          const result = (await axios.post("https://hair-care.herokuapp.com/payment", { name: name, token: card_token?.token.id, price: 123*100 }))
props.setCurrentPage(props.currentPage +1)
          console.log(result);
      } catch (error) {
          console.log(error);
      }

  }
    
  return (
    <div >

        <form >

          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10 shadow-sm p-3 mb-5 rounded bg-light">
              <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-6 shadow-lg p-3 mb-5 rounded bg-light  div_7">

                  <h4>Select Payment Method</h4>
                  <div className="row mt-5 ">
                    <div className="col-sm-4">
                      <button className="rounded-0">
                        {" "}
                        <i class="fa-solid fa-credit-card " >  Credit card</i>
                      </button>
                    </div>
                    <div className="col-sm-4">
                      <button className="rounded-0">
                        {" "}
                        <i class="fa-solid fa-building-columns ">  Bank Transfer</i>
                      </button>
                    </div>
                    <div className="col-sm-4">
                      <button className="rounded-0">
                        {" "}
                        <i class="fa-brands fa-paypal "> Paypal</i>
                      </button>
                    </div>
                  </div>
                  {/* card name */}
                  <div class="mb-3 mt-5">
                    <div className="userName">

                      <input type="text" name="name" value={name} onChange ={(e)=>setname(e.target.value)}
                        className="form-control" placeholder="Name on card" />
                    </div>


                    <div className="stripecard-container">
                      <div className="stripe_card_number">
                        <CardNumberElement options={cardStyle} name="number"
                          className="form-control" />
                      </div>

                      <div className="card_wrapper">
                        <div className="stripe_card_expiry">
                          <CardExpiryElement options={cardStyle}
                            name="expDate" className="form-control" />
                        </div>
                        <div className="stripe_card_cvv mt-3">
                          <CardCvcElement options={cardStyle}
                            name="cvv"
                            className="form-control" />
                        </div>
                      </div>
                      {/* <PaymentElement /> */}

                    </div>


                  </div>



                  {/* this marks end here mark NO.1 */}
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-3 shadow-lg p-3 mb-5 rounded bg-light div_5">
                  {/* this is colom no.5 div mark NO-2 */}
                  <div className="row">
                    <h4 className="mt-3">Order Summry</h4>
                    <div className="row">
                      <h6 className="mt-5 col-sm-9 ">Conditioner</h6>
                      <h6 className="col-sm-3 mt-5">$1234</h6>
                      <p>this is description of the product it have all information about product
                        this is description of the product it have all information about product
                      </p>
                      <h6 className="text-center">Wednesday</h6>
                      <p className="text-center">
                        January 18,2022 | 11:00 PM
                      </p>
                      <button type="button" onClick={handleSubmit} className="btn" id="frame10_purchase_btn">PURCHASE NOW</button>
                    </div>


                  </div>

                  {/* this is colom no.5 div mark NO-2 */}
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>



    </div>
  )
}

export default Helper