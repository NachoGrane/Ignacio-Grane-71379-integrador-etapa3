import "./Card.scss";

const Card = ({ producto }) => {
  const iconos = [producto.categoria, producto.marca];
  console.log(iconos);

  return (
    <>
      <div className="card me-2 position-relative justify-content-between">
        <div className="position-absolute card_icon-category d-flex flex-row">
          {iconos &&
            iconos.map((icon, index) => {
              const iconClass = icon === "nintendo" ? "nintendo-switch" : icon;
              const spaceIcon = index > 0 ? "ms-2" : "";
              const display = icon === "console" ? "d-none" : "";
              return (
                <div
                  className={`card_icon-category-circle rounded-circle ${spaceIcon} text-white bg-dark d-flex justify-content-center align-items-center ${display}`}
                  key={index}
                >
                  <i className={`bi bi-${iconClass} m-0 p-0`}></i>
                </div>
              );
            })}
        </div>
        <img
          src={producto.foto}
          className="card-img-top card_img"
          alt={producto.nombre}
        />
        <div className="card-body card_body d-flex flex-row justify-content-between align-items-center">
          <div className="d-flex flex-column gap-0">
            <p className="card-text card_body-price m-0">${producto.precio}</p>
            <p className="card-text card_body-text m-0">{producto.nombre}</p>
            <p className="card-subtitle card_body-subtitle text-capitalize m-0">
              {producto.marca}
            </p>
          </div>
          <button type="button" className="btn btn-dark fs-5 rounded shadow">
            <i className="bi bi-bag-plus-fill"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
