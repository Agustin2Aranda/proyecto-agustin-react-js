import { useParams } from "react-router-dom"
import relojes from "../productos"

function Detalle() {

  const {id} = useParams();
  const producto = relojes.find(prod => prod.id === parseInt(id));

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div>
      <h2>Detalle de Reloj</h2>
      <h2>{producto.nombre}</h2>
      <p>{producto.description}</p>
      <h3>{producto.precio}</h3>
    </div>
  )
}

export default Detalle