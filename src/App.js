import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Services from "./Services";

function App() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page === "booking") {
    return <BookingForm />;
  }

  return null; // React app stays invisible on homepage
}

export default App;

