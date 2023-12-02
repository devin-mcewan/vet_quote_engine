import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import "./QuoteList.css";
import {useNavigate} from "react-router-dom";

const QuoteList = () => {
  const { quotes } = useContext(AppContext);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/quotes/${id}`)
  }

  return (
    <div className="quote-list-container">
      {quotes.map((quote) => {
        const {
          year,
          make,
          model,
          first_name,
          last_name,
          status,
          phone_number,
          id
        } = quote;
        return (
          <div className="quote-list-card" onClick={() => handleClick(id)}>
            <p>{`${year} ${make} ${model}`}</p>
            <p>{`${first_name} ${last_name}`}</p>
            <p>{phone_number}</p>
            <p>Status: {status}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuoteList;
