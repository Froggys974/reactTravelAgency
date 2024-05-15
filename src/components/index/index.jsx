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
          <Link to="Destination/France/Paris">
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
              <Link to="Destination/France/Paris">
                <div className="destination__content">
                  <h3 className="destination__city">Paris</h3>
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
          {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=993')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">Rio</h3>
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
        {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=990')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">Cusco</h3>
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
        {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=984')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">New Delhi</h3>
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
        {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=944')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">Hong Kong</h3>
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
        {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=929')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">Katmandou</h3>
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
        {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=896')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">Tokyo</h3>
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
        {/* start destination */}
        <div className="destination">
          <div className="destination__background" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=867')" }}>
            <Link to="Destination/France/Paris">
              <div className="destination__content">
                <h3 className="destination__city">Lisbonne</h3>
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
        </div>
        <div className="destination__see-more">
          <Link to="Destination"><button type="button">See more</button></Link>
        </div>
      </section>
    </main>
  );
}

export default Index;
