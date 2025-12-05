import React, { useState } from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

// Assets
import homesBg from "../../../assets/images/hfcbg.png";
import homesMascot from "../../../assets/images/hfc.png";

// Timeline images
import img1 from "../../../assets/images/cwc/1img1.png";
import img2 from "../../../assets/images/cwc/1img2.png";
import img3 from "../../../assets/images/cwc/1img3.png";
import img4 from "../../../assets/images/cwc/1img4.png";

// --- PATH CONNECTOR ---
const PathConnector: React.FC<{
  direction: "right-to-left" | "left-to-right";
}> = ({ direction }) => {
  const pathData =
    direction === "left-to-right"
      ? "M 25 0 V 50 H 75 V 100"
      : "M 75 0 V 50 H 25 V 100";

  return (
    <div className="hidden md:block w-full h-32 relative overflow-visible pointer-events-none z-0 -my-4">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d={pathData}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="0, 15"
          vectorEffect="non-scaling-stroke"
          className="animate-travel"
        />
      </svg>
    </div>
  );
};

// --- SUBSECTION DATA ---
const HOMES_DATA = {
  "children-homes": {
    title: "Children's Homes",
    steps: [
      {
        id: 1,
        text: "Established by the State Govt or NGOs for the long-term care of children in need of care and protection.",
        img: img1,
      },
      {
        id: 2,
        text: "Provides education, vocational training, therapy, and nutrition to ensure holistic development.",
        img: img2,
      },
      {
        id: 3,
        text: "Focuses on reintegrating the child into society or their biological family whenever possible.",
        img: img3,
      },
    ],
  },
  saa: {
    title: "Specialised Adoption Agencies (SAA)",
    steps: [
      {
        id: 1,
        text: "Recognized by the State Government for the placement of orphaned, abandoned, or surrendered children.",
        img: img4,
      },
      {
        id: 2,
        text: "Responsible for the care and protection of these children until they are legally adopted.",
        img: img1,
      },
      {
        id: 3,
        text: "Facilitates the legal adoption process through CARA guidelines.",
        img: img2,
      },
    ],
  },

  // COMMUNITY CARE
  "open-shelters": {
    title: "Open Shelters",
    steps: [
      {
        id: 1,
        text: "Community-based facilities for children in street situations or runaways.",
        img: img3,
      },
      {
        id: 2,
        text: "Functions as a drop-in center providing food, washing facilities, and a safe sleeping space.",
        img: img4,
      },
      {
        id: 3,
        text: "Protects children and works toward family reunification.",
        img: img1,
      },
    ],
  },
  "fit-facility": {
    title: "Fit Facility",
    steps: [
      {
        id: 1,
        text: "Recognized organizations fit to temporarily take responsibility for a child.",
        img: img2,
      },
      { id: 2, text: "Used when specialized care is needed.", img: img3 },
      { id: 3, text: "CWC or JJB may place a child here.", img: img4 },
    ],
  },
  "foster-care": {
    title: "Foster Care",
    steps: [
      { id: 1, text: "Placement in a family-like environment.", img: img1 },
      { id: 2, text: "Selected by the CWC to provide care.", img: img2 },
      { id: 3, text: "State financially supports foster families.", img: img3 },
    ],
  },
  sponsorship: {
    title: "Sponsorship",
    steps: [
      {
        id: 1,
        text: "Prevents child separation by supporting families financially.",
        img: img4,
      },
      { id: 2, text: "Covers medical and educational needs.", img: img1 },
      { id: 3, text: "Helps children stay within families.", img: img2 },
    ],
  },
  "after-care": {
    title: "After Care",
    steps: [
      {
        id: 1,
        text: "Supports persons aged 18–21 leaving institutional care.",
        img: img3,
      },
      {
        id: 2,
        text: "Provides housing, financial help, and career guidance.",
        img: img4,
      },
      { id: 3, text: "Aims for independence & self-sufficiency.", img: img1 },
    ],
  },
};

const HomesPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["cncp-stk-homes"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "Homes For Children",
    subtitle: "Children in Need of Care and Protection",
    bgImage: homesBg,
    characterImage: homesMascot,
    content: `
      <p>The Juvenile Justice Act, 2015, sets up special government-registered Child Care Institutions (CCIs) for Children in Need of Care and Protection (CNCP). These homes are different from those for CCLs and include Children's Homes, which offer long-term shelter, food, and education, and Specialized Adoption Agencies (SAAs), which handle adoption. The Child Welfare Committee (CWC) places CNCPs in these CCIs, which follow strict rules to give individualized care and support, aiming for the child to be successfully returned to their family or placed in new families through adoption or foster care.</p>
    `,
  };

  const [activeMainTab, setActiveMainTab] = useState<
    "institutional" | "community"
  >("institutional");
  const [activeSubTab, setActiveSubTab] =
    useState<keyof typeof HOMES_DATA>("children-homes");

  const currentSteps = HOMES_DATA[activeSubTab].steps;

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <style>{`
        @keyframes travelDash { to { stroke-dashoffset: -30; } }
        .animate-travel { animation: travelDash 1s linear infinite; }
      `}</style>

      {/* MAIN TAB AREA */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-12 px-4 relative z-30">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
          {/* --- INSTITUTIONAL CARE TAB (now same hover style as community) --- */}
          <div className="relative group">
            <button
              onClick={() => {
                setActiveMainTab("institutional");
                setActiveSubTab("children-homes");
              }}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-lg border-2 shadow-lg transition-all ${
                activeMainTab === "institutional"
                  ? "bg-red-800 text-white border-red-900"
                  : "bg-white text-red-800 border-red-100 hover:bg-red-50"
              }`}
            >
              Institutional Care
            </button>

            {/* Unified larger dropdown */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[600px] z-50">
              <div className="bg-white border-2 border-red-100 rounded-2xl p-3 shadow-2xl flex flex-wrap justify-between gap-2">
                {[
                  { id: "children-homes", label: "Children's Homes" },
                  { id: "saa", label: "Specialised Adoption Agencies" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMainTab("institutional");
                      setActiveSubTab(tab.id as keyof typeof HOMES_DATA);
                    }}
                    className={`flex-1 min-w-[100px] py-3 px-3 rounded-xl text-xs md:text-sm font-bold transition-colors ${
                      activeSubTab === tab.id
                        ? "bg-red-600 text-white"
                        : "text-gray-600 hover:bg-red-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* --- COMMUNITY CARE TAB (unchanged) --- */}
          <div className="relative group">
            <button
              onClick={() => {
                setActiveMainTab("community");
                setActiveSubTab("open-shelters");
              }}
              className={`px-8 py-3 rounded-full font-bold text-sm md:text-lg border-2 shadow-lg transition-all ${
                activeMainTab === "community"
                  ? "bg-red-800 text-white border-red-900"
                  : "bg-white text-red-800 border-red-100 hover:bg-red-50"
              }`}
            >
              Community-based Care
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[600px] z-50">
              <div className="bg-white border-2 border-red-100 rounded-2xl p-3 shadow-2xl flex flex-wrap justify-between gap-2">
                {[
                  { id: "open-shelters", label: "Open Shelters" },
                  { id: "fit-facility", label: "Fit Facility" },
                  { id: "foster-care", label: "Foster Care" },
                  { id: "sponsorship", label: "Sponsorship" },
                  { id: "after-care", label: "After Care" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMainTab("community");
                      setActiveSubTab(tab.id as keyof typeof HOMES_DATA);
                    }}
                    className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs md:text-sm font-bold transition-colors ${
                      activeSubTab === tab.id
                        ? "bg-red-600 text-white"
                        : "text-gray-600 hover:bg-red-50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CURRENT SECTION TITLE */}
        <div className="text-center mb-16">
          <h3 className="font-poppins text-xl md:text-3xl italic text-red-900 font-semibold tracking-wide">
            {HOMES_DATA[activeSubTab].title}
          </h3>
          <div className="h-1 w-24 mx-auto mt-3 bg-red-600 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* TIMELINE CONTENT */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-40">
        {currentSteps.map((step, index) => {
          const isLeftAligned = index % 2 === 0;
          const isLast = index === currentSteps.length - 1;

          return (
            <div key={step.id} className="relative">
              <div
                className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 py-6 ${
                  !isLeftAligned ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="bg-white p-3 rounded-2xl shadow-xl border border-red-100 w-full max-w-[450px] transform hover:scale-105 transition-transform duration-500">
                    <img
                      src={step.img}
                      alt=""
                      className="w-full rounded-xl object-cover border border-slate-100"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-red-50">
                    <p className="text-lg md:text-xl font-poppins text-slate-700 leading-loose font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>

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

export default HomesPage;
