import { useContext, useState, useEffect } from "react";
import AppContext from "../../../context/AppContext";
import "./ServiceSelector.css";

const ServiceSelector = () => {
  const { services, selectedServices, setSelectedServices } = useContext(AppContext);
  //**********Debugging button - Shows current state of selectedServices
  const showSelected = () => {
    console.log("Selected Services: ", selectedServices);
  };
    // Adding to selectedServices State

  const handleSelect = (id) => {
    if (selectedServices.findIndex((element) => element === id) === -1) {
      setSelectedServices([...selectedServices, id]);
    } else {
      console.log("This service has already been added");
    }
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
    <div>
      <h2>Available Services</h2>
      <button onClick={() => showSelected()}>Show Selected</button>
      <div className="service-container">
        {services.map((service) => {
          let isSelected = false;
          const results = selectedServices.findIndex(
            (element) => element === service.id
          );
          if (
            selectedServices.findIndex((element) => element === service.id) >= 0
          ) {
            isSelected = true;
          }
          //   if service in selectedServices, true
          //   else stay false
          if (isSelected) {
            return (
              <div className="service">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>{service.price}</p>
                <button
                  className="deselect-button"
                  onClick={() => handleDeselect(service.id)}
                >
                  Deselect
                </button>
              </div>
            );
          } else {
            return (
              <div className="service">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>{service.price}</p>
                <button
                  className="select-button"
                  onClick={() => handleSelect(service.id)}
                >
                  Select This Service
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ServiceSelector;
