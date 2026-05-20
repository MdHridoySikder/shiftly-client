import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Deliveries", path: "#" },
    { name: "Categories", path: "/#" },
    { name: "Contact", path: "/#" },
    { name: "About Us", path: "/#" },
    { name: "Support Us", path: "/#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-base-300 text-base-content font-sans bg-primary">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Glow */}
        <div className="absolute top-0 left-10 w-48 h-10 bg-blue-500/10 blur-[40px] rounded-full" />

        {/* BRAND */}
        <Link
          to="/"
          className="flex items-center gap-3 group cursor-pointer z-10"
        >
          <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-secondary shadow-[0_4px_15px_rgba(0,0,0,0.4)] overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

            <span className="relative font-black text-2xl bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 font-mono italic">
              S
            </span>
          </div>

          <span className="text-lg font-black tracking-wider text-base-content group-hover:text-black transition">
            Shiftly
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="relative group hover:text-black transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            to="/track"
            className="h-10 px-5 flex items-center rounded-xl bg-black text-white hover:bg-gray-800 transition active:scale-95"
          >
            Track Order
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl z-10"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-base-100 border-b border-base-300 backdrop-blur-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="flex flex-col items-center gap-4 py-6 text-sm">
          {links.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-black transition"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/track"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 h-10 flex items-center bg-black text-white rounded-xl active:scale-95"
          >
            Track Order
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
