import "./Home.css";
import "/src/assets/img/aipizza2.jpg";

const Home = () => {
  return (
    <div className="rpgui-container framed divPage">
      <div>
        <h1 className="rpgui-container framed-golden-2 ">PixelPizza</h1>
        <h3>
          {" "}
          Bienvenido viajero, ven y disfruta de tu estancia con una buena
          comida.
        </h3>
      </div>
      <div className="imgHomeContainer">
        <img src="src\assets\img\aipizza2.jpg" alt="pizzaWelcome" />
      </div>
      <hr className="rpgui-container framed-golden-2" />
    </div>
  );
};

export default Home;
