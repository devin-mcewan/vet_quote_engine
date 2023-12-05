import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [services, setServices] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]); //What data type should i store the Id as?
  const [newQuote, setNewQuote] = useState({ status: "New"});
  const [needServices, setNeedServices] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [runningTotal, setRunningTotal] = useState([]);

  // useEffect(() => {
  // //   let newRunningTotal = runningTotal.reduce();
  // //  setRunningTotal()
  // }, runningTotal)

  // useEffect(() => {
  //   const cachedUser = localStorage.getItem("user");
  //   if (cachedUser) {
  //     setUser(JSON.parse(cachedUser));
  //   }
  // }, []);

  // Setting services
  useEffect(() => {
      const getServices = async () => {
        const response = await axios.get(`http://localhost:4001/v1/services`);
        setServices(response.data);
      };
      getServices();
  }, []);

  // Setting Quotes
  useEffect(() => {
    const getQuotes = async () => {
      const response = await axios.get(`http://localhost:4001/v1/quotes`);
      setQuotes(response.data);
    };
    getQuotes();
  }, []);

  useEffect(() => {
  
  }, [user.loggedIn]);

  const cancelClear = () => {
    setSelectedServices([]);
    setNewQuote({});
  };
  const logout = () => {
    setUser({});
    setUser({loggedIn: false});
  };



  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        services,
        selectedServices,
        setSelectedServices,
        newQuote,
        setNewQuote,
        runningTotal,
        setRunningTotal,
        cancelClear,
        quotes,
        isAdmin,
        setIsAdmin,
        logout
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
