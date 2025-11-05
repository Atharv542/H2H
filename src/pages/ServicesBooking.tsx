import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Calendar, Compass, Brain, Target, ChevronRight } from 'lucide-react';

const ServicesBooking = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const services = [
    {
      id: 'clarity',
      title: 'Clarity & Calm',
      subtitle: '8-Week Personal Coaching',
      description: 'Find focus, ease, and balance in a busy world',
      price: 1499,
      currency: 'NZD',
      icon: Compass,
      color: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      features: [
        '8 × 60-minute 1:1 weekly sessions',
        'Personal clarity assessment',
        'Mindfulness & relaxation techniques',
        'Emotional intelligence toolkit',
        'Weekly habit tracker',
        'Between-session support',
        'Post-program roadmap'
      ],
      highlights: [
        'Mental Clarity',
        'Emotional Balance',
        'Mindful Habits',
        'Calm Confidence'
      ]
    },
    {
      id: 'mindfulness',
      title: 'Mindfulness Program',
      subtitle: 'For Executives & Teams',
      description: 'Transform from overwhelm to calm, focused leadership',
      price: 1499,
      currency: 'NZD',
      icon: Brain,
      color: 'from-purple-600 to-blue-600',
      bgGradient: 'from-purple-50 to-blue-50',
      borderColor: 'border-purple-200',
      features: [
        '8 × 60-minute weekly coaching',
        'Group mindfulness training',
        'Stress-awareness tools',
        'Emotional intelligence training',
        'Energy management frameworks',
        'Guided techniques',
        'Progress tracking'
      ],
      highlights: [
        'Stress Management',
        'Emotional Resilience',
        'Enhanced Focus',
        'Leadership Presence'
      ]
    },
    {
      id: 'purpose',
      title: 'On Purpose & Inner Peace',
      subtitle: '8-Week Transformation',
      description: 'Reconnect with your why and rediscover calm',
      price: 1499,
      currency: 'NZD',
      icon: Target,
      color: 'from-blue-600 to-purple-600',
      bgGradient: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      features: [
        '8 × 60-minute 1:1 coaching sessions',
        'Purpose discovery assessment',
        'Mindfulness & meditation exercises',
        'Values alignment framework',
        'Vision clarity tools',
        'Weekly reflections workbook',
        'Post-program action plan'
      ],
      highlights: [
        'Purpose Discovery',
        'Values Alignment',
        'Vision Clarity',
        'Inner Peace'
      ]
    }
  ];

  const currentService = services.find(s => s.id === selectedService);
  const ServiceIcon = currentService?.icon;

  const handleContinue = () => {
    if (selectedService) {
      setStep(2);
    }
  };

  const handlePayment = () => {
    setStep(3);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Coaching Program
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the program that resonates with your journey and get started on your transformation.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 mb-6">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 ${
                    step >= stepNumber
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                      : 'bg-gray-300'
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle2 className="h-6 w-6" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 3 && (
                  <div
                    className={`w-20 h-1 mx-2 transition-all duration-300 ${
                      step > stepNumber ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-16 text-sm text-gray-600">
            <span className={step >= 1 ? 'text-blue-600 font-medium' : ''}>
              Select Program
            </span>
            <span className={step >= 2 ? 'text-blue-600 font-medium' : ''}>
              Review Details
            </span>
            <span className={step >= 3 ? 'text-blue-600 font-medium' : ''}>
              Payment
            </span>
          </div>
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  whileHover={{ y: -5 }}
                  className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 ${
                    selectedService === service.id
                      ? 'ring-2 ring-blue-600 shadow-2xl'
                      : 'shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className={`bg-gradient-to-br ${service.color} p-8 text-white`}>
                    <div className={`w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4`}>
                      <service.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-blue-100 mb-4">{service.subtitle}</p>
                    <div className="text-3xl font-bold mb-1">
                      ${service.price.toLocaleString()}
                      <span className="text-sm text-blue-100 ml-2">{service.currency}</span>
                    </div>
                  </div>

                  <div className={`bg-gradient-to-br ${service.bgGradient} p-8`}>
                    <p className="text-gray-700 mb-6 font-medium">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className={`text-xs bg-white px-3 py-1 rounded-full text-gray-700 border border-gray-200`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedService === service.id
                            ? 'border-blue-600 bg-blue-600'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        {selectedService === service.id && (
                          <CheckCircle2 className="h-5 w-5 text-white" />
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleContinue}
                disabled={!selectedService}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg disabled:shadow-none"
              >
                Continue
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Review Details */}
        {step === 2 && currentService && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`bg-gradient-to-br ${currentService.color} w-16 h-16 rounded-xl flex items-center justify-center`}>
                      <ServiceIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{currentService.title}</h2>
                      <p className="text-gray-600">{currentService.subtitle}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Program Includes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">What to Expect</h3>
                    <div className="space-y-3">
                      {[
                        'Weekly one-on-one coaching sessions',
                        'Personalized tools and resources',
                        'Between-session support',
                        'Progress tracking and accountability',
                        'Ongoing guidance and mentorship'
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-8">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h3>

                  <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Program</span>
                      <span className="font-medium text-gray-900">{currentService.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-medium text-gray-900">8 Weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Format</span>
                      <span className="font-medium text-gray-900">1:1 Coaching</span>
                    </div>
                  </div>

                  <div className="mb-8 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                    <p className="text-sm text-gray-600 mb-2">Total Price</p>
                    <div className="text-4xl font-bold text-gray-900">
                      ${currentService.price.toLocaleString()}
                      <span className="text-sm text-gray-600 ml-2">{currentService.currency}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Includes all materials and support</p>
                  </div>

                  <button
                    onClick={handlePayment}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mb-3"
                  >
                    Proceed to Payment
                  </button>

                  <button
                    onClick={() => {
                      setStep(1);
                      setSelectedService(null);
                    }}
                    className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:border-gray-400 transition-all duration-200"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && currentService && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${currentService.color} p-8 text-white`}>
                  <h2 className="text-3xl font-bold mb-2">Complete Your Purchase</h2>
                  <p className="text-blue-100">{currentService.title}</p>
                </div>

                {/* Payment Form */}
                <div className="p-8">
                  {/* Order Summary */}
                  <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{currentService.title}</h3>
                        <p className="text-sm text-gray-600">8-Week Program</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          ${currentService.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Details Form */}
                  <div className="space-y-6 mb-8">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Card Details
                      </label>
                      <input
                        type="text"
                        placeholder="4532 1234 5678 9010"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-3"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <input
                        type="checkbox"
                        id="terms"
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-700">
                        I agree to the terms and conditions
                      </label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => setStep(4)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg text-lg"
                    >
                      Complete Payment
                    </button>
                    <button
                      onClick={() => setStep(2)}
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-full font-semibold hover:border-gray-400 transition-all duration-200"
                    >
                      Back
                    </button>
                  </div>

                  <p className="text-center text-xs text-gray-500 mt-6">
                    Your payment is secure and encrypted. We accept all major credit cards.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && currentService && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
              >
                <CheckCircle2 className="h-12 w-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Enrollment Complete!
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for enrolling in {currentService.title}. We're excited to be part of your transformation journey!
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-8 border border-blue-200 text-left">
                <h3 className="font-bold text-gray-900 mb-6 text-lg">What's Next</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Confirmation Email</p>
                      <p className="text-sm text-gray-600">Check your inbox for enrollment details and login credentials</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Schedule Your First Session</p>
                      <p className="text-sm text-gray-600">Book your initial consultation within the next 48 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Begin Your Journey</p>
                      <p className="text-sm text-gray-600">Start your 8-week transformation program with dedicated support</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => (window.location.href = '/')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg text-lg"
                >
                  Return to Home
                </button>
                <p className="text-sm text-gray-600">
                  Questions? <a href="mailto:support@headtoheartcoaching.com" className="text-blue-600 font-medium hover:underline">Contact our support team</a>
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServicesBooking;
