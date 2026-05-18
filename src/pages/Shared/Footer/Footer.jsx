import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f1319] to-[#05070a] text-white mt-20 relative font-sans overflow-hidden border-t border-gray-900">
      {/* (Decorative Blur) */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container and Responsive Grid */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10 text-center sm:text-left">
        {/* Brand Section */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          {/* STYLISH TEXT/ICON "S" LOGO */}
          <div className="flex items-center gap-3 group cursor-pointer w-max">
            {/* card S icon */}
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-gray-800 shadow-[0_4px_15px_rgba(0,0,0,0.4)] overflow-hidden group-hover:border-blue-500/50 transition-all duration-500">
              {/* Bg color */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

              {/* S */}
              <span className="relative font-black text-2xl tracking-tighter bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 font-mono italic">
                S
              </span>
            </div>

            {/* Brand name (Shiftly) */}
            <div className="flex flex-col justify-center text-left">
              <span className="text-xl font-black tracking-wider bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-white transition-all duration-500">
                Shiftly
              </span>
            </div>
          </div>

          <p className="text-[10px] text-gray-400 tracking-[0.25em] font-semibold uppercase bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent">
            EMBRACE THE SHIFT
          </p>

          <p className="text-gray-400/90 text-[13px] leading-relaxed max-w-[280px] pt-1 mx-auto sm:mx-0">
            Fast, secure & reliable parcel delivery service across Bangladesh.
            We make your delivery experience smooth and trusted.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3.5 pt-2 justify-center sm:justify-start">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#171e26] text-gray-400 hover:text-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#171e26] text-gray-400 hover:text-white hover:bg-sky-500 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#171e26] text-gray-400 hover:text-white hover:bg-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.849-4.417 9.851-9.849.002-2.63-1.023-5.101-2.885-6.963-1.861-1.862-4.331-2.887-6.962-2.888-5.432 0-9.85 4.416-9.852 9.849-.001 2.025.524 3.593 1.522 5.182l-.991 3.616 3.701-.97z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[15px] font-bold mb-5 tracking-wider uppercase text-gray-100 border-l-2 border-blue-500 pl-3 hidden sm:block">
            Quick Links
          </h3>
          <h3 className="text-[15px] font-bold mb-4 tracking-wider uppercase text-gray-100 sm:hidden">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400 text-[13px] flex flex-col items-center sm:items-start">
            {[
              "Home",
              "Deliveries",
              "Categories",
              "Contact",
              "Delivering",
              "Contact Us",
            ].map((link, idx) => (
              <li
                key={idx}
                className="group relative w-max cursor-pointer hover:text-white transition-colors duration-200"
              >
                <span>{link}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[15px] font-bold mb-5 tracking-wider uppercase text-gray-100 border-l-2 border-emerald-500 pl-3 hidden sm:block">
            Support
          </h3>
          <h3 className="text-[15px] font-bold mb-4 tracking-wider uppercase text-gray-100 sm:hidden">
            Support
          </h3>
          <ul className="space-y-3 text-gray-400 text-[13px] flex flex-col items-center sm:items-start">
            {[
              "About Us",
              "Contact Us",
              "Terms & Services",
              "Support Us",
              "Contact Us",
            ].map((link, idx) => (
              <li
                key={idx}
                className="group relative w-max cursor-pointer hover:text-white transition-colors duration-200"
              >
                <span>{link}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-emerald-400 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Newsletter */}
        <div className="flex flex-col space-y-6 items-center sm:items-start">
          <div className="w-full flex flex-col items-center sm:items-start">
            <h3 className="text-[15px] font-bold mb-5 tracking-wider uppercase text-gray-100 border-l-2 border-purple-500 pl-3 hidden sm:block">
              Contact
            </h3>
            <h3 className="text-[15px] font-bold mb-4 tracking-wider uppercase text-gray-100 sm:hidden">
              Contact
            </h3>

            <div className="space-y-3.5 text-gray-400 text-[13px] w-full max-w-[280px] sm:max-w-none">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 group">
                <span className="text-base group-hover:scale-110 transition-transform">
                  📍
                </span>
                <p className="leading-tight group-hover:text-gray-300 transition-colors">
                  1234 Predardey Road,
                  <br />
                  Chattogram, Bangladesh,
                  <br />
                  Malka Broad, Shiftly, GA 25026
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 group">
                <span className="text-base group-hover:scale-110 transition-transform">
                  📞
                </span>
                <p className="group-hover:text-gray-300 transition-colors">
                  +880 1XXXXXXXXX
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 group">
                <span className="text-base group-hover:scale-110 transition-transform">
                  ✉️
                </span>
                <p className="hover:text-blue-400 cursor-pointer transition-colors break-all">
                  indivary@shiftly.com
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="pt-2 w-full max-w-[260px]">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-3.5">
              Newsletter
            </h4>
            <div className="flex h-10 w-full bg-[#1a222d]/60 backdrop-blur-md rounded-xl p-1 border border-gray-800/80 focus-within:border-blue-500/50 transition-all duration-300">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent pl-2.5 pr-1 text-xs text-gray-200 placeholder-gray-500 focus:outline-none text-center sm:text-left"
              />
              <button className="bg-white text-black font-semibold px-4 text-xs rounded-lg hover:bg-gray-200 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md whitespace-nowrap">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-900/60 bg-[#07090d] relative z-10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-xs text-center sm:text-left relative">
          <div className="w-full flex flex-wrap items-center justify-center gap-1.5 tracking-wide">
            <span>© {new Date().getFullYear()} </span>
            <span className="text-gray-400 font-medium">Shiftly</span>
            <span>. Built with</span>
            <span className="text-red-500 animate-pulse text-sm">❤️</span>
            <span>for fast delivery.</span>
          </div>

          {/* Star Icon - hide */}
          <div className="hidden sm:block absolute bottom-5 right-6 opacity-25 animate-spin [animation-duration:10s]">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-blue-400"
            >
              <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
