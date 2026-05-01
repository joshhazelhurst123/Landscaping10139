export const API_URL =
  "https://tl3mum5nqj.execute-api.us-east-1.amazonaws.com/prod/bookings";

export async function createBooking(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || "Failed to create booking");
  }

  return response.json();
}
