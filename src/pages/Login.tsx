import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Mail,
  Lock,
  ArrowRight,
  AlertCircle,
  X,
} from "lucide-react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);

  const navigate = useNavigate();

  // LOGIN HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!userCredential.user.emailVerified) {
        toast.error("Please verify your email before logging in!");
        setLoading(false);
        return;
      }

      toast.success("Logged in successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  // SEND RESET LINK
  const handleSendResetLink = async () => {
    if (!resetEmail) {
      toast.error("Please enter your email!");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success("Password reset link sent!");
      setShowResetModal(false);
      setResetEmail("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to send reset link.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome Back to Your Journey
          </h1>
          <p className="text-lg text-gray-600">
            Continue your transformation and unlock your full potential.
          </p>
        </motion.div>

        {/* LOGIN FORM */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="font-bold text-2xl text-gray-800">
              Head2Heart
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Sign In
          </h2>
          <p className="text-gray-600 mb-8">Access your account</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* EMAIL */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email*
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Password*
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg"
                />
              </div>

              <div className="text-right mt-2">
                <button
                  type="button"
                  onClick={() => setShowResetModal(true)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex justify-center items-center gap-2"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 font-semibold">
              Sign Up
            </Link>
          </p>
        </motion.div>
      </div>

      {/* RESET PASSWORD MODAL */}
      <AnimatePresence>
        {showResetModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-6 w-full max-w-md relative"
            >
              <button
                onClick={() => setShowResetModal(false)}
                className="absolute top-3 right-3"
              >
                <X size={18} />
              </button>

              <h3 className="text-xl font-bold mb-2">
                Reset Password
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Enter your email to receive a password reset link.
              </p>

              <div className="relative mb-4">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>

              <button
                onClick={handleSendResetLink}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                Send Reset Link
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
