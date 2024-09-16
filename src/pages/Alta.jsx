import { useContext, useEffect, useState } from "react";
import ProductosContext from "../context/ProductosContext";
const Alta = () => {
  const formInit = {
    id: null,
    nombre: "",
    precio: "",
    stock: "",
    marca: "",
    categoria: "",
    detalles: "",
    foto: "",
    envio: false,
  };

  const [form, setForm] = useState(formInit);

  const {
    crearProductoContext,
    actualizarProductoContext,
    productoAEditar,
    setProductoAEditar,
  } = useContext(ProductosContext);

  useEffect(() => {
    productoAEditar ? setForm(productoAEditar) : setForm(formInit);
  }, [productoAEditar]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("handleSubmit");

    try {
      if (form.id === null) {
        console.log("Creando un producto");
        await crearProductoContext(form);
      } else {
        console.log("Actualizando producto");
        await actualizarProductoContext(form);
      }
      handleReset();
    } catch (error) {
      console.error("[handleSubmit]", error);
    }
  };

  const handleChange = (e) => {
    //console.log(e.target.name)
    //console.log(e.target.value)
    //console.log(e.target.checked)
    //console.log(e.target.type)
    const { type, name, checked, value } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleReset = () => {
    console.log("handleReset");
    setForm(formInit);
    setProductoAEditar(null);
  };

  return (
    <>
      <div className="container">
        <div className="row p-5">
          <div className="col-12">
            <h3>Agregar : Editar</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="lbl-nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="lbl-nombre"
                  className="form-control"
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-precio" className="form-label">
                  Precio
                </label>
                <input
                  type="text"
                  name="precio"
                  id="lbl-precio"
                  className="form-control"
                  value={form.precio}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-stock" className="form-label">
                  Stock
                </label>
                <input
                  type="text"
                  name="stock"
                  id="lbl-stock"
                  className="form-control"
                  value={form.stock}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-marca" className="form-label">
                  Marca
                </label>
                <input
                  type="text"
                  name="marca"
                  id="lbl-marca"
                  className="form-control"
                  value={form.marca}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-categoria" className="form-label">
                  Categoría
                </label>
                <input
                  type="text"
                  name="categoria"
                  id="lbl-categoria"
                  className="form-control"
                  value={form.categoria}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-detalles" className="form-label">
                  Detalles
                </label>
                <input
                  type="text"
                  name="detalles"
                  id="lbl-detalles"
                  className="form-control"
                  value={form.detalles}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lbl-foto" className="form-label">
                  Foto
                </label>
                <input
                  type="text"
                  name="foto"
                  id="lbl-foto"
                  className="form-control"
                  value={form.foto}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check">
                <label htmlFor="form-label" className="form-check-label">
                  Envío
                </label>
                <input
                  type="checkbox"
                  name="envio"
                  id="lbl-envio"
                  className="form-check-input "
                  checked={form.envio}
                  onChange={handleChange}
                />
              </div>
              <div className="w-100 d-flex flex-row justify-content-center">
                <button type="submit" className="btn btn-lg btn-primary">
                  Guardar
                </button>
                <button
                  type="reset"
                  onClick={handleReset}
                  className="ms-3 btn btn-lg btn-danger"
                >
                  Limpiar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Alta;
