import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ShopSuccess() {
  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");

      if (!sessionId) {
        toast.error("No session ID found!");
        return;
      }

      try {
        const res = await fetch("/api/verify-session", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        const data = await res.json();

        if (data.success) {
          toast.success("Payment complete! eBook sent to your email.");
        } else {
          toast.error(data.error || "Payment could not be verified");
        }

        setTimeout(() => {
          window.location.href = "/shop";
        }, 2000);
      } catch (err) {
        toast.error("Server error. Please contact support.");
        console.error(err);
      }
    };

    run();
  }, []);

  return <h2 className="text-center mt-10">Processing your payment...</h2>;
}
