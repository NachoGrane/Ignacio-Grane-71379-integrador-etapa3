import { NavLink } from "react-router-dom";
import "./BtnCarrito.scss";
import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";

const BtnCarrito = () => {
  const { carrito } = useContext(CarritoContext);
  console.log("Soy el carrito del btn carrito", carrito);

  return (
    <>
      <NavLink
        to={"/carrito"}
        className="btn btn-dark btn_carrito rounded-circle d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-cart-fill fs-4 m-0"></i>
      </NavLink>
    </>
  );
};

export default BtnCarrito;
