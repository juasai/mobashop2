import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory, getProducts } from "../../mockData";
import ItemList from "../../components/ItemList/ItemList";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = category
        ? await getProductsByCategory(category)
        : await getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, [category]);

  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  const handleCategoryClick = (category) => {
    window.location.href = `/productos/${category}`;
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20%', padding: '20px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
        <h3 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Categorías</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {categories.map((cat) => (
            <li key={cat} style={{
              marginBottom: '15px',
              cursor: 'pointer',
              padding: '10px',
              textAlign: 'center',
              border: '1px solid #004080',
              borderRadius: '5px',
              backgroundColor: '#004080',
              color: 'white',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            }}
            onClick={() => handleCategoryClick(cat)}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f79300';
              e.target.style.color = '#004080';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#004080';
              e.target.style.color = 'white';
            }}>
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '80%' }}>
      <h2 style={{ textAlign: 'center', color: 'white' }}>{category ? `Categoría: ${category}` : "Catálogo de Productos"}</h2>
      <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
