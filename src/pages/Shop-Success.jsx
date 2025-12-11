import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ShopSuccess() {
  useEffect(() => {
    const run = async () => {
      const params = new URLSearchParams(window.location.search);
      const sessionId = params.get("session_id");

      const res = await fetch("/api/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Payment complete! eBook sent to your email.");
      } else {
        toast.error("Payment could not be verified");
      }

      setTimeout(() => {
        window.location.href = "/shop";
      }, 1500);
    };

    run();
  }, []);

  return <h2 className="text-center mt-10">Processing your payment...</h2>;
}
