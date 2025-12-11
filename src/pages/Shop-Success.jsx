import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ShopSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [verified, setVerified] = useState(false);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    if (!sessionId) return;

    const verifyPayment = async () => {
      const res = await fetch("/api/verify-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });

      const data = await res.json();

      if (data.verified) {
        setVerified(true);
        setProductId(data.productId); // which product user bought
      }
    };

    verifyPayment();
  }, [sessionId]);

  const downloadLinks = {
    product1: "/ebooks/daa.pdf",
    product2: "/ebooks/daa.pdf",
    product3: "/ebooks/daa.pdf",
    product4: "/ebooks/daa.pdf",
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>

      {verified ? (
        <a
          href={downloadLinks[productId]}
          download
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Download Your eBook 📥
        </a>
      ) : (
        <p className="text-gray-600 mt-4">Verifying payment…</p>
      )}
    </div>
  );
};

export default ShopSuccess;
