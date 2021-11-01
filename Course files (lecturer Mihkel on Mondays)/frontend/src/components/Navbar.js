import './Navbar.css';
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

function Navbar() {
  const [showDropdownMenu, setShowDropdownMenu] = useState(false)

  const changeMenuLayout = () => {
    setShowDropdownMenu(!showDropdownMenu)
  }

  if(!showDropdownMenu) {
    return (
      <nav>
        <div className="navbar">
          <Link className="emptySpaceOnRightSide" to="/">
            <img className="shopLogo" src="/Logo.png" alt="web store logo"/>
          </Link>
          <div className="menuSection">
            <Link to="/">Esemed</Link>
            <Link to="/categories">Kategooriaid</Link>
            <Link to="/admin">Admin</Link>
          </div>
          <Link to="/cart">
            <img className="cartImg" src="/cart.svg" alt="cart pic"/>
          </Link>
          <button onClick={changeMenuLayout} className="openCloseMenuBtn">
            <img className="openMenuPic" src="/menu.png" alt="open menu pic"/>
          </button>
        </div>
      </nav>
    )
  }

  return (
    <nav>
      <div className="navbar">
        <Link onClick={changeMenuLayout} className="emptySpaceOnRightSide" to="/">
          <img className="shopLogo" src="/Logo.png" alt="web store logo"/>
        </Link>
        <Link onClick={changeMenuLayout} to="/cart">
          <img className="cartImg" src="/cart.svg" alt="cart pic"/>
        </Link>
        <button onClick={changeMenuLayout} className="openCloseMenuBtn">
          <img className="closeMenuPic" src="/close.png" alt="close menu pic"/>
        </button>
      </div>
      <div className="menuForSmallerScreens">
        <Link onClick={changeMenuLayout} to="/">Esemed</Link>
        <Link onClick={changeMenuLayout} to="/categories">Kategooriaid</Link>
        <Link onClick={changeMenuLayout} to="/admin">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar;