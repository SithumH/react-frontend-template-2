// src/components/Hero_t.tsx
import React from "react";
import heroDoge from "@/assets/hero_doge.gif";
import camelDoge from "@/assets/camel_doge.png";
import coinDoge from "@/assets/coin_doge.png";

/* helper for commas */
function renderCommaBreaks(str: string) {
  const parts = str.split(/\s*,\s*/);
  return parts.map((p, i) => (
    <React.Fragment key={i}>
      {p}
      {i < parts.length - 1 && (
        <>
          ,<br />
        </>
      )}
    </React.Fragment>
  ));
}

/* helper for community text */
function renderCustomBreaks() {
  return (
    <>
      Join our community
      and be part of
      something amazing!
      Connect, collaborate,
      and grow with like-
      minded individuals.
      Let's build the future
      together
    </>
  );
}

const Hero_t: React.FC = () => {
  return (
    <section id="About" className="w-full bg-white">
      <div className="w-full mx-auto max-w-[1620px] px-3 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 md:py-12">
        <BigHeroCard />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 w-full mt-4 md:mt-6 lg:mt-8">
          <SmallCardCommunity />
          <SmallCardBuyNow />
        </div>
      </div>
    </section>
  );
};

/* big black top card */
function BigHeroCard() {
  return (
    <div className="relative bg-black rounded-[24px] sm:rounded-[28px] md:rounded-[36px] shadow-lg overflow-hidden w-full max-w-[92vw] mx-auto lg:max-w-none lg:mx-0 min-h-[clamp(480px,56vw,420px)] md:min-h-[420px]">
      <div className="relative z-10 h-full flex items-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 py-8 md:py-10">
        <div className="max-w-[62ch]">
          <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[15px] leading-relaxed">
            Welcome to <strong>BMEM</strong> where innovation meets possibility.
            Our token is more than just digital currency; it’s a revolution
            designed to empower individuals, communities, and businesses in the
            age of blockchain and decentralized technology. we aim to bridge the
            gap between blockchain technology and real-world usability. Our
            mission is to make decentralized finance ( DeFi ) accessible,
            secure, and inclusive for everyone, while providing tools that
            empower individuals to take control of their financial freedom.
          </p>
        </div>
      </div>
      <img
        src={heroDoge}
        alt="BMEM Doge"
        className="absolute  right-[-7px] bottom-[-18px] w-[400px] lg:w-[460px] xl:w-[840px] h-auto object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,.35)] pointer-events-none select-none"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

/* left small card (camel) */
function SmallCardCommunity() {
  return (
    <div className="relative overflow-hidden bg-black rounded-[24px] sm:rounded-[28px] md:rounded-[36px] shadow-lg w-full max-w-[92vw] mx-auto lg:max-w-none lg:mx-0 min-h-[400px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px]">
      <img
        src={camelDoge}
        alt="Join Community"
        className="absolute right-[-8px] bottom-[-18px] w-[56%] sm:w-[50%] md:w-[48%] lg:w-[46%] h-auto object-contain pointer-events-none select-none"
        loading="lazy"
        decoding="async"
      />
      <div className="relative z-10 h-full flex flex-col justify-center pl-4 sm:pl-6 md:pl-8 pr-[35%] sm:pr-[38%] ">
        <div className="flex flex-col items-center">
          <p className="text-white/90 text-[14px] sm:text-[15px] md:text-[16px] leading-snug max-w-[34ch] text-center mb-4 ">
            {renderCustomBreaks()}
          </p>
    <button className="btn-global inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#1E1E1E] sm:bg-[#FFC51A] text-white sm:text-black text-sm sm:text-base font-semibold shadow-[0_8px_24px_rgba(30,30,30,0.35)] sm:shadow-[0_8px_24px_rgba(255,197,26,0.35)] hover:brightness-95 active:translate-y-[1px] transition w-fit">
            Join Community
          </button>
        </div>
      </div>
    </div>
  );
}

/* right small card (Buy Now) — EXACT MATCH FOR BOTH IMAGES */
function SmallCardBuyNow() {
  return (
    <div className="relative overflow-hidden bg-black rounded-[24px] sm:rounded-[28px] md:rounded-[36px] shadow-lg w-full max-w-[92vw] mx-auto lg:max-w-none lg:mx-0 min-h-[300px] sm:min-h-[340px] md:min-h-[360px] lg:min-h-[380px]">
      {/* image always anchored bottom-right */}
      <img
        src={coinDoge}
        alt="Buy Now"
        className="absolute right-[-6px] bottom-[-14px] w-[58%] sm:w-[52%] md:w-[50%] lg:w-[48%] h-auto object-contain pointer-events-none select-none"
        loading="lazy"
        decoding="async"
      />

      {/* ==== Desktop / Tablet Layout ==== */}
      <div className="hidden sm:flex flex-col justify-center h-full pl-8 md:pl-10">
  <button className="btn-global inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#FFCD05] text-black text-[15px] sm:text-[16px] font-semibold shadow-[0_8px_24px_rgba(255,205,5,0.35)] hover:brightness-95 active:translate-y-[1px] transition w-[140px] sm:w-[160px] mb-10">
          Buy Now
        </button>
        <p className="text-white/85 text-[13px] md:text-[18px] w-[200px] text-center leading-tight">
          Don&apos;t miss out! Grab yours now and be part of the future!
        </p>
      </div>

      {/* ==== Mobile Layout (vertical stack) ==== */}
      <div className="flex sm:hidden flex-col items-center text-center justify-start float-start pl-5 mt-10  ">
        <p className="text-white/90 text-[13px] leading-snug  w-[150px] mb-40">
          Don&apos;t miss out! Grab yours now and be part of the future!
        </p>
  <button className="btn-global inline-flex mb-10 -ml-5  items-center justify-center px-6 py-2.5 rounded-full bg-[#1E1E1E] text-white text-[14px] font-semibold shadow-[0_8px_24px_rgba(30,30,30,0.35)] hover:brightness-95 active:translate-y-[1px] transition w-[120px]">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default Hero_t;
