import "./Home.scss";
const Home = ({ welcomeMessage, children }) => {
  return (
    <div className="home-container">
      <h2>{welcomeMessage}</h2>
      <h3 style={{ color: '#f79300', marginBottom: '20px' }}>Promociones</h3>
      <div className="product-catalog">
        {children && children.sort((a, b) => a.price - b.price).slice(0, 5).map((product) => (
          <div key={product.id} style={{
            textAlign: 'center',
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            backgroundColor: 'white'
          }}>
            <img src={product.image} alt={product.name} style={{ width: '150px', height: '150px', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '1.2rem', color: '#333' }}>{product.title}</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
