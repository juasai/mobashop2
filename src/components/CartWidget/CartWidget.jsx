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
        <div className="cart-dropdown">
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>
                    {item.title} x {item.quantity} - ${item.price * item.quantity}
                  </li>
                ))}
              </ul>
              <p>Total: ${getTotalPrice()}</p>
            </>
          ) : (
            <p>El carrito está vacío!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
