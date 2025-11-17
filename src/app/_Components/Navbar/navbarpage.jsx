"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Clock } from "lucide-react";
import { usePathname } from "next/navigation";
import { navbar } from "../images";

const Navbarpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    // {
    //   name: "Service",
    //   href: "/Service",
    //   dropdown: [
    //     { name: "Service", href: "/Service" },
    //     // { name: "Service Details", href: "/serviceDetail" },
    //   ],
    // },
    { name: "Service", href: "/Service" },
    { name: "Gallery", href: "/gallery" },
    // {
    //   name: "Pages",
    //   href: "/pages",
    //   dropdown: [
    //     { name: "Team", href: "/pages" },
    //     { name: "404 Page", href: "/404" },
    //   ],
    // },
    // {
    //   name: "Blog",
    //   href: "/blog",
    //   dropdown: [
    //     { name: "Blog", href: "/blog" },
    //     // { name: "Blog Details", href: "/blogDetails" },
    //   ],
    // },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50  shadow-sm">

      {/* ===== TOP INFO BAR ===== */}
      <div className="h-auto border-b border-gray-200 px-4 sm:px-8 py-3 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">

          {/* Left Section */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">

            {/* Phone */}
            <div className="flex items-center gap-2 text-black">
              <Phone size={16} />
              <span className="font-medium whitespace-nowrap">
                +918889399949
              </span>
            </div>

            {/* Timing */}
            <div className="flex items-center gap-2 text-black">
              <Clock size={16} />
              <span className="whitespace-nowrap">
                Monday - Sunday (10:30AM - 9PM)
              </span>
            </div>

          </div>

          {/* Right Section */}
          <Link
            href="/booking"
            className="bg-[#111] text-white px-4 py-2 text-sm font-medium rounded hover:bg-black transition"
          >
            Book now
          </Link>
        </div>
      </div>


      {/* ===== MAIN NAVBAR ===== */}
      <div
        className={`px-6 py-3 transition-all duration-500 ${isHome
          ? scrolled
            ? "bg-[#1a1a1a] text-[#ffffff] shadow-md"
            : "bg-transparent text-white border-b border-white/30"
          : "bg-[#1a1a1a] text-white shadow-md"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src={navbar.hairsagaLogo}
                alt="Hair Saga Logo"
                width={100}
                height={100}
                className="object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* ===== Desktop Menu ===== */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group cursor-pointer">
                <div className="flex items-center">
                  <Link
                    href={link.href}
                    className={`flex items-center space-x-1 text-sm font-medium transition ${isHome && !scrolled
                      ? "text-white hover:text-[#ffffff]"
                      : "text-white hover:text-[#ffffff]"
                      }`}
                  >
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown className="w-4 h-4 text-[#ffffff]" />
                    )}
                  </Link>
                </div>

                {/* ===== Dropdowns for Desktop ===== */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#111] hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}

                <span
                  className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#ffffff] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </li>
            ))}
          </ul>

          {/* ===== Toggle Button (for iPad & Mobile) ===== */}
          <button
            className={`lg:hidden transition ${isHome && !scrolled ? "text-white" : "text-white"
              }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* ===== Mobile + iPad Menu ===== */}
        {isOpen && (
          <ul
            className={`lg:hidden mt-4 flex flex-col space-y-3 p-4 rounded-lg transition-all duration-500 ${isHome && !scrolled
              ? "bg-[#1a1a1a] text-white"
              : "bg-white text-black shadow-md"
              }`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <div
                  onClick={() =>
                    link.dropdown
                      ? setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                      : setIsOpen(false)
                  }
                  className="flex items-center justify-between text-sm font-medium hover:text-[#111] cursor-pointer"
                >
                  <Link href={link.href}>{link.name}</Link>
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 text-[#ffffff] transition-transform duration-300 ${openDropdown === link.name ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {/* Mobile Dropdown Items */}
                {link.dropdown && openDropdown === link.name && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.dropdown.map((sub, idx) => (
                      <Link
                        key={idx}
                        href={sub.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-gray-600 hover:text-[#111]"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbarpage;
