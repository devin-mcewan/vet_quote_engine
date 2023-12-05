import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import QuoteGeneratorForm from "./QuoteGeneratorForm/QuoteGeneratorForm";
import CancelButton from "../CancelButton";
import ServiceSelector from "./ServiceSelector";
import AppContext from "../../context/AppContext";
import axios from "axios";
import { Box, Typography, Paper } from "@mui/material";

const QuoteGenerator = () => {
  const { selectedServices, newQuote } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = () => {
    sendQuote();
  };
  const sendQuote = async () => {
    const quote = await axios.post(`http://localhost:4001/v1/quotes`, {
      newQuote,
      selectedServices,
    });
    // I tried to destructure ID from quote.data - const {id} = quote.data;
    navigate(`/quotes/${quote.data.id}`);
  };

  return (
    <Box>
      <Box className="quote-generator-header">
        <Paper>
          <Typography variant="h3">Veteran Detail Quote Generator</Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            Safe, Easy, and Convenient
          </Typography>
        </Paper>
      </Box>
      {/* ------------------- */}
      <QuoteGeneratorForm />
      {/* ------------------- */}
      <Typography variant="h4" fontWeight={"bold"}>Service Selector</Typography>
      <ServiceSelector />
      {/* ------------------- */}
      <button onClick={() => handleClick()}>SEND QUOTE</button>
      <CancelButton />
    </Box>
  );
};
export default QuoteGenerator;
