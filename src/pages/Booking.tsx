import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  CheckCircle,
  Video,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";
import QuestionnaireModal from "../components/QuestionnaireModal";

const CALENDLY_LINK = "https://calendly.com/head2heart-info/30min";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const navigate = useNavigate();
  const toastShownRef = useRef(false);

  /* ================= ACCESS CHECK ================= */
  useEffect(() => {
    const checkAccess = async () => {
      const user = auth.currentUser;

      if (!user) {
        toast.error("Please login first!");
        navigate("/login");
        return;
      }

      if (!user.emailVerified) {
        toast.error("Please verify your email before booking a session.");
        return;
      }

      const q = query(
        collection(db, "user_questionnaires"),
        where("user_email", "==", user.email)
      );
      const qs = await getDocs(q);

      if (qs.empty) {
        if (!toastShownRef.current) {
          toast.error("Please complete the questionnaire first");
          toastShownRef.current = true;
        }
        setShowQuestionnaire(true);
      }
    };

    checkAccess();
  }, []);

  const handleQuestionnaireComplete = () => {
    toast.success("Thank you! Questionnaire completed.");
    setShowQuestionnaire(false);
  };

  /* ================= CALENDLY EVENT ================= */
  useEffect(() => {
    const handleCalendlyMessage = async (e) => {
      if (e.data?.event === "calendly.event_scheduled") {
        setShowCalendly(false);
        await handleConfirmBooking();
      }
    };

    window.addEventListener("message", handleCalendlyMessage);
    return () =>
      window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  /* ================= SAVE BOOKING ================= */
  const handleConfirmBooking = async () => {
    try {
      const user = auth.currentUser;
      if (!user) return;

      await setDoc(doc(db, "user_sessions", user.uid), {
        hasBookedFreeSession: true,
        bookedAt: new Date(),
        source: "calendly",
        selectedDate,
        selectedTime,
      });

      setStep(3);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

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

  return (
    <>
      <div className="min-h-screen py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* ================= STEP 1 ================= */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 text-center"
              >
                <h1 className="text-4xl font-bold mb-6">
                  Free 30-Minute Discovery Call
                </h1>

                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 p-5 rounded-xl bg-blue-50"
                    >
                      <div className="p-3 bg-blue-600 rounded-lg text-white">
                        <f.icon />
                      </div>
                      <div>
                        <h3 className="font-semibold">{f.title}</h3>
                        <p className="text-sm text-gray-600">
                          {f.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setShowCalendly(true)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
                >
                  Continue to Schedule
                </button>

                <p className="mt-4 text-sm text-gray-500">
                  Having issues?{" "}
                  <a
                    href={CALENDLY_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Open Calendly in new tab
                  </a>
                </p>
              </motion.div>
            )}

            {/* ================= STEP 3 ================= */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-16 text-center"
              >
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white w-12 h-12" />
                </div>

                <h2 className="text-3xl font-bold mb-4">
                  You're All Set!
                </h2>

                <p className="text-gray-600 mb-8">
                  Your discovery call is booked. Check your email for details.
                </p>

                <button
                  onClick={() => navigate("/")}
                  className="bg-blue-600 text-white px-10 py-3 rounded-full"
                >
                  Return Home
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ================= CALENDLY MODAL ================= */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 text-2xl font-bold text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <iframe
              src={CALENDLY_LINK}
              className="w-full h-full border-0"
              allow="camera; microphone; fullscreen"
            />
          </div>
        </div>
      )}

      {/* ================= QUESTIONNAIRE ================= */}
      <QuestionnaireModal
        isOpen={showQuestionnaire}
        onClose={() => setShowQuestionnaire(false)}
        userEmail={auth.currentUser?.email}
        onComplete={handleQuestionnaireComplete}
      />
    </>
  );
};

export default Booking;
