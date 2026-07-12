import { useEffect } from "react";

export default function PaymentSuccess() {
  useEffect(() => {
    console.log("PaymentSuccess mounted");

    const params = new URLSearchParams(window.location.search);
    const orderID = params.get("token");
    const bookingId = localStorage.getItem("bookingId");

    console.log("orderID =", orderID);
    console.log("bookingId =", bookingId);

    if (!orderID || !bookingId) {
      console.warn("STOP: Missing orderID or bookingId — fetch will NOT run");
      return;
    }

    console.log("Running fetch to captureOrder…");

    fetch("https://gc3h85wvc7.execute-api.us-east-1.amazonaws.com/prod/captureOrder", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ orderID, bookingId })
    })
      .then(r => r.text())
      .then(t => console.log("captureOrder response:", t))
      .catch(e => console.error("captureOrder error:", e))
      .finally(() => {
        console.log("Removing bookingId from localStorage");
        localStorage.removeItem("bookingId");
      });
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Payment Successful</h1>
      <p>Your booking is now confirmed.</p>
      <p>A receipt has been emailed to you by PayPal.</p>
    </div>
<p style={{ marginTop: "30px" }}>
  <a href="/" style={{ fontSize: "18px" }}>
    ← Back to Home
  </a>
</p>
  );
}
