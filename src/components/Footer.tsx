import React from 'react';
import { Facebook, Instagram, Linkedin, Mail,MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const TikTokIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);


const Footer = () => {
  const navigate= useNavigate();
  return (
    <footer className="bg-gradient-to-br from-slate-100 to-blue-100 text-gray-900 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12"
        >
          <div className="flex flex-col -mt-12">
            <div className="flex items-center space-x-2">
              <img src="Logo6.png" className="w-14 h-14" alt="Head2Heart Logo" />
              <img src='New_Logo_3.png' className='w-45 h-35 -mx-7'/>
            </div>

            <p className="text-md font-semibold text-gray-700 italic -mt-8 mx-8  mb-5">
              Let's Grow Together.
            </p>

            <div className="flex space-x-4 mx-12">
              <a
                href="https://www.facebook.com/head2heartconnectwithyourself"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/head2heartconnectwithyourself/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/head2heart-connectwithyourself-ab7659393/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-700  hover:text-blue-600 transition-colors"
              >
                <Linkedin className='h-5 w-5' />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-8">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col "
          >
            <h3 className="font-semibold text-lg text-gray-900  md:-mx-20 mb-8">Our Mission</h3>
            <div className='md:-mx-20 w-72'>
             <p className="text-gray-700 text-sm leading-relaxed">
              At Head2Heart, our mission is to empower individuals to lead fulfilling,
              balanced, and meaningful lives through empathy, guidance, and self-discovery.
            </p>
            </div>
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-8">Contact Info</h3>
           <div className="flex items-start flex-col space-y-2">
  <div className="flex items-start space-x-2">
    <Mail className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
    <a href='mailto:info@head2heart.co.nz' className="text-gray-700 text-sm">
      info@head2heart.co.nz
    </a>
  </div>

  <button
    onClick={() => navigate('/contact')}
    className="flex items-start space-x-2 text-gray-700 text-sm hover:text-gray-900  transition-colors"
  >
    <MessageCircle className="h-4 w-4 text-gray-600 mt-1 flex-shrink-0" />
    <span className='cursor-pointer '>Contact Us</span>
  </button>
</div>

          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm text-center">
              © 2025 Head2Heart. All rights reserved.
            </p>

            <div className="flex space-x-6">
              <Link to="/terms" className="text-gray-700 hover:text-gray-900 text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-700 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
