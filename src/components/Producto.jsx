import { Link } from "react-router-dom"

function Producto({nombre, description, precio, id}) {
  return (
    <Link to={`/productos/${id}`} className="card">
        <h2>{nombre}</h2>
        <h4>{description}</h4>
        <h3>${precio}</h3>
    </Link>
  )
}

export default Producto