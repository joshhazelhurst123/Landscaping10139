import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Homepage from "./Homepage";
import Services from "./Services.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
    <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
