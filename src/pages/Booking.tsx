import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
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
import { onAuthStateChanged } from "firebase/auth";
import QuestionnaireModal from "../components/QuestionnaireModal";

/* ================= MICROSOFT 365 LINKS ================= */
const SACHIN_BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/ef3d9319f5204e72b6464edb93e5e413@head2heart.co.nz/meetingtype/LmCOb-Nbd0eHqcZSgZi4ng2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

const SANDEEP_BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/937d65fff67440498fe207b001f9aa8b@head2heart.co.nz/meetingtype/2_0DiyAjgkWFd-bpB_PUHA2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [confirmChecked, setConfirmChecked] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const navigate = useNavigate();
  const toastShownRef = useRef(false);

  /* ================= AUTH STATE ================= */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthChecked(true);
    });
    return () => unsubscribe();
  }, []);

  /* ================= ACCESS CHECK ================= */
  useEffect(() => {
    if (!authChecked) return;

    const checkAccess = async () => {
      if (!user) {
        toast.error("Please login first!");
        navigate("/login");
        return;
      }

      if (!user.emailVerified) {
        toast.error("Please verify your email before booking a session.");
        navigate("/verify-waiting");
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
  }, [authChecked, user, navigate]);

  const handleQuestionnaireComplete = () => {
    toast.success("Thank you! Questionnaire completed.");
    setShowQuestionnaire(false);
  };

  /* ================= SAVE BOOKING ================= */
  const handleConfirmBooking = async () => {
    if (!confirmChecked) {
      toast.error("Please confirm the checkbox first");
      return;
    }

    try {
      await setDoc(doc(db, "user_sessions", user.uid), {
        hasBookedFreeSession: true,
        bookedAt: new Date(),
        coach: selectedCoach,
        source: "microsoft-365",
      });

      toast.success("Booking confirmed!");
      setShowConfirmPopup(false);
      setStep(3);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const features = [
    {
      icon: Video,
      title: "Virtual session",
      description: "Connect from anywhere via video call",
    },
    {
      icon: Users,
      title: "One-on-One",
      description: "Personalized attention just for you",
    },
    {
      icon: Target,
      title: "Goal focused",
      description: "Discuss your specific objectives",
    },
    {
      icon: Sparkles,
      title: "No commitment",
      description: "Zero pressure, just conversation",
    },
  ];

  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-10 w-10 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

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
                  Free 30-minute discovery call
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
                  onClick={() => setStep(2)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
                >
                  Book session
                </button>
              </motion.div>
            )}

            {/* ================= STEP 2 ================= */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-10 text-center"
              >
                <h2 className="text-3xl font-bold mb-8">
                  Choose your coach
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { name: "Sachin", img: "/Sachin.png", link: SACHIN_BOOKING_LINK },
                    { name: "Sandeep", img: "/Sandeep.jpg", link: SANDEEP_BOOKING_LINK },
                  ].map((coach) => (
                    <div
                      key={coach.name}
                      className="bg-slate-50 p-8 rounded-2xl shadow"
                    >
                      <img
                        src={coach.img}
                        alt={coach.name}
                        className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">
                        {coach.name}
                      </h3>

                      <button
                        onClick={() => {
                          setSelectedCoach(coach.name);
                          window.open(coach.link, "_blank");
                          setShowConfirmPopup(true);
                        }}
                        className="bg-blue-600 text-white px-6 py-3 rounded-full mt-4"
                      >
                        Book session with {coach.name}
                      </button>
                    </div>
                  ))}
                </div>
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
                  You're all set!
                </h2>
                <p className="text-gray-600 mb-8">
                  Your session is booked. Check your email for details.
                </p>
                <button
                  onClick={() => navigate("/")}
                  className="bg-blue-600 text-white px-10 py-3 rounded-full"
                >
                  Return home
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ================= CONFIRM POPUP ================= */}
      {showConfirmPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white max-w-md w-full p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              Booking confirmation
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              After completing the booking in the new tab, return here and confirm.
            </p>

            <label className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                checked={confirmChecked}
                onChange={(e) => setConfirmChecked(e.target.checked)}
                className="mt-1"
              />
              <span className="text-gray-700">
                I have completed the booking and received the confirmation email.
              </span>
            </label>

            <div className="flex gap-4">
              <button
                onClick={handleConfirmBooking}
                className="flex-1 bg-green-600 text-white py-3 rounded-lg font-semibold"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirmPopup(false)}
                className="flex-1 bg-gray-200 py-3 rounded-lg font-semibold"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= QUESTIONNAIRE ================= */}
      <QuestionnaireModal
        isOpen={showQuestionnaire}
        onClose={() => setShowQuestionnaire(false)}
        userEmail={user?.email}
        onComplete={handleQuestionnaireComplete}
      />
    </>
  );
};

export default Booking;
