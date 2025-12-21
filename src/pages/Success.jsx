import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function Success() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sessionId) {
      setError("Session ID missing");
      setLoading(false);
      return;
    }

    const verifyPayment = async () => {
      try {
        await axios.post("/api/verify-service-session", {
          sessionId,
        });

        setLoading(false);
      } catch (err) {
        setError("Payment verification failed");
        setLoading(false);
      }
    };

    verifyPayment();
  }, [sessionId]);

  if (loading) {
    return <h2>Verifying your payment...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Your session has been booked.</p>
      <p>A confirmation email has been sent to you.</p>
    </div>
  );
}
