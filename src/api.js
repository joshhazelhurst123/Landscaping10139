export async function createBooking(form) {
  const res = await fetch("YOUR_BOOKING_LAMBDA_URL", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });

  const raw = await res.json();

  // FIX: API Gateway sometimes returns a string body
  return typeof raw === "string" ? JSON.parse(raw) : raw;
}
