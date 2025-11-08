"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { home } from "@/app/_Components/images";
import { about } from "@/app/_Components/images";
export default function Servicedetail() {

    const [bubbles, setBubbles] = useState([]); // <-- ✅ Define bubbles here
    const services = [
        {
            title: "Normal Haircut",
            desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
            img: home.normalHaircut,
        },
        {
            title: "Hair Pump",
            desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
            img: home.hairPump,
        },
        {
            title: "Hair Clean",
            desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
            img: home.hairClean,
        },

    ];
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
    const zoomVariant = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };
    return (
        <main className="overflow-hidden">
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
                            Service Detail
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg flex-wrap">
                            <a
                                href="/"
                                className="text-[#c7a05c] hover:underline font-medium"
                            >
                                Home
                            </a>
                            <FaAngleRight className="mx-1 sm:mx-2 text-gray-600" />
                            <span className="text-gray-700 font-medium">Service Detail</span>
                        </div>
                    </div>
                </div>

                {/* 🔹 Bottom White Section */}
                <div className="bg-white py-8 sm:py-10"></div>
            </section>

            <section className="py-10 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
                    {/* ===== Top Image ===== */}
                    <div className="w-full mb-10">
                        <Image
                            src={about.serviceImage}
                            alt="Haircut service"
                            width={1000}
                            height={500}
                            className="shadow-md object-cover w-full h-[250px] sm:h-[400px] md:h-[500px]"
                        />
                    </div>

                    {/* ===== Text Content ===== */}
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[100px_1fr] gap-8 items-start">
                        {/* Left Section (Price & Rating) */}
                        <div className="text-left md:text-right">
                            <p className="text-gray-800 font-semibold text-lg">
                                Price: <span className="text-black font-bold">$29</span>
                            </p>
                            <p className="text-gray-800 font-semibold text-lg">Review (5.00)</p>
                            <div className="flex md:justify-end space-x-1 text-[#C8A24A] text-lg">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </div>

                        {/* Right Section (Title, Description, Bullet List) */}
                        <div className="text-left">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
                                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, tempore,
                                repudiandae distinctio placeat dignissimos dicta atque. Nisi, tenetur.
                                Laudantium, praesentium eum doloribus ipsam alias! Minus, enim, quaerat?
                                Et consectetur voluptate, commodi nihil minus assumenda facere ullam
                                sequi, eius, culpa id aliquid corporis, veniam fugit dignissimos
                                perspiciatis impedit perferendis error ut!
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
                                ].map((text, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center text-gray-700 hover:text-[#C8A24A] transition"
                                    >
                                        <ArrowRight className="w-4 h-4 mr-2 text-[#C8A24A]" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white relative overflow-vissible">
                {/* 🔹 Desktop Left & Right Backgrounds */}
                <div
                    className="absolute hidden lg:block left-20 top-[80%] -translate-y-1/2 opacity-40 pointer-events-none"
                    style={{
                        backgroundImage: `url(${about.ssisorImage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "500px",
                        width: "500px",
                        height: "500px",
                        transform: "translateY(-50%) rotate(0deg)",
                    }}
                />
                <div
                    className="absolute hidden lg:block right-30 top-[105%] -translate-y-1/2 opacity-40 pointer-events-none"
                    style={{
                        backgroundImage: `url(${about.ssisorImage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "500px",
                        width: "500px",
                        height: "500px",
                        transform: "translateY(-50%) rotate(10deg)",
                    }}
                />

                {/* 🔹 Mobile (Top + Bottom) */}
                <div
                    className="absolute lg:hidden md:hidden top-[10%] left-1/2 -translate-x-1/2 opacity-40 pointer-events-none"
                    style={{
                        backgroundImage: `url(${about.ssisorImage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "250px",
                        width: "300px",
                        height: "300px",
                    }}
                />
                <div
                    className="absolute lg:hidden md:hidden bottom-0 left-1/2 -translate-x-1/2 opacity-40 pointer-events-none"
                    style={{
                        backgroundImage: `url(${about.ssisorImage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "250px",
                        width: "300px",
                        height: "300px",
                        transform: "rotate(10deg)",
                    }}
                />

                {/* 🔹 iPad / Tablet Center-Bottom Background */}
                {/* 🔹 iPad / Tablet Center-Bottom Background */}
                {/* 🔹 iPad / Tablet Top Left Background */}
                <div
                    className="absolute hidden md:block lg:hidden left-0 top-[5%] opacity-40 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url(${about.ssisorImage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "left top",
                        backgroundSize: "420px",
                        width: "420px",
                        height: "420px",
                        transform: "rotate(-10deg)",
                    }}
                />

                {/* 🔹 iPad / Tablet Bottom Right Background */}
                <div
                    className="absolute hidden md:block lg:hidden right-[5%] bottom-[5%] opacity-40 pointer-events-none z-0"
                    style={{
                        backgroundImage: `url(${about.ssisorImage.src})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right bottom",
                        backgroundSize: "450px",
                        width: "450px",
                        height: "450px",
                        transform: "rotate(8deg)",
                    }}
                />


                {/* 🔹 Content Section */}
                <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-16">
                    <h2 className="absolute mb-4 text-[100px] md:text-[180px] font-extrabold text-[#f7f7f7] left-1/2 -translate-x-1/2 top-8 select-none pointer-events-none leading-none tracking-tight z-0">
                        SERVICE
                    </h2>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                Other<span className="text-[#c7a05c]">Services</span>
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi
                                placeat atque hic, beatae alias saepe recusandae numquam totam laborum.
                                Facilis iure rem corrupti laborum.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="max-w-6xl mx-auto">
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10"
                            >
                                {services.slice(0, 3).map((service, index) => (
                                    <div
                                        key={index}
                                        className="group bg-transparent hover:shadow-lg transition-all duration-300 overflow-hidden relative"
                                    >
                                        <div className="relative">
                                            <Image
                                                src={service.img}
                                                alt={service.title}
                                                width={500}
                                                height={300}
                                                className="w-full h-66 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                            />
                                            <button
                                                className="absolute bottom-0 right-2 translate-y-1/2 bg-[#C8A24A] text-white text-sm px-4 py-2 font-semibold shadow-md z-10 transition-all duration-300 hover:bg-white hover:text-[#C8A24A] border border-[#C8A24A] border-dashed"
                                            >
                                                Details
                                            </button>
                                        </div>
                                        <div className="p-6 text-left md:text-left lg:text-center">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}

