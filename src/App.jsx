import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './components/Body.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.jsx';
import Layout from './components/Layout.jsx';
import Nosotros from './components/Nosotros.jsx';
import Productos from './components/Productos.jsx';
import Producto from './components/Producto.jsx';
import Error from './components/Error.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
      <Footer />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/productos" element={<Productos/>}/>
            <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
