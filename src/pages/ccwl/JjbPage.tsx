import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

// Assets
import jjbBg from "../../assets/images/justicebg.png"; // Reusing justice background
import jjbMascot from "../../assets/images/bjudge.png"; // Judge mascot

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

// --- DATA STRUCTURE FOR JJB ---
const JJB_DATA = {
  'composition': {
    title: "Board Composition",
    steps: [
      { id: 1, text: "The JJB consists of a Principal Magistrate (PM) and two Social Workers.", img: img1 },
      { id: 2, text: "At least one of the social workers must be a woman to ensure gender sensitivity.", img: img2 },
      { id: 3, text: "The Board functions as a bench, and decisions are made by majority rule.", img: img3 },
    ]
  },
  'powers': {
    title: "Powers of the Board",
    steps: [
      { id: 1, text: "Exclusive power to deal with all proceedings involving children alleged to be in conflict with law.", img: img4 },
      { id: 2, text: "Powers of a Metropolitan Magistrate or a Judicial Magistrate of the First Class.", img: img1 },
      { id: 3, text: "Authority to grant bail to any child, irrespective of the offense committed.", img: img2 },
    ]
  },
  'inquiry': {
    title: "Inquiry Process",
    steps: [
      { id: 1, text: "Determine the age of the child to ensure they are treated under the JJ Act.", img: img3 },
      { id: 2, text: "Conduct a Preliminary Assessment for heinous offenses committed by children aged 16-18.", img: img4 },
      { id: 3, text: "Complete the inquiry within a period of 4 months (extendable by 2 months).", img: img1 },
    ]
  },
  'functions': {
    title: "Key Functions",
    steps: [
      { id: 1, text: "Ensure that the child's rights are protected throughout the process.", img: img2 },
      { id: 2, text: "Direct the Probation Officer to prepare a Social Investigation Report (SIR).", img: img3 },
      { id: 3, text: "Pass final orders for rehabilitation (e.g., community service, counseling, special home).", img: img4 },
    ]
  }
};

const JjbPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  // Use correct ID for JJB
  const baseData = TOPIC_CONTENT["ccl-jjb"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "JUVENILE JUSTICE BOARD",
    subtitle: "Children in Conflict with Law",
    bgImage: jjbBg,
    characterImage: jjbMascot,
    content: `
      <p>
        The <strong>Juvenile Justice Board (JJB)</strong> is the central and sole legal authority for a Child in Conflict with Law (CCL). Its main role is to act as a specialised court that prioritises the child's rehabilitation and welfare over punishment.
      </p>
      <br/>
      <p>
        The JJB conducts the entire legal inquiry, ensures the child is handled fairly and protected from the adult criminal system, and decides on the best course of action—such as supervision or placement in a Special Home—always aiming for the child's reform and successful return to society.
      </p>
    `,
  };

  const [activeTab, setActiveTab] = useState<keyof typeof JJB_DATA>('composition');
  const currentSteps = JJB_DATA[activeTab].steps;

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
            { label: "Composition", id: "composition" },
            { label: "Powers", id: "powers" },
            { label: "Inquiry Process", id: "inquiry" },
            { label: "Key Functions", id: "functions" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id as keyof typeof JJB_DATA)}
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
             {JJB_DATA[activeTab].title}
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

export default JjbPage;