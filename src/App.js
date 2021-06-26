import './App.css';
import React from 'react';
import Navbar from './components/NavBar/NavBar';
import Slider from './components/Slider/Slider';
import AboutUs from './components/Sections/AboutUs'
import StickyIcons from './components/StickyIcons';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutUs />
      <StickyIcons />
    </div>
  );
}
export default App;
