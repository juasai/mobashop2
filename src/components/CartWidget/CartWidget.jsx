import "./CartWidget.scss";

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span>🛒</span>
      <span className="cart-counter">5</span>
    </div>
  );
};

export default CartWidget;
