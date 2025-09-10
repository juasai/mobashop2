const products = [
  { id: 1, name: "Producto 1", category: "categoria1", price: 100, description: "Descripción del producto 1" },
  { id: 2, name: "Producto 2", category: "categoria2", price: 200, description: "Descripción del producto 2" },
  { id: 3, name: "Producto 3", category: "categoria1", price: 150, description: "Descripción del producto 3" },
  { id: 4, name: "Producto 4", category: "categoria3", price: 300, description: "Descripción del producto 4" },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === parseInt(id)));
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === category));
    }, 1000);
  });
};
