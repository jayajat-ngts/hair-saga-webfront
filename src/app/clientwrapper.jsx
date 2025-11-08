"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Navbar from "./_Components/Navbar/page";
import Footer from "./_Components/Footer/page";
// import { Children } from "react";

const Clientwrapper = ({ children }) => {
  const path = usePathname();
  const hideRoute = ["/login", "/register"];

  // Hide Navbar & Footer on login/register pages only
  const shouldHideLayout = hideRoute.includes(path);

  return (
    <div>
      {!shouldHideLayout && <Navbar />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default Clientwrapper;
