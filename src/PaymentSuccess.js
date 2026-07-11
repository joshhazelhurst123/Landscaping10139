import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderID = params.get("token");
    const bookingId = localStorage.getItem("bookingId");

    if (!orderID || !bookingId) return;

    fetch("https://gc3h85wvc7.execute-api.us-east-1.amazonaws.com/prod/captureOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID, bookingId })
    }).finally(() => {
      localStorage.removeItem("bookingId");
    });
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Payment Successful</h1>
      <p>Your booking is now confirmed.</p>
      <p>A receipt has been emailed to you by PayPal.</p>
    </div>
  );
}
