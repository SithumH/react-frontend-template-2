import React from "react";
import desktopVideo from "@/assets/herob.mp4";
import mobileVideo from "@/assets/hero_m.mp4";

function useMediaQuery(q: string) {
  const [m, setM] = React.useState(
    typeof window !== "undefined" ? window.matchMedia(q).matches : false
  );
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const on = (e: MediaQueryListEvent) => setM(e.matches);
    if (mq.addEventListener) mq.addEventListener("change", on);
    else mq.addListener(on);
    setM(mq.matches);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", on);
      else mq.removeListener(on);
    };
  }, [q]);
  return m;
}

const HeroSection: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 767.98px)");
  const src = isMobile ? mobileVideo : desktopVideo;

  return (
    <section id= "Home" className="w-full px-4 sm:px-8 md:px-12 mt-20">
      <div className="w-full max-w-[1500px] mx-auto">
        {/* HERO CARD ONLY */}
        <div
          className={`
            relative w-full overflow-hidden
            rounded-[24px] md:rounded-[32px]
            ${isMobile ? "aspect-[3/4]" : "h-[842px] mt-20"}
            bg-black
          `}
        >
        {/* background video */}
        <video
          key={isMobile ? "m" : "d"}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={src}
          autoPlay
          muted
          loop
          playsInline
        />

        {/* soft vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* BMEM text overlay */}
        <div
          className={
            isMobile
              ? "absolute bottom-[20%] right-[6%] -rotate-[2deg]"
              : "absolute top-[6%] right-[6%]"
          }
        >
          <h1
            className={
              isMobile
                ? "text-[clamp(42px,11vw,68px)] font-black leading-none tracking-[0.02em] text-black/90 drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]"
                : "text-[100px] lg:text-[176px]  font-bold leading-none tracking-[0.05em] text-[rgba(0,0,0,0.49)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]"
            }
            style={{
              fontFamily: "snap, sans-serif",
              WebkitTextStroke: isMobile ? "1px rgba(0,0,0,0.25)" : undefined,
            }}
          >
            BMEM
          </h1>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
