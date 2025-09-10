import "./CartWidget.scss";

import { useState } from "react";

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (count) => {
    setCartCount(cartCount + count);
  };
  return (
    <div className="cart-widget">
      <span>🛒</span>
      <span className="cart-counter">{cartCount}</span>
    </div>
  );
};

export default CartWidget;
