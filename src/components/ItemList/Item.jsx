import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
      <h3>{product.title}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/producto/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
