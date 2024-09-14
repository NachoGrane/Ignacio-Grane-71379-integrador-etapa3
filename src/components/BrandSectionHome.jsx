import "./BrandSectionHome.scss";
import Card from "./Card";
const BrandSectionHome = (props) => {
  const { title, icon, productos } = props;
  console.log(productos);

  return (
    <>
      <div className="d-flex flex-row align-items-center mb-3 mt-3 ">
        <i className={`bi bi-${icon} fs-2 me-2`}></i>
        <h1 className="text-capitalize fs-3 m-0">{title}</h1>
      </div>
      <div className="row">
        <div className="col-12 d-flex flex-row">
          {productos &&
            productos
              .filter((p) => p.marca === title)
              .slice(0, 6)
              .map((producto) => (
                <Card key={producto.id} producto={producto} />
              ))}
        </div>
      </div>
    </>
  );
};

export default BrandSectionHome;
