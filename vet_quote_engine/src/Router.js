import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Admin from "./components/Admin";

const Router = () => {
  return (
    <Routes>
      {/* <Route path="/" element={< COMPONENT />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
  );
};

export default Router;
