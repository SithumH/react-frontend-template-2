// src/components/CommunityCTA.tsx
import React from "react";

import bgStars from "@/assets/community_b.mp4";
import mBack from "@/assets/m_back.png";
import dogCar  from "@/assets/community_dog.png";

const CommunityCTA: React.FC = () => {
  return (
    <section id="JoinCommunity" className="w-full px-4 sm:px-8 md:px-12 mt-6">
      <div className="w-full max-w-[1620px] mx-auto">
        <div
          className="
            relative w-full
            rounded-[40px] overflow-hidden shadow-lg
            min-h-[clamp(540px,130vw,680px)]
            sm:min-h-[clamp(560px,110vw,720px)]
            md:min-h-[320px]
            lg:min-h-[347px] xl:min-h-[347px]
            bg-[#0B0D3B]
          "
        >
        {/* Background - Image on mobile, Video on all other sizes */}
        <div 
          className="sm:hidden absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${mBack})` }}
        />
        <video
          src={bgStars}
          className="hidden sm:block absolute inset-0 w-full h-full object-cover"
          loop
          muted
          playsInline
        />

        {/* Readability vignette (stronger on left) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />

        {/* Content */}
        <div
          className="
            relative z-10 h-full
            flex flex-col lg:flex-row items-center lg:items-stretch
            justify-between gap-6 lg:gap-10
            px-6 sm:px-10 lg:px-14
          "
        >
          {/* LEFT: Text block */}
          <div className="w-full flex justify-center lg:pr-[38%]">
            <div className="my-4 lg:-mt-[-40px] lg:mb-0 flex flex-col justify-center items-center">
              <h2
                className="
                  text-white font-extrabold
                  text-[16px] sm:text-[32px] lg:text-[40px] xl:text-[40px]
                  leading-tight tracking-tight text-center whitespace-nowrap
                "
              >
                Be part of BMEM Community
              </h2>

              <p className="mt-2 sm:mt-3 text-white/90 text-xs sm:text-sm text-center">
                Discover the Most Powerful Crypto Community
              </p>

              <button
                className="
                  mt-15 sm:mt-5 btn-global inline-flex items-center justify-center
                  px-6 sm:px-8 py-2.5 sm:py-3
                  rounded-full bg-[#FFC51A] text-black
                  text-sm sm:text-base font-semibold
                  shadow-[0_8px_24px_rgba(255,197,26,0.35)]
                  hover:brightness-95 active:translate-y-[1px]
                  transition
                  w-[269px] sm:w-fit
                "
              >
                Buy BMEM Coin
              </button>
            </div>
          </div>

          {/* RIGHT: Dog image (desktop only) */}
          <div className="hidden lg:block relative w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              src={dogCar}
              alt="BMEM dog driving"
              className="
                pointer-events-none select-none
                w-[340px] sm:w-[420px] lg:w-[560px] xl:w-[640px]
                h-auto object-contain
                lg:absolute lg:right-[-18px] lg:bottom-[-18px]
              "
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

          {/* Soft inner border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[40px] ring-1 ring-white/15" />
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;
