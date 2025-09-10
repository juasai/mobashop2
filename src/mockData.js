const products = [
  { id: 1, name: "Producto 1", category: "categoria1", price: 100, description: "Descripción del producto 1" },
  { id: 2, name: "Producto 2", category: "categoria2", price: 200, description: "Descripción del producto 2" },
  { id: 3, name: "Producto 3", category: "categoria1", price: 150, description: "Descripción del producto 3" },
  { id: 4, name: "Producto 4", category: "categoria3", price: 300, description: "Descripción del producto 4" },
];

export const getProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
};

export const getProductById = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
};

export const getProductsByCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await response.json();
  return data;
};
