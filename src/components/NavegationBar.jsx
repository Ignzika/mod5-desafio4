import { NavLink } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import { useContext } from "react";
import "./NavegationBar.css";

const NavigationBar = () => {
  const { totalBilling } = useContext(PizzaContext);
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "rpgui-button golden customButton"
      : "rpgui-button customButton ";
  return (
    <>
      <nav className="rpgui-container framed-golden customNavBar">
        <NavLink to="/" className={setActiveClass}>
          <p> Inicio</p>
        </NavLink>

        <NavLink to="/menu" className={setActiveClass}>
          <p> Pizzas</p>
        </NavLink>

        <NavLink to="/cart" className={setActiveClass}>
          <p> Mi pedido</p>
        </NavLink>

        <div className="customButton">
          {totalBilling ? (
            <p>
              {" "}
              Total pedido{" "}
              <span>
                {Intl.NumberFormat("es-CL", {
                  style: "currency",
                  currency: "CLP",
                }).format(Number(totalBilling))}
              </span>
            </p>
          ) : (
            <div>
              {" "}
              <p> Esperamos tu pedido </p>{" "}
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
