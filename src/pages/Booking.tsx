import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle, Video, Users, Target, Sparkles } from "lucide-react";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const features = [
    {
      icon: Video,
      title: "Virtual Session",
      description: "Connect from anywhere via video call",
    },
    {
      icon: Users,
      title: "One-on-One",
      description: "Personalized attention just for you",
    },
    {
      icon: Target,
      title: "Goal Focused",
      description: "Discuss your specific objectives",
    },
    {
      icon: Sparkles,
      title: "No Commitment",
      description: "Zero pressure, just conversation",
    },
  ];

  const handleConfirmBooking = async () => {
  try {
    const user = auth.currentUser;
    if (!user) {
      alert("Please login first.");
      return;
    }

    await setDoc(doc(db, "user_sessions", user.uid), {
      hasBookedFreeSession: true,
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      bookedAt: new Date(),
    });

    setStep(3); // move to success screen
  } catch (error) {
    console.error("Error saving booking:", error);
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Book Your Free Discovery Call
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step toward transformation. Let's connect and explore how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 ${
                    step >= stepNumber
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg"
                      : "bg-gray-300"
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle className="h-6 w-6" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 2 && (
                  <div
                    className={`w-16 h-1 mx-2 transition-all duration-300 ${
                      step > stepNumber ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-12 text-sm text-gray-600">
            <span className={step >= 1 ? "text-blue-600 font-medium" : ""}>
              Overview
            </span>
            <span className={step >= 2 ? "text-blue-600 font-medium" : ""}>
              Schedule
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-12"
            >
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 mb-6 shadow-lg">
                  <Video className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                  Free 30-Minute Discovery Call
                </h2>
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    $0
                  </span>
                  <span className="text-gray-400 line-through text-xl">$75</span>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Get to know our approach and discuss your goals in a comfortable, no-pressure environment.
                  This is your opportunity to ask questions and see if we're the right fit for your journey.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-5 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-8 border border-blue-100">
                <h3 className="font-semibold text-gray-900 mb-3 text-center">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Learn about our coaching methodology and approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Share your current challenges and aspirations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Explore potential pathways for your growth journey
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      Get answers to all your questions about our services
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Continue to Schedule
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  No credit card required • 100% free • No obligations
                </p>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Select Your Preferred Time
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                    <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                    Choose a Date
                  </h3>
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-semibold text-gray-600 py-2"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 35 }, (_, i) => {
                        const day = i - 6;
                        const date = new Date();
                        date.setDate(date.getDate() + day);
                        const isAvailable = day > 0 && day < 21;
                        const dateString = date.toISOString().split("T")[0];

                        return (
                          <button
                            key={i}
                            onClick={() =>
                              isAvailable ? setSelectedDate(dateString) : null
                            }
                            disabled={!isAvailable}
                            className={`h-10 text-sm rounded-lg transition-all duration-200 font-medium ${
                              selectedDate === dateString
                                ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105"
                                : isAvailable
                                ? "hover:bg-blue-100 text-gray-700 bg-white"
                                : "text-gray-300 cursor-not-allowed bg-transparent"
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center text-lg">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Available Times
                  </h3>
                  <div className="space-y-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full p-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                          selectedTime === time
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md scale-105"
                            : "bg-gradient-to-br from-slate-50 to-blue-50 text-gray-700 hover:from-blue-100 hover:to-cyan-100 border border-blue-100"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {selectedDate && selectedTime && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200"
                >
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Your Selected Time:
                  </h4>
                  <p className="text-gray-700">
                    <span className="font-medium">
                      {new Date(selectedDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>{" "}
                    at <span className="font-medium">{selectedTime}</span>
                  </p>
                </motion.div>
              )}

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Back
                </button>
                <button
  onClick={handleConfirmBooking}
  disabled={!selectedDate || !selectedTime}
  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg disabled:shadow-none font-semibold"
>
  Confirm Booking
</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 px-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <CheckCircle className="h-12 w-12 text-white" />
              </motion.div>

              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                You're All Set!
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Your free discovery call has been confirmed. We've sent a confirmation email with all the details and a calendar invite.
              </p>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-8 text-left max-w-md mx-auto mb-8 border border-blue-100 shadow-md">
                <h3 className="font-semibold text-gray-900 mb-4 text-center text-lg">
                  Session Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Video className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Service</p>
                      <p className="font-medium text-gray-900">Free 30-Minute Discovery Call</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium text-gray-900">
                        {new Date(selectedDate).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-medium text-gray-900">{selectedTime}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-3 rounded-full hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                >
                  Return Home
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
