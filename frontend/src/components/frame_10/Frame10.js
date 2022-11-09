import React from 'react'
import Helper from './Helper'
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";



const stripePromise = loadStripe("pk_test_51LxbUbSAhgxBBtWl8x4yEUr2zScwhfeNL0akRHaXGO9ZJofCpWQ87xlQvqieLp4vJ8gmo7ZucO5ZFcl7j4LmOX9n00J8B2QRBJ");


const Frame10 = (props) => {
  return (
    
   
           <Elements stripe={stripePromise}>

           <Helper setCurrentPage={props.setCurrentPage} currentPage={props.currentPage} />

           </Elements>
 

      
    
  )
}

export default Frame10