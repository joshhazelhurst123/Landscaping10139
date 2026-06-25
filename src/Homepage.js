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
          From lawn mowing to hedge trimming and full garden clean‑ups, we take care
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
<section
  style={{
    padding: "40px 20px",
    background: "#f5f5f5",
    borderTop: "4px solid #2e7d32",
    borderBottom: "4px solid #2e7d32",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2 style={{ color: "#2e7d32", marginBottom: "10px" }}>
      Our Location
    </h2>
    <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
       Serving the Porirua & Wellington region
    </p>

    <div
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <iframe
        title="Paremata Station Map"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12023.946459200823!2d174.8683749142944!3d-41.11298339643922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d3f540d51dca261%3A0x1d00ef62249b9560!2sParemata%20Station!5e0!3m2!1sen!2snz!4v1782364778377!5m2!1sen!2snz"
      ></iframe>
    </div>
  </div>
</section>

   
    </>
  );
}
