
function Producto({nombre, description, precio}) {
  return (
    <div className="card">
        <h2>{nombre}</h2>
        <h4>{description}</h4>
        <h3>${precio}</h3>
    </div>
  )
}

export default Producto