import { useEffect } from "react";
import { auth } from "../firebase";
import { reload } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const VerifyWaiting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!auth.currentUser) return;

      await reload(auth.currentUser);

      if (auth.currentUser.emailVerified) {
        clearInterval(interval);

        // ✅ Send welcome email
        await fetch("/api/send-welcome-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: auth.currentUser.email,
            name: auth.currentUser.displayName || "there",
          }),
        });

        toast.success("Email verified! Welcome 💙");
        navigate("/?verified=true");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <h2 className="text-2xl font-semibold">
        Waiting for email verification…
      </h2>
    </div>
  );
};

export default VerifyWaiting;
