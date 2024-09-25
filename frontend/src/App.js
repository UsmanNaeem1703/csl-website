import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from './components/Home/Home';
import ComingSoon from "./components/ComingSoon/ComingSoon";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";  
import React, { Component, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mentors from "./components/Mentors/Mentors";
import Leadership from "./components/Leadership/Leadership";
import Exectives from "./components/Exectives/Exectives";
import AboutUs from "./components/About Us/AboutUs";
import Events from "./components/Events/Events";

const AppContent = () => {
  const [loading, setLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedSubscription, setSelectedSubscription] = useState(null);
  const handleBuyClick = (amount, subscriptionType) => {
    setSelectedSubscription({ amount, subscriptionType });
    setShowCheckout(true);
  };

  const [expanded, setExpanded] = useState(false);

  const handleToggle = (e) => {
    setExpanded(e);
    // console.log(expanded);
  };

  if (loading) {
    return (
      <div className="loader-main">
        <div className="loader">
          <svg viewBox="0 0 80 80">
            <circle r="32" cy="40" cx="40" id="test"></circle>
          </svg>
        </div>

        <div className="loader triangle">
          <svg viewBox="0 0 86 80">
            <polygon points="43 8 79 72 7 72"></polygon>
          </svg>
        </div>

        <div className="loader">
          <svg viewBox="0 0 80 80">
            <rect height="64" width="64" y="8" x="8"></rect>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Header expanded={expanded} handleToggle={handleToggle} />
      <div onClick={() => handleToggle(false)}>
        <Routes>
          <Route path="/" element={<Home handleBuyClick={handleBuyClick} />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/exectives" element={<Exectives />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContent />
      </div>
    );
  }
}

export default App;
