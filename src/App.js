import React from 'react';
import './App.css';

// componentes que conforman la aplicacion
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import About from './components/about/About';


/**
 * App
 * 
 * Funcion principal que encapsula los componentes
 */
function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
    </div>
  );
}

export default App;
