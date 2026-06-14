import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Homepage from "./Homepage";
import Services from "./Services.js";
import RefundPolicy from "./RefundPolicy.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<BookingForm />} />
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/RefundPolicy/*" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
