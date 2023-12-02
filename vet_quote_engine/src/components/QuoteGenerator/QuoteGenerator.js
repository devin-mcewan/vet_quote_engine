import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuoteGeneratorForm from "./QuoteGeneratorForm/QuoteGeneratorForm";
import CancelButton from "../CancelButton";
import ServiceSelector from "./ServiceSelector";
import AppContext from "../../context/AppContext";
import axios from "axios";

const QuoteGenerator = () => {
  const {selectedServices, newQuote} = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = () => {
    sendQuote();
  }
  const sendQuote = async () => {
    const quote = await axios.post(`http://localhost:4001/v1/quotes`, {
      newQuote,
      selectedServices,
    });
    // I tried to destructure ID from quote.data - const {id} = quote.data;
    navigate(`/quotes/${quote.data.id}`);
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
      <button onClick={() => handleClick()}>SEND QUOTE</button>
      <CancelButton />
    </div>
  );
};
export default QuoteGenerator;
