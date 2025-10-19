import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const services = [
    {
      id: "consultation",
      title: "Free Consultation",
      duration: "30 minutes",
      price: "Free",
      description:
        "Get to know our approach and discuss your goals in a no-pressure environment.",
    },
    {
      id: "individual",
      title: "Individual Session",
      duration: "60 minutes",
      price: "$150",
      description:
        "One-on-one coaching session tailored to your specific needs and goals.",
    },
    {
      id: "couples",
      title: "Couples Session",
      duration: "90 minutes",
      price: "$225",
      description:
        "Work together with your partner on relationship goals and communication.",
    },
    {
      id: "intensive",
      title: "Intensive Session",
      duration: "120 minutes",
      price: "$350",
      description:
        "Deep-dive session for breakthrough moments and significant challenges.",
    },
  ];

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

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-poppins text-5xl font-bold text-gray-900 mb-6">
            Book Your Session
          </h1>
          <p className="text-xl text-gray-600">
            Take the first step toward your transformation. Choose your preferred
            service and schedule your session.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            {[1, 2].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    step >= stepNumber
                      ? "bg-gradient-to-r from-blue-600 to-purple-600"
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
                    className={`w-16 h-1 mx-2 ${
                      step > stepNumber ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-12 text-sm text-gray-600">
            <span className={step >= 1 ? "text-blue-600 font-medium" : ""}>
              Service
            </span>
            <span className={step >= 2 ? "text-blue-600 font-medium" : ""}>
              Schedule
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Step 1: Choose Service */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
                Choose Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-200 border-2 ${
                      selectedService === service.id
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300 hover:shadow-md"
                    }`}
                  >
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-blue-600 font-medium">
                        {service.duration}
                      </span>
                      <span className="text-2xl font-bold text-gray-900">
                        {service.price}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-8">
                <button
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
                Select Date & Time
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Calendar */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Choose a Date
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="grid grid-cols-7 gap-1 mb-4">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div
                          key={day}
                          className="text-center text-sm font-medium text-gray-600 py-2"
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
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
                            className={`h-10 text-sm rounded-lg transition-colors ${
                              selectedDate === dateString
                                ? "bg-blue-600 text-white"
                                : isAvailable
                                ? "hover:bg-blue-100 text-gray-700"
                                : "text-gray-300 cursor-not-allowed"
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Available Times
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                          selectedTime === time
                            ? "bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={prevStep}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-gray-400 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3 (was step 4): Confirmation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>

              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-4">
                Booking Confirmed!
              </h2>

              <p className="text-lg text-gray-600 mb-8">
                Thank you for booking with Head2Heart. We've sent a confirmation
                email with all the details.
              </p>

              <div className="bg-gray-50 rounded-xl p-6 text-left max-w-md mx-auto mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Session Details:
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Service:</strong>{" "}
                    {services.find((s) => s.id === selectedService)?.title}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(selectedDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Time:</strong> {selectedTime}
                  </p>
                  <p>
                    <strong>Duration:</strong>{" "}
                    {services.find((s) => s.id === selectedService)?.duration}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              
                <button
                  onClick={() => (window.location.href = "/")}
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
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
