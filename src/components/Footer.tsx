import React from 'react';
import { FaTiktok } from "react-icons/fa";
import {
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-100 to-blue-100 text-gray-900 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Head2Heart</span>
            </div>

            <p className="text-[14px] font-semibold bg-gradient-to-r from-blue-600 to-slate-700 bg-clip-text text-transparent mb-4">
              We want to create a meaningful impact globally.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61583086640267" target='_blank' rel="noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/headtwoheart/" target='_blank' rel="noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@head2heartlimited?lang=en" target='_blank' rel="noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
               <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                <Link to="/podcast" className="text-gray-700 hover:text-gray-900 transition-colors">
                  Podcast
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              At Head2Heart, our mission is to empower individuals to lead
              fulfilling, balanced, and meaningful lives through empathy,
              guidance, and self-discovery.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">info@head2heart.co.nz</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-700 text-sm">
              © 2025 Head2Heart. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/terms"
                className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-gray-700 hover:text-gray-900 text-sm transition-colors"
              >
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
