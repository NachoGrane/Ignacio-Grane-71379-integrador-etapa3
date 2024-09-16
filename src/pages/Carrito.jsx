import { useContext, useEffect } from "react";
import ItemCarrito from "../components/ItemCarrito";
import CarritoContext from "../context/CarritoContext";

const Carrito = () => {
  const { carrito, limpiarCarritoContext } = useContext(CarritoContext);
  console.log("Me llego el carrito con: ", carrito);

  // Calculo suma de precios
  const totalSumaPrecio = carrito.reduce(
    (suma, p) => suma + Number.parseFloat(p.precio),
    0
  );

  // Eliminar todo del carrito
  const handleLimpiarCarrito = () => {
    limpiarCarritoContext();
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 d-flex flex-row">
            <div className="col-8">
              <h1 className="text-uppercase fw-bold"> Tu carrito</h1>
              <p>
                Total ({carrito.length}{" "}
                {carrito.length === 1 ? "producto" : "productos"})
                <span className="fw-bold"> ${totalSumaPrecio.toFixed(2)}</span>
              </p>
              <p>
                Los artículos en tu carrito no están reservados. Terminá el
                proceso de compra ahora para hacerte con ellos.
              </p>
              {carrito &&
                carrito.map((producto) => (
                  <ItemCarrito key={producto.id} producto={producto} />
                ))}
            </div>
            <div className="col-3 mx-5">
              <button className="btn btn-lg btn-primary d-flex flex-row justify-content-between w-100 mb-5">
                Ir a pagar <i className="bi bi-arrow-right"></i>
              </button>
              <h4 className="text-uppercase fw-bold mb-4">
                resumen del pedido
              </h4>
              <div className="d-flex flex-row w-100 justify-content-between ">
                <p className="m-0 text-muted">
                  ({carrito.length}{" "}
                  {carrito.length === 1 ? "producto" : "productos"})
                </p>
                <p className="m-0 text-muted"> ${totalSumaPrecio.toFixed(2)}</p>
              </div>
              <div className="d-flex flex-row w-100 justify-content-between mb-3">
                <p className="m-0 text-muted">Entrega</p>
                <p className="m-0 text-muted">Gratis</p>
              </div>
              <div className="d-flex flex-row w-100 justify-content-between">
                <div>
                  <p className="m-0 fw-bold">Total</p>
                  <p className="m-0 text-muted">(IVA incluido)</p>
                </div>
                <p className="m-0 fw-bold">${totalSumaPrecio.toFixed(2)}</p>
              </div>
              <div className="mt-5">
                <button
                  type="button"
                  className="btn btn-lg btn-danger d-flex flex-row justify-content-between w-100 mb-5"
                  onClick={() => handleLimpiarCarrito()}
                >
                  Borrar carrito <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carrito;
