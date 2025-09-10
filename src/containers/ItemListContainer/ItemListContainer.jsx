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

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{category ? `Categoría: ${category}` : "Catálogo de Productos"}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
