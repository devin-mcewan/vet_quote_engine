import { useContext } from "react";
import AppContext from "../../../context/AppContext";

const QuoteGeneratorForm = () => {
  const { newQuote, setNewQuote } = useContext(AppContext);
  return (
    <div className="quote-generator-form">
      <div className="form-section">
        <h1>Customer Information</h1>
        <label>First Name: </label>
        <input
          type="text"
          placeholder="John"
          onChange={(e) =>
            setNewQuote({ ...newQuote, first_name: e.target.value })
          }
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          placeholder="Doe"
          onChange={(e) =>
            setNewQuote({ ...newQuote, last_name: e.target.value })
          }
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
        <label>Mobile Phone Number: </label>
        <input
          type="text"
          placeholder="(555) 555-5555"
          onChange={(e) =>
            setNewQuote({ ...newQuote, phone_number: e.target.value })
          }
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
        <label>Email: </label>
        <input
          type="text"
          placeholder="john.doe@example.com"
          onChange={(e) => setNewQuote({ ...newQuote, email: e.target.value })}
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
      </div>
      <div className="form-section">
        <h1>Vehicle Information</h1>
        <label>Year: </label>
        <input
          type="text"
          placeholder="1993"
          onChange={(e) => setNewQuote({ ...newQuote, year: e.target.value })}
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
        <label>Make: </label>
        <input
          type="text"
          placeholder="Mazda"
          onChange={(e) => setNewQuote({ ...newQuote, make: e.target.value })}
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
        <label>Model: </label>
        <input
          type="text"
          placeholder="Miata"
          onChange={(e) => setNewQuote({ ...newQuote, model: e.target.value })}
        />
        {/* REMOVE THESE BREAKS IN CSS STYLING */}
        <br />
      </div>
    </div>
  );
};

export default QuoteGeneratorForm;
