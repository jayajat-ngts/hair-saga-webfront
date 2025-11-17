"use client";
import { FaAngleRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { home } from "@/app/_Components/images";
import { motion } from "framer-motion";
import { blog } from "@/app/_Components/images";

export default function Blogpage() {
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
    const blogs = [
        { id: 1, img: blog.blogImg1, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 2, img: blog.blogImg2, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 3, img: blog.blogImg3, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 4, img: blog.blogImg4, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 5, img: blog.blogImg5, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 6, img: blog.blogImg6, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 7, img: blog.blogImg7, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 8, img: blog.blogImg8, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 9, img: blog.blogImg9, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
        { id: 10, img: blog.blogImg10, title: "Let's See Trending Haircuts in 2022 Only for Men", date: "01 Aug, 2022" },
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
                            Blog
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg">
                            <a href="/" className="text-[#111] font-medium">Home</a>
                            <FaAngleRight className="mx-2 text-gray-600" />
                            <span className="text-[#111] font-medium">Blog</span>
                        </div>
                    </div>

                </div>

            </section>

            <section className="py-10 bg-[#ffffff]">
                < div className="container mx-auto px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] gap-8">
                    {/* ===== Left Blog Grid ===== */}
                    <div className="grid md:grid-cols-2 gap-x-0.5 gap-y-6 justify-center">
                        {blogs.map((blog, index) => (
                            <motion.div
                                variants={zoomVariant}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ delay: index * 0.2 }}
                                key={blog.id}
                                className="
        group relative bg-white hover:shadow-lg transition
        w-full sm:max-w-[95%] md:max-w-[85%] mx-auto
        border-2 border-dashed border-[#e6e6e6]
      "
                            >
                                {/* ✅ Image wrapper */}
                                <div className="p-2 overflow-hidden">
                                    <Image
                                        src={blog.img}
                                        alt={blog.title}
                                        width={280}
                                        height={600}
                                        className="w-full h-70 object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="p-3 pb-8">
                                    <p className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                                        <span>✂️ Haircut</span> | <span>{blog.date}</span>
                                    </p>
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug">
                                        {blog.title}
                                    </h3>
                                </div>

                                {/* Read More Button */}
                                <button className="absolute bottom-[-10px] right-4 bg-[#1a1a1a] hover:bg-white hover:text-[#1a1a1a] text-white px-5 py-3 text-md shadow-md transition-all">
                                    Read More
                                </button>
                            </motion.div>
                        ))}
                    </div>




                    {/* ===== Right Sidebar ===== */}
                    <aside className="space-y-8">
                        {/* 🔍 Search */}
                        <div className="bg-[#ffffff] border-2 border-dashed border-[#e6e6e6] p-8">
                            <h3 className="font-semibold text-gray-800  text-xl font-bold mb-3">Search</h3>
                            <div className=" border-b border-dashed border-[#1a1a1a] mb-6"></div>
                            <div className="flex   ">
                                <input
                                    type="text"
                                    placeholder="Search here..."
                                    className="flex-1 px-3 py-4 outline-none bg-[#f5f5f5] border-b-2 border-solid border-[#1a1a1a] "
                                />
                                <button className="bg-[#1a1a1a] text-white px-4">🔍</button>
                            </div>
                        </div>

                        {/* 📂 Categories */}
                        <div className="bg-[#ffffff] border-2 border-dashed border-[#e6e6e6] p-8 np-5 ">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Categories</h3>
                            <div className=" border-b border-dashed border-[#1a1a1a] mb-6"></div>
                            <ul className="space-y-2 text-md text-[#463d36]">
                                <li className="flex justify-between border-b pb-4">Trending Haircut <span>(09)</span></li>
                                <li className="flex justify-between border-b pb-4">Face Claenup <span>(13)</span></li>
                                <li className="flex justify-between border-b pb-4">Hydra Facial <span>(05)</span></li>
                                <li className="flex justify-between border-b pb-4">Hair Spa <span>(10)</span></li>
                                <li className="flex justify-between border-b pb-4">Hair Straightning <span>(12)</span></li>
                                <li className="flex justify-between">Bridal Makeup<span>(06)</span></li>
                            </ul>
                        </div>

                        {/* 📰 Recent Posts */}
                        <div className="bg-[#ffffff] border-2 border-dashed border-[#e6e6e6] p-5">
                            <h3 className="font-bold text-xl text-[#2c2c2c]  mb-3">Recent Posts</h3>
                            <div className=" border-b border-dashed border-[#1a1a1a] mb-6"></div>
                            <div className="space-y-4 ">
                                {blogs.slice(0, 3).map((post) => (
                                    <div key={post.id} className="flex items-center gap-3 flex justify-between border-b pb-4">
                                        <Image src={post.img} alt="recent" width={70} height={70} className="rounded object-cover" />
                                        <div>
                                            <p className="text-sm text-gray-700">{post.title}</p>
                                            <span className="text-xs text-gray-500 ">{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 🏷️ Popular Tags */}
                        <div className="bg-[#ffffff] border-2 border-dashed border-[#e6e6e6] p-5 ">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Popular Tags</h3>
                            <div className=" border-b border-dashed border-[#1a1a1a] mb-6"></div>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {["Bridal Makeup", "Cleanup", "Hair Spa", "Hair Straightning", "Haircut", "Beardcut"].map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-5 py-3 text-sm font-medium bg-[#dddddd] hover:bg-[#1a1a1a]  hover:text-white  cursor-pointer"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* 📢 Ads */}
                        <div className="bg-white border-2 border-dashed border-[#e6e6e6] p-6">
                            <h3 className="font-bold text-xl text-[#2c2c2c] mb-3">Ads</h3>
                            <div className="border-b border-dashed border-[#1a1a1a] mb-6"></div>

                            <div className="relative w-full overflow-hidden">
                                <Image
                                    src={blog.blogImg11}
                                    alt="ad"
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-auto md:w-full md:h-[550px] md:object-cover   /* 👈 iPad: make full width + taller image */lg:w-[400px] lg:h-auto lg:mx-auto       /* 👈 Desktop: revert to original centered size */
                                                          "
                                />

                                <div
                                    className="
                                               absolute bottom-4 left-6 right-6 
                                                     bg-[#1a1a1a]/80 text-white text-sm text-center py-2 px-3
                                                          "
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>


                {/* 🔢 Pagination */}
                <div className="flex justify-start mt-12 pl-24 p-5 space-x-2">

                    {/* Left Arrow */}
                    <button className="border-2 border-dashed border-[#1a1a1a] px-3 py-1 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition">
                        ←
                    </button>

                    {/* Page Numbers */}
                    {[1, 2, 3].map((n) => (
                        <button
                            key={n}
                            className="border-2 border-dashed border-[#1a1a1a] px-3 py-1 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition"
                        >
                            {n}
                        </button>
                    ))}

                    {/* Right Arrow */}
                    <button className="border-2 border-dashed border-[#1a1a1a] px-3 py-1 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition">
                        →
                    </button>
                </div>

            </section>


        </main>

    );
}
