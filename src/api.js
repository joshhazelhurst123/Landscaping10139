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

  // Parse the outer API Gateway wrapper
  let parsed = JSON.parse(text);

  // If API Gateway wrapped the real payload inside "body", unwrap it
  if (parsed && typeof parsed.body === "string") {
    parsed = JSON.parse(parsed.body);
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
