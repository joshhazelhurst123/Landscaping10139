// api.js — single source of truth for all API calls

const BASE_URL = "const BASE_URL = "https://tl3mum5nqj.execute-api.us-east-1.amazonaws.com";
";

const ENDPOINTS = {
  availability: `${BASE_URL}/bookingAvailability`,
  booking: `${BASE_URL}/createBooking`,
};

// ---------- Core fetch helper ----------

async function callApi(url, options = {}) {
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options // <-- method now comes from options
  });

  const text = await res.text();
  console.log(`[API] ${url} →`, text);

  let parsed = JSON.parse(text);

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

export async function getAvailability() {
  const data = await callApi(ENDPOINTS.availability, {
    method: "GET"
  });

  return data.available;
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
