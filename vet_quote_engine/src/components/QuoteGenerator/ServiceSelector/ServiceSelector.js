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
      <MediaCard />
    </Paper>
  );
};

export default ServiceSelector;
