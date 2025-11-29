"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaClock,
  FaUser,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Generate time slots between 10:30 AM and 9:00 PM
const generateTimeSlots = () => {
  const slots = [];
  let start = 10 * 60 + 30;
  const end = 21 * 60;

  while (start <= end) {
    const h = Math.floor(start / 60);
    const m = start % 60;
    const hh = h.toString().padStart(2, "0");
    const mm = m.toString().padStart(2, "0");
    slots.push(`${hh}:${mm}`);
    start += 30;
  }
  return slots;
};

export default function Bookingpage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    stylist: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [services, setServices] = useState([]);

  // ⭐ Fetch All Services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/services`);
        if (Array.isArray(res.data?.data)) {
          setServices(res.data.data);
        } else {
          setServices([]);
        }
      } catch (err) {
        console.error("❌ Failed to load services:", err);
      }
    };

    fetchServices();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const payload = {
        fullname: formData.name,
        phonenumber: formData.phone,
        email: formData.email,
        selectservice: formData.service,
        selectstylist: formData.stylist,
        selectdate: formData.date,
        selecttime: formData.time,
        additionalNotes: formData.message,
      };

      const res = await axios.post(
        `${API_BASE_URL}/api/booking/bookingNow`,
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        alert("🎉 Your appointment has been booked successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          stylist: "",
          date: "",
          time: "",
          message: "",
        });
        setResponseMsg("✅ Appointment booked successfully!");
      } else {
        alert("⚠️ Something went wrong.");
        setResponseMsg("⚠️ Something went wrong. Try again.");
      }
    } catch (error) {
      alert("❌ Failed to book appointment.");
      setResponseMsg("❌ Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="relative min-h-[60vh] bg-[#111] flex items-center justify-center pt-32">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">Book Your Appointment</h1>
          <p className="text-sm md:text-base max-w-xl mx-auto">
            Choose your service and preferred time. We’ll take care of the rest.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-8 bg-white shadow-md -mt-10 relative rounded-t-2xl mx-4 md:mx-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaPhoneAlt className="mx-auto text-[#111] text-2xl mb-2" />
            <h4 className="font-semibold text-lg text-[#111]">Call Us</h4>
            <p className="text-gray-600">+918889399949</p>
          </div>

          <div>
            <FaMapMarkerAlt className="mx-auto text-[#111] text-2xl mb-2" />
            <h4 className="font-semibold text-lg text-[#111]">Our Location</h4>
            <p className="text-gray-600 px-4">
              G5 BUSINESS ISLAND, GATE 2, Opp. Samar Park, Nipania, Indore
            </p>
          </div>

          <div>
            <FaClock className="mx-auto text-[#111] text-2xl mb-2" />
            <h4 className="font-semibold text-lg text-[#111]">Working Hours</h4>
            <p className="text-gray-600">Mon - Sun: 10:30 AM - 9 PM</p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-10 px-4 md:px-20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
                <FaUser /> Full Name
              </label>
              <input type="text" name="name" value={formData.name}
                onChange={handleChange} className="w-full border rounded-md p-3" required />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
                <FaPhoneAlt /> Phone Number
              </label>
              <input type="tel" name="phone" value={formData.phone}
                onChange={handleChange} className="w-full border rounded-md p-3" required />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
                <FaEnvelope /> Email Address
              </label>
              <input type="email" name="email" value={formData.email}
                onChange={handleChange} className="w-full border rounded-md p-3" />
            </div>

            {/* ⭐ SERVICE DROPDOWN FROM API ⭐ */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
                <FaScissors /> Select Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                required
              >
                <option value="">Select Service</option>
                {services.map((srv) => (
                  <option key={srv._id} value={srv.name}>
                    {srv.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
                <FaCalendarAlt /> Select Date
              </label>
              <input type="date" name="date" value={formData.date}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleChange} className="w-full border rounded-md p-3" required />
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-1">
                <FaClock /> Select Time
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border rounded-md p-3"
                required
              >
                <option value="">Select Time</option>
                {generateTimeSlots().map((slot) => {
                  const [hh, mm] = slot.split(":");
                  const suffix = hh >= 12 ? "PM" : "AM";
                  const displayHour = (hh % 12) || 12;
                  const display = `${displayHour}:${mm} ${suffix}`;

                  return (
                    <option key={slot} value={slot}>
                      {display}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="text-gray-700 font-medium mb-1 block">
                Additional Notes (optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-md p-3"
                placeholder="Any special requests?"
              />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#111] text-white px-10 py-3 rounded-md font-medium ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-black"
                }`}
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>

          </form>

          {responseMsg && (
            <p className="text-center text-green-600 font-medium mt-4 pb-6">
              {responseMsg}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
