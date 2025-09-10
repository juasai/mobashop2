import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount stock={10} initial={1} />
    </div>
  );
};

export default ItemDetail;
