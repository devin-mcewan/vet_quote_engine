import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]); //What data type should i store the Id as?
  const [newQuote, setNewQuote] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    year: '',
    make: '',
    model: ''
  })
  const [runningTotal, setRunningTotal] = useState([])

  useEffect(() => {
  }, runningTotal)

  useEffect(() => {
    const cachedUser = localStorage.getItem("user");
    if (cachedUser) {
      setUser(JSON.parse(cachedUser));
    }
  }, []);

  useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`http://localhost:4001/v1/services`);
      setServices(response.data);
    }
    getServices();
  }, [])

  return (
    <AppContext.Provider
      value={{
        user,
        services,
        selectedServices,
        setSelectedServices,
        newQuote, 
        setNewQuote,
        runningTotal, 
        setRunningTotal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
