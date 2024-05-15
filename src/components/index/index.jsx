import React from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <main>
      <section className="home-section-1">
        <section className="search">
          <h2>Find your holiday</h2>
          <form action="#" method="post">
            <div className="search-inputs">
              <div>
                <span>From :</span>
                <input type="text" name="from" placeholder="Paris" />
              </div>
              <div>
                <span>To :</span>
                <input type="text" name="to" placeholder="Malte" />
              </div>
              <div>
                <span>Date :</span>
                <input type="text" name="date" placeholder="04/11/2018" />
              </div>
              <div>
                <span>Duration :</span>
                <select name="duration">
                  <option value="3d">3 days</option>
                  <option value="1w">1 week</option>
                  <option value="2w">2 weeks</option>
                  <option value="3w">3 weeks</option>
                </select>
              </div>
              <input type="submit" value="Find!" />
            </div>
          </form>
        </section>
        <section className="top-deal" style={{ backgroundImage: 'url(https://picsum.photos/1200/800?image=164)' }}>
          <Link to="#">
            <div className="top-deal__content">
              <h2>Deal of the day</h2>
              <div className="top-deal__content-bottom">
                <span className="top-deal__city">Amsterdam</span>
                <span className="top-deal__info">Hotel Calypso</span>
                <span className="top-deal__duration">1 week</span>
              </div>
              <span className="top-deal__content-price">150€</span>
            </div>
          </Link>
        </section>
      </section>
      <section className="home-section-2">
        <h2>Top destinations</h2>
        <div className="destinations">
          {/* start destination */}
          <div className="destination">
            <div className="destination__background" style={{ backgroundImage: 'url(https://picsum.photos/1200/800?image=1067)' }}>
              <Link to="#">
                <div className="destination__content">
                  <h3 className="destination__city">Sydney</h3>
                  <div className="destination__content-bottom">
                    <span className="destination__info">Hotel Calypso</span>
                    <span className="destination__duration">1 week</span>
                  </div>
                  <span className="destination__content-price">150€</span>
                </div>
              </Link>
            </div>
          </div>
          {/* end destination */}
          {/* Repeat similar structure for other destinations */}
        </div>
        <div className="destination__see-more">
          <button type="button">See more</button>
        </div>
      </section>
      <section className="home-section-3">
        <div className="ecommerce-icons">
          <div className="ecommerce-icon">
            <img src="./assets/images/calculator.png" alt="calculator" />
            <span>Compare prices</span>
          </div>
          <div className="ecommerce-icon">
            <img src="./assets/images/discount.png" alt="discount" />
            <span>Get the best deals</span>
          </div>
          <div className="ecommerce-icon">
            <img src="./assets/images/support.png" alt="support" />
            <span>7/7 support</span>
          </div>
          <div className="ecommerce-icon">
            <img src="./assets/images/online-payment.png" alt="online payment" />
            <span>Secure online payment</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Index;
