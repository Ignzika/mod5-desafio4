import Swal from "sweetalert2";
import { PizzaContext } from "../context/PizzaContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CardPizza.css";

const CardPizza = ({
  id,
  img,
  name,
  desc,
  price,
  ingredients,
  detail,
  add,
  amount,
}) => {
  const { setPizzaMenu } = useContext(PizzaContext);
  const navigate = useNavigate();

  const orderPizza = (id) => {
    setPizzaMenu((menu) => {
      const toBuy = menu.map((pizza) => {
        if (pizza.id === id) {
          return { ...pizza, add: true, amount: 1 };
        } else {
          return pizza;
        }
      });
      return toBuy;
    });
    Swal.fire({
      position: "top-end",
      toast: true,
      icon: "success",
      title: "añadiste con exito la pizza seleccionada",
      showConfirmButton: false,
      timer: 1500,
      color: "#00000",
      customClass: {
        popup: "rpgui-container framed",
      },
    });
  };

  const deleteOrder = (id) => {
    setPizzaMenu((menu) => {
      const remove = menu.map((pizza) => {
        if (pizza.id === id && pizza.amount == 0) {
          return { ...pizza, add: false, amount: 0 };
        } else {
          return pizza;
        }
      });
      return remove;
    });
  };

  const morePizza = (id) => {
    setPizzaMenu((pluspizza) => {
      const addPizza = pluspizza.map((add) => {
        if (add.id == id) {
          return { ...add, amount: Number(add.amount + 1) };
        } else {
          return add;
        }
      });
      return addPizza;
    });
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });
    Toast.fire({
      title: "Añadiste una pizza (pizza +1)",
      color: "#00000",
      customClass: {
        popup: "rpgui-container framed",
      },
    });
  };

  const lessPizza = (id) => {
    setPizzaMenu((minusPizza) => {
      const substractPizza = minusPizza.map((substract) => {
        if (substract.id == id && substract.amount > 0) {
          return { ...substract, amount: Number(substract.amount - 1) };
        } else {
          return substract;
        }
      });
      return substractPizza;
    });

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
    });

    Toast.fire({
      title: "Eliminaste una pizza (pizza -1) ",
      color: "#00000",
      customClass: {
        popup: "rpgui-container framed",
      },
    });
  };

  const openDetail = (id) => {
    setPizzaMenu((details) => {
      const forDetail = details.map((detail) => {
        if (detail.id === id) {
          return { ...detail, detail: true };
        } else {
          return detail;
        }
      });
      return forDetail;
    });
  };

  const closeDetail = (id) => {
    setPizzaMenu((details) => {
      const closedetails = details.map((detail) => {
        if (detail.id === id) {
          return { ...detail, detail: false };
        } else {
          return detail;
        }
      });
      return closedetails;
    });
  };

  return (
    <>
      <div className="rpgui-container framed pizzaCard" id={id} key={id}>
        <div className="rpgui-container framed-grey imgContainerCustom">
          <img src={img} alt={name} />
        </div>
        <div>
          <p className="pizzaName">{name}</p>
        </div>
        <div className="pizzaInfo">
          {detail ? (
            <p className="rpgui-container framed-grey customInfo">{desc}</p>
          ) : null}

          <p className="ingredientsInfo">
            <span className="rpgui-icon potion-red customIcon"></span>
            ingredientes
            <span className="rpgui-icon potion-blue customIcon"> </span>
          </p>

          {detail ? (
            <ul>
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className=" rpgui-container framed pizzaIngredients"
                >
                  <span className=""></span>
                  {ingredient}{" "}
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {ingredients.map((ingredient) => (
                <li
                  key={ingredient}
                  className=" rpgui-container framed-grey pizzaIngredients"
                >
                  <span className="rpgui-icon exclamation customIcon"></span>
                  {ingredient}{" "}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="rpgui-container framed-golden-2 customPrice">
          {" "}
          Precio:{" "}
          <span>
            {" "}
            {Intl.NumberFormat("es-CL", {
              style: "currency",
              currency: "CLP",
            }).format(Number(price))}{" "}
          </span>{" "}
        </p>

        <div className="rpgui-container framed-grey  CustomButtonSection  ">
          {!add ? (
            <button className="rpgui-button " onClick={() => orderPizza(id)}>
              añadir al pedido
            </button>
          ) : null}
          {!add ? null : (
            <div className="customAddMinus">
              <p>Cantidad:</p>
              <div className="customContainerCard">
                <button
                  className="rpgui-button customButton1"
                  onClick={() => {
                    lessPizza(id);
                    deleteOrder(id);
                  }}
                >
                  -
                </button>

                <p className="textAmount">{amount}</p>

                <button
                  className="rpgui-button customButton1"
                  onClick={() => morePizza(id)}
                >
                  +
                </button>
              </div>
            </div>
          )}

          {!detail ? (
            <button
              className="rpgui-button customButton2"
              onClick={() => {
                navigate(`/pizza/${id}`);
                openDetail(id);
              }}
            >
              Detalles
            </button>
          ) : (
            <button
              className="rpgui-button customButton2"
              onClick={() => {
                navigate(`/menu`);
                closeDetail(id);
              }}
            >
              Cerrar
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardPizza;
