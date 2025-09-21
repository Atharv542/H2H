import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmailPopup from './components/EmailPopup';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './contexts/CartContext';
import { useEmailPopup } from './hooks/useEmailPopup';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Shop from './pages/Shop';
import Testimonials from './pages/Testimonials';
import Podcast from './pages/Podcast';

import Booking from './pages/Booking';
import Checkout from './pages/Checkout';
import Terms from './pages/Terms';

function App() {
  const { showPopup, closePopup } = useEmailPopup();

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/podcast" element={<Podcast />} />
              
              <Route path="/booking" element={<Booking />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Terms />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <CartSidebar />
          <EmailPopup isVisible={showPopup} onClose={closePopup} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;