import "./CartWidget.scss";

import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart, getTotalItems, getTotalPrice } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-widget" onClick={toggleCart}>
      <span>🛒</span>
      <span className="cart-counter">{getTotalItems()}</span>
      {isCartOpen && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <button className="close-button" onClick={toggleCart}>X</button>
            <h3>Carrito de Compras</h3>
            {cart.length > 0 ? (
              <>
                <ul className="cart-items">
                  {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                      <span>{item.title}</span>
                      <span>Cantidad: {item.quantity}</span>
                      <span>Precio: ${item.price}</span>
                      <span>Subtotal: ${item.price * item.quantity}</span>
                      <button className="remove-button" onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </li>
                  ))}
                </ul>
                <div className="cart-total">
                  <p>Total: ${getTotalPrice()}</p>
                </div>
              </>
            ) : (
              <p>El carrito está vacío!</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
