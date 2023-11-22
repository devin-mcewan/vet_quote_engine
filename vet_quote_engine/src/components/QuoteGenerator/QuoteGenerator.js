import e from "cors";
import { useState } from "react";
import QuoteGeneratorForm from "./QuoteGeneratorForm/QuoteGeneratorForm";
import CancelButton from "../CancelButton";

const QuoteGenerator = () => {
  return (
    <div>
      <div className="quote-generator-header">
        <h1>Veteran Detail Quote Generator</h1>
        <h2>Safe, Easy, and Convenient</h2>
      </div>
      <QuoteGeneratorForm />
      <div className="services-section">
        <h1>Select your desired services</h1>
        <p> - Ceramic Coating $1800 + </p>
        <p> - Tint $595 +</p>
        <p> - PPF $995 + </p>
      </div>
      <CancelButton />
    </div>
  );
};
export default QuoteGenerator;
