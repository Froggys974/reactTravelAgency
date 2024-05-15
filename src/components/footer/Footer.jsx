import React from 'react';
import { Link } from 'react-router-dom';
import calculator from "../../assets/images/calculator.png";
import discount from "../../assets/images/discount.png";
import support from "../../assets/images/support.png";
import onlinePayment from "../../assets/images/online-payment.png";

function Footer() {
  return (
    <>
    <section className="home-section-3"> 
          <div className="ecommerce-icons"> 
            <div className="ecommerce-icon"> 
              <img src={calculator} alt="calculator" /> 
              <span>Compare prices</span> 
            </div> 
            <div className="ecommerce-icon"> 
              <img src={discount} alt="discount" /> 
              <span>Get the best deals</span> 
            </div> 
            <div className="ecommerce-icon"> 
              <img src={support}alt="support" /> 
              <span>7/7 support</span> 
            </div> 
            <div className="ecommerce-icon"> 
              <img src={onlinePayment} alt="online-payment" /> 
              <span>Secure online payment</span> 
            </div> 
          </div> 
        </section> 
    <footer>
      <section>
        <h3>Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Destination">Destinations</Link></li>
          <li><Link to="/Deals">Deals</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/TermsAndConditions">Terms & Conditions</Link></li>
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
          <Link to="/Agency">Other addresses</Link>
        </p>
      </section>
      <section className="footer__call">
        <h3>Call Us</h3>
        <span>+1 0805-540-801</span>
      </section>
    </footer>
    </>
  );
}

export default Footer;
