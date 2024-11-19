// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import AppointmentForm from './components/AppointmentForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <AppointmentForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
