// api.js — single source of truth for all API calls

const BASE_URL =
  "https://tl3mum5nqj.execute-api.us-east-1.amazonaws.com/prod";

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

export async function createPaymentLink(payload) {
  return await callApi(`${BASE_URL}/createPaymentLink`, {
    method: "POST",
    body: JSON.stringify(payload)
  });
}

// Flatten grouped availability into a simple array of ISO strings
export async function getAvailability() {
  const data = await callApi(ENDPOINTS.availability);

  // data.available = { "Tue, 19 May": [iso1, iso2], ... }
/** changed from flat array to a grouped object
  */
return data.available; // return grouped, not flattened
  
}

export async function createBooking(form) {
  const data = await callApi(ENDPOINTS.booking, {
    method: "POST",
    body: JSON.stringify({
      customerName: form.customerName,
      customerEmail: form.customerEmail,
      customerPhone: form.customerPhone,
      serviceType: form.serviceType,
      preferredDate: form.preferredDate
    })
  });

  return data;
}
