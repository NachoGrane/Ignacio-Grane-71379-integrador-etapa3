import BrandSectionHome from "../components/BrandSectionHome";
import Hero from "../components/Hero";

const Inicio = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-12">
          <Hero />
        </div>
      </div>
      <div className="row g-0">
        <div className="col-12 p-3">
          <BrandSectionHome title="playstation" icon="playstation" />
        </div>
      </div>
    </>
  );
};

export default Inicio;
