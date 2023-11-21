import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Home from "./components/Home";
import QuoteGenerator from "./components/QuoteGenerator";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/quote_generator" element={<QuoteGenerator />} />
    </Routes>
  );
};

export default Router;
