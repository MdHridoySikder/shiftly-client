import React from "react";

const Footer = () => {
  return (
    <footer className="text-base-content bg-primary mt-20 relative font-sans overflow-hidden border-t border-gray-900">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10 text-center sm:text-left">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <div className="flex items-center gap-3 group cursor-pointer w-max">
            <div className="relative w-11 h-11 flex items-center justify-center rounded-xl bg-secondary shadow-[0_4px_15px_rgba(0,0,0,0.4)] overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />

              <span className="relative font-black text-2xl bg-gradient-to-r from-blue-400 via-indigo-200 to-white bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500 font-mono italic">
                S
              </span>
            </div>

            <div className="flex flex-col justify-center text-left">
              <span className="text-lg font-black tracking-wider text-base-content group-hover:text-black transition-all duration-300">
                Shiftly
              </span>
            </div>
          </div>

          <p className="text-[10px] tracking-[0.25em] font-semibold uppercase text-base-content/70">
            EMBRACE THE SHIFT
          </p>

          <p className="text-base-content/80 text-[13px] leading-relaxed max-w-[280px]">
            Fast, secure & reliable parcel delivery service across Bangladesh.
            We make your delivery experience smooth and trusted.
          </p>

          {/* Social */}
          <div className="flex gap-3.5 pt-2">
            <a className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary text-white hover:text-black hover:bg-blue-600 transition-all duration-300">
              F
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary text-white hover:text-black hover:bg-sky-500 transition-all duration-300">
              in
            </a>
            <a className="w-9 h-9 flex items-center justify-center rounded-xl bg-secondary text-white hover:text-black hover:bg-emerald-500 transition-all duration-300">
              W
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[15px] font-bold mb-5 uppercase text-base-content border-l-2 border-blue-500 pl-3">
            Quick Links
          </h3>

          <ul className="space-y-3 text-[13px]">
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
                className="group cursor-pointer w-max hover:text-black transition-colors"
              >
                <span>{link}</span>
                <span className="block h-[1px] w-0 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-[15px] font-bold mb-5 uppercase text-base-content border-l-2 border-emerald-500 pl-3">
            Support
          </h3>

          <ul className="space-y-3 text-[13px]">
            {["About Us", "Contact Us", "Terms & Services", "Support Us"].map(
              (link, idx) => (
                <li
                  key={idx}
                  className="group cursor-pointer w-max hover:text-black transition-colors"
                >
                  <span>{link}</span>
                  <span className="block h-[1px] w-0 bg-emerald-400 group-hover:w-full transition-all duration-300" />
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-[15px] font-bold uppercase border-l-2 border-purple-500 pl-3 text-base-content">
            Contact
          </h3>

          <div className="space-y-3 text-[13px] text-base-content/80">
            <p className="hover:text-black transition-colors">
              📍 Chattogram, Bangladesh
            </p>

            <p className="hover:text-black transition-colors">
              📞 +880 1XXXXXXXXX
            </p>

            <p className="hover:text-black transition-colors break-all">
              ✉️ indivary@shiftly.com
            </p>
          </div>

          {/* Newsletter */}
          <div className="pt-2">
            <div className="flex h-10 bg-base-200 rounded-xl p-1 border border-base-300 focus-within:border-blue-500 transition">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent text-xs px-2 outline-none text-base-content"
              />
              <button className="bg-white text-black text-xs px-4 rounded-lg hover:bg-gray-200 transition">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
