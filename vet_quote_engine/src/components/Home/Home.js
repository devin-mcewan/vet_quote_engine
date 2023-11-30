import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../AppBar";

const Home = () => {
    const navigate = useNavigate();

    const handleGetQuote = () => {
        navigate('/quote_generator');
    }
    const handleLogin = () => {
      navigate('/login');
    }
  return (
    <div>
      {/* <ResponsiveAppBar /> */}
    <div>
      <h1>Welcome to VetQuoteEngine!</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <button onClick={() => handleGetQuote()}>Get a Quote!</button>
    </div>
    </div>
  );
};

export default Home;
