import SalesCart from "../components/SalesCart";
import "./SalesPage.css";

const SalesPage = () => {
  return (
    <>
      <div className="salesPage">
        <h2 className="rpgui-container framed-grey">
          <span class="rpgui-icon weapon-slot "></span>
          <span class="rpgui-icon shield-slot"></span>
          <span class="rpgui-icon armor-slot"></span>
          <br />
          Tu pedido
        </h2>
        <div className="rpgui-container framed ">
          <SalesCart />
        </div>
      </div>
    </>
  );
};

export default SalesPage;
