import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Homepage from "./Homepage";
import Services from "./Services.js";
import RefundPolicy from "./RefundPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bookings" element={<BookingForm />} />
        {/* Primary correct route */}
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        {/* Case‑insensitive fallbacks */}
        <Route path="/RefundPolicy" element={<RefundPolicy />} />
        <Route path="/Refundpolicy" element={<RefundPolicy />} />
        <Route path="/REFUNDPOLICY" element={<RefundPolicy />} />
        {/* Optional: redirect dashed version */}
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
