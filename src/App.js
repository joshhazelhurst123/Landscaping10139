import BookingForm from "./BookingForm";

function App() {
  const isBookingPage = window.location.pathname.includes("bookings.html");

  if (isBookingPage) {
    return <BookingForm />;
  }

  return null; // React stays invisible on homepage
}

export default App;
