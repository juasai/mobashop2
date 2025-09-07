import "./Home.scss";
const Home = ({ welcomeMessage, children }) => {
  return (
    <div className="home-container">
      <h2>{welcomeMessage}</h2>
      <div className="product-catalog">
        {children} {/* Aquí irá el catálogo de productos en el futuro */}
      </div>
    </div>
  );
};

export default Home;
