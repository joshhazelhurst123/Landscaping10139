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

  // If API Gateway returned HTML, fail early with a clear message
  if (text.trim().startsWith("<")) {
    throw new Error("API returned HTML instead of JSON — check the Lambda URL");
  }

  // Parse JSON safely
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    throw new Error("Failed to parse JSON from booking API");
  }

  // Handle double‑encoded JSON from API Gateway
  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch (err) {
      throw new Error("Failed to parse nested JSON from booking API");
    }
  }

  return parsed;
}
