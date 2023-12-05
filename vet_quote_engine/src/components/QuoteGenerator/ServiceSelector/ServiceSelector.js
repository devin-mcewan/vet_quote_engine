import { useContext, useState, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import "./ServiceSelector.css";
import { Box, Paper, Card } from "@mui/material";
import MediaCard from "./MediaCard/MediaCard";

const ServiceSelector = () => {
  const {
    services,
    selectedServices,
    setSelectedServices,
    runningTotal,
    setRunningTotal,
  } = useContext(AppContext);

  const selectedClass = "selected_service";

  // Adding to selectedServices State
  const handleSelect = (service) => {
    setSelectedServices([...selectedServices, service.id]);
    // setRunningTotal([...runningTotal, service.price]);
    // old and unneeded code? \/
    // if (selectedServices.findIndex((element) => element === id) === -1) {
    //   setSelectedServices([...selectedServices, id]);
    // } else {
    //   console.log("This service has already been added");
    // }
  };

  // Removing from selectedServices State
  const handleDeselect = (id) => {
    const indexToRemove = selectedServices.findIndex(
      (element) => element === id
    );
    selectedServices.splice(indexToRemove, 1);
    setSelectedServices([...selectedServices]);
  };

  return (
    <Paper>
      {/* <h3>Total: {`$${runningTotal}`}</h3> */}
      {/* <button onClick={() => showSelected()}>Show Selected</button> */}
      <Box className="service-container">
        {/* Finds out if service is in selected services */}
        {services.map((service) => {
          let isSelected = false;
          if (
            selectedServices.findIndex((element) => element === service.id) >= 0
          ) {
            isSelected = true;
          }

          //      Conditional rendering if a service is selected vs not selected.
          if (isSelected) {
            return (
              <Card className={selectedClass}>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>{service.price}</p>
                <button
                  className="deselect-button"
                  onClick={() => handleDeselect(service.id)}
                >
                  REMOVE
                </button>
              </Card>
            );
          } else {
            return (
              <div>
                <MediaCard />

                <Card className="service">
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <p>{service.price}</p>
                  <button
                    className="select-button"
                    onClick={() => handleSelect(service)}
                  >
                    SELECT
                  </button>
                </Card>
              </div>
            );
          }
        })}
      </Box>
    </Paper>
  );
};

export default ServiceSelector;
