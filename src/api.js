export async function createBooking(data) {
  const res = await fetch(
    "https://j10rrg72aa.execute-api.us-east-1.amazonaws.com/default/createBooking",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to create booking");
  }

  return res.json();
}
