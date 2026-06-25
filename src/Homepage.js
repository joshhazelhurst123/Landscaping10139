import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/bookings">Bookings</a>
    <a href="/RefundPolicy">Refund Policy</a> 
    <a href="/Terms">Terms & Conditions</a> 
      </nav>

      <header className="hero">
        <h1>Landscaping 10139</h1>
        <p>Professional lawn care, garden maintenance, and tidy‑ups</p>
      </header>

      <div className="container">
        <h2>Welcome to Landscaping 10139</h2>
        <p>
          We provide reliable, affordable landscaping services across your local area.
          From lawn mowing to hedge trimming and full garden clean‑ups, we take pride
          in keeping your property looking its best.
        </p>
    <p>
    Wellington region New Zealand, 
    </p>
<p>0221964920  <br />
 <a href="mailto:joshhazelhurst123@gmail.com?subject=Booking%20Enquiry&body=Hi%20Landscaping10139,">
  Email Landscaping10139
</a>
    </p>
        <a className="cta" href="/bookings">Book a Service</a>
      </div>
<div style={{ width: "100%", height: "400px" }}>
  <iframe
    title="Paremata Railway Station Map"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10174.06867638152!2d174.839!3d-41.093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38acb7c8f4b0c5%3A0x500ef6143a2f0b0!2sParemata%20Railway%20Station!5e0!3m2!1sen!2snz!4v1719450000000"
  ></iframe>
</div>


    
    </>
  );
}
