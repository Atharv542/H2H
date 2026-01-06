import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import QuestionnaireModal from "../components/QuestionnaireModal";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { MailCheck } from "lucide-react";

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

        // Send welcome email
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 flex items-center justify-center px-4">

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-fadeIn">

          {/* Loading Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="h-16 w-16 rounded-full border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
              <MailCheck className="absolute inset-0 m-auto h-6 w-6 text-blue-600" />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Verify Your Email to Continue
          </h2>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            We’ve sent a verification email to your inbox.
            Please click the verification link to activate your Head2Heart account.
          </p>

          <p className="text-sm text-gray-500 leading-relaxed">
            If you don’t see an email from <strong>Head2Heart</strong>, check your
            <strong> Spam</strong> or <strong>Promotions</strong> folder and mark it
            as <em>“Not Spam”</em> so you don’t miss future updates.
          </p>
        </div>
      </div>

      {/* Questionnaire Modal */}
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
