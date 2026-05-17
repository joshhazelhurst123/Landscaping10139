// api.js — single source of truth for all API calls

const BASE_URL =
  "https://j10rrg72aa.execute-api.us-east-1.amazonaws.com/default";

const ENDPOINTS = {
  availability: `${BASE_URL}/bookingAvailability`,
  booking: `${BASE_URL}/createBooking`
};

// ---------- Core fetch helper ----------

async function callApi(url, options = {}) {
  const res = await fetch(url, {
    // default options
    method: "GET",
    headers: { "Content-Type": "application/json" },
    ...options
  });

  const text = await res.text();

  // Debug: see exactly what we got back
  console.log(`[API] ${url} →`, text);

  // If it's HTML, it's an error page (wrong URL, CORS, etc.)
  if (text.trim().startsWith("<")) {
    throw new Error("API returned HTML instead of JSON — check the URL or CORS");
  }

  // Try to parse JSON
  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    console.error("[API] JSON parse error:", err);
    throw new Error("Failed to parse JSON from API");
  }

  // Handle double-encoded JSON (API Gateway style)
  if (typeof parsed === "string") {
    try {
      parsed = JSON.parse(parsed);
    } catch (err) {
      console.error("[API] Nested JSON parse error:", err);
      throw new Error("Failed to parse nested JSON from API");
    }
  }

  return parsed;
}

// ---------- Public API functions ----------

export async function getAvailability() {
  const data = await callApi(ENDPOINTS.availability);
  // Expecting: { available: { "Monday 20 May": [ ... ] } }
  return data;
}

export async function createBooking(form) {
  const data = await callApi(ENDPOINTS.booking, {
    method: "POST",
    body: JSON.stringify(form)
  });

  // Expecting: { bookingId: "...", status: "created" }
  return data;
}
