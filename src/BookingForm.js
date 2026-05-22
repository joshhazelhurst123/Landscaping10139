import React, { useEffect, useState } from "react";
import { getAvailability, createBooking } from "./api";

export default function BookingForm() {
  //const [slots, setSlots] = useState([]);
  const [slots, setSlots] = useState({});

  const [selectedSlot, setSelectedSlot] = useState("");

  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    serviceType: "LAWN_MOWING",
    preferredDate: ""
  });

  // Load availability

  useEffect(() => {
  async function load() {
    try {
      const grouped = await getAvailability();
      console.log("🔥 Grouped availability:", grouped);
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
    setForm((prev) => ({
      ...prev,
      preferredDate: iso
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const result = await createBooking(form);

      alert(
        result.bookingId
          ? `Booking created! ID: ${result.bookingId}`
          : "Booking created (no ID returned)"
      );
    } catch (err) {
      console.error("🔥 BOOKING ERROR:", err);
      alert("Booking failed — see console");
    }
  }

  return (
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
    </div>
  );
}
