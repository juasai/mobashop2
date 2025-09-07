import CartWidget from "../CartWidget/CartWidget"
import logo from "../../assets/logo.svg"
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo de la tienda" />
        <h1>Moba shop</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
