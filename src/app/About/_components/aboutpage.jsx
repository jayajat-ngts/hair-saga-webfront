"use client";
import { FaAngleRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { home } from "@/app/_Components/images";
import { about } from "@/app/_Components/images";
const experts = [
    {
        name: "Tom Cooper",
        role: "Hair Expert",
        image: about.expertTom,
    },
    {
        name: "Jon Cooper",
        role: "Hair Expert",
        image: about.expertJon,
    },
    {
        name: "Marlin Jacks",
        role: "Hair Expert",
        image: about.expertMarlin,
    },
    {
        name: "Alvin Rox",
        role: "Hair Expert",
        image: about.expertAlvin,
    },
];
const testimonials = [
    {
        id: 1,
        name: "Tom Arixon",
        title: "CEO, Envato",
        message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla est officia nihil ipsam ad reiciendis veritatis repudiandae, velit minima modi ea vero earum, expedita aspernatur.",
        image: home.Tom,
    },
    {
        id: 2,
        name: "David Wilson",
        title: "Founder, BarberPro",
        message:
            "Praesentium eaque perspiciatis quibusdam doloremque nostrum dolorum necessitatibus. Quos voluptates accusamus amet, doloremque fugit.",
        image: home.Favian,
    },
    {
        id: 3,
        name: "John Smith",
        title: "Stylist, HairZone",
        message:
            "Voluptatibus ex, laboriosam dolore, impedit dolor adipisci magnam, aspernatur optio incidunt. Dolorum quidem maiores excepturi.",
        image: home.Cris,
    },
];
export default function Aboutpage() {
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
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const [counts, setCounts] = useState({
        services: 0,
        reviews: 0,
        awards: 0,
    });

    useEffect(() => {
        const duration = 2000; // animation duration (ms)
        const steps = 100; // number of increments
        const interval = duration / steps;

        const targets = {
            services: 85000,
            reviews: 80000,
            awards: 100,
        };

        let current = { services: 0, reviews: 0, awards: 0 };

        const counter = setInterval(() => {
            current.services += targets.services / steps;
            current.reviews += targets.reviews / steps;
            current.awards += targets.awards / steps;

            setCounts({
                services: Math.min(Math.floor(current.services), targets.services),
                reviews: Math.min(Math.floor(current.reviews), targets.reviews),
                awards: Math.min(Math.floor(current.awards), targets.awards),
            });
        }, interval);

        const timeout = setTimeout(() => clearInterval(counter), duration);
        return () => {
            clearInterval(counter);
            clearTimeout(timeout);
        };
    }, []);
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
                            About Us
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg">
                            <a href="/" className="text-[#111] font-medium">Home</a>
                            <FaAngleRight className="mx-2 text-gray-600" />
                            <span className="text-[#111] font-medium">About Us</span>
                        </div>
                    </div>

                </div>

            </section>




            {/* =================== ABOUT CONTENT SECTION =================== */}
            <section className="relative bg-white py-16 px-6 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2
                  gap-10 items-center">
                    {/* 🔹 Left Side - Image Section */}
                    <div className="relative">
                        <Image
                            src={about.aboutWowHair}
                            alt="Haircut"
                            className="w-90% object-cover"
                        />

                        {/* 🔹 Play Button */}
                        <button className="absolute bottom-6 left-6 bg-[#111] text-white p-5 rounded-full border-4 border-white shadow-lg hover:scale-105 transition">
                            <FaPlay size={20} />
                        </button>

                        {/* 🔹 Circular Floating Image */}
                        <div className="absolute -top-5 right-15 w-50 h-50  sm:-top-5 sm:right-15 sm:w-48 sm:h-48 sm:border-8 rounded-full border-8 border-white overflow-hidden shadow-lg transition-transform duration-500 hover:scale-120">
                            <Image
                                src={home.wowHair}
                                alt="Barber"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* 🔹 Vertical Text */}

                    </div>
                    <div className="absolute right-180 bottom-1/3 -translate-y-1/2 rotate-[-90deg] text-[#111] font-bold text-lg tracking-wide">
                        More Than 12 Years Of Experienced
                    </div>

                    {/* 🔹 Right Side - Text Section */}
                    <div className="text-left">
                        <div className="relative">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#111] relative z-10">
                                About <span className="text-[#111]">HAIRSAGA</span>
                            </h2>
                            {/* Faint Background Text */}
                            <span className="absolute text-[100px] md:text-[140px] font-extrabold text-[#f4f4f4] left-0 top-[-40px] select-none leading-none tracking-tight z-0">
                                ABOUT
                            </span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-4 mt-12">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                            natus est cupiditate ducimus omnis aliquam qui, nisi molestias,
                            quia facere velit, quam ab eaque earum aspernatur voluptates totam
                            dicta nostrum exercitationem error aperiam.
                        </p>

                        <p className="text-gray-600 leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                            doloremque enim velit totam accusamus sit. Voluptate id deserunt
                            modi magnam nobis ullam? Ullam maiores doloribus dicta ex beatae
                            perferendis, deserunt, optio nihil accusantium ducimus
                            exercitationem iusto.
                        </p>

                        {/* Highlight Box */}
                        <div className="bg-gray-100 p-4 border-l-4 border-[#111] mb-8">
                            <h3 className="text-lg font-bold text-gray-900">
                                Dolor Sit, Amet Consectetur Adipisicing Elit. Nesciunt Maxime
                                Non Cupiditate, Laboriosam Quibusdam Architecto.
                            </h3>
                        </div>

                        {/* Stats Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10">
                            <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="text-4xl font-bold text-gray-900">
                                    {counts.services.toLocaleString()}+
                                </h3>
                                <p className="text-gray-600 mt-1">Got Services</p>
                            </div>

                            <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="text-4xl font-bold text-gray-900">
                                    {counts.reviews.toLocaleString()}+
                                </h3>
                                <p className="text-gray-600 mt-1">Positive Reviews</p>
                            </div>

                            <div className="border border-gray-300 p-6 shadow-sm hover:shadow-md transition">
                                <h3 className="text-4xl font-bold text-gray-900">
                                    {counts.awards.toLocaleString()}+
                                </h3>
                                <p className="text-gray-600 mt-1">Winning Awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ===== TestimonialSection (Added) ===== */}
            <section className="relative bg-[#1a1a1a] pt-36 pb-0 overflow-hidden">
                {/* Background faint text */}
                {/* <h2 className="absolute text-[8rem] md:text-[12rem] font-extrabold text-gray-200 opacity-30 top-10 left-8 md:left-1/2 transform md:-translate-x-1/2 select-none tracking-tight">
                    TESTIMONIAL
                </h2> */}

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-4">
                    {/* Left Side - Text and Slider */}
                    <div className="w-full lg:w-1/2 space-y-6 mt-10 lg:mt-0 order-1">
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[#ffffff]">
                            What People Says
                        </h3>

                        <p className="text-[#ffffff] leading-relaxed max-w-md">
                            Deleniti dicta aspernatur expedita. Hic, harum. Repellat at,
                            excepturi placeat atque hic, beatae alias saepe recusandae numquam
                            totam laborum.
                        </p>

                        {/* Slider */}
                        <Slider {...settings} className="mt-10">
                            {testimonials.map((t) => (
                                <div key={t.id}>
                                    <div className="flex items-start gap-4 bg-white border border-dashed border-gray-300 p-6 rounded-md">
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={t.image}
                                                alt={t.name}
                                                width={70}
                                                height={70}
                                                className="rounded-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-gray-700 mb-3 leading-relaxed">
                                                {t.message}
                                            </p>
                                            <h4 className="font-bold text-gray-900">--- {t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Right Side - Barber Image */}
                    <motion.div
                        initial={{ x: 150, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 flex justify-end items-end order-2 mt-10 lg:mt-16 lg:mb-0 pr-6"
                    >
                        <Image
                            src={home.testimonialBarber}
                            alt="Barber and Client"
                            width={650}
                            height={500}
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </section>
            {/* ===== Our experts ===== */}
            <section className="bg-white py-20 px-6 md:px-16 text-center">
                {/* Section Heading */}
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
                        <span className="relative z-10">Our Experts</span>
                        <span className="absolute inset-0 text-[#f3ede2] text-8xl md:text-9xl font-extrabold opacity-30 -z-10">
                            TEAM
                        </span>
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi
                        placeat atque hic, beatae alias saepe recusandae numquam totam laborum.
                        Facilis iure rem corrupti laborum.
                    </p>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {experts.map((expert, index) => (
                        <div
                            key={index}
                            className="group bg-white border border-gray-200 shadow-md hover:shadow-lg transition relative"
                        >
                            {/* 🔹 Image Wrapper (Zoom effect) */}
                            <div className="relative">
                                <div className="overflow-hidden">
                                    <Image
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>

                                {/* 🔹 Social Icons – Half inside, Half outside */}
                                {/* <div
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
                                </div> */}
                            </div>

                            {/* 🔹 Name & Role */}
                            <div className="py-5 border-t border-dotted border-gray-300 text-center">
                                <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                                <p className="text-gray-600 text-sm mt-1">{expert.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


        </main>

    );
}
