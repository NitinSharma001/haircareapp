import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Frame9 = () => {
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [toggleError, setToggleError] =useState(false);
const [errorMessageName, setErrorMessageName] = useState('**please fill field**')

  const Navigate = useNavigate();
  const frameNavigate = () => {
    Navigate("/frame7");
  };


  const handleChange =(e)=>{
    console.log("sdfx : ", e.target.name , "SADAFBG : ", e.target.value)
    if(e.target.name == "name"){
      setName(e.target.value);
    }

    if(e.target.name =="street"){
      setStreet(e.target.value);
    }
    if(e.target.name =="city"){
      setCity(e.target.value);
    }
    if(e.target.name =="zip"){
      setZip(e.target.value);
    }
    if(e.target.name =="mobile"){
      setMobileno(e.target.value);
    }
    if(e.target.name =="email"){
      setEmail(e.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, street , zip, mobileno, email,state,country);

    if(!name|| name==Number||name.length>15||name.length<3 ||
       !street ||street.length>20||street.length<5 ||
       !city ||city.length>20||city.length<5 ||
       !mobileno ||mobileno.length>10||mobileno.length<10 ||
       !email ||email.length>10||email.length<10 ||
       !zip ||zip.length>6||email.length<6 )
    {
      // if(name.length<3||name.length>15){
      //   setToggleError(true);
      // }
      setToggleError(true);
    }

    // if (!name &&(name.length > 16 || name.length < 4)) {
    //   setName("please fill valid name");
    //   // street.value = setStreet('please fill valid Street address')
    // } else if (street.length > 25 || street.length < 10) {
    //   setStreet("please fill valid street address");
    // } else if (city.length > 25 || city.length < 5) {
    //   setCity("please fill valid city name");
    // } else if (zip.length > 6 || zip.length < 6) {
    //   setZip("please fill valid zip code");
    // } else if (mobileno.length > 10 || mobileno.length < 10) {
    //   setMobileno("please fill valid mobile no.");
    // } else if (email == !email.type) {
    //   setMobileno("please fill valid mobile no.");
    // }
else
{
  axios
      .post("https://hair-care.herokuapp.com/address", {
        name,
        street,
        city,
        mobileno,
        state,
        zip,
        country,
        email,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
}
    

    // Navigate("/frame9");
    // else{ alert("your blog is posted")}
  };
  return (
    <div>
      <div class="shadow-sm p-3 mb-5 rounded " onClick={frameNavigate}>
        <i class="fa-solid fa-arrow-left-long"> back</i>
        {/* <h4>Back</h4> */}
      </div>
<div className="row">
  <div className="col-sm-2"></div>
  <div className="col-sm-8">
  <form onSubmit={handleSubmit}>
        <div class="container bg-light text-secondary ">
          <h3 class="text-center "> Delivery Details</h3>
          <div class="contact-form">
            <div class="first p-3 mb-3">
              <label for="formGroupExampleInput" class="form-label">
                what is your name?
              </label>
              <input
                type="text"
                class="form-control frame_9_input bg-light"
                id="formGroupExampleInput "
                placeholder="Enter your Name"
                value={name}
                name="name"
                onChange={(e)=> handleChange(e)} />
                {
                  toggleError? <span style={{color:"red"}}>{errorMessageName}</span>:""
                }
                
                
            </div>

            {/* <hr> */}
            <div class="row p-3 mb-1">
              
              
              <div class="col-md-6 ">
                <h6>Delevery Address</h6>
              <label for="formGroupExampleInput" class="form-label">
                Street
              </label>
                <input
                class="form-control frame_9_input bg-light "
                id="formGroupExampleInput "
                placeholder="Enter Your Street"
                name="street"
                  type="text"
                  value={street}
                  onChange={(e)=>handleChange(e)}/>
                  {
                  toggleError? <span style={{color:"red"}}>{errorMessageName}</span>:""
                }
              </div>
              <div class="col-md-6 pt-5">
              <label for="formGroupExampleInput" class="form-label">
                City/Subrub*
              </label>
                <input
                
                class="form-control frame_9_input bg-light"
                id="formGroupExampleInput "
                name="city"
                placeholder=""
                  type="text"
                  value={city}
                  onChange={handleChange}/>
                   {
                  toggleError? <span style={{color:"red"}}>{errorMessageName}</span>:""
                }
              </div>

              <div class="col-md-6">
              <label for="formGroupExampleInput" class="form-label">
                State
              </label>
                {/* <input type="text" value={state} onChange={(e)=>setState(e.target.value)}/> */}
                <select onChange={handleChange}>
                  <option>Select Your State</option>
                  <option>California</option>
                  <option>New York</option>
                  <option>Texas</option>
                  <option>New Mexico</option>
                </select>
              </div>
              <div class="col-md-6">
              <label for="formGroupExampleInput" class="form-label">
                Zip/post code
              </label>
                <input
                class="form-control frame_9_input bg-light"
                id="formGroupExampleInput "
                  type="text"
                  value={zip}
                  name="zip"
                  onChange={handleChange}/>
                  {
                  toggleError? <span style={{color:"red"}}>{errorMessageName}</span>:""
                }
              </div>
            </div>
            <div class="p-3">
              <p>Country</p>
              {/* <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)}/> */}
              <select onChange={handleChange}>
                <option>Select Your Country</option>
                <option>America</option>
                <option>Another</option>
              </select>
              <hr/>
              <label for="formGroupExampleInput" class="form-label">
                Delevery Contact Phone Number
              </label>
              <input
              class="form-control frame_9_input bg-light"
              id="formGroupExampleInput "
                type="number"
                name="mobile"
                value={mobileno}
                onChange={handleChange}/>
                 {
                  toggleError? <span style={{color:"red"}}>{errorMessageName}</span>:""
                }
              <hr/>
              
              <label for="formGroupExampleInput" class="form-label">
              Delivery Contact Email Address*
              </label>
              <input
              class="form-control frame_9_input bg-light"
              id="formGroupExampleInput "
                type="email"
                name="email"
                value={email}
                onChange={handleChange}/>
                 {
                  toggleError? <span style={{color:"red"}}>{errorMessageName}</span>:""
                }
              <div id="but" className="d-grid gap-2">
                {/* <input type="submit" class="bg-info text-white butsend" value="Submit@123"/> */}
                <button class="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
  </div>
  <div className="col-sm-2"></div>

</div>
     
    </div>
  );
};

export default Frame9;
