import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleClick = async () => {
    const response = await axios.post("http://localhost:4001/v1/login", {
      username,
      password,
    });
    
    if (response.status === 200) {
      navigate('/admin');
    }
    
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleClick}>LOGIN</button>
    </div>
  );
};

export default Login;
