import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#FFD54A] py-3 md:py-4 mt-5 ">
      <div className="flex justify-center items-center">
        <p
          className="text-xs md:text-sm text-black tracking-wide"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}
        >
          ©2025 BMEM All Right Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
