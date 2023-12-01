import Quote from "./Quote/Quote";
import "./QuoteDisplay.css";
const QuoteDisplay = () => {

    return(
        <div>
            <h3>Thank You!</h3>
            <p>Here is a copy of your quote.</p>
            <p>Please allow 1-2 business days for someone to reach out to schedule your appointment!</p>
            <Quote />
            <p>Psst... You can call us and book this now! Give us your unique quote ID on the phone and we will book you ASAP!</p>
            <a href="tel:8018548575" className="phone-anchor">Call us at (801) 854-8575</a>
        </div>
    );
}

export default QuoteDisplay;