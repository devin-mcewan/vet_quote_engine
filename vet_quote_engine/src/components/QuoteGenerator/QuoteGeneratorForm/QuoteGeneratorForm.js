import { useContext } from "react";
import AppContext from "../../../context/AppContext";
import { Box, Paper, TextField, Typography } from "@mui/material";
import "./QuoteGeneratorForm.css";

const QuoteGeneratorForm = () => {
  const { newQuote, setNewQuote } = useContext(AppContext);

  return (
    <Box className="quote-generator-form">
      <Paper>
        <Typography variant="h5" fontWeight={"bold"}>Customer Information</Typography>
        <Box className="customer-information-section">
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, first_name: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, last_name: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Mobile Phone Number"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, phone_number: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, email: e.target.value })
            }
          />
        </Box>
        <Typography variant="h5" fontWeight={"bold"}>Vehicle Information</Typography>
        <Box className="vehicle-information-section">
          <TextField
            id="outlined-basic"
            label="Year"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, year: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Make"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, make: e.target.value })
            }
          />
          <TextField
            id="outlined-basic"
            label="Model"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, model: e.target.value })
            }
          />
          {/* V2 - Added a trim section so we can prep more accurately based on trim level */}
          {/* <TextField
            id="outlined-basic"
            label="Trim"
            variant="outlined"
            onChange={(e) =>
              setNewQuote({ ...newQuote, trim: e.target.value })
            }
          /> */}
        </Box>
      </Paper>
    </Box>
  );
};

export default QuoteGeneratorForm;
