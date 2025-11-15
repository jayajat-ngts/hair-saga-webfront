"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaSearch } from "react-icons/fa"; // <-- import the icon
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CalendarDays, Tag } from "lucide-react";
import { home } from "@/app/_Components/images";
import Link from "next/link";
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

const blogs = [
    {
        id: 1,
        img: home.calendarImg1,
        title: "Let's See Trending Haircuts In 2022 Only For Men",
        category: "Haircut",
        date: "01 Aug, 2022",
    },
    {
        id: 2,
        img: home.normalHaircut,
        title: "Let's See Trending Haircuts In 2022 Only For Men",
        category: "Haircut",
        date: "01 Aug, 2022",
    },
    {
        id: 3,
        img: home.calendarImg3,
        title: "Let's See Trending Haircuts In 2022 Only For Men",
        category: "Haircut",
        date: "01 Aug, 2022",
    },
];
const cardVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
export default function HomePage() {
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
    ];

    const filteredItems =
        activeFilter === "All"
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);
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
    const zoomVariant = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    };
    return (
        <>
            <main className="overflow-hidden">
                {/* ===== Hero Section ===== */}
                <section
                    className="relative text-white overflow-hidden flex items-center justify-between w-full pt-24 sm:pt-28 lg:pt-0"
                    style={{
                        backgroundImage: `url(${home.mainImg.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        minHeight: "100vh",
                    }}
                >

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

                    {/* ===== Content Section ===== */}
                    <div className="flex flex-col lg:flex-row items-center w-full relative z-10">
                        {/* ✅ Mobile + iPad → text on top, image below
                       ✅ Desktop → text left, image right */}

                        {/* Left Content */}
                        <div className="relative w-full z-20 lg:w-[40%] space-y-6 px-6 sm:px-10 md:px-20 lg:px-28 text-center lg:text-left lg:ml-16 mt-10 lg:mt-0">

                            {/* Social Icons (desktop only) */}
                            <div className="hidden lg:flex flex-col items-center absolute left-0 top-0 bottom-0 justify-between z-20">
                                <div className="w-px flex-1 border-l-2 border-dotted border-white"></div>

                                <div className="flex flex-col space-y-6 my-6">
                                    <a href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ffffff] hover:text-white transition-transform duration-300 hover:scale-110">
                                        <FaFacebookF size={20} />
                                    </a>
                                    {/* <a href="#" className="text-[#ffffff] hover:text-white transition-transform duration-300 hover:scale-110">
                                        <FaTwitter size={20} />
                                    </a> */}
                                    <a href="https://www.instagram.com/hairsaga.india?igsh=OTFnYnJpOG1xdG9u"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#ffffff] hover:text-white transition-transform duration-300 hover:scale-110">
                                        <FaInstagram size={20} />
                                    </a>
                                    {/* <a href="#" className="text-[#ffffff] hover:text-white transition-transform duration-300 hover:scale-110">
                                        <FaLinkedinIn size={20} />
                                    </a> */}
                                </div>

                                <div className="w-px flex-1 border-l-2 border-dotted border-white"></div>
                            </div>

                            {/* Headline */}
                            <h1 className="outline-text text-4xl sm:text-5xl lg:text-6xl leading-tight whitespace-nowrap ">
                                Every Hair Has
                                <br />A Story Begin
                                <br />Yours At
                                <br />Hair Saga
                            </h1>
                            {/* <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed tracking-tight w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                                Quisquam repellat itaque quod molestiae modi, minus, omnis laudantium aspernatur
                                non, nobis expedita deleniti, assumenda nulla odio?
                            </p> */}


                            <Link
                                href={"/contact"}
                                className="bg-[#ffffff] hover:bg-[#ffffff] text-black font-semibold px-10 py-3 transition">
                                Contact Us
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-[60%] h-[50vh] lg:h-[100vh] flex justify-center lg:justify-end items-center mt-8 lg:mt-0">
                            <div className="relative  w-[80%] lg:w-full h-full">
                                <Image
                                    src={home.rightImg}
                                    alt="Smart Haircut"
                                    fill
                                    className=" object-center lg:object-right"
                                    priority
                                />
                                {/* <Image
                                    src={home.backgroundImage1}
                                    alt="Smart Haircut"
                                    fill
                                    className=" object-center lg:object-right"
                                    priority
                                /> */}
                            </div>
                        </div>
                    </div>
                </section>


                {/* ===== Why Choose Us Section ===== */}
                < section className="bg-[#ffffff] py-24 relative overflow-hidden" >
                    {/* Background faint text */}
                    {/* < h2 className="absolute text-[160px] md:text-[220px] font-extrabold text-[#f5f5f5] left-1/2 -translate-x-1/2 top-10 select-none pointer-events-none leading-none tracking-tight z-0" >
                        FEATURES
                    </h2 > */}

                    {/* Content */}
                    < div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center" >
                        {/* Heading */}
                        < h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4" >
                            Why Choose < span className="text-[#111]" > Us</span >
                        </h3 >

                        {/* Subtext */}
                        < p className="text-gray-600 max-w-3xl mx-auto mb-16" >
                            Deleniti dicta aspernatur expedita.Hic, harum.Repellat at, excepturi
                            placeat atque hic, beatae alias saepe recusandae numquam totam laborum.
                            Facilis iure rem corrupti laborum.
                        </p >

                        {/* Cards grid */}
                        < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12" >
                            {/* Card 1 */}
                            <motion.div
                                className="text-left bg-white"
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                            >
                                <h4 className="text-2xl font-bold mb-4 text-gray-900 px-4 pt-4">
                                    Trending Haircut
                                </h4>

                                <div className="relative">
                                    <Image
                                        src={home.trendingHaircut}
                                        alt="Trending Haircut"
                                        className="w-full h-[250px] object-cover"
                                    />

                                    {/* Floating Button (Right side, half inside-outside) */}
                                    <div className="absolute -right-6 translate-y-1/2 bottom-0">
                                        <Link
                                            href="/booking"
                                            className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>


                            {/* Card 2 */}
                            <motion.div
                                className="text-left bg-white"
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                            >
                                <h4 className="text-2xl font-bold mb-4 text-gray-900 px-4 pt-4">Hair Pump</h4>
                                <div className="relative">
                                    <Image
                                        src={home.hairPump}
                                        alt="Hair Pump"
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute -right-6 translate-y-1/2 bottom-0">
                                        <Link
                                            href="/booking"
                                            className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3  transition">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div >

                            {/* Card 3 */}
                            <motion.div
                                className="text-left bg-white"
                                initial={{ scale: 1.2, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
                            >
                                <h4 className="text-2xl font-bold mb-4 text-gray-900 px-4 pt-4">Hair Spa</h4>
                                <div className="relative">
                                    <Image
                                        src={home.hairSpa}
                                        alt="Face Wash"
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute -right-6 translate-y-1/2 bottom-0">
                                        <Link
                                            href="/booking"
                                            className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3  transition">
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </motion.div >
                        </div >
                    </div >
                </section >
                {/* ===== About WOWHAIR Section ===== */}
                <section className="bg-[#1a1a1a] text-gray-800 py-24 relative">
                    <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
                        {/* ✅ On mobile + iPad → image on top, text below 
                       ✅ On desktop → image left, text right */}

                        {/* Left Image with Play Button */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="relative w-full lg:w-1/2"
                        >
                            <Image
                                src={home.hairImg}
                                alt="About WOWHAIR"
                                width={600}
                                height={400}
                                className="shadow-lg object-cover w-full h-full"
                            />

                            {/* Play Button Overlay */}
                            <button className="absolute bottom-[-25px] right-[-25px] bg-[#868686] hover:bg-[#b18d4d] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="none"
                                    className="w-7 h-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5v15l11.25-7.5L8.25 4.5z"
                                    />
                                </svg>
                            </button>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            viewport={{ once: true }}

                            className="w-full lg:w-1/2 space-y-6 px-2 sm:px-6 md:px-8 lg:px-0 text-left"
                        >
                            <div className="relative">
                                <h2 className="text-4xl md:text-5xl font-extrabold text-[#ffffff] relative z-10">
                                    About <span className="text-[#ffffff]">HAIRSAGA</span>

                                </h2>
                                {/* Faint Background Text */}
                                {/* <span className="absolute text-[100px] md:text-[140px] font-extrabold text-[#f4f4f4] left-0 top-[-40px] select-none leading-none tracking-tight z-0">
                                    ABOUT
                                </span> */}
                            </div>

                            <p className="text-[#ffffff] leading-relaxed mt-10">
                                Sit amet consectetur, adipisicing elit. Odit laudantium fugiat recusandae
                                quam saepe corrupti, dignissimos a architecto, doloribus sed. Soluta sit,
                                quo corporis nobis ab quam eligendi amet consequuntur hic. Culpa in ut
                                voluptatem cumque odio.
                            </p>

                            <p className="text-[#ffffff] leading-relaxed">
                                Amet, incidunt odio officia eligendi aperiam aliquid accusamus pariatur,
                                obcaecati impedit id consequuntur provident accusantium, consectetur
                                reprehenderit cumque. Explicabo nihil saepe a similique, est quisquam.
                            </p>

                            {/* Signature */}
                            <div className="pt-4 flex justify-start">
                                <Image
                                    src="/assets/images/signature.png"
                                    alt="Signature"
                                    width={180}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ===== what weoffer Section ===== */}
                <section className="relative bg-[#f5f5f5] py-24 overflow-hidden">
                    {/* Background faint text */}
                    {/* <h2 className="absolute text-[140px] md:text-[220px] font-extrabold text-[#f7f7f7] left-1/2 -translate-x-1/2 top-8 select-none pointer-events-none leading-none tracking-tight z-0">
                        SERVICE
                    </h2> */}

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        {/* Heading */}
                        <div className="text-center mb-12">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                                What We <span className="text--gray-900">Offer</span>
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi
                                placeat atque hic, beatae alias saepe recusandae numquam totam laborum.
                                Facilis iure rem corrupti laborum.
                            </p>
                        </div>

                        {/* ===== Main Grid ===== */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">

                            {/* CARD 1 */}
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="relative">
                                    <Image
                                        src={home.normalHaircut}
                                        alt="Normal Haircut"
                                        width={400}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute right-6 translate-y-1/2 bottom-0">
                                        <button className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mt-4 text-gray-900">Normal Haircut</h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Beatae consectetur tempore, veritatis, eos error odio perspiciatis
                                </p>
                            </motion.div>

                            {/* CARD 2 */}
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="relative">
                                    <Image
                                        src={home.hairPump}
                                        alt="Hair Pump"
                                        width={400}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute right-6 translate-y-1/2 bottom-0">
                                        <button className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mt-4 text-gray-900">Hair Pump</h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Beatae consectetur tempore, veritatis, eos error odio perspiciatis
                                </p>
                            </motion.div>

                            {/* CARD 3 */}
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="relative">
                                    <Image
                                        src={home.hairClean}
                                        alt="Hair Clean"
                                        width={400}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute right-6 translate-y-1/2 bottom-0">
                                        <button className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mt-4 text-gray-900">Hair Clean</h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Beatae consectetur tempore, veritatis, eos error odio perspiciatis
                                </p>
                            </motion.div>
                            {/* CARD 1 */}
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="relative">
                                    <Image
                                        src={home.newBeardCut}
                                        alt="Normal Haircut"
                                        width={400}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute right-6 translate-y-1/2 bottom-0">
                                        <button className="bg-[#111] hover:bg-[#b18d4d] text-white font-semibold px-8 py-3 transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mt-4 text-gray-900">new beard cut</h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Beatae consectetur tempore, veritatis, eos error odio perspiciatis
                                </p>
                            </motion.div>

                            {/* CARD 2 */}
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="relative">
                                    <Image
                                        src={home.hairSpa}
                                        alt="Hair Spa"
                                        width={400}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute right-6 translate-y-1/2 bottom-0">
                                        <button className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mt-4 text-gray-900">Hair Spa</h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Beatae consectetur tempore, veritatis, eos error odio perspiciatis
                                </p>
                            </motion.div>

                            {/* CARD 3 */}
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="text-left"
                            >
                                <div className="relative">
                                    <Image
                                        src={home.faceCleanUp}
                                        alt="Hair Clean"
                                        width={400}
                                        height={250}
                                        className="w-full h-[250px] object-cover"
                                    />
                                    <div className="absolute right-6 translate-y-1/2 bottom-0">
                                        <button className="bg-[#111] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Details
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold mt-4 text-gray-900">Face Cleanup</h4>
                                <p className="text-gray-600 text-sm mt-1">
                                    Beatae consectetur tempore, veritatis, eos error odio perspiciatis
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </section>


                {/* ===== Gallery Section (Added) ===== */}
                < section className="relative bg-[#1a1a1a] py-24" >
                    {/* <h2 className="absolute text-[140px] md:text-[220px] font-extrabold text-[#f7f7f7] left-1/2 -translate-x-1/2 top-8 select-none pointer-events-none leading-none tracking-tight z-0">
                        GALLERY
                    </h2> */}

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
                        <div className="text-center mb-12">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                                Awesome <span className="text-white" >Gallery</span>
                            </h3>
                            <p className="text-white max-w-2xl mx-auto">
                                Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi placeat atque hic.
                            </p>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            {["All", "Normal Haircut", "Hair Pump", "Hair Clean"].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-6 py-2 rounded-full border font-medium transition-all duration-300 ${activeFilter === filter
                                        ? "bg-[#7c7c7c] text-white border-[#ffffff]"
                                        : "text-[#ffffff] border-dashed border-[#ffffff] hover:bg-[#7c7c7c] hover:text-white"
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        {/* Image Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center">
                            {filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative group overflow-hidden shadow-md w-full max-w-[400px]"
                                >
                                    {/* Image */}
                                    <Image
                                        src={item.img}
                                        alt={item.category}
                                        width={400}
                                        height={300}
                                        className="w-full h-[280px] sm:h-[300px] object-cover transition-transform duration-500"
                                    />

                                    {/* Overlay (Slide from Top to Bottom) */}
                                    {/* <div className="absolute inset-0 bg-[#ffffff]/80 flex items-center justify-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                        <FaSearch className="text-white text-3xl" />
                                    </div> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </section >

                {/* ===== TestimonialSection (Added) ===== */}
                <section className="relative bg-[#f5f5f5] pt-36 pb-0 overflow-hidden">
                    {/* Background faint text */}
                    <h2 className="absolute text-[8rem] md:text-[12rem] font-extrabold text-gray-200 opacity-30 top-10 left-8 md:left-1/2 transform md:-translate-x-1/2 select-none tracking-tight">
                        TESTIMONIAL
                    </h2>

                    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-start gap-8 lg:gap-4">
                        {/* Left Side - Text and Slider */}
                        <div className="w-full lg:w-1/2 space-y-6 mt-10 lg:mt-0 order-1">
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                                What People Says
                            </h3>

                            <p className="text-gray-600 leading-relaxed max-w-md">
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


                {/* ===== latest news Section (Added) ===== */}
                <section className="py-16 bg-[#1a1a1a]">
                    <div className="max-w-6xl mx-auto text-center px-4">
                        {/* Header */}
                        <div className="relative mb-12">
                            <h2 className="text-4xl font-extrabold text-white relative z-10">
                                Latest News
                            </h2>
                            {/* <span className="absolute inset-0 flex justify-center items-center text-[110px] font-bold text-gray-200 opacity-30 select-none">
                                BLOG
                            </span> */}
                        </div>

                        <p className="text-white max-w-3xl mx-auto mb-12">
                            Deleniti dicta aspernatur expedita. Hic, harum. Repellat at, excepturi
                            placeat atque hic, beatae alias saepe recusandae numquam totam laborum.
                            Facilis iure rem corrupti laborum.
                        </p>

                        {/* Blog Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">
                            {blogs.map((blog, index) => (
                                <motion.div
                                    key={blog.id}
                                    className="relative border border-dashed border-gray-300 bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
                                    variants={cardVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {/* Image */}
                                    <div>
                                        <Image
                                            src={blog.img}
                                            alt={blog.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 text-left pb-16">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Tag size={16} /> {blog.category}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <CalendarDays size={16} /> {blog.date}
                                            </span>
                                        </div>

                                        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-4">
                                            {blog.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
                                    </div>

                                    {/* Floating Button */}
                                    <div className="absolute right-6 bottom-0 translate-y-1/2">
                                        <button className="bg-[#1a1a1a] hover:bg-[#111] text-white font-semibold px-8 py-3 transition">
                                            Read More
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}


