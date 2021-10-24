import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarLeftSection">
        <Link to="/">
          <img className="logo" src="Logo.png" alt="web store logo"/>
        </Link>
        <div className="navbarMiddleSection">
          <Link to="/">Esemed</Link>
          <Link to="categories">Kategooriaid</Link>
        </div>
      </div>
      <Link to="cart">
        <img className="cart" src="cart.svg" alt="cart pic"/>
      </Link>
    </div>
  );
}

export default Navbar;