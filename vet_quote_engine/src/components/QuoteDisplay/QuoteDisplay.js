import axios from "axios";
import { useParams } from "react-router-dom";
import "./QuoteDisplay.css";
import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import { Box, Paper, Button, Typography } from "@mui/material";
import AdminRender from "./AdminRender";
import UserRender from "./UserRender/UserRender";
import "./QuoteDisplay.css";

const QuoteDisplay = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(AppContext);
  const [services, setServices] = useState();
  let i = 0;

  const toggleAdmin = () => {
    if (user.tier === "admin") {
      setUser({ ...user, tier: "user" });
    } else {
      setUser({ ...user, tier: "admin" });
    }
  };

//   const getQuote = async (id) => {
//     if (i >= 10) {
//       return;
//     } else {
//       const response = await axios.get(`http://localhost:4001/v1/quotes/${id}`);
//       const quoteServices = response.data.quoteServices;
//       const updateServiceState = (services) => {
//         setServices(services);
//         console.log('inside services')
//       };
//       updateServiceState(quoteServices);
//       console.log("Services:", services);
//       console.log("i",i);
//       i++;
//     }
//   };
//   getQuote(id);

  if (user.tier === "admin") {
    return <AdminRender toggleAdmin={toggleAdmin} />;
  } else {
    return <UserRender toggleAdmin={toggleAdmin} />;
  }
};

export default QuoteDisplay;
