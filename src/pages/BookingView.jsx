import { useState } from "react";
import Navbar from '../components/Navbar';

const destinations = [
  "Brisbane, Australia","Melbourne, Australia", "Sydney, Australia", 
  "Athens, Greece", "Mykonos, Greece", "Santorini, Greece", 
  "Hong Kong", "Bali, Indonesia", "Java, Indonesia",
  "Naples, Italy", "Palermo, Italy", "Rome, Italy", 
  "Borneo, Malaysia", "Kuala Lumpur, Malaysia",
  "Lima, Peru", "Machu Picchu, Peru", 
  "Serengeti, Tanzania", "Zanzibar, Tanzania"
];

export default function BookingView() {
  const [form, setForm] = useState({
    destination: "",
    fromDate: "",
    toDate: "",
    adults: 1,
    children: 0,
    accommodation: "Standard",
    tripType: "Leisure"
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!form.destination) newErrors.destination = "Destination is required.";
    if (!form.fromDate) newErrors.fromDate = "Start date is required.";
    if (!form.toDate) newErrors.toDate = "End date is required.";
    if (form.fromDate && form.toDate && form.fromDate > form.toDate) {
      newErrors.dateRange = "Start date must be before end date.";
    }
    if (form.adults < 1) newErrors.adults = "At least one adult must travel.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("This function is not yet implemented!");
    }
  };
// style={{ backgroundImage: "url('/images/beach.jpg')" }}

  return (
    <>
    <Navbar  />
      <div className="min-h-screen pt-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg2.jpg')" }}>

        <section className="max-w-4xl mx-auto px-4 py-12 font-poppins" >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-8 text-center">
            Plan Your Dream Trip
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-lg p-6 space-y-6"
            noValidate
          >
            {/* Destination Dropdown */}
            <div>
              <label className="block mb-1 text-sm font-medium text-blue-950">Destination</label>
              <select
                value={form.destination}
                onChange={(e) => setForm({ ...form, destination: e.target.value })}
                className="w-full border border-gray-300 rounded px-4 py-2"
              >
                <option value="">Select a destination</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </select>
              {errors.destination && <p className="text-red-600 text-sm mt-1">{errors.destination}</p>}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-950">From</label>
                <input
                  type="date"
                  value={form.fromDate}
                  onChange={(e) => setForm({ ...form, fromDate: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.fromDate && <p className="text-red-600 text-sm mt-1">{errors.fromDate}</p>}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-950">To</label>
                <input
                  type="date"
                  value={form.toDate}
                  onChange={(e) => setForm({ ...form, toDate: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.toDate && <p className="text-red-600 text-sm mt-1">{errors.toDate}</p>}
              </div>
            </div>
            {errors.dateRange && <p className="text-red-600 text-sm">{errors.dateRange}</p>}

            {/* Travelers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-950">Adults</label>
                <input
                  type="number"
                  min="1"
                  value={form.adults}
                  onChange={(e) => setForm({ ...form, adults: parseInt(e.target.value) })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
                {errors.adults && <p className="text-red-600 text-sm mt-1">{errors.adults}</p>}
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-950">Children</label>
                <input
                  type="number"
                  min="0"
                  value={form.children}
                  onChange={(e) => setForm({ ...form, children: parseInt(e.target.value) })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                />
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-950">Trip Type</label>
                <select
                  value={form.tripType}
                  onChange={(e) => setForm({ ...form, tripType: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option>Leisure</option>
                  <option>Adventure</option>
                  <option>Honeymoon</option>
                  <option>Family</option>
                  <option>Business</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-blue-950">Accommodation</label>
                <select
                  value={form.accommodation}
                  onChange={(e) => setForm({ ...form, accommodation: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2"
                >
                  <option>Standard</option>
                  <option>Luxury</option>
                  <option>Eco-friendly</option>
                  <option>Budget</option>
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="bg-blue-950 text-white font-semibold px-6 py-3 rounded hover:bg-blue-800 transition"
              >
                Search Trips
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
