// src/components/PartnersSection.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";

import dog1 from "@/assets/doge1.svg";
import dog2 from "@/assets/doge2.svg";
import dog3 from "@/assets/doge3.svg";
import dog4 from "@/assets/doge4.svg";
import dog5 from "@/assets/doge5.svg";
import dog6 from "@/assets/doge6.svg";
import dog7 from "@/assets/doge7.svg";
import dog8 from "@/assets/doge8.svg";
import dog9 from "@/assets/doge9.svg";
import dog10 from "@/assets/doge10.svg";
import dog11 from "@/assets/doge11.svg";
import dog12 from "@/assets/doge12.svg";

const IMGS = [
  dog1, dog2, dog3, dog4, dog5, dog6,
  dog7, dog8, dog9, dog10, dog11, dog12,
];

/* ------------- Helpers ------------- */
const norm = (s: string) => s.split("/").pop()!.split("?")[0];
const uniqueBySrc = (arr: string[]) => Array.from(new Set(arr.map(norm))).map((_, i) => arr[i]);
const circularNoAdjacent = <T,>(arr: T[]) => {
  if (arr.length <= 1) return arr;
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  if (shuffled[0] === shuffled[shuffled.length - 1]) shuffled.push(shuffled.shift()!);
  return shuffled;
};

/* ------------- Component ------------- */
const PartnersSection: React.FC = () => {
  const [paused, setPaused] = useState(false);
  const logos = useMemo(() => circularNoAdjacent(uniqueBySrc(IMGS)), []);

  return (
    <section
      id="Partners"
      className="w-full bg-white overflow-hidden py-12 px-4 sm:px-8 md:px-12"
    >
      <div className="w-full max-w-[1620px] mx-auto">
        {/* header */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 mb-8">
          <h2 className="text-sm sm:text-lg md:text-xl lg:text-[26px] font-bold text-black text-center lg:text-left whitespace-nowrap">
            Trusted by Industry Leaders <span className="font-normal">|</span> Our Partners
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <ActionBtn label="Partners With Us" />
            <ActionBtn label="See All Partners" />
          </div>
        </div>

        {/* smooth marquee */}
        <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 [mask-image:linear-gradient(to_right,#000,transparent)]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 [mask-image:linear-gradient(to_left,#000,transparent)]" />

        <div
          className="h-[180px] sm:h-[200px] md:h-[220px] [--gap:24px] [--card:clamp(160px,18vw,210px)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {/* Two identical tracks → smooth infinite scroll */}
          <div
            className={`flex flex-nowrap items-center gap-[var(--gap)] will-change-transform ${
              paused ? "" : "animate-marquee"
            }`}
          >
            {[...logos, ...logos].map((src, i) => (
              <LogoCard key={`logo-${i}-${norm(src)}`} src={src} />
            ))}
          </div>
        </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* move one full track width */
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

function LogoCard({ src }: { src: string }) {
  return (
    <figure
      className="shrink-0 rounded-[16px] overflow-hidden bg-white shadow-sm"
      style={{ width: "var(--card)", height: "var(--card)" }}
    >
      <img
        src={src}
        alt="partner-logo"
        className="block w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
    </figure>
  );
}

function ActionBtn({ label }: { label: string }) {
  return (
    <button
      className="btn-global
        px-6 py-2.5 rounded-full bg-black text-white
        text-sm sm:text-[15px] font-medium
        hover:bg-gray-900 active:translate-y-[1px]
        transition-all shadow-[0_6px_16px_rgba(0,0,0,0.15)]
      "
    >
      {label}
    </button>
  );
}

export default PartnersSection;
