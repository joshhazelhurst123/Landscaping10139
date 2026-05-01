import React from "react";
import BookingForm from "./BookingForm";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Landscaping Services Booking</h1>
        <p>Book lawn mowing, hedge trimming, and more.</p>
      </header>
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
