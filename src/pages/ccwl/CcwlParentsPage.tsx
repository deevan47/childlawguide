import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";
import parentsBg from "../../assets/images/justicebg.png";
import parentsMascot from "../../assets/images/bjudge.png";
import img1 from "../../assets/images/cwc/1img1.png";
import img2 from "../../assets/images/cwc/1img2.png";
import img3 from "../../assets/images/cwc/1img3.png";
import img4 from "../../assets/images/cwc/1img4.png";

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

// DATA STRUCTURE FOR PARENTS
const PARENTS_DATA = {
  inquiry: {
    title: "Participation in Inquiry",
    steps: [
      {
        id: 1,
        text: "Parents must attend all Juvenile Justice Board (JJB) proceedings with their child.",
        img: img1,
      },
      {
        id: 2,
        text: "They provide crucial family background information to the Probation Officer for the Social Investigation Report.",
        img: img2,
      },
      {
        id: 3,
        text: "Their presence provides emotional support and ensures the child feels safe during legal processes.",
        img: img3,
      },
    ],
  },
  supervision: {
    title: "Supervision & Bail",
    steps: [
      {
        id: 1,
        text: "If the child is released on bail, parents are responsible for their conduct and whereabouts.",
        img: img4,
      },
      {
        id: 2,
        text: "They must ensure the child attends school/training and does not associate with negative influences.",
        img: img1,
      },
      {
        id: 3,
        text: "Failure to supervise may lead to the child being sent to an Observation Home.",
        img: img2,
      },
    ],
  },
  rehab: {
    title: "Role in Rehabilitation",
    steps: [
      {
        id: 1,
        text: "Creating a supportive and non-judgmental home environment to aid reform.",
        img: img3,
      },
      {
        id: 2,
        text: "Encouraging the child to participate in counseling and vocational activities.",
        img: img4,
      },
      {
        id: 3,
        text: "Regularly communicating with the Probation Officer about the child's progress.",
        img: img1,
      },
    ],
  },
  counseling: {
    title: "Family Counseling",
    steps: [
      {
        id: 1,
        text: "Parents themselves may need to attend counseling sessions ordered by the JJB.",
        img: img2,
      },
      {
        id: 2,
        text: "These sessions help resolve family conflicts that may have contributed to the child's behavior.",
        img: img3,
      },
      {
        id: 3,
        text: "Learning positive parenting techniques to better guide the child's future.",
        img: img4,
      },
    ],
  },
};

const CcwlParentsPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["ccl-parents"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "PARENTS / GUARDIANS",
    subtitle: "Children in Conflict with Law",
    bgImage: parentsBg,
    characterImage: parentsMascot,
    content: `
      <p>
        Parents play a crucial role in the rehabilitation of a Child in Conflict with Law (CCL). The Juvenile Justice Act emphasizes a <strong>family-based approach</strong> to reform, recognizing that a supportive home is the best place for a child's correction.
      </p>
      <br/>
      <p>
        Parents are expected to participate in legal inquiries, take responsibility for the child during bail, attend counseling, and create a positive environment that prevents re-offending.
      </p>
    `,
  };

  const [activeTab, setActiveTab] =
    useState<keyof typeof PARENTS_DATA>("inquiry");
  const currentSteps = PARENTS_DATA[activeTab].steps;

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

      {/* 1. TOP BUTTONS */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Inquiry Participation", id: "inquiry" },
            { label: "Supervision (Bail)", id: "supervision" },
            { label: "Rehabilitation Role", id: "rehab" },
            { label: "Family Counseling", id: "counseling" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id as keyof typeof PARENTS_DATA)}
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
            {PARENTS_DATA[activeTab].title}
          </h3>
          <div className="h-1 w-32 bg-red-600 mx-auto mt-3 rounded-full opacity-80"></div>
        </div>
      </div>

      {/* 2. ZIG-ZAG TIMELINE CONTENT */}
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

export default CcwlParentsPage;
