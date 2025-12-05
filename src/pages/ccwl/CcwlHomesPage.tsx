import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

// Assets
import homesBg from "../../assets/images/homesbg.png";
import homesMascot from "../../assets/images/homes.png";

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

// --- DATA STRUCTURE FOR HOMES ---
const HOMES_DATA = {
  'observation': {
    title: "Observation Homes",
    steps: [
      { id: 1, text: "Established in every district for the temporary reception of any child alleged to be in conflict with law.", img: img1 },
      { id: 2, text: "Children stay here only while their inquiry is pending before the Juvenile Justice Board (JJB).", img: img2 },
      { id: 3, text: "Children are segregated according to age, gender, and the nature of the offense to ensure safety.", img: img3 },
    ]
  },
  'special': {
    title: "Special Homes",
    steps: [
      { id: 1, text: "For children who have been found to have committed an offense and are placed there by order of the JJB.", img: img4 },
      { id: 2, text: "Focuses on long-term rehabilitation and reformation for a period usually not exceeding 3 years.", img: img1 },
      { id: 3, text: "Provides individualized reform plans including counseling, education, and skill development.", img: img2 },
    ]
  },
  'ff': {
    title: "Fit Facility",
    steps: [
      { id: 1, text: "Designated for children between 16-18 years accused of heinous crimes.", img: img3 },
      { id: 2, text: "Used when the JJB determines that staying in a Special Home is not in the interest of the child or others.", img: img4 },
      { id: 3, text: "Has higher security but still adheres to child rights and protection standards.", img: img1 },
    ]
  },
  'ps': {
    title: "Place of Safety",
    steps: [
      { id: 1, text: "Regular medical check-ups and mental health counseling support.", img: img2 },
      { id: 2, text: "Formal education and vocational training to aid future livelihoods.", img: img3 },
      { id: 3, text: "Recreational facilities and balanced nutrition for holistic development.", img: img4 },
    ]
  }
};

const CcwlHomesPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  // Use correct ID for CCL Homes
  const baseData = TOPIC_CONTENT["ccl-homes"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "HOMES FOR CHILDREN",
    subtitle: "Children in Conflict with Law",
    bgImage: homesBg,
    characterImage: homesMascot,
    content: `
      <p>The Juvenile Justice Act, 2015, mandates specific government-regulated Child Care Institutions (CCIs) for Children in Conflict with Law (CCL), focusing on rehabilitation, not punishment. These include Observation Homes, for temporary placement during the Juvenile Justice Board (JJB) inquiry, and Special Homes, where the JJB places a child for a fixed period of reform and rehabilitation. Both must provide essential services like education, vocational training, and counseling under government standards to ensure the child's well-being and successful reintegration into society.
      </p>
    `,
  };

  const [activeTab, setActiveTab] = useState<keyof typeof HOMES_DATA>('observation');
  const currentSteps = HOMES_DATA[activeTab].steps;

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
            { label: "Observation Homes", id: "observation" },
            { label: "Special Homes", id: "special" },
            { label: "Fit Facility", id: "ff" },
            { label: "Place of Safety", id: "ps" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id as keyof typeof HOMES_DATA)}
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
             {HOMES_DATA[activeTab].title}
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

export default CcwlHomesPage;