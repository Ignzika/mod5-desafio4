import { Routes, Route } from "react-router-dom";

import "./App.css";
import NavigationBar from "./components/NavegationBar";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import PizzaMenu from "./views/PizzaMenu";
import PizzaDetail from "./views/PizzaDetail";
import SalesPage from "./views/SalesPage";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/menu" element={<PizzaMenu />} />
        <Route  path="/pizza/:id" element={<PizzaDetail />} />
        <Route  path="/cart" element={<SalesPage />} />
        <Route  path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
