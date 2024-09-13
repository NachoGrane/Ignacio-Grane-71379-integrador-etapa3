import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./public/img/hero/hero-1.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./public/img/hero/hero-2.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./public/img/hero/hero-3.webp"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
