import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import FloorPlans from './components/FloorPlans';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import About from './components/About';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Pricing />
      <FloorPlans />
      <Amenities />
      <Gallery />
        <Location />
        <About />
        <Footer />
    </div>
  );
}

export default App;
