import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();  
export const CartContext = createContext();
export const TokenContext = createContext();

const PizzaProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalContext, setTotalContext] = useState(0);
  const [token, setTokenContext] = useState(false);


  useEffect(() => {
    fnTotal();
  }, [data]);

  function fnTotal() {
    let sum = 0;
    data.forEach((pizza) => (sum += pizza.price * pizza.count));
    setTotalContext(sum);
  }
  

  return (
    <TokenContext.Provider value={{ token, setTokenContext }}>
      <PizzaContext.Provider value={{ data, setData }}>
        <CartContext.Provider value={{ totalContext, setTotalContext }}>
          {children}
        </CartContext.Provider>
      </PizzaContext.Provider>
    </TokenContext.Provider>

  );
};

export default PizzaProvider;