import { useState, useEffect } from 'react'
import './App.css'
import Footer from './components/Footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import Nosotros from './components/Nosotros.jsx';
import Productos from './components/Productos.jsx';
import Error from './components/Error.jsx';
import Detalle from './components/Detalle.jsx';
import {getFirestore, doc, getDoc} from 'firebase/firestore';

function App() {
  const [data, setData] = useState({});
  const db = getFirestore();

  useEffect(() => {
    //Crea la referencia al elemento que queremos traer
    const itemRef = doc(db, "items", "XJLpVI26b3Q0lTiwMAlU");

    //Traigo el documento
    getDoc(itemRef).then(snapshot => {setData(snapshot.data());})
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/productos/:id" element={<Detalle/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
