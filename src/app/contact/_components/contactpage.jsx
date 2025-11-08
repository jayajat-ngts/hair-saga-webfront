"use client";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { home } from "@/app/_Components/images";

export default function Contactpage() {
    const [bubbles, setBubbles] = useState([]); // <-- ✅ Define bubbles here
    const [showMap, setShowMap] = useState(false);
    useEffect(() => {
        // Generate bubbles on client only
        const bubbleArray = Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 7,  // 2px–8px
            left: Math.random() * 100,   // % position
            duration: 6 + Math.random() * 3, // 3–5s
            delay: Math.random() * 3, // 0–3s
        }));
        setBubbles(bubbleArray);
    }, []);

    return (
        <main className="overflow-hidden ">
            {/* =================== HERO SECTION =================== */}
            <section className="relative text-center text-black">
                {/* 🔹 Top White Section */}
                <div className="bg-white py-6 sm:py-8"></div>

                {/* 🔹 Middle Section with Background Image */}
                <div
                    className="relative bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                        backgroundImage: `url(${home.mainImg.src})`,
                        minHeight: "50vh",
                    }}
                >
                    {/* 🔹 Black Overlay (optional slight dim for readability) */}
                    <div className="absolute inset-0 bg-black/30"></div>

                    {/* 🔹 Bubble Animation Overlay */}
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

                    {/* 🔹 Text Block */}
                    <div
                        className="
                                   relative z-10 bg-white text-black 
                                 py-6 sm:py-10 px-6 sm:px-10 md:px-16 
        shadow-lg mx-4 sm:mx-auto 
        before:content-[''] before:absolute before:-inset-3 
        before:border before:border-dashed before:border-gray-400 before:-z-10
        w-full max-w-xs sm:max-w-md md:max-w-lg
      "
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                            Contact Us
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg flex-wrap">
                            <a
                                href="/"
                                className="text-[#c7a05c] hover:underline font-medium"
                            >
                                Home
                            </a>
                            <FaAngleRight className="mx-1 sm:mx-2 text-gray-600" />
                            <span className="text-gray-700 font-medium">Contact Us</span>
                        </div>
                    </div>
                </div>

                {/* 🔹 Bottom White Section */}
                <div className="bg-white py-8 sm:py-10"></div>
            </section>

            <section className="bg-white py-8 px-4">
                <div className="max-w-7xl mx-auto bg-[#f6f6f6]  shadow-2xl p-10 text-center">
                    {/* Contact Info Section */}
                    <div className="grid md:grid-cols-3 divide-x divide-[#d6a354]/50 mb-12">
                        <div className="flex flex-col items-center justify-center py-6">
                            <div className="bg-[#d6a354] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3">
                                <FaPhoneAlt />
                            </div>
                            <p className="text-gray-700">+012 123 456 789</p>
                        </div>

                        <div className="flex flex-col items-center justify-center py-6">
                            <div className="bg-[#d6a354] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3">
                                <FaEnvelope />
                            </div>
                            <p className="text-gray-700">yourmail@gmail.com</p>
                        </div>

                        <div className="flex flex-col items-center justify-center py-6">
                            <div className="bg-[#d6a354] w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-3">
                                <FaMapMarkerAlt />
                            </div>
                            <p className="text-gray-700">
                                30/20 Green Valley Road,
                                <br /> Hemlock Valley, Canada
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="border border-dashed border-[#d6a354] p-8 max-w-3xl mx-auto">
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Name*"
                                    className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                                />
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Subject*"
                                    className="w-full  bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                                />
                            </div>

                            <textarea
                                rows="5"
                                placeholder="Message"
                                className="w-full bg-[#ffffff] border border-gray-200 p-3 focus:outline-none focus:border-[#d6a354]"
                            ></textarea>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-[#d6a354] text-white px-8 py-3 font-medium hover:bg-[#b7893f] transition"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* 🌍 Open Map Button */}
                <div className="text-center mt-20">
                    <button
                        onClick={() => setShowMap(!showMap)}
                        className="bg-[#d6a354] text-white px-6 py-3  hover:bg-[#ffffff]  hover:text-[#d6a354] transition"
                    >
                        {showMap ? "Hide Google Map" : "Open Google Map"}
                    </button>
                </div>

                {/* 🌎 Embedded Google Map (toggle) */}
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
