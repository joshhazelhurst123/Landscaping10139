import React from "react";
import "./index.css";

export default function Terms() {
  return (
    <>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/bookings">Bookings</a>
        <a href="/refundpolicy">Refund Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </nav>

      <header className="terms-header">
        <h1>Terms & Conditions</h1>
        <p>Landscaping 10139 – Service Agreement</p>
      </header>

      <div className="terms-container">
        <p>
          These Terms & Conditions outline the agreement between 
          <strong> Landscaping 10139</strong> (“we”, “our”, “us”) and the customer (“you”). 
          By booking any service, you agree to the following:
        </p>

        <h2>1. Booking & Confirmation</h2>
        <ul>
          <li>All bookings must be made through our website or by direct contact.</li>
          <li>A booking is confirmed only once you receive written confirmation from us.</li>
          <li>We may decline or reschedule bookings based on availability or weather.</li>
        </ul>

        <h2>2. Pricing & Payment</h2>
        <ul>
          <li>Pricing is based on the information provided at booking.</li>
          <li>Extra charges may apply for larger or more complex jobs.</li>
          <li>Payment is due <strong>immediately upon completion</strong> unless agreed otherwise.</li>
          <li>Failure to pay may result in cancellation of future bookings and recovery costs.</li>
        </ul>

        <h2>3. Access to Property</h2>
        <ul>
          <li>You must ensure safe and reasonable access to the property.</li>
          <li>If we cannot access the site, a call‑out fee may apply.</li>
        </ul>

        <h2>4. Cancellations & Rescheduling</h2>
        <ul>
          <li>Cancellations must be made at least <strong>24 hours</strong> before the service.</li>
          <li>Late cancellations may incur a fee.</li>
          <li>Weather‑related postponements will be rescheduled at no cost.</li>
        </ul>

        <h2>5. Service Quality</h2>
        <ul>
          <li>We aim to provide high‑quality workmanship at every visit.</li>
          <li>If you are not satisfied, notify us within <strong>24 hours</strong>.</li>
        </ul>

        <h2>6. Green Waste Removal</h2>
        <ul>
          <li>Green waste removal is included only if specified.</li>
          <li>Additional waste may incur extra charges.</li>
        </ul>

        <h2>7. Liability</h2>
        <ul>
          <li>We are not responsible for pre‑existing damage to lawns, gardens, or structures.</li>
          <li>You must inform us of hazards, pets, or risks on the property.</li>
        </ul>

        <h2>8. Weather Conditions</h2>
        <ul>
          <li>Services may be postponed due to unsafe weather conditions.</li>
          <li>We will notify you as early as possible.</li>
        </ul>

        <h2>9. Photos & Marketing</h2>
        <ul>
          <li>We may take before/after photos unless you request otherwise.</li>
        </ul>

        <h2>10. Agreement</h2>
        <p>
          By booking a service, you acknowledge that you have read and agree to these Terms & Conditions.
        </p>
      </div>
    </>
  );
}
