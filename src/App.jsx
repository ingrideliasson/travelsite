import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BookingView from "./pages/BookingView";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<BookingView />} />
      <Route path="*" element={<Navigate to="/hero" />} /> 
    </Routes>
  );
}