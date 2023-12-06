import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import "./MediaCard.css"

export default function MediaCard() {
  return (
    <Box className="service-container">
      <Card className="service">
          <Typography gutterBottom variant="h5" component="div">
            Service Name
          </Typography>
          <Typography variant="body2" color="text.tertiary" fontWeight={"bold"}>
            Service Price
          </Typography>
      </Card>
      <Card className="service">
          <Typography gutterBottom variant="h5" component="div">
            Service Name
          </Typography>
          <Typography variant="body2" color="text.tertiary" fontWeight={"bold"}>
            Service Price
          </Typography>
      </Card>

      {/* {quoteServices.map((service) => {
        return(
            <Card sx={{ maxWidth: 345 }}>
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
              </CardActions>
            </Card>
          );
        }
      )
    }; */}
    </Box>
  );
}
