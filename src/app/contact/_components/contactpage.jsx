"use client";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { home } from "@/app/_Components/images";

const API_BASE_URL = process.env.NEXT_APP_API_BASE_URL;

export default function Contactpage() {
  const [bubbles, setBubbles] = useState([]);
  const [showMap, setShowMap] = useState(false);

  // ✅ Form state
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
    const bubbleArray = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 7,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 3,
      delay: Math.random() * 3,
    }));
    setBubbles(bubbleArray);
  }, []);


  // 🧠 Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🚀 Submit handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await axios.post(
        "https://4zk2cl8s-4000.inc1.devtunnels.ms/api/contactUs",
        formData, // Axios automatically stringifies JSON
        {
          headers: { "Content-Type": "application/json" },
        }
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
        throw new Error("Unexpected response from server");
      }
    } catch (err) {
      console.error(err);
      setResponseMsg("❌ Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden pt-[160px] sm:pt-[170px] md:pt-[180px]">


      {/* =================== HERO SECTION =================== */}

      <section className="relative text-center text-black">

        <div
          className="
      relative bg-cover bg-center flex items-center justify-center text-white 
      h-[45vh] sm:h-[55vh] md:h-[65vh]
    "
          style={{ backgroundImage: `url(${home.mainImg.src})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Bubbles */}
          <div className="absolute inset-0 overflow-hidden">
            {bubbles.map((b) => (
              <span key={b.id}
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

          {/* ABOUT BOX */}
          <div
            className="
        relative z-10 bg-white text-black 
        py-6 sm:py-8 md:py-10 
        px-5 sm:px-8 md:px-16 
        shadow-lg 
        w-[85%] sm:w-[70%] md:max-w-lg mx-auto
        before:content-[''] before:absolute before:-inset-2 
        before:border before:border-dashed before:border-gray-400 before:-z-10
      "
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
              Contact Us
            </h1>

            <div className="flex items-center justify-center text-sm sm:text-base md:text-lg">
              <a href="/" className="text-[#111] font-medium">Home</a>
              <FaAngleRight className="mx-2 text-gray-600" />
              <span className="text-[#111] font-medium">Contact Us</span>
            </div>
          </div>

        </div>

      </section>

      {/* =================== CONTACT FORM SECTION =================== */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-7xl mx-auto bg-[#f6f6f6] shadow-2xl p-10 text-center">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 divide-x divide-[#111]/50 mb-12">
            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-[#111] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3">
                <FaPhoneAlt />
              </div>
              <p className="text-gray-700">+012 123 456 789</p>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-[#111] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3">
                <FaEnvelope />
              </div>
              <p className="text-gray-700">yourmail@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-[#111] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3">
                <FaMapMarkerAlt />
              </div>
              <p className="text-gray-700">
                30/20 Green Valley Road,
                <br /> Hemlock Valley, Canada
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-dashed border-[#111] p-8 max-w-3xl mx-auto">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name*"
                  className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email*"
                  className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
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
                  className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                  required
                />
                <input
                  type="text"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                />
              </div>

              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                required
              ></textarea>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-8 py-3 font-medium transition ${loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#111] text-white hover:bg-[#ffffff] hover:text-[#111]"
                    }`}
                >
                  {loading ? "Sending..." : "Send Message"}
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

        {/* 🌍 Open Map Button */}
        <div className="text-center mt-20">
          <button
            onClick={() => setShowMap(!showMap)}
            className="bg-[#111] text-white px-6 py-3 hover:bg-[#ffffff] hover:text-[#111] transition"
          >
            {showMap ? "Hide Google Map" : "Open Google Map"}
          </button>
        </div>

        {showMap && (
          <div className="mt-8 flex justify-center">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.195330428779!2d-122.0463563843684!3d49.20031277932181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9b7e89c1b9f%3A0x3b93f3b4c5cfcf5b!2sHemlock%20Valley%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sin!4v1717584699778!5m2!1sen!2sin"
              width="90%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="shadow-lg"
            ></iframe>
          </div>
        )}
      </section>
    </main>
  );
}
