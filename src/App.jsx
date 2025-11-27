import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MobileHeader from './components/Layout/MobileHeader';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import ErrorBoundary from './components/Layout/ErrorBoundary';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Services from './pages/Services';
import Reservations from './pages/Reservations';
import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Dining from './pages/Dining';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
//import ErrorBoundary from './components/Layout/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        <ScrollToTop />
        <MobileHeader />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* Catch all 404 routes */}
            <Route path="*" element={<NotFound />} />
            <Route path="/errorboundary" element={<ErrorBoundary />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;