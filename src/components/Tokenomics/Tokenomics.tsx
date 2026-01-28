import React from "react";
import dog from "@/assets/chartondog.png"; // transparent dog image (center overlay)
import chart from "@/assets/chart.png"; // pie chart background

const Tokenomics: React.FC = () => {
  return (
    <section id="Tokenomics" className="w-full bg-white flex justify-center mt-[30px]">
      {/* Page container (max 1620px) */}
      <div className="w-full max-w-[1620px] px-4 sm:px-6 md:px-8 py-10">
        {/* Responsive layout */}
        {/* On mobile: text first, chart second. On desktop: two columns */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20">
          {/* ============== LEFT (DESKTOP) / BOTTOM (MOBILE): CHART ============== */}
          <div className="relative w-full lg:w-1/2 flex justify-center">
            {/* Chart */}
            <img
              src={chart}
              alt="BMEM token distribution chart"
              className="w-full max-w-[600px] h-auto object-contain"
            />
            {/* Dog centered */}
            <img
              src={dog}
              alt="BMEM mascot"
              className="
                pointer-events-none
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                w-[60%] sm:w-[55%] md:w-[50%] lg:w-[45%] xl:w-[42%]
                h-auto object-contain
              "
            />
          </div>

          {/* ============== RIGHT (DESKTOP) / TOP (MOBILE): TEXT BOX ============== */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-10 lg:px-0">
            {/* Heading */}
            <h3
              className="
                text-[20px] lg:text-[40px]
                font-semibold
              "
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              TOKENOMICS
            </h3>

            {/* Rows */}
            <div className="mt-6 space-y-4">
              <Row label="Total Supply" value="4 Million" />
              <Row label="Transfers Fee" value="0%" />
              <Row label="BMEM Burned" value="10%" />
              <Row label="Sell/Buy Tax" value="0%" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===== Reusable Row Component ===== */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="
        flex items-center justify-between
        text-[16px] lg:text-[24px]
        font-bold
      "
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <span className="text-[#111]">{label}</span>
      <span className="text-[#111]">{value}</span>
    </div>
  );
}

export default Tokenomics;
