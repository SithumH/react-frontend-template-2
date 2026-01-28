import React, { useCallback, useState } from "react";
import fusionResult from "@/assets/man-and-lion.mp4";
import whiteLion from "@/assets/white-lion.mp4";
import uploadIcon from "@/assets/upload_icon.svg";

const AIFusionSection: React.FC = () => {
  return (
    // ⛳ Hide on mobile, show from md+
    <section className="hidden md:block w-full bg-white">
      <div className="w-full max-w-[1620px] mx-auto px-4 sm:px-8 md:px-12 py-12">
        {/* ========= Top grid ========= */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* LEFT */}
          <div className="space-y-6">
            {/* ========= Headline ========= */}
            <div className="max-w-3xl">
              <h2 className="text-[40px] font-semibold text-black max-w-[721px]" style={{ fontFamily: 'Inter', fontWeight: 600 }}>
                Unleash the power of AI and bring new characters to life!
              </h2>
              <p className="mt-2 text-base text-gray-600 max-w-[721px]" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
                Choose any two existing characters from your collection.
              </p>
            </div>
            <UploadCard />
            <figure className="relative rounded-2xl overflow-hidden shadow-sm h-[400px]">
              <video
                src={whiteLion}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </figure>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-4">
            <figure className="relative rounded-2xl overflow-hidden shadow-sm h-[1000px]">
              <video
                src={fusionResult}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </figure>
           
          </div>
        </div>

        {/* ========= Why Use AI Fusion ========= */}
        <section className="mt-10 flex justify-between items-start">
         <div>
           <h3 className="text-[40px] font-semibold text-black">Why Use AI Fusion?</h3>
          <ul className="mt-4 space-y-2 text-gray-800">
            <Bullet>
              <b>Endless Possibilities — Create one-of-a-kind characters with innovative designs.</b>
            </Bullet>
            <Bullet>
              <b>Dynamic Gameplay — Introduce fresh abilities and traits to enhance your experience.</b>
            </Bullet>
            <Bullet>
              <b>Exclusive NFT Creation — Own a fully AI-generated, rare hybrid character.</b>
            </Bullet>
          </ul>
         </div>
        
         <div>
                 <p className="text-gray-800 text-[20px] lg:text-right" style={{ fontFamily: 'Inter', fontWeight: 500 }}>
              <span className="block">Start fusing and</span>
              <span className="block">discover the next</span>
              <span className="block">evolution of heroes!</span>
            </p>
         </div>
        </section>

        {/* ========= How It Works ========= */}
        <section className="mt-8">
          <h4 className="text-xl font-semibold text-black">How It Works</h4>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              title="Select Two Characters"
              desc="Choose any two existing characters from your collection."
            />
            <StepCard
              title="AI-Powered Fusion"
              desc="Our advanced AI analyzes their attributes, design elements, and abilities to create a brand-new character."
            />
            <StepCard
              title="Unique Visuals & Abilities"
              desc="The newly generated character will feature a distinct look and skill set, influenced by the originals."
            />
            <StepCard
              title="Ownership & Utility"
              desc="The fused character can be minted as a rare NFT, used in battles, or traded within the ecosystem."
            />
          </div>
        </section>
      </div>
    </section>
  );
};

/* -------------------- Upload Card (unchanged) -------------------- */
const UploadCard: React.FC = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isOver, setIsOver] = useState(false);

  const onFiles = useCallback((files: FileList | null) => {
    if (!files || !files[0]) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  }, []);

  return (
 
    
    <div
      onDragOver={(e) => { e.preventDefault(); setIsOver(true); }}
      onDragLeave={() => setIsOver(false)}
      onDrop={(e) => { e.preventDefault(); setIsOver(false); onFiles(e.dataTransfer.files); }}
      className={[
        "relative rounded-2xl border overflow-hidden",
        isOver ? "border-gray-900" : "border-gray-300",
        "bg-white/70 backdrop-blur-sm shadow-sm transition-colors",
        previewUrl ? "" : "p-6 md:p-8",
      ].join(" ")}
    >
      
      {previewUrl ? (
        <img src={previewUrl} alt="Uploaded character preview" className="w-full h-[260px] md:h-[300px] object-cover" />
      ) : (
        <div className="flex flex-col items-center justify-center h-[220px] md:h-[260px]">
          <img src={uploadIcon} alt="" className="w-8 h-8 opacity-70" />
        </div>
      )}
      {/* <label className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white text-sm cursor-pointer select-none">
        <input type="file" accept="image/*" className="hidden" onChange={(e) => onFiles(e.target.files)} />
        Upload
      </label> */}
      {/* <p className="mt-2 text-xs text-gray-500">PNG, JPG up to 10MB.</p> */}
    </div>
  );
};

const Bullet: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex gap-2">
    <span aria-hidden>✓</span>
    <span className="text-gray-700">{children}</span>
  </li>
);

const StepCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="rounded-2xl bg-[#D9D9D9] p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
    <h5 className="text-lg font-semibold text-black">{title}</h5>
    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default AIFusionSection;
