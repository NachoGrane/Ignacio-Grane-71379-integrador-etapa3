import "./BrandSectionHome.scss";
const BrandSectionHome = (props) => {
  const { title, icon } = props;
  return (
    <>
      <div className="d-flex flex-row align-items-center">
        <i className={`bi bi-${icon} fs-2 me-2`}></i>
        <h1 className="text-capitalize fs-3 m-0">{title}</h1>
      </div>
    </>
  );
};

export default BrandSectionHome;
