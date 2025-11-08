"use client";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { home } from "@/app/_Components/images";
import { blog } from "@/app/_Components/images";
import { about } from "@/app/_Components/images";

export default function Blogdetailpage() {
    const [bubbles, setBubbles] = useState([]); // <-- ✅ Define bubbles here
    const [comment, setComment] = useState("");
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
    const blogs = [
        { id: 1, img: blog.blogImg1, title: "Let’s See Trending Haircuts in 2022", date: "Aug 08, 2022" },
        { id: 2, img: blog.blogImg2, title: "Modern Salon Styles for Men", date: "Aug 09, 2022" },
        { id: 3, img: blog.blogImg3, title: "Best Hair Color Trends 2022", date: "Aug 10, 2022" },
    ];
    const comments = [
        {
            name: "Anthony Hoffman",
            time: "20 min ago",
            img: home.Tom,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus id quisquam aliquam.",
        },
        {
            name: "Julia Wright",
            time: "25 min ago",
            img: home.Favian,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus.",
        },
        {
            name: "Cheryl Allen",
            time: "30 min ago",
            img: home.Cris,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem impedit consequatur quaerat commodi ad, vel nisi sequi voluptatum qui perspiciatis doloribus id quisquam aliquam.",
        },
    ];


    const zoomVariant = {
        hidden: { scale: 1.2, opacity: 0 }, // start bigger & invisible
        visible: {
            scale: 1, // zoom out to normal size
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut", // smooth in and out
            },
        },
    };

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
                            Blog Details
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg flex-wrap">
                            <a
                                href="/"
                                className="text-[#c7a05c] hover:underline font-medium"
                            >
                                Home
                            </a>
                            <FaAngleRight className="mx-1 sm:mx-2 text-gray-600" />
                            <span className="text-gray-700 font-medium">Blog Details</span>
                        </div>
                    </div>
                </div>

                {/* 🔹 Bottom White Section */}
                <div className="bg-white py-4 sm:py-10"></div>
            </section>

            <section className="py-4 bg-[#ffffff] pl-6 pr-6 lg:pl-10 lg:pr-10">
                <div className="container mx-auto px-6 lg:px-20 py-10 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">
                    {/* ===== Left Blog Content ===== */}
                    <div className="space-y-10">
                        {/* ===== Featured Image ===== */}
                        <div className="overflow-hidden">
                            <Image
                                src={blog.blogDetailImg1}
                                alt="Trending Haircuts"
                                width={800}
                                height={450}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* ===== Blog Title & Meta ===== */}
                        <div className="px-3 md:px-0">
                            <p className="text-gray-500 text-sm mb-2 text-center md:text-left">
                                By <span className="text-yellow-600 font-medium">Admin</span> | 08 Aug 2022
                            </p>
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c2c2c] text-center md:text-left leading-snug">
                                Let’s See Trending Haircuts in 2022 Only for Men
                            </h1>

                            <p className="text-gray-700 leading-relaxed mb-4 text-justify md:text-left px-1 md:px-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit veniam quidem ratione culpa natus? Nulla consequatur soluta suscipit, impedit optio laudantium corrupti sunt harum fuga quisquam, ducimus corporis sapiente consectetur rerum ipsam atque aliquid est culpa odio nihil iusto illo, quas.
                            </p>

                            <p className="text-gray-700 leading-relaxed mb-4 text-justify md:text-left px-1 md:px-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde doloribus, quaerat libero cumque non harum voluptatem.
                            </p>

                            {/* ===== Highlighted Quote ===== */}
                            <blockquote className="border-2 border-dashed border-[#e6e6e6] text-gray-600 p-5 md:p-8 text-sm md:text-base">
                                <span className="text-yellow-600 text-2xl md:text-3xl mr-2">❝</span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis deleniti, aliquid et hic maxime sint dignissimos eaque incidunt asperiores impedit animi fugit.
                                <span className="text-yellow-600 text-2xl md:text-3xl ml-2">❞</span>
                            </blockquote>
                        </div>

                        {/* ===== Related Posts ===== */}
                        <div className="space-y-8">
                            {/* ==== Two Images Side by Side ==== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="overflow-hidden">
                                    <Image
                                        src={blog.blogImg1}
                                        alt="Haircut 1"
                                        width={600}
                                        height={400}
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                    />
                                </div>
                                <div className="overflow-hidden">
                                    <Image
                                        src={blog.blogImg2}
                                        alt="Haircut 2"
                                        width={600}
                                        height={400}
                                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                    />
                                </div>
                            </div>

                            {/* ==== Title & Description ==== */}
                            <div className="px-3 md:px-0 text-center md:text-left">
                                <h3 className="text-lg md:text-3xl font-bold text-[#2c2c2c] mb-3">
                                    Lorem Ipsum Dolor Sit, Amet, Consectetur Adipisicing Elit.
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nobis rerum tempore sapiente officiis ipsa numquam.
                                </p>
                            </div>

                            {/* ==== Share Section ==== */}
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 px-2 md:px-0">
                                <span className="font-semibold text-[#2c2c2c]">Share:</span>
                                <div className="flex gap-3">
                                    {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGooglePlusG].map((Icon, i) => (
                                        <button
                                            key={i}
                                            className="border border-[#e4e4e4] bg-[#f8f3ed] text-[#d6a354] w-9 h-9 md:w-10 md:h-10 flex items-center justify-center 
                                            hover:bg-[#d6a354] hover:text-white transition-all duration-300"
                                        >
                                            <Icon />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* ===== Author Box ===== */}
                        <div className="p-4 md:p-6 space-y-10">
                            <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                                <Image
                                    src={about.expertTom}
                                    alt="Author"
                                    width={130}
                                    height={130}
                                    className="object-cover rounded-full"
                                />
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-[#2c2c2c] mb-2">Tom Jemison</h4>
                                    <p className="text-gray-600 leading-relaxed text-sm md:text-[15px] mb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde minima accusantium omnis dolores rerum sed voluptas.
                                    </p>
                                    <div className="flex justify-center sm:justify-start gap-4 mt-3">
                                        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                            <a key={i} href="#" className="text-[#d6a354] hover:text-[#2c2c2c] text-lg transition-all">
                                                <Icon />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-300"></div>

                            {/* ===== Prev / Next Posts ===== */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="bg-[#f8f8f8] p-5 flex items-center justify-center md:justify-start gap-3 hover:bg-[#f1f1f1] transition text-sm md:text-base">
                                    <FaArrowLeft className="text-[#d6a354] text-lg md:text-xl" />
                                    <p className="text-gray-700 leading-relaxed">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </p>
                                </div>
                                <div className="bg-[#f8f8f8] p-5 flex items-center justify-center md:justify-end gap-3 hover:bg-[#f1f1f1] transition text-sm md:text-base">
                                    <p className="text-gray-700 leading-relaxed text-right">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    </p>
                                    <FaArrowRight className="text-[#d6a354] text-lg md:text-xl" />
                                </div>
                            </div>
                        </div>

                        {/* ===== Comments Section ===== */}
                        <div className="mt-12 px-3 md:px-0">
                            <h2 className="text-xl md:text-2xl font-bold mb-8 text-[#2c2c2c] text-center md:text-left">
                                Comments <span className="text-[#d6a354]">(3)</span>
                            </h2>

                            <div className="space-y-8">
                                {comments.map((comment, idx) => (
                                    <div
                                        key={idx}
                                        className={`border-b border-gray-200 pb-6 last:border-none ${idx % 2 === 1 ? "max-md:ml-0 md:ml-16" : "ml-0"}`}
                                    >
                                        <div className="flex flex-col sm:flex-row items-start gap-5">
                                            <Image
                                                src={comment.img}
                                                alt={comment.name}
                                                width={60}
                                                height={60}
                                                className="object-cover rounded-full"
                                            />
                                            <div className="flex-1 text-center sm:text-left">
                                                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2">
                                                    <div>
                                                        <h4 className="font-bold text-gray-800 mb-1 text-[15px]">{comment.name}</h4>
                                                        <p className="text-gray-500 text-sm mb-2">{comment.time}</p>
                                                    </div>
                                                    <button className="border border-gray-300 rounded-md px-4 py-1 text-gray-700 text-sm hover:bg-gray-100 transition">
                                                        Reply
                                                    </button>
                                                </div>
                                                <p className="text-gray-700 text-[15px] leading-relaxed mt-1">
                                                    {comment.text}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ===== Leave a Comment ===== */}
                        <div className="p-4 md:p-6">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#2c2c2c] text-center md:text-left">
                                Leave a Comment!
                            </h2>
                            <form className="space-y-4">
                                <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-2 text-sm md:text-base" />
                                <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 text-sm md:text-base" />
                                <input type="text" placeholder="Subject" className="w-full border border-gray-300 p-2 text-sm md:text-base" />
                                <textarea rows={4} placeholder="Write Your Message Here..." value={comment} onChange={(e) => setComment(e.target.value)} className="w-full border border-gray-300 rounded-md p-2 text-sm md:text-base"></textarea>
                                <button type="submit" className="bg-[#d6a354] hover:bg-yellow-700 text-white font-semibold py-2 px-6 transition w-full sm:w-auto">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>


                    {/* ===== Right Sidebar ===== */}
                    <aside className="space-y-8">
                        {/* 🔍 Search */}
                        <div className="bg-white border-2 border-dashed border-[#e6e6e6] p-6">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Search</h3>
                            <div className="border-b border-dashed border-[#d6a354] mb-6"></div>
                            <div className="flex">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="flex-1 px-3 py-3 outline-none bg-[#f5f5f5] border-b-2 border-[#d6a354]"
                                />
                                <button className="bg-[#d6a354] text-white px-4">🔍</button>
                            </div>
                        </div>

                        {/* 📂 Categories */}
                        <div className="bg-white border-2 border-dashed border-[#e6e6e6] p-6">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Categories</h3>
                            <div className="border-b border-dashed border-[#d6a354] mb-6"></div>
                            <ul className="space-y-2 text-md text-[#463d36]">
                                <li className="flex justify-between border-b pb-3">Blogging <span>(09)</span></li>
                                <li className="flex justify-between border-b pb-3">Web Design <span>(13)</span></li>
                                <li className="flex justify-between border-b pb-3">Web Development <span>(05)</span></li>
                                <li className="flex justify-between border-b pb-3">Graphic Design <span>(10)</span></li>
                                <li className="flex justify-between border-b pb-3">Theme Development <span>(12)</span></li>
                                <li className="flex justify-between">Online Marketing <span>(06)</span></li>
                            </ul>
                        </div>

                        {/* 📰 Recent Posts */}
                        <div className="bg-white border-2 border-dashed border-[#e6e6e6] p-6">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Recent Posts</h3>
                            <div className="border-b border-dashed border-[#d6a354] mb-6"></div>
                            <div className="space-y-4">
                                {blogs.map((post) => (
                                    <div key={post.id} className="flex items-center gap-3 border-b pb-3">
                                        <Image
                                            src={post.img}
                                            alt="recent"
                                            width={70}
                                            height={70}
                                            className="rounded object-cover"
                                        />
                                        <div>
                                            <p className="text-sm text-gray-700 font-medium">{post.title}</p>
                                            <span className="text-xs text-gray-500">{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 🏷️ Popular Tags */}
                        <div className="bg-white border-2 border-dashed border-[#e6e6e6] p-6">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Popular Tags</h3>
                            <div className="border-b border-dashed border-[#d6a354] mb-6"></div>
                            <div className="flex flex-wrap gap-3">
                                {["HTML", "CSS", "PHOTOSHOP", "JQUERY", "JAVASCRIPT", "PHP"].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 text-sm font-medium bg-[#dddddd] hover:bg-[#d6a354] hover:text-white transition cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 📢 Ads */}
                        <div className="bg-white border-2 border-dashed border-[#e6e6e6] p-6">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Ads</h3>
                            <div className="border-b border-dashed border-[#d6a354] mb-6"></div>

                            <div className="relative w-full overflow-hidden">
                                <Image
                                    src={blog.blogImg11}
                                    alt="ad"
                                    width={400}
                                    height={300}
                                    className="
                                 object-cover w-full h-auto 
                                  md:w-full md:h-[550px] md:object-cover   /* 👈 iPad: make full width + taller image */
                                 lg:w-[400px] lg:h-auto lg:mx-auto       /* 👈 Desktop: revert to original centered size */
                                   "
                                />

                                <div
                                    className="
                        absolute bottom-4 left-6 right-6 
                              bg-[#d6a354]/80 text-white text-sm text-center py-2 px-3
                                   "
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>

            </section>


        </main>

    );
}
