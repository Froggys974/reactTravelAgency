import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';
class Destination extends Component { 
  render() { 
    return ( 
      <main> 
        <section className="banner" style={{ backgroundImage: "url('https://picsum.photos/1200/800?image=572')" }}> 
          <div className="banner__wrapper"> 
            <div> 
              <h2>Our destinations</h2> 
              <p>Choose your dream vacation in our list of destinations</p> 
            </div> 
          </div> 
        </section> 
        <section className="destinations-section-1"> 
          {[896, 993, 990, 990, 990, 990, 990, 984, 944, 929, 896, 867].map((image, index) => ( 
            <div className="destination" key={index}> 
              <div className="destination__banner" style={{ backgroundImage: `url('https://picsum.photos/1200/800?image=${image}')` }}> 
                <div> 
                  <h3>France</h3> 
                </div> 
              </div> 
              <div className="destination__city-list"> 
                <div> 
                  <ul> 
                    <li><Link to="/Destination/France/Paris">Paris</Link></li> {/* TODO: Component with routes for each contry etc */}
                    <li><a href="#">Toulouse</a></li> 
                    <li><a href="#">Bordeaux</a></li> 
                    <li><a href="#">Montpellier</a></li> 
                    <li><a href="#">La Rochelle</a></li> 
                  </ul> 
                </div> 
                <div> 
                  <ul> 
                    <li><a href="#">Marseille</a></li> 
                    <li><a href="#">Nice</a></li> 
                    <li><a href="#">Côte d'Azur</a></li> 
                    <li><a href="#">La Ciotat</a></li> 
                    <li><a href="#">Cannes</a></li> 
                  </ul> 
                </div> 
                <a href="#" className="destination__see-more">See more</a> 
              </div> 
            </div> 
          ))} 
        </section> 
        
      </main> 
    ); 
  } 
} 
export default Destination;