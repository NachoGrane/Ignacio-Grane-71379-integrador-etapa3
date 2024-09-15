import "./ItemCarrito.scss";
const ItemCarrito = () => {
  return (
    <div className="card card_table d-flex flex-row w-100">
      <img
        src="./public/img/playstation-photo.png"
        alt=""
        className="card_table-img"
      />
      <div className="p-4 d-flex flex-row align-items-center justify-content-between w-100 position-relative">
        <div className="d-flex flex-column justify-content-between">
          <div>
            <p className="text-uppercase fs-5 m-0">sony playstation 5</p>
            <p className="text-uppercase">Consola</p>
          </div>
          <div className="d-flex flex-row align-items-center w-100">
            <button className="btn btn-primary btn_agregarProducto rounded-circle">
              <i className="bi bi-dash-lg text-black"></i>
            </button>
            <p className="m-0 mx-5 fw-bold fs-3">1</p>
            <button className="btn btn-primary btn_agregarProducto rounded-circle">
              <i className="bi bi-plus-lg text-black"></i>
            </button>
          </div>
        </div>
        <p className="text-uppercase fs-2 fw-medium"> $500.000</p>
        <button className="btn btn-transparent btn_quitarProducto">
          <i className="bi bi-x-lg fs-5"></i>
        </button>
      </div>
    </div>
  );
};

export default ItemCarrito;
