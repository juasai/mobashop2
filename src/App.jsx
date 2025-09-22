//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import "./styles/style.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//const basename = process.env.NODE_ENV === "production" ? "/mobashop2" : "";
// Configuración del basename
const basename = import.meta.env.PROD ? "/mobashop2" : "";

import { useEffect, useState } from "react";
import { getProducts } from "./mockData";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
     <BrowserRouter basename={basename}>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home welcomeMessage="¡Bienvenido a MiTienda!" children={products} />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<p>404 - Página no encontrada</p>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
