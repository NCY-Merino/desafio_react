import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();  
export const CartContext = createContext();  

const PizzaProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalContext, setTotalContext] = useState(0);

  useEffect(() => {
    fnTotal();
  }, [data]);

  function fnTotal() {
    let sum = 0;
    data.forEach((pizza) => (sum += pizza.price * pizza.count));
    setTotalContext(sum);
  }

  return (
    <PizzaContext.Provider value={{ data, setData }}>
      <CartContext.Provider value={{ totalContext, setTotalContext }}>
        {children}
      </CartContext.Provider>
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;