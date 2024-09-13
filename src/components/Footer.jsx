import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__description">
          <div className="footer__description-item">
            <div className="footer__description-item-title">
              <p>Ayuda</p>
            </div>
            <div className="footer__description-item-subtitle">
              <a href="./views/contacto.html">Contacto</a>
            </div>
          </div>
          <div className="footer__description-item">
            <div className="footer__description-item-title">
              <p>Sobre overgames</p>
            </div>
            <div className="footer__description-item-subtitle">
              <a href="./views/nosotros.html">¿Quiénes somos?</a>
            </div>
          </div>
          <div className="footer__description-redes">
            <a
              href="#"
              className="footer__description-redes-icon"
              title="Whatsapp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a
              href="#"
              className="footer__description-redes-icon"
              title="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
