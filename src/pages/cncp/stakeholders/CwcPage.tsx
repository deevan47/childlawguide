import React, { useState } from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

// Assets
import policeBg from "../../../assets/images/cwc-bg.png";
import mascot from "../../../assets/images/commitee.png";

// --- IMAGE IMPORTS ---
import img1_1 from "../../../assets/images/cwc/1img1.png";
import img1_2 from "../../../assets/images/cwc/1img2.png";
import img1_3 from "../../../assets/images/cwc/1img3.png";
import img1_4 from "../../../assets/images/cwc/1img4.png";

import img2_1 from "../../../assets/images/cwc/2img1.png";
import img2_2 from "../../../assets/images/cwc/2img2.png";
import img2_3 from "../../../assets/images/cwc/2img3.png";
import img2_4 from "../../../assets/images/cwc/2img4.png";

import img3_1 from "../../../assets/images/cwc/3img1.png";
import img3_2 from "../../../assets/images/cwc/3img2.png";
import img3_3 from "../../../assets/images/cwc/3img3.png";
import img3_4 from "../../../assets/images/cwc/3img4.png";

import img4_1 from "../../../assets/images/cwc/4img1.png";
import img4_2 from "../../../assets/images/cwc/4img2.png";
import img4_3 from "../../../assets/images/cwc/4img3.png";
import img4_4 from "../../../assets/images/cwc/4img4.png";

// --- DATA STRUCTURE ---
const PAGES_DATA = {
  "working-directly": {
    title: "Working Directly with Children",
    steps: [
      {
        id: 1,
        text: "The committee officially takes in and acknowledges children who are brought before it.",
        img: img2_1,
      },
      {
        id: 2,
        text: "They conduct thorough inquiries into anything that affects a child's safety and well-being.",
        img: img2_2,
      },
      {
        id: 3,
        text: "They have the authority to place a child in a safe environment which could include a foster family.",
        img: img2_3,
      },
      {
        id: 4,
        text: `They make sure every child gets the right care, protection, and rehabilitation they need.
They do this by creating an individual care plan and giving clear instructions to parents, guardians, or children's homes to follow it.`,
        img: img2_4,
      },
    ],
  },
  investigations: {
    title: "Investigations and Inspections",
    steps: [
      {
        id: 1,
        text: "They can order professionals (like Child Welfare Officers, probation officers, or NGOs) to conduct a social investigation into a child's background and submit a formal report.",
        img: img1_1,
      },
      {
        id: 2,
        text: "They conduct inquiries to officially declare certain individuals as fit persons to care for children.  ",
        img: img1_2,
      },
      {
        id: 3,
        text: "They are required to visit and inspect residential homes for children at least twice a month. After these visits, they recommend improvements to the District Child Protection Unit and the State Government.",
        img: img1_3,
      },
      {
        id: 4,
        text: "If there's a complaint about a child being abused in a care institution, the committee must investigate and give directions to the •       police •       District Child Protection Unit•       labour department  •       child line services",
        img: img1_4,
      },
    ],
  },
  legal: {
    title: "Legal and Family Responsibilities",
    steps: [
      {
        id: 1,
        text: "They oversee the process when parents decide to surrender a child, making sure the parents have time to reconsider and that every effort is made to keep the family together.",
        img: img3_1,
      },
      {
        id: 2,
        text: "They work to find the families of lost or abandoned children and reunite them following all the proper procedures.",
        img: img3_2,
      },
      {
        id: 3,
        text: "After a thorough inquiry, they can legally declare an orphan, abandoned, or surrendered child as 'legally free for adoption.'",
        img: img3_3,
      },
      {
        id: 4,
        text: "They ensure that children have access to the legal services they need.",
        img: img3_4,
      },
    ],
  },
  collaborative: {
    title: "Collaborative Roles",
    steps: [
      {
        id: 1,
        text: `The committee can proactively investigate cases of children who need help, even if the child hasn't been formally brought before them.  

This requires at least three members to agree.`,
        img: img4_1,
      },
      {
        id: 2,
        text: "They take action to rehabilitate children who are victims of sexual abuse and are referred to them by the police.",
        img: img4_2,
      },
      {
        id: 3,
        text: " They coordinate with the police, the labour department, and other organizations to ensure children are protected.",
        img: img4_3,
      },
      {
        id: 4,
        text: "They manage cases that are sent to them by the Juvenile Justice Board.",
        img: img4_4,
      },
    ],
  },
};

// --- PATH CONNECTOR (Straight Lines) ---
const PathConnector: React.FC<{
  direction: "right-to-left" | "left-to-right";
}> = ({ direction }) => {
  // Logic: Go Down (50%), Go Across, Go Down (50%)
  const pathData =
    direction === "left-to-right"
      ? "M 25 0 V 50 H 75 V 100" // Start Left(25), Down, Right(to 75), Down
      : "M 75 0 V 50 H 25 V 100"; // Start Right(75), Down, Left(to 25), Down

  return (
    <div className="hidden md:block w-full h-32 relative overflow-visible pointer-events-none z-0 -my-4">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Background Track (Faint) */}

        {/* Animated Dashed Line (Dots) */}
        <path
          d={pathData}
          fill="none"
          stroke="#000000ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="7, 15" // Creates dots with spacing
          vectorEffect="non-scaling-stroke"
          className="animate-travel"
        />
      </svg>
    </div>
  );
};

const CwcPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["cncp-stk-cwc"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "CWC",
    subtitle:
      "The Child Welfare Committee (CWC) is the only legal group with the power to help a Child in Need of Care and Protection (CNCP).",
    content: `<p>The Child Welfare Committee (CWC) is the only legal group with the power to help a Child in Need of Care and Protection (CNCP) under the Juvenile Justice Act. It acts like a specialised team focused entirely on the child's welfare and security.</p><br/><p>The CWC takes in CNCPs, checks their history, and makes final decisions on their care. This involves placing children in safe, approved Child Care Institutions (CCIs), arranging for foster care, and legally making a child available for adoption after every effort to find their family fails.</p>`,
    bgImage: policeBg,
    characterImage: mascot,
  };

  const [activeMainTab, setActiveMainTab] = useState<"roles" | "guidelines">(
    "roles"
  );
  const [activeSubTab, setActiveSubTab] =
    useState<keyof typeof PAGES_DATA>("working-directly");

  const currentSteps = PAGES_DATA[activeSubTab].steps;

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <style>{`
        /* Simulates movement along the path */
        @keyframes travelDash {
          from { stroke-dashoffset: 30; }
          to { stroke-dashoffset: 0; }
        }
        .animate-travel {
          animation: travelDash 1s linear infinite;
        }
      `}</style>

      {/* --- 1. TOP NAVIGATION --- */}
      <div className="w-full max-w-5xl mx-auto mt-0 mb-12 relative z-30 px-4">
        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-8">
          {/* ROLES BUTTON */}
          <div className="relative group">
            <button
              onClick={() => setActiveMainTab("roles")}
              className={`px-6 py-3 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all shadow-lg border-2 ${
                activeMainTab === "roles"
                  ? "bg-red-700 text-white border-red-700"
                  : "bg-white text-red-700 border-red-200 hover:bg-red-50"
              }`}
            >
              Roles and Responsibilities
            </button>

            {/* Sub-menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-[90vw] md:w-[650px] z-50">
              <div className="bg-white border-2 border-red-100 rounded-2xl p-2 shadow-2xl flex flex-wrap md:flex-nowrap justify-between gap-2">
                {[
                  { id: "working-directly", label: "Working directly with Children" },
                  { id: "investigations", label: "Investigations and Inspections" },
                  { id: "legal", label: "Legal and Family Responsibilities" },
                  { id: "collaborative", label: "Collaborative Roles" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMainTab("roles");
                      setActiveSubTab(tab.id as keyof typeof PAGES_DATA);
                    }}
                    className={`flex-1 py-3 px-3 text-xs md:text-sm rounded-xl transition-colors text-center font-bold ${
                      activeSubTab === tab.id
                        ? "bg-red-600 text-white shadow-md"
                        : "text-gray-600 hover:bg-red-50 hover:text-red-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* GUIDELINES BUTTON */}
          <button
            onClick={() => setActiveMainTab("guidelines")}
            className={`px-6 py-3 md:px-8 md:py-3 rounded-full font-bold text-sm md:text-lg transition-all shadow-lg border-2 ${
              activeMainTab === "guidelines"
                ? "bg-red-700 text-white border-red-700"
                : "bg-white text-red-700 border-red-200 hover:bg-red-50"
            }`}
          >
            Juvenile Treatment Guidelines
          </button>
        </div>

        {/* Title Indicator */}
        {activeMainTab === "roles" && (
          <div className="text-center mb-16">
            <h3 className="font-poppins text-xl md:text-3xl italic text-red-800 tracking-wide drop-shadow-sm font-semibold">
              {PAGES_DATA[activeSubTab].title}
            </h3>
            <div className="h-1 w-24 bg-red-500 mx-auto mt-3 rounded-full"></div>
          </div>
        )}
      </div>

      {/* --- 2. ZIG-ZAG CONTENT --- */}
      {activeMainTab === "roles" && (
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
                  {/* IMAGE SIDE (Larger Images) */}
                  <div className="w-full md:w-1/2 flex justify-center relative z-10">
                    <div className="bg-white p-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500 border border-red-100 w-full max-w-[450px]">
                      <img
                        src={step.img}
                        alt={`Step ${step.id}`}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </div>

                  {/* TEXT SIDE (Clean, No Numbers) */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-red-50">
                      <p className="font-poppins text-lg md:text-xl text-slate-700 leading-loose font-medium">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>

                {/* STRAIGHT PATH CONNECTOR */}
                {!isLast && (
                  <PathConnector
                    direction={
                      isLeftAligned ? "left-to-right" : "right-to-left"
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Guidelines Tab Placeholder */}
      {activeMainTab === "guidelines" && (
        <div className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="bg-white border border-red-100 rounded-3xl p-10 shadow-xl">
            <h2 className="text-4xl font-impact text-red-900 mb-6">
              Treatment Guidelines
            </h2>
            <p className="font-poppins text-lg text-slate-600">
              Guidelines content is currently being updated. Please refer to the
              Roles section.
            </p>
          </div>
        </div>
      )}
    </ContentView>
  );
};

export default CwcPage;
