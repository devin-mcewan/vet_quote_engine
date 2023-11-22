import { useState } from "react";


const QuoteGeneratorForm = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [mobileNumber, setMobileNumber] = useState();
    const [email, setEmail] = useState();
    const [year, setYear] = useState();
    const [make, setMake] = useState();
    const [model, setModel] = useState();
    return(
        <div className="quote-generator-form">
        <div className="form-section">
          <h1>Customer Information</h1>
          <label>First Name: </label>
          <input
            type="text"
            placeholder="John"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* REMOVE THESE BREAKS IN CSS STYLING */}
          <br />
          <label>Last Name: </label>
          <input
            type="text"
            placeholder="Doe"
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* REMOVE THESE BREAKS IN CSS STYLING */}
          <br />
          <label>Mobile Phone Number: </label>
          <input
            type="text"
            placeholder="(555) 555-5555"
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          {/* REMOVE THESE BREAKS IN CSS STYLING */}
          <br />
          <label>Email: </label>
          <input
            type="text"
            placeholder="john.doe@example.com"
            onChange={(e) => setFirstName(e.target.value)}
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
            onChange={(e) => setYear(e.target.value)}
          />
          {/* REMOVE THESE BREAKS IN CSS STYLING */}
          <br />
          <label>Make: </label>
          <input
            type="text"
            placeholder="Mazda"
            onChange={(e) => setMake(e.target.value)}
          />
          {/* REMOVE THESE BREAKS IN CSS STYLING */}
          <br />
          <label>Model: </label>
          <input
            type="text"
            placeholder="Miata"
            onChange={(e) => setModel(e.target.value)}
          />
          {/* REMOVE THESE BREAKS IN CSS STYLING */}
          <br />
        </div>
        
      </div>

    )
}

export default QuoteGeneratorForm;