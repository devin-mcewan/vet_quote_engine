import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import AppContext from "../../../../context/AppContext";
import { useContext } from "react";
import "./MediaCard.css";

export default function MediaCard() {
  const { services, selectedServices, setSelectedServices } =
    useContext(AppContext);
  const selectedClass = "selected_service";
  const handleSelect = (service) => {
    setSelectedServices([...selectedServices, service.id]);
  };
  const handleDeselect = (id) => {
    const indexToRemove = selectedServices.findIndex(
      (element) => element === id
    );
    selectedServices.splice(indexToRemove, 1);
    setSelectedServices([...selectedServices]);
  };

  return (
    <Box className="service-container">
      {/* Finds out if service is in selected services */}
      {services.map((service) => {
        console.log(service.image);
        let isSelected = false;
        if (
          selectedServices.findIndex((element) => element === service.id) >= 0
        ) {
          isSelected = true;
        }

        //      Conditional rendering if a service is selected vs not selected.
        if (isSelected) {
          return (
            <Card sx={{ maxWidth: 345 }} className={selectedClass}>
              <CardMedia
                sx={{ height: 140 }}
                image={require(`./images/${service.image}`)}
                title={`${service.name}`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {service.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.tertiary"
                  fontWeight={"bold"}
                >
                  {`$${service.price}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="error"
                  variant="outlined"
                  onClick={() => handleDeselect(service.id)}
                >
                  Deselect
                </Button>
              </CardActions>
            </Card>
          );
        } else {
          return (
            <Box>
              <Card sx={{ maxWidth: 345 }} className="service">
                <CardMedia
                  sx={{ height: 140 }}
                  image={require(`./images/${service.image}`)}
                  title={service.name}
                  component="img"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.tertiary"
                    fontWeight={"bold"}
                  >
                    {`$${service.price}`}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="success"
                    variant="outlined"
                    onClick={() => handleSelect(service)}
                  >
                    Select
                  </Button>
                </CardActions>
              </Card>
            </Box>
          );
        }
      })}
    </Box>
  );
}
