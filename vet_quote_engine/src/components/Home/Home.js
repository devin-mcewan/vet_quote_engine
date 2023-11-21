import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('I have been clicked');
        navigate('/quote_generator');
    }
  return (
    <div>
      <h1>Welcome to VetQuoteEngine!</h1>
      <button onClick={() => handleClick()}>Get a Quote!</button>
    </div>
  );
};

export default Home;
