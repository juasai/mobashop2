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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {!addedToCart && <ItemCount stock={10} initial={1} onAddToCart={(count) => handleAddToCart(count)} />}
      {addedToCart && <p>Producto agregado al carrito</p>}
    </div>
  );
};

export default ItemDetail;
