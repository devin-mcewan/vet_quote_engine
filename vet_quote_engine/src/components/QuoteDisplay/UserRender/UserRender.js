import { Box, Paper, Card, Button, Typography } from "@mui/material";
import MediaCard from '../MediaCard/MediaCard'

const UserRender = ({ toggleAdmin, quoteServices }) => {
  return (
    <Box>
      <Paper>
        <Typography variant="h5">Thank You!</Typography>
        <Typography variant="body1">Here is a copy of your quote.</Typography>
        <Typography variant="body1">
          Please allow 1-2 business days for someone to reach out to schedule
          your appointment!
        </Typography>
      </Paper>
      <Paper>
        <Typography variant="h5">Wow, that's a nice quote..</Typography>
        {/* Map through quote_services here */}
        <MediaCard/>
      </Paper>
      <p>Subtotal: </p>
      <p> + tax:</p>
      <p> TOTAL: </p>
      <button onClick={() => toggleAdmin()}>Toggle Admin/User</button>
      {/* Map through selectedServices (id) where id = quoteId
              <p>{`${service.name} - ${service.price}`}</p> */}
      {/* Consider putting some kind of subtotal, tax, and total here */}
      <Paper>
        <Typography variant="caption text">
          Psst... You can call us and book this now! Give us your unique quote
          ID on the phone and we will book you ASAP!
        </Typography>
        <a href="tel:8018548575" className="phone-anchor">
          Call us at (801) 854-8575
        </a>
      </Paper>
    </Box>
  );
};
export default UserRender;
