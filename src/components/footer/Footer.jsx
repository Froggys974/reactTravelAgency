import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer>
      <section>
        <h3>Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Destinations">Destinations</Link></li>
          <li><Link to="/Deals">Deals</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Terms">Terms & Conditions</Link></li>
        </ul>
      </section>
      <section>
        <h3>Address</h3>
        <p>
          15 rue de la paix
          <br />
          75010, Paris
          <br />
          France
          <br />
          <a href="#">Other addresses</a>
        </p>
      </section>
      <section className="footer__call">
        <h3>Call Us</h3>
        <span>+1 0805-540-801</span>
      </section>
    </footer>
  );
}

export default Footer;
