import { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";
import CardPizza from "../components/CardPizza";
import "./PizzaMenu.css";

const PizzaMenu = () => {
  const { pizzaMenu, pizzaAmount } = useContext(PizzaContext);

  return (
    <div className="divPage rpgui-container framed-grey customHeigt">
      <h2 className="rpgui-container framed-golden-2"> Nuestra Carta </h2>

      <div className="rpgui-container framed-grey pizzaMenu">
        {pizzaMenu.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            img={pizza.img}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            detail={pizza.detail}
            add={pizza.add}
            amount={pizza.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default PizzaMenu;
