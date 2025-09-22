import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div style={{
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white'
    }}>
      <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', marginBottom: '10px' }} />
      <h3 style={{ fontSize: '1.2rem', color: '#333' }}>{product.title}</h3>
      <p style={{ fontSize: '1rem', color: '#555' }}>Precio: ${product.price}</p>
      <Link to={`/producto/${product.id}`} style={{
        display: 'inline-block',
        marginTop: '10px',
        padding: '10px 15px',
        backgroundColor: '#f79300',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px'
      }}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
