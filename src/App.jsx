import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EmailPopup from './components/EmailPopup';
import CartSidebar from './components/CartSidebar';
import { CartProvider } from './contexts/CartContext';
import { useEmailPopup } from './hooks/useEmailPopup';
import Home from './pages/Home';

import About from './pages/About';
import Shop from './pages/Shop';
import Testimonials from './pages/Testimonials';
import Podcast from './pages/Podcast';

import Booking from './pages/Booking';
import Checkout from './pages/Checkout';
import Terms from './pages/Terms';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ScrollToTop from './ScrollToTop';
import EmailPopupLearn from './pages/EmailPopLearnMore';
import { Toaster } from "react-hot-toast";
import PurposeCoaching from './pages/PurposeCoaching';
import MindfulnessCoaching from './pages/MindfulnessCoaching';
import ClarityCoaching from './pages/ClarityCoaching';

import ContactForm from './pages/Contact';
import Success from './pages/Success';
import MemberProfile from './pages/MeberProfile';
import Connect from './pages/Connect';
import Team from './pages/Team';
import MemberProfile2 from './pages/MemberProfile';
import ShopSuccess from './pages/Shop-Success';
import AwarenessProgram from './pages/AwarenessProgram';

function App() {
  const { showPopup, closePopup } = useEmailPopup();

  return (
    <CartProvider>
      <Router>
       <ScrollToTop/>
        <div className="min-h-screen bg-gray-50">
        
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
             
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/testimonials" element={<Testimonials />} />
              {/*<Route path="/podcast" element={<Podcast />} />*/}
              <Route path="/email" element={<EmailPopupLearn />} />
              <Route path="/clarity-coaching" element={<ClarityCoaching />} />
              <Route path="/mindfulness-coaching" element={<MindfulnessCoaching />} />
              <Route path="/purpose-coaching" element={<PurposeCoaching />} />
              <Route path="/success" element={<Success/>} />
        
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        
           <Route path='/team/:memberId'element={<MemberProfile/>}/>
              <Route path="/booking" element={<Booking />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Terms />} />
              <Route path="/shop-success" element={<ShopSuccess />} />
              
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/team-new" element={<Team />} />
              <Route path="/team-new/:memberId" element={<MemberProfile2 />} />
              <Route path="/awareness-program" element={<AwarenessProgram />} />
              
            </Routes>
          </AnimatePresence>
          <Footer />
          <CartSidebar />
          <EmailPopup isVisible={showPopup} onClose={closePopup} />
        </div>
       
      </Router>
       <Toaster />
    </CartProvider>
  );
}

export default App;