import { NavLink } from "react-router-dom";
import "./BtnCarrito.scss";

const BtnCarrito = () => {
  return (
    <>
      <NavLink
        to={"/carrito"}
        className="btn btn-dark btn_carrito rounded-circle"
      >
        <i className="bi bi-cart-fill fs-3"></i>
      </NavLink>
    </>
  );
};

export default BtnCarrito;
