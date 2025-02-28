import { createContext, useState, useEffect, useRef } from "react";

export const PizzaContext = createContext();  
export const CartContext = createContext();
export const TokenContext = createContext();

const PizzaProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalContext, setTotalContext] = useState(0);
  const [token, setTokenContext] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);


  useEffect(() => {
    fnTotal();
  }, [data]);

  useEffect(() => {
    if (token) {
      fetchProfile();
    }
  }, [token]);

  function fnTotal() {
    let sum = 0;
    data.forEach((pizza) => (sum += pizza.price * pizza.count));
    setTotalContext(sum);
  }

  // TOKEN Fn
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Credenciales incorrectas");

      const data = await response.json();
      setTokenContext(data.token);
      setUser({ email }); 
      localStorage.setItem("token", data.token);
      return true;
    } catch (error) {
      console.error("Error de login:", error);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en el registro");

      return true;
    } catch (error) {
      console.error("Error de registro:", error);
      return false;
    }
  };

  const logout = () => {
    setTokenContext(null);
    setUser(null);
    localStorage.removeItem("token");
  };

  const fetchProfile = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Error al obtener el perfil");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error al obtener perfil:", error);
    }
  };

  return (
    <TokenContext.Provider value={{ token, setTokenContext, user, login, register, logout }}>
      <PizzaContext.Provider value={{ data, setData }}>
        <CartContext.Provider value={{ totalContext, setTotalContext }}>
          {children}
        </CartContext.Provider>
      </PizzaContext.Provider>
    </TokenContext.Provider>

  );
};

export default PizzaProvider;