import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { Box, Button, Paper, Typography } from "@mui/material";
import AppBar from "../AppBar/AppBar";

const Home = () => {
  const { user, logout } = useContext(AppContext);
  const navigate = useNavigate();
  const handleGetQuote = () => {
    navigate("/quote_generator");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  if (user.loggedIn) {
    return (
      <Box>
        <AppBar />
        <Paper>
          <Typography variant="h3">Welcome to VetQuoteEngine!</Typography>
          <Typography variant="subtitle1">
            The modern solution for generating detailing quotes safely, and
            efficiently.
          </Typography>
        </Paper>
        <Button variant="contained" onClick={() => handleGetQuote()}>
          Get a Quote!
        </Button>
        <Button variant="contained" onClick={() => handleLogout()}>
          Logout
        </Button>
      </Box>
    );
  } else {
    return (
      <Box>
        {/* <AppBar /> */}
        <Paper>
          <Typography variant="h3">Welcome to VetQuoteEngine!</Typography>
          <Typography variant="subtitle1">
            The modern solution for generating detailing quotes safely, and
            efficiently.
          </Typography>
        </Paper>
        <Button variant="contained" onClick={() => handleLogin()}>
          Login
        </Button>
      </Box>
    );
  }
};

export default Home;
