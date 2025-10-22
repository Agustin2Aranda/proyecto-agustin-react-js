import {addDoc, collection, getFirestore} from 'firebase/firestore'

function CreateItem() {

  const item = {
    title: "Patek Philippe Calatrava",
    description: "El epítome de la elegancia y la simplicidad. Este reloj de vestir se caracteriza por su diseño puro, minimalista y atemporal, siendo una pieza fundamental en cualquier colección de alta relojería.",
    price: 20000,
    category: "Patek Philippe",
    imageId: "Patek Philippe Calatrava.jpg",
    stock: 15
  }

  //Conexión a la base de datos
  const db = getFirestore();

  //Referencia a la colección
  const itemsCollection = collection(db, "items");

  //Agregar el documento
  addDoc(itemsCollection, item).then(({id}) => {
    console.log(id);
    console.log("Producto agregado");
  });


  return (
    <>
    </>
  )
}

export default CreateItem