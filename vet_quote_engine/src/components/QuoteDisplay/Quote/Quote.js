import axios from "axios";
import { useParams } from "react-router-dom";
import "./Quote.css";
import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const Quote = () => {
  const { id } = useParams();
  const {user} = useContext(AppContext);


  const getQuote = async (id) => {
    const response = await axios.get(`http://localhost:4001/v1/quotes/${id}`);
    const quote = response.data;
    console.log(quote);
  };
  // BAD REQUEST. COMMENTED FOR CSS STYLING WHILE WAITING
  getQuote(id);

  {
    /* Add admin validation to conditionally return a quote with "delete" and "update status" buttons (drop down?)*/
  }

  if (user.tier === "admin") {
    return (
      <Paper>
        <h4>Veteran Detail Quote</h4>
        <Button>whatever you want in it</Button>
        <div className="quote-service-container">
          <div className="quote-service">
            <p>1 Service Name</p>
            <p>1 Service Price</p>
          </div>
          <div className="quote-service">
            <p>2 Service Name</p>
            <p>2 Service Price</p>
          </div>
          <div className="quote-service">
            <p>3 Service Name</p>
            <p>3 Service Price</p>
          </div>
        </div>
        <p>Subtotal: </p>
        <p> + tax:</p>
        <p> TOTAL: </p>
        <button>Edit</button>
        {/* Map through selectedServices (id) where id = quoteId
          <p>{`${service.name} - ${service.price}`}</p> */}
        {/* Consider putting some kind of subtotal, tax, and total here */}
      </Paper>
    );
  }
  return (
    // Change this to paper or card
    <div>
      <h4>Veteran Detail Quote</h4>
      <p>List of services Here</p>
      <p>Subtotal: </p>
      <p> + tax:</p>
      <p> TOTAL: </p>
      {/* Map through selectedServices (id) where id = quoteId
            <p>{`${service.name} - ${service.price}`}</p> */}
      {/* Consider putting some kind of subtotal, tax, and total here */}
    </div>
  );
};

export default Quote;
