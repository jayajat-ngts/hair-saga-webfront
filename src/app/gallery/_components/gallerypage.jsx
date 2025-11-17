"use client";
import React from 'react'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { home } from "@/app/_Components/images";
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
        { id: 1, category: "Normal Haircut", img: home.wowHair },
        { id: 2, category: "Hair Pump", img: home.hairPump },
        { id: 3, category: "Hair Clean", img: home.galleryImg1 },
        { id: 4, category: "Normal Haircut", img: home.hairStraight },
        { id: 5, category: "Hair Clean", img: home.galleryImg2 },
        { id: 6, category: "Hair Pump", img: home.nailArt },
        { id: 7, category: "Normal Haircut", img: home.menicure },
        { id: 8, category: "Hair Clean", img: home.makeup },
        { id: 9, category: "Hair Pump", img: home.pedicure },
    ];

    const filteredItems =
        activeFilter === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);
    return (
        <main className="overflow-hidden pt-[200px] sm:pt-[170px] md:pt-[180px]">


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
                            Gallery
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg">
                            <a href="/" className="text-[#111] font-medium">Home</a>
                            <FaAngleRight className="mx-2 text-gray-600" />
                            <span className="text-[#111] font-medium">Gallery</span>
                        </div>
                    </div>

                </div>

            </section>


            <section className="relative bg-[#ffffff] py-4">
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
                        {["All", "Normal Haircut", "Hair Pump", "Hair Clean"].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-5 sm:px-6 py-2 rounded-full border font-medium transition-all duration-300 ${activeFilter === filter
                                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                                    : "text-[#1a1a1a] border-dashed border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white font-semibold"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="relative group overflow-hidden shadow-md">
                                {/* Image */}
                                <Image
                                    src={item.img}
                                    alt={item.category}
                                    width={400}
                                    height={300}
                                    className="w-full h-[250px] sm:h-[280px] md:h-[300px] object-cover transition-transform duration-500"
                                />

                                {/* Overlay (Slide from Top to Bottom) */}
                                {/* <div className="absolute inset-0 bg-[#c7a05c]/80 flex items-center justify-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <FaSearch className="text-white text-3xl" />
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </main>
    )
}

