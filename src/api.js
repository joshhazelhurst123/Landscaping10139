export async function createBooking(form) {
  const res = await fetch(
    "https://j10rrg72aa.execute-api.us-east-1.amazonaws.com/default/createBooking",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }
  );

  const raw = await res.json();

  // FIX: API Gateway sometimes returns a string body
  return typeof raw === "string" ? JSON.parse(raw) : raw;
}
