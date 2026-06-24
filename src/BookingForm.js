import React, { useEffect, useState } from "react";
import { getAvailability, createBooking } from "./api";

export default function BookingForm() {
  const [slots, setSlots] = useState({});
  const [selectedSlot, setSelectedSlot] = useState("");

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "", 
    serviceType: "LAWN_MOWING",
    preferredDate: ""
  });

  useEffect(() => {
    async function load() {
      try {
        const grouped = await getAvailability();
        setSlots(grouped);
      } catch (err) {
        console.error("🔥 Availability load error:", err);
      }
    }
    load();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSlotChange(e) {
    const iso = e.target.value;
    setSelectedSlot(iso);
    setForm((prev) => ({ ...prev, preferredDate: iso }));
  }

async function handleSubmit(e) {
  e.preventDefault();

  try {
    // 1. Create booking in your backend
    const result = await createBooking(form);

    if (result.error === "Time slot already booked") {
      alert("Sorry — that time has just been booked. Please choose another slot.");
      return;
    }

    // 2. Send confirmation email via your SES Lambda
    await fetch("https://tl3mum5nqj.execute-api.us-east-1.amazonaws.com/prod/sendBookingEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.customerName,
        email: form.customerEmail,
        customerPhone: form.customerPhone,
        service: form.serviceType,
        date: form.preferredDate,
      }),
    });

    // 3. Notify user
    alert(
      result.bookingId
        ? `Booking created! ID: ${result.bookingId}. A confirmation email has been sent. Check your spam folder.`
        : "Booking created (no ID returned). A confirmation email has been sent. Check your spam folder."
    );

  } catch (err) {
    console.error("🔥 BOOKING ERROR:", err);
    alert("Booking failed — see console");
  }
}

  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/bookings">Bookings</a>
        <a href="/RefundPolicy">Refund Policy</a> 
       <a href="/Terms">Terms & Conditions</a> 
      </nav>

      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="booking-form-container">
          <h2>Book a Service</h2>

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              name="customerName"
              value={form.customerName}
              onChange={handleChange}
              required
            />

            <label>Email</label>
            <input
              name="customerEmail"
              value={form.customerEmail}
              onChange={handleChange}
              required
            />
                 <label>Phone Number</label>
             <input 
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleChange}
                required
/>

            <label>Service Type</label>
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
            >
              <option value="LAWN_MOWING">Lawn Mowing</option>
              <option value="HEDGE_TRIMMING">Hedge Trimming</option>
              <option value="GARDEN_CLEANUP">Garden Cleanup</option>
            </select>

            <label>Select a Time Slot</label>
            <select value={selectedSlot} onChange={handleSlotChange} required>
              <option value="">-- Select a time --</option>

              {Object.entries(slots).map(([dayLabel, isoList]) => (
                <optgroup key={dayLabel} label={dayLabel}>
                  {isoList.map((iso) => {
                    const date = new Date(iso);
                    const label = date.toLocaleString("en-NZ", {
                      timeZone: "Pacific/Auckland",
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true
                    });

                    return (
                      <option key={iso} value={iso}>
                        {label}
                      </option>
                    );
                  })}
                </optgroup>
              ))}
            </select>

            <button type="submit">Submit Booking</button>
          </form>
        </div>
 <p>0221964920 <br /> 
 <a href="mailto:joshhazelhurst123@gmail.com?subject=Booking%20Enquiry&body=Hi%20Landscaping10139,">
  Email Landscaping10139
</a></p>
      </div>
    </>
  );
}
