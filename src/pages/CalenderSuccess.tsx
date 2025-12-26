import { useEffect } from "react";
import { auth } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import toast from "react-hot-toast";
import { CheckCircle } from "lucide-react";

const BookingSuccess = () => {
  useEffect(() => {
    const saveBooking = async () => {
      const user = auth.currentUser;
      if (!user) return;

      await setDoc(doc(db, "user_sessions", user.uid), {
        hasBookedFreeSession: true,
        bookedAt: new Date(),
      });

      toast.success("Your free session is booked!");
    };

    saveBooking();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Booking Confirmed
        </h1>
        <p className="text-gray-600 mb-6">
          Your free discovery call has been successfully scheduled.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
