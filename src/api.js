// api.js — clean, safe, production‑ready

const BOOKING_URL =
  "https://j10rrg72aa.execute-api.us-east-1.amazonaws.com/default/createBooking";

export async function createBooking(form) {
  const res = await fetch(BOOKING_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });

  // Read raw text first — because it might be HTML or JSON
  const text = await res.text();

  // Detect HTML error pages (wrong URL, CORS, etc.)
  if (text.trim().startsWith("<")) {
    throw new Error("API returned HTML instead of JSON — check the URL");
  }

  // Parse JSON safely
  let parsed = JSON.parse(text);

  // Handle double‑encoded JSON from API Gateway
  if (typeof parsed === "string") {
    parsed = JSON.parse(parsed);
  }

  return parsed;
}
