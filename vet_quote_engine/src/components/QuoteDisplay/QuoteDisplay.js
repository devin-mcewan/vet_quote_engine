import axios from "axios";
import { useParams } from "react-router-dom";
import "./QuoteDisplay.css";
import { useContext, useEffect, useState } from "react";
import AppContext from "../../context/AppContext";
import { Box, Paper, Button, Typography } from "@mui/material";
import AdminRender from "./AdminRender";
import UserRender from "./UserRender/UserRender";
import "./QuoteDisplay.css";

const QuoteDisplay = () => {
  const { id } = useParams();
  const { user, setUser } = useContext(AppContext);
  const [services, setServices] = useState();

  const toggleAdmin = () => {
    if (user.tier === "admin") {
      setUser({ ...user, tier: "user" });
    } else {
      setUser({ ...user, tier: "admin" });
    }
  };

  useEffect(() => {
    const getQuote = async (id) => {
        const response = await axios.get(`http://localhost:4001/v1/quotes/${id}`);
        const quoteServices = response.data.quoteServices;
        setServices(quoteServices);
      };
      getQuote(id);
  }, [id])


  console.log(services);
  if (user.tier === "admin") {
    return <AdminRender toggleAdmin={toggleAdmin} />;
  } else {
    return <UserRender toggleAdmin={toggleAdmin} />;
  }
};

export default QuoteDisplay;
