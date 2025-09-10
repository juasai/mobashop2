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
      <div style={{ width: '20%', padding: '10px', borderRight: '1px solid #ccc' }}>
        <h3>Categorías</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {categories.map((cat) => (
            <li key={cat} style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleCategoryClick(cat)}>
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ width: '80%' }}>
      <h2 style={{ textAlign: 'center' }}>{category ? `Categoría: ${category}` : "Catálogo de Productos"}</h2>
      <ItemList products={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;
