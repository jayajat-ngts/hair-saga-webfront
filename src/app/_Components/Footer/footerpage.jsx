import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import { home } from "@/app/_Components/images";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] mt-20 relative pt-28 pb-16 px-6 lg:px-20">
      {/* Newsletter */}
      <div className="absolute left-1/2 -top-20 transform -translate-x-1/2 w-full max-w-[650px]">
        <div className="bg-white border border-dashed border-gray-300 p-6 sm:p-8 text-center shadow-lg mx-3">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-5">
            Subscribe Our Newsletter
          </h3>

          <form className="flex justify-center items-center gap-2 sm:gap-0 flex-row">
            <input
              type="email"
              placeholder="Your Mail"
              className="border border-gray-300 p-2 sm:p-3 w-[70%] sm:w-2/3 focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-[#111] text-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-[#111] transition text-sm sm:text-base"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>


      {/* Footer Content */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-12 ">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#111] ">About Us</h4>
          <p className="text-gray-600 mb-6 text-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            consequatur veritatis neque quos tempore nostrum voluptate molestiae
            saepe.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: FaFacebookF, link: "https://facebook.com/yourpage" },

              { icon: FaInstagram, link: "https://www.instagram.com/hairsaga.india?igsh=OTFnYnJpOG1xdG9u" },

            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-[#111] border border-gray-200 text-[#ffffff] hover:bg-[#ffffff] hover:text-[#111] transition cursor-pointer"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Popular News */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#111] ">Popular News</h4>
          <div className="space-y-5">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex justify-between border-b-2 border-dashed border-[#e6e6e6] pb-4 gap-4"
              >
                <Image
                  src={home.footerImg1}
                  alt="Popular news"
                  width={70}
                  height={70}
                  className="object-cover rounded"
                />
                <div>
                  <p className="text-gray-700 text-md leading-snug">
                    Magnam ipsa optio hic sequi fuga cumque minima, harum.
                  </p>
                  <p className="text-[#111] text-md mt-1">24 Aug, 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h4 className="text-lg  text-[#111] font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3 border-b-2 border-dashed border-[#e6e6e6] py-3">
              <MapPin size={28} className="text-[#111]" />
              G5 BUSINESS ISLAND, GATE 2, opp.SAMAR PARK, Garg Resort Colony, Nipania,
              Indore, Madhya Pradesh 452010, India
            </li>

            <li className="flex items-center gap-3 border-b-2 border-dashed border-[#e6e6e6] py-3">
              <Phone size={18} className="text-[#111]" /> +918889399949
            </li>

            <li className="flex items-center gap-3 border-b-2 border-dashed border-[#e6e6e6] py-3">
              <Mail size={18} className="text-[#111]" />
              hairsagaindia1@gmail.com
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 text-center mt-16 pt-6 text-gray-500 text-sm">
        Copyright © 2022 by{" "}
        <span className="text-[#111] font-medium">Hair Saga</span>
      </div>
    </footer>

  );
}
