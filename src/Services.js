import React from "react";
import "./Services.css";

export default function Services() {
  return (
    <div className="services-page">

      {/* Main Navigation */}
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/bookings">Bookings</a>
        <a href="/refundpolicy">Refund Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </nav>

  <p className="booking-price">
  <strong>$90.00 per hour</strong> Pricing applies to Wellington & Porirua region bookings.
</p>
<p className="booking-price">If you would like to make a booking, go to the Bookings page, please find an available time slot. Then submit your contact 
details, including your phone number, email address, and name. Once you have made a booking, an email will be sent to you with a payment link. You will then need
to make a payment within 30 minutes or the booking will be deleted. Once the payment has been made, you will receive a phone call or email confirming the booking. A 
request for your address will be required.
</p>
      {/* Header */}
      <header className="services-header">
        <h1>Our Landscaping Services</h1>
        <p>Professional, reliable, and tailored to your property</p>
      </header>

      {/* Service Cards */}
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

      {/* Legal Sections */}
      <div className="services-legal">

        {/* Sub Navigation */}
        <div className="services-subnav">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#health-safety">Health & Safety</a>
          <a href="#service-agreement">Service Agreement</a>
          <a href="#complaints-resolution">Complaints</a>
        </div>

        {/* Privacy Policy */}
        <section id="privacy-policy">
          <h2>Privacy Policy</h2>
          <p>
            Landscaping10139 Limited (“we”, “our”, “us”) is committed to protecting your privacy and handling your
            personal information in accordance with New Zealand privacy laws.
          </p>

          <h3>Information We Collect</h3>
          <ul>
            <li>Contact details such as your name, address, phone number, and email.</li>
            <li>Property details required to provide landscaping services.</li>
            <li>Booking, invoicing, and payment information.</li>
            <li>Any information you provide when you contact us or submit a form.</li>
          </ul>

          <h3>How We Use Your Information</h3>
          <ul>
            <li>To provide and manage our landscaping services.</li>
            <li>To communicate with you about bookings, changes, or service updates.</li>
            <li>To issue invoices, process payments, and maintain records.</li>
            <li>To improve our services and customer experience.</li>
          </ul>

          <h3>Sharing Your Information</h3>
          <p>We do not sell your personal information. We may share it with:</p>
          <ul>
            <li>Service providers who assist our operations.</li>
            <li>Authorities where required by law.</li>
          </ul>

          <h3>Data Security & Retention</h3>
          <p>
            We take reasonable steps to protect your information from loss, misuse, or unauthorised access.
            Information is retained only as long as necessary.
          </p>

          <h3>Your Rights</h3>
          <p>You may request access to or correction of your personal information.</p>
        </section>

        {/* Health & Safety */}
        <section id="health-safety">
          <h2>Health & Safety Policy</h2>
          <p>
            Landscaping10139 Limited is committed to providing a safe working environment for our staff, customers,
            and the public.
          </p>

          <h3>Our Commitments</h3>
          <ul>
            <li>Identify and manage hazards.</li>
            <li>Use appropriate tools and PPE.</li>
            <li>Ensure staff are trained and competent.</li>
            <li>Pause work if conditions are unsafe.</li>
          </ul>

          <h3>Customer Responsibilities</h3>
          <ul>
            <li>Inform us of hazards.</li>
            <li>Ensure safe access.</li>
            <li>Keep children and pets away from work areas.</li>
          </ul>

          <h3>Incident Reporting</h3>
          <p>Report accidents or near misses as soon as possible.</p>
        </section>

        {/* Service Agreement */}
        <section id="service-agreement">
          <h2>Service Agreement</h2>
          <p>
            This Service Agreement outlines the general terms under which Landscaping10139 Limited provides services.
          </p>

          <h3>Scope of Services</h3>
          <p>We provide landscaping and garden maintenance services as described.</p>

          <h3>Bookings & Confirmation</h3>
          <ul>
            <li>Bookings may be made via website or phone.</li>
            <li>A booking is confirmed once we provide written confirmation.</li>
          </ul>

          <h3>Pricing & Payment</h3>
          <ul>
            <li>Pricing is based on information provided.</li>
            <li>Extra charges may apply for larger jobs.</li>
            <li>Payment is due upon completion unless agreed otherwise.</li>
          </ul>

          <h3>Customer Obligations</h3>
          <ul>
            <li>Provide accurate information.</li>
            <li>Ensure access to the property.</li>
            <li>Notify us of changes.</li>
          </ul>

          <h3>Our Obligations</h3>
          <ul>
            <li>Perform services with care and professionalism.</li>
            <li>Communicate clearly about timing or delays.</li>
            <li>Comply with relevant laws.</li>
          </ul>
        </section>

        {/* Complaints */}
        <section id="complaints-resolution">
          <h2>Complaints & Resolution Policy</h2>
          <p>
            We aim to provide a high standard of service. If you are unhappy, please let us know.
          </p>

          <h3>How to Make a Complaint</h3>
          <ul>
            <li>Contact us by phone or email.</li>
            <li>Provide details and photos if possible.</li>
          </ul>

          <h3>Our Response Process</h3>
          <ul>
            <li>We will acknowledge your complaint promptly.</li>
            <li>We may request more information or visit the site.</li>
            <li>We aim to resolve issues quickly.</li>
          </ul>

          <h3>Possible Outcomes</h3>
          <ul>
            <li>Rectification of work.</li>
            <li>Partial refund or credit.</li>
            <li>Explanation where service was delivered correctly.</li>
          </ul>

          <h3>Escalation</h3>
          <p>You may request review by a manager or owner.</p>
        </section>

        {/* Contact */}
        <section>
          <h3>Contact Details</h3>
          <p>
            Landscaping10139 Limited<br />
            Phone: 022 196 4920<br />
            Website: <a href="https://landscaping10139.online">landscaping10139.online</a>
          </p>
        </section>

      </div>
    </div>
  );
}
