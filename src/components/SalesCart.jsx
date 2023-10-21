import Swal from "sweetalert2";
import { PizzaContext } from "../context/PizzaContext";
import { useContext, useEffect } from "react";
import CardPizza from "./CardPizza";
import "./SalesCart.css";

const SalesCart = () => {
  const { pizzaMenu, totalBilling } = useContext(PizzaContext);

  const confirmBuy = () => {
    Swal.fire({
      timer: "2000",
      timerProgressBar: true,
      color: "#dfded6",
      icon: "warning",
      title: "Redireccionaremos a tu proveedor de pago",
      text: "Preparate para probar la mejor pizza!",
      footer: '<a href=""> no redirecciona nada... pero esta bonito</a>',
      customClass: {
        container: "rpgui-container framed-grey",
        popup: "rpgui-container framed",
        closeButton: "rpgui-button",
        confirmButton: "rpgui-button golden  customTextPlace",
      },
    });
  };

  return (
    <>
      <div className="framed">
        {pizzaMenu
          .filter((toBuy) => toBuy.add == true)
          .map((toBuy) => (
            <CardPizza
              key={toBuy.id}
              id={toBuy.id}
              img={toBuy.img}
              name={toBuy.name}
              ingredients={toBuy.ingredients}
              price={toBuy.price}
              detail={toBuy.detail}
              add={toBuy.add}
              amount={toBuy.amount}
            />
          ))}
      </div>
      <div className="rpgui-container framed-golden customcheck">
        {pizzaMenu
          .filter((f) => f.add == true)
          .map((billing, i) => (
            <div
              key={i}
              className="rpgui-container framed-golden customIndividualCheck "
            >
              <p>{billing.name}</p>
              <hr className="rpgui-container framed-golden-2 customHR" />
              <span>Cantidad</span>
              <p> {billing.amount} </p>
              <hr className="rpgui-container framed-golden-2 customHR" />
              <span>Precio</span>
              <p>
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(Number(billing.price))}
              </p>
              <hr className="rpgui-container framed-golden-2 customHR" />
              <span> Total </span>
              <p className="pizzaBilling">
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(Number(billing.price * billing.amount))}
              </p>
            </div>
          ))}

        {totalBilling ? (
          <div>
            <div className="rpgui-container framed-golden-2 customBill">
              <p>Total del pedido</p>
              <span>
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(Number(totalBilling))}
              </span>
            </div>

            <button
              className="rpgui-button golden"
              onClick={() => {
                confirmBuy();
              }}
            >
              <p> Pagar tu pedido </p>{" "}
            </button>
          </div>
        ) : (
          <span className="rpgui-container framed-golden-2 customBillEmpty">
            {" "}
            Carro Vacio
          </span>
        )}
      </div>
    </>
  );
};

export default SalesCart;
