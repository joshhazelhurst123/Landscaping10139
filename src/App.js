import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bookings" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
