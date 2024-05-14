import React from 'react';
import './App.css';

function Accueil() {
 return (
    <div className="App">
      <header className="App-header">
        <h1>Le steak parfait</h1>
        <p>Laissez-vous fenter par un steak d'exception, préparé par nos chefs expérimentés</p>
      </header>
      <main>
        <section className="Gallery">
          <div className="Gallery-item"></div>
          <div className="Gallery-item"></div>
          <div className="Gallery-item"></div>
          <div className="Gallery-item"></div>
        </section>
        <section className="Contact">
          <h2>Contact Us</h2>
          <p>Location</p>
          <p>Phone Number</p>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </section>
        <section className="About">
          <h2>About Us</h2>
          <p>Ajuntibus, faire France de lanceadament 33 Statistan's Musaka Jarin pastarades de dad, djeludes tapat die bed</p>
          <p>Melleur moment</p>
        </section>
        <section className="Testimonial">
          <h2>Testimonial</h2>
          <p>Comment Client a</p>
          <p>Bedish Matsinghet perfecta! Me doist and a to populia dan hampagasts daitgalimal astfig 9-19</p>
        </section>
      </main>
    </div>
 );
}

export default Accueil;