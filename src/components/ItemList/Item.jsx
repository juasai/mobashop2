import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <Link to={`/producto/${product.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
