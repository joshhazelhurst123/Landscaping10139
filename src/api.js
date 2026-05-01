export const API_URL = "https://YOUR_API_ID.execute-api.YOUR_REGION.amazonaws.com/prod/bookings";

export async function createBooking(data) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  return res.json();
}
