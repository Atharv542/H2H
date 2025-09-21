import React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Shield, FileText, Mail, Phone, MapPin } from 'lucide-react';

const Terms = () => {
  const location = useLocation();
  const isPrivacy = location.pathname === '/privacy';

  useEffect(() => {
    // Smooth scroll to top when component mounts or route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            {isPrivacy ? (
              <Shield className="h-12 w-12 text-blue-600 mr-4" />
            ) : (
              <FileText className="h-12 w-12 text-blue-600 mr-4" />
            )}
            <h1 className="font-poppins text-5xl font-bold text-gray-900">
              {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
            </h1>
          </div>
          <p className="text-lg text-gray-600 mb-2">
            Last updated: January 1, 2025
          </p>
          <p className="text-gray-500">
            {isPrivacy 
              ? 'Learn how we protect and handle your personal information'
              : 'Please read these terms carefully before using our services'
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="prose prose-lg max-w-none">
            {isPrivacy ? (
              // Privacy Policy Content
              <>
                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    Information We Collect
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you create an account, 
                    book a session, or contact us. This may include:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Personal information (name, email, phone number)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Payment information (processed securely through third-party providers)
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Communication preferences and session notes
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    How We Use Your Information
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Provide, maintain, and improve our coaching services
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Process transactions and send related information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Send you technical notices and support messages
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Communicate with you about services, offers, and events
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    Information Sharing
                  </h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information in the following circumstances:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      With service providers who assist in our operations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      When required by law or to protect our rights
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      In connection with a business transfer or acquisition
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    Data Security
                  </h2>
                  <p className="text-gray-600">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    Your Rights
                  </h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Access and update your personal information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Request deletion of your personal information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Opt-out of marketing communications
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Request a copy of your personal information
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">6</span>
                    </div>
                    Cookies and Tracking
                  </h2>
                  <p className="text-gray-600">
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">7</span>
                    </div>
                    Changes to This Policy
                  </h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </div>
              </>
            ) : (
              // Terms & Conditions Content
              <>
                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    Acceptance of Terms
                  </h2>
                  <p className="text-gray-600">
                    By accessing and using Head2Heart's services, you accept and agree to be bound by the terms and provision of this agreement.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    Coaching Services
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Head2Heart provides life coaching services designed to support personal and professional development. Our services include:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Individual coaching sessions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Group workshops
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Speaking engagements
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Comprehensive transformation programs
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    Client Responsibilities
                  </h2>
                  <p className="text-gray-600 mb-4">
                    As a client, you agree to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Attend scheduled sessions on time
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Be open and honest during coaching sessions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Complete any agreed-upon exercises or assignments
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Take responsibility for your own decisions and actions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Provide at least 24 hours notice for cancellations
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    Confidentiality
                  </h2>
                  <p className="text-gray-600">
                    We maintain strict confidentiality regarding all information shared during coaching sessions. Information will only be disclosed with your written consent or as required by law.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">5</span>
                    </div>
                    Payment Terms
                  </h2>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Payment is due at the time of service unless other arrangements have been made
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Cancellations with less than 24 hours notice may be charged the full session fee
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Refunds are considered on a case-by-case basis
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">6</span>
                    </div>
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-600">
                    Coaching is not therapy or medical treatment. If you are experiencing serious mental health issues, we recommend consulting with a licensed mental health professional.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">7</span>
                    </div>
                    Intellectual Property
                  </h2>
                  <p className="text-gray-600">
                    All materials provided by Head2Heart, including but not limited to worksheets, assessments, and recordings, are proprietary and may not be reproduced without written permission.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600 font-bold">8</span>
                    </div>
                    Modifications
                  </h2>
                  <p className="text-gray-600">
                    Head2Heart reserves the right to modify these terms at any time. Changes will be communicated to clients and posted on our website.
                  </p>
                </div>
              </>
            )}

            {/* Contact Section */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-6 text-center">
                {isPrivacy ? 'Privacy Questions?' : 'Questions About These Terms?'}
              </h2>
              <p className="text-gray-600 text-center mb-6">
                {isPrivacy 
                  ? 'If you have any questions about this Privacy Policy, please contact us:'
                  : 'If you have any questions about these Terms & Conditions, please contact us:'
                }
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-sm text-gray-600">legal@head2heart.com</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center space-x-3 p-4 bg-white rounded-xl shadow-sm">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-sm text-gray-600">123 Wellness Ave, NY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;