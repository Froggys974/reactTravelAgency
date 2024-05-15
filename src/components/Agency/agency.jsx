import React, { Component } from "react";

class Agency extends Component {
  render() {
    return (
      <main>
        <section
          className="banner"
          style={{
            backgroundImage: "url('https://picsum.photos/1200/800?image=192')",
          }}
        >
          <div className="banner__wrapper">
            <div>
              <h2>Our Agency</h2>
              <p>Here is a list of our agency worldwide</p>
            </div>
          </div>
        </section>

        <section className="destinations-section-1">
          {[896, 993, 990, 990, 990, 990, 990, 984, 944, 929, 896, 867].map(
            (image, index) => (
              <div className="destination" key={index}>
                <div
                  className="destination__banner"
                  style={{
                    backgroundImage: `url('https://picsum.photos/1200/800?image=${image}')`,
                  }}
                >
                  <div>
                    <h3>France</h3>
                  </div>
                </div>
                <div className="destination__city-list">
                  15 rue de la paix
                  <br />
                  75010, Paris
                  <br />
                  France
                  <br />
                  +1 0805-540-801
                  <br />
                  <a href="mailto:france@travel.agency">france@travel.agency</a>
                </div>
              </div>
            )
          )}
        </section>
      </main>
    );
  }
}

export default Agency;
