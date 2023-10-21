import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizzaMenu, setPizzaMenu] = useState([]);
  const [totalBilling, setTotalBilling] = useState();

  const getPizzas = () => {
    try {
      axios.get("/pizzas.json").then((response) => {
        // console.log(response.data)
        setPizzaMenu(
          response.data.map((obj) => ({
            ...obj,
            add: false,
            detail: false,
            amount: 0,
          }))
        );
      });
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const billingPizzas = () => {
    const sum = pizzaMenu
      .filter((f) => f.add == true)
      .map((m) => {
        return { total: Number(m.amount * m.price) };
      })
      .reduce((a, total) => a + total.total, 0);

    setTotalBilling(sum);
  };
  useEffect(() => {
    billingPizzas();
  });

  return (
    <PizzaContext.Provider
      value={{
        pizzaMenu,
        totalBilling,

        setPizzaMenu,
        setTotalBilling,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
