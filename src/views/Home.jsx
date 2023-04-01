import React, { useContext } from "react";
import MyContext from "../MyContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Home = () => {
  const { TrueEstado } = useContext(MyContext);
  const navigate = useNavigate("");

  const irAFormularioProductos = () => {
    // //   if() {

    // //    }
    navigate(`/formulario`);
  };

  return (
    <div className="wallpaper">
      <h1 className=" m-3 p-3">¡Bienvenido a Conecta-2!</h1>
      <Button
        className="homebutton"
        variant="primary"
        onClick={irAFormularioProductos}
      >
        {" "}
        VENDE YA!
      </Button>
      <Link to="/galeria" className="text-white ms-3 text-decoration-none">
        <Button variant="primary" className="homebutton" onClick={TrueEstado}>
          COMPRA AQUI!
        </Button>
      </Link>
    </div>
  );
};

export default Home;
