// api.js — single source of truth for all API calls

const BASE_URL = "https://gc3h85wvc7.execute-api.us-east-1.amazonaws.com/prod";
const PAYPAL_URL = "https://76ohylao68.execute-api.us-east-1.amazonaws.com";

const ENDPOINTS = {
  availability: `${BASE_URL}/bookingAvailability`,
  booking: `${BASE_URL}/createBooking`,
  createOrder: `${PAYPAL_URL}/createOrder`
};

// ---------------------------------------------------------
// Safe JSON parser — prevents crashes on non‑JSON responses
// ---------------------------------------------------------
function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

// ---------------------------------------------------------
// Core fetch helper with robust error handling
// ---------------------------------------------------------
async function callApi(url, options = {}) {
  let response;

  try {
    response = await fetch(url, {
      headers: { "Content-Type": "application/json" },
      ...options
    });
  } catch (networkErr) {
    console.error("🔥 Network error:", networkErr);
    throw new Error("Network error — API unreachable");
  }

  const text = await response.text();
  console.log(`[API] ${url} →`, text);

  let parsed = safeJsonParse(text);

  // AWS HTTP API sometimes wraps JSON inside { body: "..." }
  if (parsed && typeof parsed.body === "string") {
    parsed = safeJsonParse(parsed.body);
  }

  // Attach status code for frontend logic
  parsed.statusCode = response.status;

  return parsed;
}

// ---------------------------------------------------------
// Public API functions
// ---------------------------------------------------------

export async function getAvailability() {
  return await callApi(ENDPOINTS.availability, {
    method: "GET"
  });
}

export async function createBooking(form) {
  return await callApi(ENDPOINTS.booking, {
    method: "POST",
    body: JSON.stringify({
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      customerPhone: form.customerPhone,
      serviceType: form.serviceType,
      preferredDate: form.preferredDate
    })
  });
}

export async function createOrder(bookingId) {
  return await callApi(ENDPOINTS.createOrder, {
    method: "POST",
    body: JSON.stringify({ bookingId })
  });
}
