export async function createBooking(form) {
  const res = await fetch(
    "https://j10rrg72aa.execute-api.us-east-1.amazonaws.com/default/createBooking",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    }
  );

  // If the response is HTML, throw a readable error
  const text = await res.text();

  // Detect HTML error page
  if (text.startsWith("<")) {
    throw new Error("API returned HTML instead of JSON — check the URL");
  }

  // Parse JSON safely
  const raw = JSON.parse(text);

  // Handle double-encoded JSON from API Gateway
  return typeof raw === "string" ? JSON.parse(raw) : raw;
}
