import React from "react";
import camelDoge from "@/assets/hero_doge.png";
import coinDoge from "@/assets/hero_coin.png";

const TwoCards: React.FC = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="w-full max-w-[1920px] mx-auto">
        <h2 
          className="text-2xl md:text-3xl font-semibold text-black text-center mb-12"
          style={{
            fontFamily: "Inter",
            fontWeight: 600,
            fontSize: "40px",
          }}
        >
          Unleash the power of AI and bring new characters to life!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Join Community */}
          <div 
            className="bg-black flex items-center gap-6"
            style={{
              width: "779px",
              height: "557px",
              borderRadius: "40px",
              opacity: 1,
              padding: "2rem",
            }}
          >
            <div className="flex-1 text-white">
              <p className="text-gray-300 text-sm md:text-base mb-4">
                Join our community and be part of something amazing! Connect,
                collaborate, and grow with like-minded individuals. Let's build
                the future together.
              </p>
              <button className="btn-global inline-flex items-center justify-center rounded-xl bg-[#FFD54A] text-black font-semibold px-5 py-2.5 hover:brightness-95 transition">
                Join Community
              </button>
            </div>
            <img
              src={camelDoge}
              alt="Join"
              className="w-[160px] sm:w-[200px] md:w-[220px] object-contain"
            />
          </div>

          {/* Buy Now */}
          <div 
            className="bg-black flex items-center gap-6"
            style={{
              width: "779px",
              height: "557px",
              borderRadius: "40px",
              opacity: 1,
              padding: "2rem",
            }}
          >
            <div className="flex-1 text-white">
              <p className="text-gray-300 text-sm md:text-base mb-4">
                Don't miss out! Grab yours now and be part of the future!
              </p>
              <button className="btn-global inline-flex items-center justify-center rounded-xl bg-[#FFD54A] text-black font-semibold px-5 py-2.5 hover:brightness-95 transition">
                Buy Now
              </button>
            </div>
            <img
              src={coinDoge}
              alt="Buy"
              className="w-[160px] sm:w-[200px] md:w-[220px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoCards;