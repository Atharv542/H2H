import { useState, useEffect } from 'react';

export const useEmailPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('emailPopupShown');
    if (popupShown) return;

    // Timer for 15 seconds
    const timer = setTimeout(() => {
      setTimeElapsed(true);
    }, 15000);

    // Scroll detection
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Show popup when both conditions are met
    if (hasScrolled && timeElapsed) {
      setShowPopup(true);
    }
  }, [hasScrolled, timeElapsed]);

  const closePopup = () => {
    setShowPopup(false);
    // Mark popup as shown for this session
    sessionStorage.setItem('emailPopupShown', 'true');
  };

  return {
    showPopup,
    closePopup
  };
};