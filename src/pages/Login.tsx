import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Mail, Lock, ArrowRight, AlertCircle } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

import toast from "react-hot-toast";
import QuestionnaireModal from '../components/QuestionnaireModal';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [questionnaireCompleted, setQuestionnaireCompleted] = useState(false);
  const navigate = useNavigate();

 const checkQuestionnaireCompleted = async (userEmail: string) => {
  try {
    const q = query(
      collection(db, 'user_questionnaires'),
      where('user_email', '==', userEmail)
    );
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty; // true if user has completed
  } catch (error) {
    console.error('Error checking questionnaire:', error);
    return false;
  }
};

useEffect(() => {
  // Push a dummy state so back button won't exit page
  

  const handlePopState = () => {
    if (!questionnaireCompleted) {
      // Show error toast
    
      // Re-push state to block back navigation
      window.history.pushState(null, '', window.location.href);
    }
  };

  window.addEventListener('popstate', handlePopState);

  return () => window.removeEventListener('popstate', handlePopState);
}, [questionnaireCompleted]);

useEffect(() => {
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (!questionnaireCompleted) {
      // Show toast (won't always display in all browsers)
      toast.error('Please fill the questionnaire before leaving!');

      // Standard confirmation dialog
      e.preventDefault();
      e.returnValue = ''; // Required for Chrome
      return ''; // Required for some browsers
    }
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => window.removeEventListener('beforeunload', handleBeforeUnload);
}, [questionnaireCompleted]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError('');
  setLoading(true);

  try {
    // Firebase login
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;
    if (!user.emailVerified) {
        setLoading(false);
        toast.error("Please verify your email before logging in!");
        return;
      }
    // Check if questionnaire is completed
    const completed = await checkQuestionnaireCompleted(email);
    setLoading(false);

    if (completed) {
      toast.success('Logged in successfully!');
      navigate('/'); // Redirect if questionnaire already completed
    } else {
      // Show questionnaire modal
      setShowQuestionnaire(true);
    }
  } catch (err) {
    console.error(err);
    setError('Invalid email or password. Please try again.');
    setLoading(false);
  }
};



 const handleQuestionnaireComplete = () => {
    toast.success('Welcome! Your profile has been set up successfully.');
    navigate('/booking');
  };
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        >
         
          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome Back to Your Journey
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Continue your transformation and unlock your full potential. Your path to personal growth awaits.
          </p>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-slate-700 rounded-3xl blur-xl opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Life Coaching"
              className="relative rounded-2xl shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
        >
          <div className="lg:hidden flex items-center justify-center space-x-2 mb-8">
            <Heart className="h-8 w-8 text-rose-500" />
            <span className="font-bold text-2xl text-gray-800">Head2Heart</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
          <p className="text-gray-600 mb-8">Access your account and continue your journey</p>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3"
            >
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address*
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password*
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold cursor-pointer transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              <span>{loading ? 'Signing in...' : 'Sign In'}</span>
              {!loading && <ArrowRight className="h-5 w-5" />}
            </button>
          </form>
             <p className="text-xs text-gray-500 text-center mt-6 italic">
              Tip: If you don’t see any verification email, check your <strong>Spam</strong> or <strong>Promotions</strong> folder and mark it as “Not Spam”.
            </p>
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-700  cursor-pointer font-semibold transition-colors"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
      
    </div>
     <QuestionnaireModal
        isOpen={showQuestionnaire}
        onClose={() => setShowQuestionnaire(false)}
        userEmail={email}
        onComplete={handleQuestionnaireComplete}
      />
    </>
    
    
    
  );
};

export default Login;
