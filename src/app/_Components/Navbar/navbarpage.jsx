
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { navbar } from "../images";
const Navbarpage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // Scroll background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    {
      name: "Service",
      href: "/Service",
      dropdown: [
        { name: "Service", href: "/Service" },
        { name: "Service Details", href: "/serviceDetail" },
      ],
    },
    {
      name: "Pages",
      href: "/pages",
      dropdown: [
        { name: "Team", href: "/pages" },
        { name: "404 Page", href: "/404" },
      ],
    },
    {
      name: "Blog",
      href: "/blog",
      dropdown: [
        { name: "Blog", href: "/blog" },
        { name: "Blog Details", href: "/blogDetails" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-3 transition-all duration-500 ${
        isHome
          ? scrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white border-b border-white/30"
          : "bg-white text-black shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={navbar.hairLogo}
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
                  className={`flex items-center space-x-1 text-sm font-medium transition ${
                    isHome && !scrolled
                      ? "text-white hover:text-[#c7a05c]"
                      : "text-black hover:text-[#c7a05c]"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4 text-[#c7a05c]" />
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
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#c7a05c] hover:text-white"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

              <span
                className={`absolute left-0 bottom-[-2px] h-[2px] bg-[#c7a05c] transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </li>
          ))}
        </ul>

        {/* ===== Toggle Button (for iPad & Mobile) ===== */}
        <button
          className={`lg:hidden transition ${
            isHome && !scrolled ? "text-white" : "text-black"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* ===== Mobile + iPad Menu ===== */}
      {isOpen && (
        <ul
          className={`lg:hidden mt-4 flex flex-col space-y-3 p-4 rounded-lg transition-all duration-500 ${
            isHome && !scrolled
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
                className="flex items-center justify-between text-sm font-medium hover:text-[#c7a05c] cursor-pointer"
              >
                <Link href={link.href}>{link.name}</Link>
                {link.dropdown && (
                  <ChevronDown
                    className={`w-4 h-4 text-[#c7a05c] transition-transform duration-300 ${
                      openDropdown === link.name ? "rotate-180" : ""
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
                      className="block text-sm text-gray-600 hover:text-[#c7a05c]"
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
    </nav>
  );
};

export default Navbarpage;
