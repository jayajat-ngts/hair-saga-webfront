// "use client";
// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { FaAngleRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { home } from "@/app/_Components/images";
// import { about } from "@/app/_Components/images";
// const services = [
//     {
//         title: "Normal Haircut",
//         desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
//         img: home.normalHaircut,
//     },
//     {
//         title: "Hair Pump",
//         desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
//         img: home.hairPump,
//     },
//     {
//         title: "Hair Clean",
//         desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
//         img: home.hairClean,
//     },
//     {
//         title: "New Style Beard",
//         desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
//         img: home.newBeardCut,
//     },
//     {
//         title: "New Haircut",
//         desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
//         img: home.galleryImg1,
//     },
//     {
//         title: "Hair Treatment",
//         desc: "Consectetur adipisicing elit. Facilis ex corrupti, veniam dolores nam, perferendis iusto vel sit.",
//         img: about.aboutWowHair,
//     },
// ];
// const zoomVariant = {
//     hidden: { scale: 1.2, opacity: 0 }, // start bigger & invisible
//     visible: {
//         scale: 1, // zoom out to normal size
//         opacity: 1,
//         transition: {
//             duration: 1,
//             ease: "easeInOut", // smooth in and out
//         },
//     },
// };

// export default function Servicepage() {
//     const [bubbles, setBubbles] = useState([]); // <-- ✅ Define bubbles here
//     useEffect(() => {
//         // Generate bubbles on client only
//         const bubbleArray = Array.from({ length: 80 }).map((_, i) => ({
//             id: i,
//             size: Math.random() * 3 + 7,  // 2px–8px
//             left: Math.random() * 100,   // % position
//             duration: 6 + Math.random() * 3, // 3–5s
//             delay: Math.random() * 3, // 0–3s
//         }));
//         setBubbles(bubbleArray);
//     }, []);
//     const cardVariants = {
//         hidden: { scale: 1.2, opacity: 0 },
//         visible: {
//             scale: 1,
//             opacity: 1,
//             transition: { duration: 0.6, ease: "easeOut" },
//         },
//     };
//     return (
//         <main className="overflow-hidden pt-[200px] sm:pt-[170px] md:pt-[180px]">


//             {/* =================== HERO SECTION =================== */}

//             <section className="relative text-center text-black">

//                 <div
//                     className="
//              relative bg-cover bg-center flex items-center justify-center text-white 
//              h-[45vh] sm:h-[55vh] md:h-[65vh]
//            "
//                     style={{ backgroundImage: `url(${home.mainImg.src})` }}
//                 >
//                     <div className="absolute inset-0 bg-black/30"></div>

//                     {/* Bubbles */}
//                     <div className="absolute inset-0 overflow-hidden">
//                         {bubbles.map((b) => (
//                             <span key={b.id}
//                                 className="bubble"
//                                 style={{
//                                     width: `${b.size}px`,
//                                     height: `${b.size}px`,
//                                     left: `${b.left}%`,
//                                     animationDuration: `${b.duration}s`,
//                                     animationDelay: `${b.delay}s`,
//                                 }}
//                             ></span>
//                         ))}
//                     </div>

//                     {/* ABOUT BOX */}
//                     <div
//                         className="
//                relative z-10 bg-white text-black 
//                py-6 sm:py-8 md:py-10 
//                px-5 sm:px-8 md:px-16 
//                shadow-lg 
//                w-[85%] sm:w-[70%] md:max-w-lg mx-auto
//                before:content-[''] before:absolute before:-inset-2 
//                before:border before:border-dashed before:border-gray-400 before:-z-10
//              "
//                     >
//                         <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
//                             Service
//                         </h1>

//                         <div className="flex items-center justify-center text-sm sm:text-base md:text-lg">
//                             <a href="/" className="text-[#111] font-medium">Home</a>
//                             <FaAngleRight className="mx-2 text-gray-600" />
//                             <span className="text-[#111] font-medium">Service</span>
//                         </div>
//                     </div>

//                 </div>

//             </section>

//             <section className="py-10 bg-white">
//                 <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
//                     {/* 🔹 Services Grid (All Cards Together) */}
//                     <motion.div
//                         variants={cardVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//                     >
//                         {services.map((service, index) => (
//                             <div
//                                 key={index}
//                                 className="group bg-white hover:shadow-lg transition-all duration-300 overflow-hidden relative"
//                             >
//                                 <div className="relative">
//                                     <Image
//                                         src={service.img}
//                                         alt={service.title}
//                                         width={500}
//                                         height={300}
//                                         className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
//                                     />
// <button
//     className="absolute bottom-0 right-2 translate-y-1/2 bg-[#111] text-white text-sm px-4 py-2 font-semibold shadow-md z-10 transition-all duration-300 hover:bg-white hover:text-[#111] border-1 border-[#1a1a1a] border-dashed"
// >
//     Details
// </button>
//                                 </div>
//                                 <div className="p-6">
//                                     <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
//                                     <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </motion.div>

