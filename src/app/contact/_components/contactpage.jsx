"use client";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { home } from "@/app/_Components/images";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Contactpage() {
  const [bubbles, setBubbles] = useState([]);
  const [showMap, setShowMap] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phonenumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    setBubbles(
      Array.from({ length: 80 }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 7,
        left: Math.random() * 100,
        duration: 6 + Math.random() * 3,
        delay: Math.random() * 3,
      }))
    );
  }, []);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post(
        `${API_BASE_URL}api/contactUs`,   // FIXED
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phonenumber: "",
          message: "",
        });
      } else {
        throw new Error("Unexpected server response");
      }
    } catch (err) {
      setResponseMsg("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden pt-[200px] sm:pt-[160px] md:pt-[180px]">

      {/* HERO */}
      <section className="relative text-center text-black">
        <div
          className="relative bg-cover bg-center flex items-center justify-center text-white 
          h-[45vh] sm:h-[55vh] md:h-[65vh]"
          style={{ backgroundImage: `url(${home.mainImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {bubbles.map((b) => (
              <span
                key={b.id}
                className="bubble"
                style={{
                  width: `${b.size}px`,
                  height: `${b.size}px`,
                  left: `${b.left}%`,
                  animationDuration: `${b.duration}s`,
                  animationDelay: `${b.delay}s`,
                }}
              ></span>
            ))}
          </div>

          {/* CONTACT US BOX */}
          <div
            className="relative z-10 bg-white text-black py-6 sm:py-8 md:py-10 px-5 sm:px-8 md:px-16 
            shadow-lg w-[85%] sm:w-[70%] md:max-w-lg mx-auto border border-gray-300"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3">
              Contact Us
            </h1>

            <div className="flex items-center justify-center text-sm sm:text-base">
              <a href="/" className="text-[#111] font-medium">Home</a>
              <FaAngleRight className="mx-2 text-gray-600" />
              <span className="text-[#111] font-medium">Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto bg-[#f6f6f6] shadow-2xl p-10 text-center">

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 divide-x divide-[#111]/50 mb-12">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-[#111] w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 text-xl">
                <FaPhoneAlt />
              </div>
              <p className="text-gray-700">+918889399949</p>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-[#111] w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 text-xl">
                <FaEnvelope />
              </div>
              <p className="text-gray-700">hairsagaindia1@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center py-6 px-4">
              <div className="bg-[#111] w-12 h-12 rounded-full flex items-center justify-center text-white mb-3 text-xl">
                <FaMapMarkerAlt />
              </div>
              <p className="text-gray-700">
                G5 BUSINESS ISLAND, GATE 2, opp.SAMAR PARK, Garg Resort Colony, Nipania, Indore, MP
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="border border-dashed border-[#111] p-8 max-w-3xl mx-auto">
            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full bg-white border border-gray-200 text-[#111] p-3 focus:outline-none placeholder-black"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full bg-white border border-gray-200 text-[#111] p-3 focus:outline-none placeholder-black"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject*"
                  className="w-full bg-white border border-gray-200 text-[#111] p-3 focus:outline-none placeholder-black"
                  required
                />
                <input
                  type="text"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-white border border-gray-200 text-[#111] p-3 focus:outline-none placeholder-black"
                />
              </div>

              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-white border border-gray-200 text-[#111] p-3 focus:outline-none placeholder-black"
                required
              ></textarea>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 font-medium transition ${loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#111] text-white hover:bg-white hover:text-[#111]"
                    }`}
                >
                  {loading ? "Sending....." : "Send Message"}
                </button>
              </div>

              {responseMsg && (
                <p className="text-center mt-3 text-sm text-gray-700">
                  {responseMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* GOOGLE MAP BUTTON */}
      <div className="text-center mt-10 mb-10">
        <button
          onClick={() => setShowMap(!showMap)}
          className="bg-[#111] text-white px-6 py-3 hover:bg-white hover:text-[#111] transition"
        >
          {showMap ? "Hide Google Map" : "Open Google Map"}
        </button>
      </div>

      {showMap && (
        <div className="mt-8 flex justify-center">
          <iframe
            src="https://www.google.com/maps/place/Hair+Saga+Unisex+Salon+And+Academy/@22.7631075,75.9236388,17z/data=!3m1!4b1!4m6!3m5!1s0x39631ded1d91b321:0x46201d3a24c5bad1!8m2!3d22.7631075!4d75.9236388!16s%2Fg%2F11yjk64bz1?entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D"
            width="90%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="shadow-lg"
          ></iframe>
        </div>
      )}
    </main>
  );
}
