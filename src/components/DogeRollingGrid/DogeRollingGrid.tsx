// src/components/DogeRollingGrid.tsx
import React from "react";

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

// deterministic shuffle so each column has a different order
function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = arr.slice();
  let s = seed || 1;
  const rnd = () => {
    s = (s * 1664525 + 1013904223) % 2 ** 32;
    return s / 2 ** 32;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  if (a[0] === a[a.length - 1]) {
    const j = Math.max(1, Math.floor(rnd() * (a.length - 1)));
    [a[j], a[a.length - 1]] = [a[a.length - 1], a[j]];
  }
  return a;
}

const DogeRollingGrid: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12">
      <div className="w-full max-w-[1620px] mx-auto">
        <div
          className="
            relative w-full h-[457px] md:h-[755px]
            rounded-[24px] overflow-hidden
            p-3 md:p-4
          "
        >
        {/* ----- MOVING GRID (background) ----- */}
        <div className="absolute inset-0 rounded-[24px] bg-[#cfc7c7]">
          <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />
          <div className="relative flex h-full justify-between">
            {Array.from({ length: 6 }).map((_, col) => (
              <Column
                key={col}
                images={seededShuffle(IMGS, col + 1)}
                duration={10 + col * 1.2}
                delay={col * 0.4}
                className={col % 2 ? "translate-x-1" : "-translate-x-1"}
                downward={col % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* ----- COLOR WASH ABOVE GRID ----- */}
        <div className="absolute inset-0 rounded-[24px] bg-[#BDB5B5]/60 pointer-events-none" />

        {/* ----- FOREGROUND CONTENT (centered text + buttons) ----- */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="text-center px-4">
            <p className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-tight text-black">
              BMEM was born as a meme coin on the Binance and Ethereum (ETH).
            </p>

            <div className="mt-4">
              <p className="font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-tight text-black">
                BMEM Contract Addresses
              </p>
              <p className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-tight text-black">
                0% Fee on ETH
              </p>
            </div>

            <p className="mt-4 font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-tight text-black">
              Built on Binance and ETH
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-5">
              <ActionBtn label="Ethereum Addresses" onClick={() => { /* add action */ }} />
              <ActionBtn label="Binance Addresses" onClick={() => { /* add action */ }} />
            </div>
          </div>
        </div>

        {/* keyframes */}
        <style>{`
          @keyframes scrollDown {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          @keyframes scrollUp {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }
        `}</style>
        </div>
      </div>
    </section>
  );
};

function Column({
  images,
  duration = 18,
  delay = 0,
  className = "",
  downward = true,
}: {
  images: string[];
  duration?: number;
  delay?: number;
  className?: string;
  downward?: boolean;
}) {
  return (
    <div className={`relative h-full rounded-xl ${className} group overflow-hidden flex-1 mx-2`}>
      <div
        className="absolute inset-0 will-change-transform"
        style={{
          animation: (downward ? "scrollDown" : "scrollUp") + ` ${duration}s linear infinite`,
          animationDelay: `${delay}s`,
        }}
      >
        <Stack images={images} />
        <Stack images={images} />
      </div>
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .group > div { animation: none; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function Stack({ images }: { images: string[] }) {
  return (
    <div className="flex flex-col gap-[5px] md:gap-[70px]">
      {images.map((src, i) => (
        <figure
          key={i}
          className="w-full aspect-[1/1.1] rounded-[14px] overflow-hidden shadow-sm"
        >
          <img
            src={src}
            alt={`dog-${i + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </figure>
      ))}
    </div>
  );
}

/** Reusable pill button */
function ActionBtn({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="btn-global
        inline-flex items-center gap-2
        px-5 py-2.5 rounded-full
        bg-black text-white
        text-sm sm:text-[15px] font-medium
        shadow-[0_6px_16px_rgba(0,0,0,0.15)]
        ring-1 ring-black/10
        hover:brightness-110 active:translate-y-[1px]
        transition
      "
    >
      {label}
      {/* tiny link-ish glyph */}
      <svg width="14" height="14" viewBox="0 0 24 24" className="opacity-80">
        <path
          d="M14 3h7v7m0-7L10 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default DogeRollingGrid;
