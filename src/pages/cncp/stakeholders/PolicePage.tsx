import React, { useState } from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

import policeBg from "../../../assets/images/police-bg.png";
import guideImage from "../../../assets/images/lpolice.png";

const PathConnector: React.FC<{
  direction: "right-to-left" | "left-to-right" | "step4-to-5";
}> = ({ direction }) => {
  let pathData = "";

  if (direction === "left-to-right") {
    pathData = "M 25 0 V 50 H 75 V 100";
  } else if (direction === "right-to-left") {
    pathData = "M 75 0 V 50 H 25 V 100";
  } else if (direction === "step4-to-5") {
    pathData = "M 33 0 V 50 H 70 V 100";
  }

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
          strokeDasharray="7, 12"
          vectorEffect="non-scaling-stroke"
          className="animate-travel"
        />
      </svg>
    </div>
  );
};

const PolicePage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["cncp-stk-police"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "POLICE OFFICERS",
    subtitle: "Children in Need of Care and Protection",
    bgImage: policeBg,
    characterImage: guideImage,
    content: `<p>Police officers, particularly those in Special Juvenile Police Units (SJPUs) and Child Welfare Police Officers (CWPOs), are essential for the protection of Children in Need of Care and Protection (CNCP) under the Juvenile Justice Act. Their key duties involve the immediate rescue and protection of vulnerable children, ensuring they are treated with dignity and in a child-friendly manner. They are mandated to provide immediate care and, most importantly, produce the child before the Child Welfare Committee (CWC) without delay to ensure they are swiftly connected to safety, support services, and long-term rehabilitation.</p>`,
  };

  const [activeTab, setActiveTab] = useState("sop");

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

      {/* --- 1. CENTERED PILL BUTTONS --- */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Investigating Officer (IO)", id: "io" },
            { label: "Standard Operating Procedure", id: "sop" },
            { label: "Juvenile Treatment Guidelines", id: "guide" },
            { label: "Parole Officer", id: "parole" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id)}
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
      </div>

      {/* Placeholders for other tabs */}
      {activeTab !== "sop" && (
        <div className="text-center py-20">
          <h2 className="text-3xl font-impact text-gray-400">
            Content Coming Soon
          </h2>
        </div>
      )}
    </ContentView>
  );
};

export default PolicePage;