//                     {/* 🔹 Pagination */}
//                     <div className="flex justify-center mt-12 space-x-2">
//                         <button className="border-dashed border-1 border-[#111] px-3 py-1 text-[#111] hover:bg-[#C8A24A] hover:text-white">←</button>
//                         <button className="border-dashed border-1 border-[#111] px-3 py-1 text-[#111] hover:bg-[#C8A24A] hover:text-white">1</button>
//                         <button className="border-dashed border-1 border-[#111] px-3 py-1 text-[#111] hover:bg-[#C8A24A] hover:text-white">2</button>
//                         <button className="border-dashed border-1 border-[#111] px-3 py-1 text-[#111] hover:bg-[#C8A24A] hover:text-white">3</button>
//                         <button className="border-dashed border-1 border-[#111] px-3 py-1 text-[#111] hover:bg-[#C8A24A] hover:text-white">→</button>
//                     </div>
//                 </div>
//             </section>


//         </main>
//     );
// }
"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { home, about } from "@/app/_Components/images";

export default function Servicepage() {
    const [bubbles, setBubbles] = useState([]);
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    // API Base URL
    const API = process.env.NEXT_PUBLIC_API_BASE_URL;

    // Fetch services from backend
    const fetchServices = async () => {
        try {
            const res = await axios.get(`${API}/api/services`);

            if (Array.isArray(res?.data?.data)) {
                setServices(res.data.data);
            } else {
                setServices([]);
            }
        } catch (err) {
            console.error("❌ Failed to load services:", err);
            setServices([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();

        // Create bubbles animation
        const bubbleArray = Array.from({ length: 80 }).map((_, i) => ({
            id: i,
            size: Math.random() * 3 + 7,
            left: Math.random() * 100,
            duration: 6 + Math.random() * 3,
            delay: Math.random() * 3,
        }));

        setBubbles(bubbleArray);
    }, []);

    const cardVariants = {
        hidden: { scale: 1.2, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <main className="overflow-hidden pt-[200px] sm:pt-[170px] md:pt-[180px]">

            {/* HERO SECTION */}
            <section className="relative text-center text-black">
                <div
                    className="relative bg-cover bg-center flex items-center justify-center text-white h-[45vh] sm:h-[55vh] md:h-[65vh]"
                    style={{ backgroundImage: `url(${home.mainImg.src})` }}
                >
                    <div className="absolute inset-0 bg-black/30"></div>

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

                    <div className="relative z-10 bg-white text-black py-6 sm:py-8 md:py-10 px-5 sm:px-8 md:px-16 shadow-lg w-[85%] sm:w-[70%] md:max-w-lg mx-auto before:content-[''] before:absolute before:-inset-2 before:border before:border-dashed before:border-gray-400 before:-z-10">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
                            Service
                        </h1>

                        <div className="flex items-center justify-center text-sm sm:text-base md:text-lg">
                            <a href="/" className="text-[#111] font-medium">
                                Home
                            </a>
                            <FaAngleRight className="mx-2 text-gray-600" />
                            <span className="text-[#111] font-medium">Service</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICE LIST */}
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">

                    {loading ? (
                        <p className="text-center py-10 text-lg">Loading services...</p>
                    ) : services.length === 0 ? (
                        <p className="text-center py-10 text-lg text-gray-500">
                            No services found.
                        </p>
                    ) : (
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {services.map((service) => (
                                <div
                                    key={service._id}
                                    className="group bg-white hover:shadow-lg transition-all duration-300 overflow-hidden relative"
                                >
                                    <div className="relative">
                                        <Image
                                            src={`${API}uploads/services/${service.image}`}
                                            alt={service.name}
                                            width={500}
                                            height={300}
                                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />

                                        <button
                                            className="absolute bottom-0 right-2 translate-y-1/2 bg-[#111] text-white text-sm px-4 py-2 font-semibold shadow-md z-10 transition-all duration-300 hover:bg-white hover:text-[#111] border-1 border-[#1a1a1a] border-dashed"
                                        >
                                            Details
                                        </button>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {service.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{service.description}</p>
                                        <p className="text-[#111] font-bold mt-3">
                                            ₹{service.price}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                </div>
            </section>
        </main>
    );
}
