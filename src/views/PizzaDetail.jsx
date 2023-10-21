import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import CardPizza from "../components/CardPizza";
import "./PizzaDetails.css";

const PizzaDetail = () => {
  const { pizzaMenu } = useContext(PizzaContext);

  return (
    <>
      <div className="framed pizzaDetails">
        {pizzaMenu
          .filter((f) => f.detail == true)
          .map((detail) => (
            <CardPizza
              key={detail.id}
              id={detail.id}
              img={detail.img}
              name={detail.name}
              desc={detail.desc}
              ingredients={detail.ingredients}
              price={detail.price}
              detail={detail.detail}
              add={detail.add}
              amount={detail.amount}
            />
          ))}
      </div>
    </>
  );
};

export default PizzaDetail;
