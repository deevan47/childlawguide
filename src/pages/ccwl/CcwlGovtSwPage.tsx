import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";
import socialBg from "../../assets/images/socialbg.png";
import socialMascot from "../../assets/images/socialw.png";
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

const SW_DATA = {
  rr: {
    title: "Roles & Responsibilities",
    steps: [
      {
        id: 1,
        text: "Interview the child and family to understand the background and circumstances of the offense.",
        img: img1,
      },
      {
        id: 2,
        text: "Assess the child's school attendance, peer relationships, and habits.",
        img: img2,
      },
      {
        id: 3,
        text: "Submit the SIR to the Juvenile Justice Board (JJB) within 15 days to aid in fair decision-making.",
        img: img3,
      },
    ],
  },
  sir: {
    title: "Social Investigation Report (SIR)",
    steps: [
      {
        id: 1,
        text: "Monitor the child's behavior and compliance with bail/probation conditions.",
        img: img2,
      },
      {
        id: 2,
        text: "Visit the child's home or school regularly to ensure they are in a safe environment.",
        img: img3,
      },
      {
        id: 3,
        text: "Report progress or violations to the JJB immediately.",
        img: img4,
      },
    ],
  },
  jtg: {
    title: "Juvenile Treatment Guidelines",
    steps: [
      {
        id: 1,
        text: "Identify the specific needs of the child (education, health, skill development).",
        img: img3,
      },
      {
        id: 2,
        text: "Create a tailored plan with short-term and long-term goals for reform.",
        img: img4,
      },
      {
        id: 3,
        text: "Regularly review and update the plan based on the child's progress.",
        img: img1,
      },
    ],
  },
  ct: {
    title: "Contacts",
    steps: [], // Custom view handled in render
  },
};

const CcwlGovtSwPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["ccl-govsw"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "GOVT SOCIAL WORKER",
    subtitle: "Children in Conflict with Law",
    bgImage: socialBg,
    characterImage: socialMascot,
    content: `
      <p>The Social Worker, who often acts as the Probation Officer (PO), is the main professional focused on the rehabilitation of a Child in Conflict with Law (CCL). Their job is to look beyond the court and focus on the child's life and future. Their key role is creating the detailed Social Investigation Report (SIR), which gives the Juvenile Justice Board (JJB) crucial information about the child's family and social history for a fair decision. After the court ruling, the PO supervises the child on probation, guides them using the Individual Care Plan (ICP), offers counseling, and helps the child successfully return to their family and community.
      </p>
    `,
  };

  const [activeTab, setActiveTab] = useState<keyof typeof SW_DATA>("rr");
  const currentSteps = SW_DATA[activeTab].steps;

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

      {/* TOP BUTTONS */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-8 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Roles & Responsibilities", id: "rr" },
            { label: "Social Investigation Report (SIR)", id: "sir" },
            { label: "Juvenile Treatment Guidelines", id: "jtg" },
            { label: "Contacts", id: "ct" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveTab(btn.id as keyof typeof SW_DATA)}
              className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-all shadow-md border-2 ${
                activeTab === btn.id
                  ? "bg-[#b93c3c] text-white border-[#8b2323] shadow-lg"
                  : "bg-[#b93c3c] text-white border-[#8b2323] opacity-90 hover:opacity-100"
              } ${
                // Optional: Invert colors for inactive tabs if desired, but keeping all red as per image hint
                ""
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Section Title Indicator (Hidden for Contacts to match screenshot perfectly) */}
        {activeTab !== "ct" && (
          <div className="text-center mt-12 mb-8">
            <h3 className="font-poppins text-2xl md:text-3xl italic text-red-900 tracking-wide font-semibold drop-shadow-sm">
              {SW_DATA[activeTab].title}
            </h3>
            <div className="h-1 w-32 bg-red-600 mx-auto mt-3 rounded-full opacity-80"></div>
          </div>
        )}
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-40">
        {/* CONDITIONAL RENDER: CONTACTS OR ZIG-ZAG */}
        {activeTab === "ct" ? (
          /* --- CONTACTS GRID VIEW (Matched to Screenshot) --- */
          <div className="w-full mt-10">
            {/* Header */}
            <h3 className="text-center font-bold text-xl md:text-2xl underline decoration-1 underline-offset-4 mb-12 text-black font-poppins italic tracking-wide">
              Social Worker Contacts
            </h3>

            {/* Row 1: Three Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Card 1: Baramati (White) */}
              <div className="bg-white border-2 border-[#1e3a8a] rounded-lg p-6 shadow-xl flex flex-col justify-center">
                <h4 className="font-bold text-center text-black mb-4 text-base md:text-lg">
                  Baramati Police Station
                </h4>
                <div className="space-y-1 text-sm md:text-base italic font-medium text-black">
                  <div className="flex justify-between gap-2">
                    <span>Sunita Shinde</span>
                    <span>+91 7218099945</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Rajendra Khartode</span>
                    <span>+91 9096700515</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Superintendent (Blue) */}
              <div className="bg-[#1e3a8a] text-white rounded-lg p-6 shadow-xl flex flex-col justify-center border-2 border-[#1e3a8a]">
                <h4 className="font-bold text-center mb-4 text-base md:text-lg">
                  Superintendent of Police office, Rural
                </h4>
                <div className="space-y-1 text-sm md:text-base italic font-medium">
                  <div className="flex justify-between gap-2">
                    <span>Vaishali Ranade</span>
                    <span>+91 9767502284</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Sonali Salunkhe</span>
                    <span>+91 8796515153</span>
                  </div>
                </div>
              </div>

              {/* Card 3: Junnar (White) */}
              <div className="bg-white border-2 border-[#1e3a8a] rounded-lg p-6 shadow-xl flex flex-col justify-center">
                <h4 className="font-bold text-center text-black mb-4 text-base md:text-lg">
                  Junnar Police Station
                </h4>
                <div className="space-y-1 text-sm md:text-base italic font-medium text-black">
                  <div className="flex justify-between gap-2">
                    <span>Ganga Buke</span>
                    <span>+91 9561961021</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Kavita Kate</span>
                    <span>+91 9970776299</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Centered Card */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg bg-white border-2 border-[#1e3a8a] rounded-lg p-6 shadow-xl">
                <h4 className="font-bold text-center text-black mb-4 text-base md:text-lg">
                  Shirur Police Station
                </h4>
                <div className="space-y-1 text-sm md:text-base italic font-medium text-black">
                  <div className="flex justify-between gap-2">
                    <span>Yogita Gund</span>
                    <span>+91 7744968033</span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span>Gayatri Daundkar</span>
                    <span>+91 9689904638</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* --- STANDARD ZIG-ZAG VIEW (For other tabs) --- */
          currentSteps.map((step, index) => {
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
        )}
      </div>
    </ContentView>
  );
};

export default CcwlGovtSwPage;