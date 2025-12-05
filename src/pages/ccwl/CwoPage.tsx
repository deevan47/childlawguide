import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

// Assets
import cwoBg from "../../assets/images/cwobg.png";
import cwoMascot from "../../assets/images/welfare.png";

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

// --- DATA STRUCTURE FOR CWO ---
const CWO_DATA = {
  sop: {
    title: "Standard Operating Procedure",
    steps: [
      {
        id: 1,
        text: "The CWO conducts a detailed inquiry into the child's family, social, and economic background.",
        img: img1,
      },
      {
        id: 2,
        text: "This report helps the Juvenile Justice Board (JJB) understand *why* the offense happened.",
        img: img2,
      },
      {
        id: 3,
        text: "The SIR must be submitted to the JJB within 15 days to ensure timely justice.",
        img: img3,
      },
    ],
  },
  rr: {
    title: "Roles & Responsibilities",
    steps: [
      {
        id: 1,
        text: "Assisting the JJB during proceedings to ensure a child-friendly atmosphere.",
        img: img4,
      },
      {
        id: 2,
        text: "Helping the child understand the legal process and the decisions made.",
        img: img1,
      },
      {
        id: 3,
        text: "Ensuring the child's rights are protected throughout the inquiry.",
        img: img2,
      },
    ],
  },
  sbr: {
    title: "Social Background Report (SBR)",
    steps: [
      {
        id: 1,
        text: "Drafting a personalized plan for the child's rehabilitation based on their specific needs.",
        img: img3,
      },
      {
        id: 2,
        text: "Include goals for education, vocational training, counseling, and health.",
        img: img4,
      },
      {
        id: 3,
        text: "Reviewing the plan periodically to track the child's progress.",
        img: img1,
      },
    ],
  },
  cb: {
    title: "Collaboration",
    steps: [
      {
        id: 1,
        text: "Supervising the child if they are released on probation to ensure good behavior.",
        img: img2,
      },
      {
        id: 2,
        text: "Conducting home visits to monitor the child's environment and family support.",
        img: img3,
      },
      {
        id: 3,
        text: "Reporting any violations or issues back to the JJB immediately.",
        img: img4,
      },
    ],
  },
};

const CwoPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  // Use correct ID for Child Welfare Officer
  const baseData = TOPIC_CONTENT["ccl-cwo"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "CHILD WELFARE OFFICER",
    subtitle: "Children in Conflict with Law",
    bgImage: cwoBg,
    characterImage: cwoMascot,
    content: `
      <p>The Child Welfare Officer (CWO), often acting as the Probation Officer (PO), is the key professional focused on the rehabilitation of a Child in Conflict with Law (CCL). They act as a helpful link between the child, the Juvenile Justice Board (JJB), and the community. Their main job is to create the detailed Social Background Report (SBR), which gives the JJB crucial information about the child's life and family history for a fair decision. The CWO also assists the JJB in court, supervises the child on probation, guides them using the Individual Care Plan (ICP), and monitors them to help ensure their successful return to society.      </p>
    `,
  };

  const [activeTab, setActiveTab] = useState<keyof typeof CWO_DATA>("sop");
  const currentSteps = CWO_DATA[activeTab].steps;

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
            { label: "Standard Operating Procedure", id: "sop" },
            { label: "Roles & Responsibilities", id: "rr" },
            { label: "Social Background Report (SBR)", id: "sbr" },
            { label: "Collaboration", id: "cb" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id as keyof typeof CWO_DATA)}
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
            {CWO_DATA[activeTab].title}
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
              <div
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 py-6 ${
                  !isLeftAligned ? "md:flex-row-reverse" : ""
                }`}
              >
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
                <PathConnector
                  direction={isLeftAligned ? "left-to-right" : "right-to-left"}
                />
              )}
            </div>
          );
        })}
      </div>
    </ContentView>
  );
};

export default CwoPage;
