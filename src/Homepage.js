import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/bookings">Bookings</a>
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
<p>0221964920,  
 <a href="mailto:joshhazelhurst123@gmail.com?subject=Booking%20Enquiry&body=Hi%20Landscaping10139,">
  Email Me
</a>
    </p>
        <a className="cta" href="/bookings">Book a Service</a>
      </div>
    </>
  );
}
