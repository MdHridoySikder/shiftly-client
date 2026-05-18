import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f1319]/70 backdrop-blur-md border-b border-gray-900/80 text-white font-sans transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* BACKGROUND GLOW EFFECT (Matching with Footer) */}
        <div className="absolute top-0 left-10 w-48 h-10 bg-blue-500/10 rounded-full blur-[40px] pointer-events-none" />

        {/* BRAND LOGO SECTION (Same as Footer) */}
        <div className="flex items-center gap-3 group cursor-pointer relative z-10">
          {/* card S icon */}
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.4)] overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
            {/* Bg glow color */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
            {/* S */}
            <span className="relative font-black text-xl tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 font-mono italic">
              S
            </span>
          </div>

          {/* Brand name */}
          <span className="text-lg font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-white transition-all duration-500">
            Shiftly
          </span>
        </div>

        {/* DESKTOP NAV LINKS (Hidden on Mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-[14px] font-medium text-gray-300">
          {["Home", "Deliveries", "Categories", "Contact", "About Us"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative group hover:text-white transition-colors duration-200 py-2"
              >
                {item}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-blue-500 to-indigo-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ),
          )}
        </div>

        {/* DESKTOP CALL TO ACTION BUTTON */}
        <div className="hidden md:flex items-center">
          <button className="h-10 bg-white text-black font-semibold px-5 text-xs rounded-xl hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-[0_4px_15px_rgba(255,255,255,0.1)]">
            Track Order
          </button>
        </div>

        {/* MOBILE MENU HAMBURGER BUTTON */}
        <div className="md:hidden flex items-center relative z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white focus:outline-none p-2 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE DROP-DOWN MENU */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-[#0a0d12]/95 backdrop-blur-lg border-b border-gray-900 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col items-center">
          {["Home", "Deliveries", "Categories", "Contact", "About Us"].map(
            (item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-blue-400 text-sm font-medium tracking-wide transition-colors duration-200 py-1"
              >
                {item}
              </a>
            ),
          )}
          <button className="w-full h-10 mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs rounded-xl hover:opacity-90 transition-all active:scale-95">
            Track Order
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
