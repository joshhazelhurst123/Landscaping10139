import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/bookings">Bookings</a>
        <a href="/RefundPolicy">Refund Policy</a>

      </nav>

      <header className="services-header">
        <h1>Our Landscaping Services</h1>
        <p>Professional, reliable, and tailored to your property</p>
      </header>

      <div className="services-container">

        <div className="service-card">
          <img
            src="https://ts4.mm.bing.net/th?id=OIP.bDoDgoDfYz7tN1dzRZDcRwHaE8&pid=15.1&o=7&rm=3"
            alt="Lawn mowing service"
          />
          <img
            src="https://ts2.mm.bing.net/th?id=OIP.53DR6i4wDCdCD2eIJLqVdwHaE8&pid=15.1&o=7&rm=3"
            alt="Lawn mowing service"
          />
          <h2>Lawn Mowing & Edging</h2>
          <p>Keep your lawn looking sharp and healthy all year round.</p>
          <ul>
            <li>Precision mowing for a clean, even finish</li>
            <li>Edge trimming along paths, driveways, and garden beds</li>
            <li>Grass clipping removal or mulching</li>
            <li>Seasonal lawn care advice</li>
          </ul>
        </div>

        <div className="service-card">
          <img
            src="https://ts3.mm.bing.net/th?id=OIP.gaCGxc7VAP3Xz1GvRbVyHAHaD4&pid=15.1&o=7&rm=3"
            alt="Hedge trimming service"
          />
          <h2>Hedge Trimming & Shaping</h2>
          <p>Neat hedges instantly lift the look of your property.</p>
          <ul>
            <li>Regular hedge maintenance</li>
            <li>Shaping and height control</li>
            <li>Overgrown hedge restoration</li>
            <li>Debris removal included</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Garden Clean‑Ups</h2>
          <p>Perfect for seasonal resets, inspections, or preparing a home for sale.</p>
          <ul>
            <li>Weed removal</li>
            <li>Leaf and debris clearing</li>
            <li>Small tree and shrub tidy‑ups</li>
            <li>Garden bed refresh</li>
            <li>Green waste removal</li>
          </ul>
        </div>

        <div className="service-card">
          <img
            src="https://images.pexels.com/photos/29288279/pexels-photo-29288279.jpeg"
            alt="Section tidy-up service"
          />
          <h2>Section Tidy‑Ups</h2>
          <p>Ideal for overgrown or neglected properties.</p>
          <ul>
            <li>Long grass cutting</li>
            <li>Brush clearing</li>
            <li>Rubbish and green waste removal</li>
            <li>Property presentation tidy‑ups</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>Garden Maintenance</h2>
          <p>Keep your garden looking its best all year round.</p>
          <ul>
            <li>Regular maintenance visits</li>
            <li>Pruning and plant care</li>
            <li>Mulching and soil conditioning</li>
            <li>Seasonal planting</li>
          </ul>
        </div>

        <div className="service-card">
          <img
            src="https://images.pexels.com/photos/17577525/pexels-photo-17577525.jpeg"
            alt="Green waste removal service"
          />
          <h2>Green Waste Removal</h2>
          <p>Fast, clean, and environmentally responsible disposal.</p>
          <ul>
            <li>Lawn clippings</li>
            <li>Branches</li>
            <li>Leaves</li>
            <li>Hedge trimmings</li>
            <li>General garden waste</li>
          </ul>
        </div>

      </div>
    </>
  );
}
