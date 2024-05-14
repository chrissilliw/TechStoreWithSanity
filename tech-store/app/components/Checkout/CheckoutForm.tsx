// "use client";
// import React from "react";
// import {
//   Elements,
//   PaymentElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

// interface CheckoutFormProps {
//   clientSecret: string;
// }

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
// );

// const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
//   // const CheckoutForm = () => {
//   return (
//     <Elements options={clientSecret} stripe={stripePromise}>
//       <Form />
//     </Elements>
//   );
// };

// function Form() {
//   const stripe = useStripe();
//   const elements = useElements();

//   return <PaymentElement />;
// }

// export default CheckoutForm;
