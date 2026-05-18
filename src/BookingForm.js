import React, { useState, useEffect } from "react";
import { createBooking } from "./api";

const initialState = {
  customerName: "",
  customerEmail: "",
  serviceType: "LAWN_MOWING",
  preferredDate: ""
};

function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [availableTimes, setAvailableTimes] = useState([]);

  // Load available times from your Lambda
  useEffect(() => {
    fetch("https://j10rrg72aa.execute-api.us-east-1.amazonaws.com/default/availability")
      .then(res => res.json())
      .then(data => {
        console.log("🔥 Loaded availability:", data);
        setAvailableTimes(data.available || []);
      })
      .catch(err => console.error("🔥 Error loading times:", err));
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    console.log("🔥 SUBMITTING FORM:", form);

    try {
      const result = await createBooking(form);

      console.log("🔥 RAW RESULT FROM createBooking():", result);

      setStatus({
        type: "success",
        message: `Booking created: ${result.bookingId}`
      });

      setForm(initialState);
    } catch (err) {
      console.error("🔥 BOOKING ERROR:", err);
      setStatus({
        type: "error",
        message: err.message || "Booking failed"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <h2>Book a Service</h2>

      <form onSubmit={handleSubmit} className="form">
        <label>
          Name
          <input
            name="customerName"
            value={form.customerName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            name="customerEmail"
            type="email"
            value={form.customerEmail}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Service Type
          <select
            name="serviceType"
            value={form.serviceType}
            onChange={handleChange}
          >
            <option value="LAWN_MOWING">Lawn Mowing</option>
            <option value="HEDGE_TRIMMING">Hedge Trimming</option>
            <option value="GARDEN_CLEANUP">Garden Cleanup</option>
          </select>
        </label>

        <label>
          Choose a Time
          <select
            name="preferredDate"
            value={form.preferredDate}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>
            {availableTimes.map(time => (
              <option key={time} value={time}>
                {new Date(time).toLocaleString()}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit Booking"}
        </button>
      </form>

      {status && (
        <div className={`status ${status.type}`}>
          {status.message}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
