import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

import homesBg from "../../assets/images/homesbg.png";
import homesMascot from "../../assets/images/homes.png";

import img1 from "../../assets/images/cwc/hco1.png";
import img2 from "../../assets/images/cwc/hco2.png";
import img3 from "../../assets/images/cwc/hco3.png";
import img4 from "../../assets/images/cwc/hco4.png";
import img5 from "../../assets/images/cwc/hco5.png";
import img6 from "../../assets/images/cwc/hco6.png";
import img7 from "../../assets/images/cwc/hco7.png";

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
      ></svg>
    </div>
  );
};

const OBSERVATION_STEPS = [
  {
    id: 1,
    title: "Segregation & Accommodation",
    points: [
      "Separate premises for boys and girls.",
      "Classification by age-groups (e.g., 7-11, 12-16, 16-18) and by nature of offence; consider physical/mental status.",
      "Child-friendly environment: the institution shall not look like a jail or lock-up.",
    ],
    img: img1,
  },
  {
    id: 2,
    title: "Physical Infrastructure & Environment",
    points: [
      "Basic amenities for living: adequate sleeping, bathing, recreation, education space.",
      "Accommodation norms for number of children (building size, beds, dorms) as per the rules.",
    ],
    img: img2,
  },
  {
    id: 3,
    title: "Registration & Monitoring",
    points: [
      "The Home must be registered/recognised under the Act and Rules.",
      "Management Committee must be in place to oversee the institution and monitor children’s progress.",
    ],
    img: img3,
  },
  {
    id: 4,
    title: "Programme / Care Plan for Each Child",
    points: [
      "An Individual Care Plan (ICP) must be prepared for each child: covering health, nutrition, education, training, psychological needs, social reintegration.",
      "Services like counselling, skill development, mental health care, recreation must be provided.",
      "Records maintained: child’s entry, photo identity, case history.",
    ],
    img: img4,
  },
  {
    id: 5,
    title: "Staffing and Children’s Rights",
    points: [
      "Qualified staff (social workers, counsellors, educators) experienced in working with children.",
      "Child’s rights: dignity, no abuse, privacy, hearing of child’s views.",
    ],
    img: img5,
  },
  {
    id: 6,
    title: "Safety & Protection",
    points: [
      "No handcuffs/fetters; no solitary/jail-style confinement.",
      "Mechanisms for grievance redressal, safe complaint process.",
      "Safe restoration: children should be restored to family, foster, or other community context when possible.",
    ],
    img: img6,
  },
  {
    id: 7,
    title: "Supervision & After-Care",
    points: [
      "Follow-up after the child leaves the Home or is released — supervision, reintegration.",
      "Regular inspections, audits to ensure quality of care.",
    ],
    img: img7,
  },
];

const CcwlHomesPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["ccl-homes"] || TOPIC_CONTENT["default"];
  const data = {
    ...baseData,
    title: "HOMES FOR CHILDREN",
    subtitle: "Children in Conflict with Law",
    bgImage: homesBg,
    characterImage: homesMascot,
  };

  const [activeTab, setActiveTab] = useState<
    "observation" | "special" | "ff" | "ps"
  >("observation");

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <style>{`
        @keyframes travelDash {
          to { stroke-dashoffset: -24; }
        }
        .animate-travel {
          animation: travelDash 1s linear infinite;
        }
        .step-title {
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        .step-points {
          padding-left: 1.5rem;
          margin: 0;
          list-style-type: disc;
        }
        .step-points li {
          margin-bottom: 0.4rem;
          font-weight: 500;
          color: #4b5563;
        }
        .coming-soon {
          text-align: center;
          font-size: 1.5rem;
          color: #2c2222ff;
          font-weight: bold;
          margin-top: 3rem;
        }
      `}</style>

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
              onClick={() =>
                setActiveTab(btn.id as "observation" | "special" | "ff" | "ps")
              }
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

        <div className="text-center mt-12 mb-8">
          <h3 className="font-poppins text-2xl md:text-3xl italic text-red-900 tracking-wide font-semibold drop-shadow-sm">
            {activeTab === "observation"
              ? "Observation Homes"
              : activeTab === "special"
              ? "Special Homes"
              : activeTab === "ff"
              ? "Fit Facility"
              : "Place of Safety"}
          </h3>
          <div className="h-1 w-32 bg-red-600 mx-auto mt-3 rounded-full opacity-80"></div>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-6 pb-40">
        {activeTab === "observation" ? (
          OBSERVATION_STEPS.map((step, index) => {
            const isLeftAligned = index % 2 === 0;
            const isLast = index === OBSERVATION_STEPS.length - 1;

            return (
              <div key={step.id} className="relative">
                <div
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-24 py-6 ${
                    !isLeftAligned ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full md:w-1/2 flex justify-center relative z-10">
                    <div className="bg-white p-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-500">
                      <img
                        src={step.img}
                        alt={`Step ${step.id}`}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="step-box">
                      <div className="step-title">{step.title}</div>
                      <ul className="step-points">
                        {step.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {!isLast && (
                  <PathConnector
                    direction={
                      isLeftAligned ? "left-to-right" : "right-to-left"
                    }
                  />
                )}
              </div>
            );
          })
        ) : (
          <div className="coming-soon">Content Coming Soon</div>
        )}
      </div>
    </ContentView>
  );
};

export default CcwlHomesPage;
