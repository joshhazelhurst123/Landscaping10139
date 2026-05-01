import { useState } from "react";
import { createBooking } from "./api";

export default function BookingForm() {
  const [form, setForm] = useState({
    customerName: "",
    customerEmail: "",
    serviceType: "",
    preferredDate: "",
  });

  const [status, setStatus] = useState(null);

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const result = await createBooking(form);

      if (result.bookingId) {
        setStatus("success");
        setForm({
          customerName: "",
          customerEmail: "",
          serviceType: "",
          preferredDate: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="form-container">
      <h2>Book a Service</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="customerName"
          value={form.customerName}
          onChange={updateField}
          required
        />

        <label>Email</label>
        <input
          name="customerEmail"
          type="email"
          value={form.customerEmail}
          onChange={updateField}
          required
        />

        <label>Service Type</label>
        <select
          name="serviceType"
          value={form.serviceType}
          onChange={updateField}
          required
        >
          <option value="">Select a service</option>
          <option value="LAWN_MOWING">Lawn Mowing</option>
          <option value="HEDGE_TRIMMING">Hedge Trimming</option>
          <option value="GARDEN_CLEANUP">Garden Cleanup</option>
        </select>

        <label>Preferred Date</label>
        <input
          name="preferredDate"
          type="date"
          value={form.preferredDate}
          onChange={updateField}
          required
        />

        <button type="submit">Submit Booking</button>
      </form>

      {status === "loading" && <p className="info">Submitting…</p>}
      {status === "success" && (
        <p className="success">Booking submitted successfully!</p>
      )}
      {status === "error" && (
        <p className="error">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
