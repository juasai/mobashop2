import "./Home.scss";
const Home = ({ welcomeMessage, children }) => {
  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="banner-content">
          <h2>{welcomeMessage}</h2>
          <p>Descubre nuestras mejores ofertas y promociones exclusivas.</p>
          <button className="cta-button">Explorar ahora</button>
        </div>
      </div>
      <h3 className="promotions-title">Promociones Destacadas</h3>
      <div className="product-slider">
        <div className="slider-wrapper">
          {children && children.sort((a, b) => a.price - b.price).slice(0, 5).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">Precio: ${product.price}</p>
                <button className="buy-now-button">Comprar ahora</button>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-nav prev">&#8249;</button>
        <button className="slider-nav next">&#8250;</button>
      </div>
    </div>
  );
};

export default Home;
