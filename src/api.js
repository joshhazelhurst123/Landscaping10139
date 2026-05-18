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
    method: "GET",
    headers: { "Content-Type": "application/json" },
    ...options
  });

  const text = await res.text();
  console.log(`[API] ${url} →`, text);

  if (text.trim().startsWith("<")) {
    throw new Error("API returned HTML instead of JSON — check the URL or CORS");
  }

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch (err) {
    console.error("[API] JSON parse error:", err);
    throw new Error("Failed to parse JSON from API");
  }

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

// Flatten grouped availability into a simple array of ISO strings
export async function getAvailability() {
  const data = await callApi(ENDPOINTS.availability);

  const flat = Object.values(data.available)
    .flat()
    .map(slot => slot.iso);

  return flat;
}

export async function createBooking(form) {
  const data = await callApi(ENDPOINTS.booking, {
    method: "POST",
    body: JSON.stringify({
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      serviceType: form.serviceType,
      preferredDate: form.preferredDate
    })
  });

  return data;
}
