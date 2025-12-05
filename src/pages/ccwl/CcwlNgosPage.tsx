import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

// Assets
import ngoBg from "../../assets/images/justicebg.png"; // Renamed for clarity
import ngoMascot from "../../assets/images/bjudge.png"; // Renamed for clarity

// Placeholder timeline images (Reuse existing or replace with specific ones)
import img1 from "../../assets/images/cwc/1img1.png";
import img2 from "../../assets/images/cwc/1img2.png";
import img3 from "../../assets/images/cwc/1img3.png";
import img4 from "../../assets/images/cwc/1img4.png";

// --- STRAIGHT LINE ANIMATED CONNECTOR ---
const PathConnector: React.FC<{
  direction: "right-to-left" | "left-to-right";
}> = ({ direction }) => {
  const pathData =
    direction === "left-to-right"
      ? "M 25 0 V 50 H 75 V 100"
      : "M 75 0 V 50 H 25 V 100";

  return (
    <div className="hidden md:block w-full h-24 relative overflow-visible pointer-events-none z-0 -my-4">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0, 12"
          vectorEffect="non-scaling-stroke"
          className="animate-travel"
        />
      </svg>
    </div>
  );
};

// --- DATA STRUCTURE FOR NGOs ---
const NGO_DATA = {
  'legal': {
    title: "Legal Aid & Support",
    steps: [
      { id: 1, text: "Providing free legal counsel to children who cannot afford lawyers.", img: img1 },
      { id: 2, text: "Ensuring the child understands the legal proceedings in a child-friendly manner.", img: img2 },
      { id: 3, text: "Monitoring that the child's rights are not violated during police apprehension or inquiry.", img: img3 },
    ]
  },
  'rehab': {
    title: "Rehabilitation Services",
    steps: [
      { id: 1, text: "Conducting psycho-social counseling to address underlying behavioral issues.", img: img4 },
      { id: 2, text: "Organizing recreational and creative activities within Observation Homes.", img: img1 },
      { id: 3, text: "Providing drug de-addiction services and mental health support where needed.", img: img2 },
    ]
  },
  'skill': {
    title: "Vocational Training",
    steps: [
      { id: 1, text: "Teaching practical skills (computers, carpentry, tailoring) to ensure future livelihoods.", img: img3 },
      { id: 2, text: "Bridging educational gaps through non-formal education programs.", img: img4 },
      { id: 3, text: "Collaborating with local businesses for apprenticeship opportunities post-release.", img: img1 },
    ]
  },
  'social': {
    title: "Reintegration",
    steps: [
      { id: 1, text: "Preparing the family and community to accept the child back without stigma.", img: img2 },
      { id: 2, text: "Conducting follow-up visits to ensure the child does not re-offend.", img: img3 },
      { id: 3, text: "Linking the child with government welfare schemes for financial stability.", img: img4 },
    ]
  }
};

const CcwlNgosPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  // Use correct ID for CCL NGOs
  const baseData = TOPIC_CONTENT["ccl-ngos"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "NGOs",
    subtitle: "Children in Conflict with Law",
    bgImage: ngoBg,
    characterImage: ngoMascot,
    content: `
      <p>
        Non-Governmental Organizations (NGOs) play a pivotal role in the juvenile justice system, bridging the gap between legal enforcement and social care. 
      </p>
      <br/>
      <p>
        They provide <strong>Legal Aid</strong> to ensure fair representation, run <strong>Rehabilitation Programs</strong> within observation homes, and offer <strong>Vocational Training</strong> to equip children with skills for a better future. Their primary goal is to prevent recidivism (re-offending) by ensuring the child is successfully reintegrated into society.
      </p>
    `,
  };

  const [activeTab, setActiveTab] = useState<keyof typeof NGO_DATA>('legal');
  const currentSteps = NGO_DATA[activeTab].steps;

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <style>{`
        @keyframes travelDash {
          to { stroke-dashoffset: -24; }
        }
        .animate-travel {
          animation: travelDash 1s linear infinite;
        }
      `}</style>

      {/* --- 1. TOP BUTTONS --- */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Legal Aid", id: "legal" },
            { label: "Rehabilitation", id: "rehab" },
            { label: "Vocational Training", id: "skill" },
            { label: "Social Reintegration", id: "social" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id as keyof typeof NGO_DATA)}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-base transition-all shadow-lg border-2 ${
                activeTab === btn.id
                  ? "bg-red-800 text-white border-red-900"
                  : "bg-white text-red-800 border-red-100 hover:bg-red-50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Section Title Indicator */}
        <div className="text-center mt-12 mb-8">
           <h3 className="font-poppins text-2xl md:text-3xl italic text-red-900 tracking-wide font-semibold drop-shadow-sm">
             {NGO_DATA[activeTab].title}
           </h3>
           <div className="h-1 w-32 bg-red-600 mx-auto mt-3 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* --- 2. ZIG-ZAG TIMELINE CONTENT --- */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-40">
        
        {currentSteps.map((step, index) => {
          const isLeftAligned = index % 2 === 0;
          const isLast = index === currentSteps.length - 1;

          return (
            <div key={step.id} className="relative">
              
              {/* Content Row */}
              <div className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 py-6 ${
                !isLeftAligned ? 'md:flex-row-reverse' : ''
              }`}>
                
                {/* IMAGE SIDE */}
                <div className="w-full md:w-1/2 flex justify-center relative z-10">
                  <div className="bg-white p-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 border border-red-100 w-full max-w-[450px]">
                    <img 
                      src={step.img} 
                      alt={`Step ${step.id}`} 
                      className="w-full h-auto rounded-xl object-cover border border-slate-100"
                    />
                  </div>
                </div>

                {/* TEXT SIDE */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-red-50 relative">
                    <p className="font-poppins text-lg text-slate-700 leading-loose font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>

              </div>

              {/* CONNECTING LINES */}
              {!isLast && (
                <PathConnector direction={isLeftAligned ? 'left-to-right' : 'right-to-left'} />
              )}

            </div>
          );
        })}

      </div>

    </ContentView>
  );
};

export default CcwlNgosPage;