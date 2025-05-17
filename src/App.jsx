import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import DonateForm from './components/DonateForm';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Home />
      <DonateForm />
    </div>
  );
}

export default App;
