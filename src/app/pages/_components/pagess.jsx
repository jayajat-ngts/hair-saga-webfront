"use client";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { home } from "@/app/_Components/images";
const experts = [
    {
        name: "Tom Cooper",
        role: "Hair Expert",
        image: "/assets/images/experttom.jpg",
    },
    {
        name: "Jon Cooper",
        role: "Hair Expert",
        image: "/assets/images/expertjon.jpg",
    },
    {
        name: "Marlin Jacks",
        role: "Hair Expert",
        image: "/assets/images/expertmarlin.jpg",
    },
    {
        name: "Alvin Rox",
        role: "Hair Expert",
        image: "/assets/images/expertalvin.jpg",
    },
    {
        name: "Tom Cooper",
        role: "Hair Expert",
        image: "/assets/images/team1.jpg",
    },
    {
        name: "Jon Cooper",
        role: "Hair Expert",
        image: "/assets/images/team2.jpg",
    },
    {
        name: "Marlin Jacks",
        role: "Hair Expert",
        image: "/assets/images/team3.jpg",
    },
    {
        name: "Alvin Rox",
        role: "Hair Expert",
        image: "/assets/images/team4.jpg",
    },
];

export default function Pagess() {
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

    return (
        <main className="overflow-hidden">
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
        Team
      </h1>

      <div className="flex items-center justify-center text-sm sm:text-base md:text-lg flex-wrap">
        <a
          href="/"
          className="text-[#c7a05c] hover:underline font-medium"
        >
          Home
        </a>
        <FaAngleRight className="mx-1 sm:mx-2 text-gray-600" />
        <span className="text-gray-700 font-medium">Team</span>
      </div>
    </div>
  </div>

  {/* 🔹 Bottom White Section */}
  <div className="bg-white py-8 sm:py-10"></div>
</section>

            {/* ===== Our experts ===== */}
            <section className="bg-white py-20 px-6 md:px-16 text-center">
                {/* Section Heading */}
                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg transition relative"
                        >
                            {/* 🔹 Image Wrapper (only for zoom effect) */}
                            <div className="relative">
                                <div className="overflow-hidden">
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* 🔹 Social Icons – Half inside, Half outside (no clipping now) */}
                                <div
                                    className="absolute top-1/2 -translate-y-1/2 right-[-25px] flex flex-col justify-center 
                                    px-3 py-4 space-y-4 bg-[#c7a05c] border-1 border-white border-dashed shadow-lg
                                     transition-all duration-500 group-hover:translate-y-[10%] z-20"
                                >
                                    <a href="#" className="text-black hover:text-white">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="text-black hover:text-white">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="text-black hover:text-white">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" className="text-black hover:text-white">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>

                            {/* 🔹 Name & Role */}
                            <div className="py-5 border-t border-dotted border-gray-300 text-center">
                                <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{expert.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center mt-12 space-x-2">
                    <button className="border-dashed  border-1 border-[#C8A24A] px-3 py-1 text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white">←</button>
                    <button className="border-dashed border-1 border-[#C8A24A] px-3 py-1 text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white">1</button>
                    <button className="border-dashed border-1 border-[#C8A24A] px-3 py-1 text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white">2</button>
                    <button className="border-dashed border-1 border-[#C8A24A] px-3 py-1 text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white">3</button>
                    <button className="border-dashed border-1 border-[#C8A24A] px-3 py-1 text-[#C8A24A] hover:bg-[#C8A24A] hover:text-white">→</button>
                </div>
            </section>

        </main>

    );
}
