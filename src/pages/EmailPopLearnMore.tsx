import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Gift } from 'lucide-react';

const EmailPopupLearnPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email) return;

  setIsLoading(true);

  try {
    const res = await fetch("/api/sendEbook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) throw new Error("Email sending failed");

    setIsSubmitted(true);
  } catch (err) {
    console.error(err);
    alert("Failed to send workbook. Try again.");
  }

  setIsLoading(false);

  setTimeout(() => {
    setIsSubmitted(false);
    setEmail("");
  }, 3000);
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
      >
        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8 text-white text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h2 className="font-poppins text-2xl font-bold mb-2">
                Free Life Transformation Workbook!
              </h2>
              <p className="text-white/90 text-sm">
                Get your complimentary workbook with exercises to kickstart your journey!
              </p>
            </div>

            {/* Form */}
            <div className="p-8">
              <div className="mb-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Download className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm text-gray-600">Instant PDF download</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-gray-600">No spam and promotional emails</span>
                </div>

                {/*<div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Gift className="h-4 w-4 text-purple-600" />
                  </div>
                  <span className="text-sm text-gray-600">Exclusive coaching tips</span>
                </div>*/}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-gray-700"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5" />
                      <span>Get My Free Workbook</span>
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </>
        ) : (
          // Success State
          <div className="p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-3">Check Your Email!</h3>
            <p className="text-gray-600 mb-4">
              Your free Life Transformation Workbook is on its way to <strong>{email}</strong>
            </p>
            <p className="text-sm text-gray-500">
              Don't forget to check your spam folder if you don't see it in a few minutes.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default EmailPopupLearnPage;
