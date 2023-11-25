import e from "cors";
import { useContext, useState } from "react";
import QuoteGeneratorForm from "./QuoteGeneratorForm/QuoteGeneratorForm";
import CancelButton from "../CancelButton";
import ServiceSelector from "./ServiceSelector";
import Album from "../Album";
import AppContext from "../../context/AppContext";

const QuoteGenerator = () => {
  // const [selectedServices, quote] = useContext(AppContext)
  // const sendQuote = () => {
  //   console.log('boop')
  // }
  return (
    <div>
      <div className="quote-generator-header">
        <h1>Veteran Detail Quote Generator</h1>
        <h2>Safe, Easy, and Convenient</h2>
      </div>
      <QuoteGeneratorForm />
      <h1>Service Selector</h1>
      <ServiceSelector />
      {/* <button onClick={()=>sendQuote()}>GET A QUOTE!</button> */}
      <CancelButton />
    </div>
  );
};
export default QuoteGenerator;
