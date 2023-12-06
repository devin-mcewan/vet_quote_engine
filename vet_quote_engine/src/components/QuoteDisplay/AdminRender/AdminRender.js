import {
  Paper,
  Box,
  Button,
  Typography,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import MediaCard from "../MediaCard/MediaCard";
import "./AdminRender.css";
import AppContext from "../../../context/AppContext";
import { useContext } from "react";

const AdminRender = ({ toggleAdmin, quoteServices }) => {
  const { quoteEditStatus, setQuoteEditStatus } = useContext(AppContext);
  let quoteStatus;

  const handleEdit = () => {
    setQuoteEditStatus(!quoteEditStatus);
  };
  const handleChange = (e) => {
    quoteStatus = e.target.value;
  };
  if (quoteEditStatus) {
    return (
      <Box>
        <Paper>
          <Box className="quote-service-container">
            <Box className="button-box">
              <InputLabel>Status</InputLabel>
              {/* Change default value to be "service.status" */}
              <Select defaultValue={"New"}>
                <MenuItem value="New" onChange={handleChange}>
                  New
                </MenuItem>
                <MenuItem value="Contacted" onChange={handleChange}>
                  Contacted
                </MenuItem>
                <MenuItem value="Scheduled" onChange={handleChange}>
                  Scheduled
                </MenuItem>
              </Select>
              <Button
                variant="contained"
                className="admin-button"
                onClick={handleEdit}
              >
                Done
              </Button>
              <Button
                variant="contained"
                color="error"
                className="admin-button"
              >
                Delete
              </Button>
            </Box>
            <MediaCard />
          </Box>
          <Paper>
            <Typography variant="subtitle1">Subtotal: </Typography>
            <Typography variant="subtitle1">+ Tax: </Typography>
            <Typography variant="subtitle1">TOTAL: </Typography>
          </Paper>
          <button onClick={() => toggleAdmin()}>Toggle Admin/User</button>
          {/* Map through selectedServices (id) where id = quoteId
          <p>{`${service.name} - ${service.price}`}</p> */}
          {/* Consider putting some kind of subtotal, tax, and total here */}
        </Paper>
      </Box>
    );
  } else {
    return (
      <Box>
        <Paper>
          <Box className="quote-service-container">
            <Box className="button-box">
              <Button
                variant="contained"
                className="admin-button"
                onClick={handleEdit}
              >
                Edit
              </Button>
            </Box>
            <MediaCard />
          </Box>
          <Paper>
            <Typography variant="subtitle1">Subtotal: </Typography>
            <Typography variant="subtitle1">+ Tax: </Typography>
            <Typography variant="subtitle1">TOTAL: </Typography>
          </Paper>
          <button onClick={() => toggleAdmin()}>Toggle Admin/User</button>
          {/* Map through selectedServices (id) where id = quoteId
          <p>{`${service.name} - ${service.price}`}</p> */}
          {/* Consider putting some kind of subtotal, tax, and total here */}
        </Paper>
      </Box>
    );
  }
};

export default AdminRender;
