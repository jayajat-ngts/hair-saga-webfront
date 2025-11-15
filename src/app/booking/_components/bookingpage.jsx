"use client";
import { useState } from "react";
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
import Image from "next/image";

export default function Bookingpage() {
  // ✅ Form state
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

  // ✅ Loading and response state
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
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

      console.log("📦 Sending booking payload:", payload);

      const res = await axios.post(
        "https://4zk2cl8s-4000.inc1.devtunnels.ms/api/bookNow",
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
        alert("⚠️ Something went wrong while booking. Please try again.");
        setResponseMsg("⚠️ Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("❌ Booking error:", error);
      alert("❌ Failed to book your appointment. Please try again later.");
      setResponseMsg("❌ Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f8f8] min-h-screen">
      {/* ===== Hero Section ===== */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center bg-[#111]"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mt-20 mb-2">Book Your Appointment</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Choose your service and preferred time. We’ll take care of the rest.
          </p>
        </div>
      </section>

      {/* ===== Contact Info ===== */}
      <section className="py-10 bg-white shadow-md -mt-12 z-20 relative rounded-t-2xl mx-6 md:mx-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <FaPhoneAlt className="mx-auto text-[#111] text-2xl mb-2" />
            <h4 className="font-semibold text-lg">Call Us</h4>
            <p className="text-gray-600">+918889399949</p>
          </div>
          <div>
            <FaMapMarkerAlt className="mx-auto text-[#111] text-2xl mb-2" />
            <h4 className="font-semibold text-lg">Our Location</h4>
            <p className="text-gray-600">G5 BUSINESS ISLAND, GATE 2, opp.SAMAR PARK, Garg Resort Colony,
              Nipania, Indore, Madhya Pradesh 452010,
              India</p>
          </div>
          <div>
            <FaClock className="mx-auto text-[#111] text-2xl mb-2" />
            <h4 className="font-semibold text-lg">Working Hours</h4>
            <p className="text-gray-600">Mon - Sun: 10;30AM - 9PM</p>
          </div>
        </div>
      </section>

      {/* ===== Booking Form ===== */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaUser /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaPhoneAlt /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaEnvelope /> Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
              />
            </div>

            {/* Service */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaScissors /> Select Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
                required
              >
                <option value="">Select Service</option>
                <option>Haircut</option>
                <option>Hair Wash</option>
                <option>Hair Color</option>
                <option>Hair Spa</option>
                <option>Beard Trim</option>
                <option>Nails</option>
                <option>Facials</option>
                <option>Hair Straightning</option>
                <option>Bridal Makeup</option>
                <option>Manicure</option>
                <option>pedicure</option>
              </select>
            </div>

            {/* Stylist */}
            {/* <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaUser /> Select Stylist
              </label>
              <select
                name="stylist"
                value={formData.stylist}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#c7a05c]"
              >
                <option value="">Select Stylist</option>
                <option>John</option>
                <option>Emily</option>
                <option>Raj</option>
              </select>
            </div> */}

            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaCalendarAlt /> Select Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}   // ⬅️ Prevent past dates
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
                required
              />
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                <FaClock /> Select Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
                required
              />
            </div>

            {/* Message */}
            <div className="col-span-2">
              <label className="text-gray-700 font-medium mb-2 block">
                Additional Notes (optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-[#111]"
                placeholder="Any special requests?"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                disabled={loading}
                className={`bg-[#111] text-white px-10 py-3 rounded-md font-medium transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#111D]"
                  }`}
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>
            </div>
          </form>

          {/* Response message */}
          {responseMsg && (
            <p className="text-center text-green-600 font-medium mt-4">{responseMsg}</p>
          )}
        </div>
      </section>
    </div>
  );
}
