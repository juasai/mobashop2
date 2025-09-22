import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (count) => {
    const cartWidget = document.querySelector(".cart-widget");
    const cartCounter = cartWidget.querySelector(".cart-counter");
    const currentCount = parseInt(cartCounter.textContent) || 0;
    cartCounter.textContent = currentCount + count;
    setAddedToCart(true);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }}>
      <img src={product.image} alt={product.title} style={{
        width: '250px',
        height: '250px',
        borderRadius: '10px',
        marginBottom: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }} />
      <h2 style={{ color: '#004080', marginBottom: '10px' }}>{product.title}</h2>
      <p style={{ color: '#555', marginBottom: '15px', textAlign: 'center' }}>{product.description}</p>
      <p style={{ color: '#f79300', fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '20px' }}>Precio: ${product.price}</p>
      {!addedToCart && <ItemCount stock={10} initial={1} onAddToCart={(count) => handleAddToCart(count)} />}
      {addedToCart && <p style={{ color: '#004080', fontWeight: 'bold' }}>Producto agregado al carrito</p>}
    </div>
  );
};

export default ItemDetail;
