import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src="Logo.png" alt="web store logo"/>
      </Link>
      <Link to="cart">
        <img className="cart" src="cart.svg" alt="cart pic"/>
      </Link>
    </div>
  );
}

export default Navbar;