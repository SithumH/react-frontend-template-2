import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      {/* Mobile gradient strip */}
      <div
        className="block lg:hidden absolute inset-0 h-[64px] pointer-events-none"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFCD05 98.4%)" }}
      />

      {/* Top bar */}
      <div
        className="
          relative z-10 h-[64px]
          w-full px-3 sm:px-6 md:px-8 lg:px-10 xl:px-12
          xl:max-w-[1620px] xl:mx-auto
          grid grid-cols-[auto_1fr_auto] items-center gap-3
        "
      >
        {/* Left: mobile text / desktop circular logo */}
        <div className="flex items-center">
          {/* Mobile text */}
          <div
            className="
              block lg:hidden w-[61px] h-[21px]
              flex items-center justify-center font-normal
              text-[16px] leading-[100%] text-black select-none
              cursor-pointer hover:scale-105 transition-transform duration-300
            "
            style={{ fontFamily: "'SNAP', cursive" }}
            onClick={() => window.location.reload()}
          >
            BMEM
          </div>

          {/* Desktop circular logo */}
          <button
            className="
              hidden lg:flex items-center justify-center
              w-[48px] h-[48px] xl:w-[61px] xl:h-[61px]
              rounded-full overflow-hidden ring-2 ring-[#FFD600]/70 bg-white
              hover:scale-105 transition-transform duration-300
            "
            onClick={() => window.location.reload()}
            aria-label="Home"
          >
            <img src={logo} alt="Logo" className="w-full h-full object-cover" />
          </button>
        </div>

        {/* Center: desktop nav */}
        <ul
          className="
            hidden lg:flex justify-center items-center
            gap-6 xl:gap-10 2xl:gap-[50px]
            font-bold uppercase text-black
            text-[16px] leading-[40px] tracking-[0.08em]
            xl:text-[18px] xl:leading-[48px] 2xl:text-[20px]
          "
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <li><a href="#Home" className="hover:text-black/70">Home</a></li>
          <li><a href="#About" className="hover:text:black/70 hover:text-black/70">About</a></li>
          <li><a href="#Tokenomics" className="hover:text-black/70">Tokenomics</a></li>
          <li><a href="#Partners" className="hover:text:black/70 hover:text-black/70">Partners</a></li>
          <li><a href="#JoinCommunity" className="hover:text-black/70">Join Community</a></li>
        </ul>

        {/* Right: CTA (desktop) + Hamburger (mobile) */}
        <div className="flex items-center justify-end gap-2">
          <button
            className="
              hidden lg:inline-block bg-[#FFD600] text-black font-bold
              text-[18px] xl:text-[20px] 2xl:text-[24px]
              leading-[100%] px-5 py-2.5 xl:px-7 xl:py-3 rounded-full shadow-sm
              btn-global hover:scale-105 transition-transform duration-300
            "
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Buy Now
          </button>

          {/* Hamburger (mobile) */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-9 h-7 relative z-20"
            onClick={() => setIsOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span className={`block h-[3px] w-7 bg-black rounded transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[3px] w-7 bg-black rounded my-[6px] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[3px] w-7 bg-black rounded transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`
          lg:hidden absolute top-full left-0 w-full bg-white shadow-lg
          transition-[opacity,transform,visibility] duration-300
          ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}
        `}
      >
        <div
          className="
            w-full px-4 sm:px-6 md:px-10 pb-4 pt-2
            border-t border-black/10
            flex flex-col items-stretch gap-1.5
            text-black font-bold uppercase
            text-[18px] leading-[48px] tracking-[0.08em]
          "
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <a href="#Home" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#FFCD05]">Home</a>
          <a href="#About" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#FFCD05]">About</a>
          <a href="#Tokenomics" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#FFCD05]">Tokenomics</a>
          <a href="#Partners" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#FFCD05]">Partners</a>
          <a href="#JoinCommunity" onClick={() => setIsOpen(false)} className="py-2 hover:text-[#FFCD05]">Join Community</a>

          <button
            className="
              mt-2 self-start bg-[#FFD600] text-black font-bold
              text-[16px] leading-[100%] px-6 py-2 rounded-full shadow-sm
              btn-global hover:scale-105 transition-transform duration-300
            "
            style={{ fontFamily: "'Inter', sans-serif" }}
            onClick={() => setIsOpen(false)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
