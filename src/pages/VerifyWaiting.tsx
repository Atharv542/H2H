import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import QuestionnaireModal from "../components/QuestionnaireModal";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const VerifyWaiting = () => {
  const navigate = useNavigate();
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const checkQuestionnaireCompleted = async (email: string) => {
    const q = query(
      collection(db, "user_questionnaires"),
      where("user_email", "==", email)
    );
    const snapshot = await getDocs(q);
    return !snapshot.empty;
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!auth.currentUser) return;

      await reload(auth.currentUser);

      if (auth.currentUser.emailVerified) {
        clearInterval(interval);

        const email = auth.currentUser.email!;
        setUserEmail(email);

        // ✅ Send welcome email
        await fetch("/api/send-welcome-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            name: auth.currentUser.displayName || "there",
          }),
        });

        const completed = await checkQuestionnaireCompleted(email);

        toast.success("Email verified! Welcome 💙");

        if (!completed) {
          setShowQuestionnaire(true);
        } else {
          navigate("/");
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [navigate]);

  const handleQuestionnaireComplete = () => {
    toast.success("Your profile has been set up successfully!");
    navigate("/");
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Waiting for email verification…
          </h2>
          <p className="text-gray-600">
            Please verify your email to continue.
          </p>
        </div>
      </div>

      <QuestionnaireModal
        isOpen={showQuestionnaire}
        onClose={() => {}}
        userEmail={userEmail}
        onComplete={handleQuestionnaireComplete}
      />
    </>
  );
};

export default VerifyWaiting;
