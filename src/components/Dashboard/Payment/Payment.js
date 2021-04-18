import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';




const stripePromise = loadStripe('pk_test_51IeJlELC8kBRvpo8n9RASmbMG2Mpn9VtzGsX0U8bEFmTGnaQamNGTZDkyDugsuY8XHJmJY9xTJEqNx4Wqes52UZu00dAnVhod3');

const Payment = () => {
    return (
        <div>
             <Elements stripe={stripePromise}>
         <SplitCardForm></SplitCardForm>
        </Elements>
        </div>
    );
};

export default Payment;