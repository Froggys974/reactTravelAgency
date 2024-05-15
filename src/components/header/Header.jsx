import React from 'react';
import { Link } from 'react-router-dom';
import plane from "../../assets/images/plane.png";
import menu from "../../assets/images/menu.png";
import menuClose from "../../assets/images/menu-close.png";

function Header() {
  return (
    <>
      <header>
        <div className="header__logo">
          <h1><Link to="/"><img src={plane} alt="plane logo"/>Travel Agency</Link></h1>
        </div>
        <div className="header__nav__burger--open">
          <img src={menu} className="header__nav__burger--icon" alt="Menu"/>
        </div>
        <nav className="header__nav">
          <div className="header__nav__burger--close">
            <img src={menuClose} className="header__nav__burger--icon" alt="Menu close"/>
          </div>
          <ul>
            <li><Link to="/" className="header__nav--active">Home</Link></li>
            <li><Link to="/Destination">Destinations</Link>
              <ul className="header__sub-nav">
                <li><Link to="/Destination/#">France</Link></li>
                <li><Link to="/Destination/#">Russia</Link></li>
                <li><Link to="/Destination/#">Australia</Link></li>
                <li><Link to="/Destination/#">Japan</Link></li>
                <li><Link to="/Destination/#">China</Link></li>
                <li><Link to="/Destination/#">USA</Link></li>
                <li><Link to="/Destination/#">Spain</Link></li>
                <li><Link to="/Destination/#" className="header__sub-nav--see-more">See more</Link></li>
              </ul>
            </li>
            <li><Link to="/Deals">Deals</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;
