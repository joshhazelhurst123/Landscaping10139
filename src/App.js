import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import Services from "./Services";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Landscaping Booking System</h1>

        <Routes>
          <Route path="/" element={<BookingForm />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

