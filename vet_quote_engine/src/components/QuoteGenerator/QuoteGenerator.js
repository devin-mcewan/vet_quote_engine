import e from "cors";
import { useContext } from "react";
import QuoteGeneratorForm from "./QuoteGeneratorForm/QuoteGeneratorForm";
import CancelButton from "../CancelButton";
import ServiceSelector from "./ServiceSelector";
import AppContext from "../../context/AppContext";
import axios from "axios";

const QuoteGenerator = () => {
  const {selectedServices, newQuote} = useContext(AppContext);
  const sendQuote = async () => {
    console.log(selectedServices);
    const quote = await axios.post(`http://localhost:4001/v1/quotes`, {
      newQuote,
      selectedServices,
    });
  };
  return (
    <div>
      <div className="quote-generator-header">
        <h1>Veteran Detail Quote Generator</h1>
        <h2>Safe, Easy, and Convenient</h2>
      </div>
      <QuoteGeneratorForm />
      <h1>Service Selector</h1>
      <ServiceSelector />
      <button onClick={() => sendQuote()}>GET A QUOTE!</button>
      <CancelButton />
    </div>
  );
};
export default QuoteGenerator;
