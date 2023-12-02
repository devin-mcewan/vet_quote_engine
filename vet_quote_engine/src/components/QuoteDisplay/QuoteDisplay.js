import Typography from "@mui/material/Typography";
import Quote from "./Quote/Quote";
import "./QuoteDisplay.css";
import Paper from "@mui/material/Paper";

const QuoteDisplay = () => {

    return(
        <Paper>
            <Typography variant="h3">Thank You!</Typography>
            <p>Here is a copy of your quote.</p>
            <p>Please allow 1-2 business days for someone to reach out to schedule your appointment!</p>
            <Quote />
            <p>Psst... You can call us and book this now! Give us your unique quote ID on the phone and we will book you ASAP!</p>
            <a href="tel:8018548575" className="phone-anchor">Call us at (801) 854-8575</a>
        </Paper>
    );
}

export default QuoteDisplay;