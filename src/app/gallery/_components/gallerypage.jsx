"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; 
export default function Gallerypage() {
    const [bubbles, setBubbles] = useState([]); // <-- ✅ Define bubbles here
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
    const [activeFilter, setActiveFilter] = useState("All");

    const galleryItems = [
        { id: 1, category: "Normal Haircut", img: "/assets/images/wowhair.jpg" },
        { id: 2, category: "Hair Pump", img: "/assets/images/gallery4.jpg" },
        { id: 3, category: "Hair Clean", img: "/assets/images/gallery1.jpg" },
        { id: 4, category: "Normal Haircut", img: "/assets/images/gallery5.jpg" },
        { id: 5, category: "Hair Clean", img: "/assets/images/gallery2.jpg" },
        { id: 6, category: "Hair Pump", img: "/assets/images/gallery3.jpg" },
    ];

    const filteredItems =
        activeFilter === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);
    return (
        <main className="overflow-hidden">
            <section className="relative text-center text-black">
                {/* 🔹 Top White Section */}
                <div className="bg-white py-8"></div>

                {/* 🔹 Middle Black Section with Background Image */}
                <div
                    className="relative bg-cover bg-center flex items-center justify-center text-white"
                    style={{
                        backgroundImage: "url('/assets/images/mainbg.jpg')",
                        minHeight: "50vh",
                    }}
                >
                    {/* 🔹 Black Overlay */}
                    <div className="absolute inset-0 "></div>

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
                     < div className="relative z-10 bg-white text-black py-10 md:px-20 shadow-lg before:content-[''] before:absolute before:-inset-4 before:border-1 before:border-dashed before:border-gray-400  before:-z-10 lg:max-w-lg lg:mx-auto lg:w-full">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Gallery
                        </h1>
                        <div className="flex items-center justify-center text-base md:text-lg">
                            <a href="/" className="text-[#c7a05c] hover:underline font-medium">
                                Home
                            </a>
                            <FaAngleRight className="mx-2 text-gray-600" />
                            <span className="text-gray-700 font-medium">Gallery</span>
                        </div>
                    </div>
                </div>

                {/* 🔹 Bottom White Section */}
                <div className="bg-white py-10"></div>
            </section>

            < section className="relative bg-[#ffffff] py-8" >

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-14">
                        {["All", "Normal Haircut", "Hair Pump", "Hair Clean"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 ${activeFilter === filter
                                    ? "bg-[#c7a05c] text-white border-[#c7a05c]"
                                    : "text-[#62504c] border-dashed border-[#c7a05c] hover:bg-[#c7a05c] hover:text-white font-semibold"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="relative group overflow-hidden shadow-md">
                                {/* Image */}
                                <Image
                                    src={item.img}
                                    alt={item.category}
                                    width={400}
                                    height={300}
                                    className="w-full h-[300px] object-cover transition-transform duration-500"
                                />

                                {/* Overlay (Slide from Top to Bottom) */}
                                <div className="absolute inset-0 bg-[#c7a05c]/80 flex items-center justify-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <FaSearch className="text-white text-3xl" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >


        </main>
    )
}

