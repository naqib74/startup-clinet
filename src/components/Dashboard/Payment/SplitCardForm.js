import React, { useMemo, useState } from "react";
import './SplitCardForm.css'
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";



const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize:'16px',
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SplitCardForm = () => {

  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError , setPaymentError] =useState(null)
  const [paymentSuccess , setPaymentSuccess] =useState(null)

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    // console.log("[PaymentMethod]", payload);

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null)
     } else {
       setPaymentSuccess(paymentMethod.id)
       setPaymentError(null)
     }

  
  };

  return (
  <div>
      <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement className='simple'
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement className='simple'
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement 
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <button  className='btn btn-primary' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        paymentError && <p style={{color:'red'}}>{paymentError}</p>
    }
    {
        paymentSuccess && <p style={{color:'green'}}>Your payment was success</p>
    }
  </div>
  );
};

export default SplitCardForm;
