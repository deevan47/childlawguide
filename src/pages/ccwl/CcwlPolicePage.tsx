import React, { useState } from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

import policeBg from "../../assets/images/police-bg.png";
import guideImage from "../../assets/images/lpolice.png";

import img1 from "../../assets/images/cwc/psop1.png";
import img2 from "../../assets/images/cwc/psop2.png";
import img3a from "../../assets/images/cwc/psop3a.png";
import img3b from "../../assets/images/cwc/psop3b.png";
import img4 from "../../assets/images/cwc/psop4.png";
import img5 from "../../assets/images/cwc/psop5.png";

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

const CcwlPolicePage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["ccl-police"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "POLICE OFFICERS",
    subtitle: "Children in Conflict with Law",
    bgImage: policeBg,
    characterImage: guideImage,
    content: `<p>Police officers, especially those in Special Juvenile Police Units (SJPUs), have key duties for a Child in Conflict with Law (CCL) under the Juvenile Justice Act. Their main job is to protect the child from the adult criminal system and treat them with dignity. This means they must apprehend the child in civilian clothes, never use a lock-up or jail, and take the child to the Juvenile Justice Board (JJB) within 24 hours. They must also inform the parents and support the child's right to bail, working with the JJB to ensure the process is child-friendly and focused on rehabilitation.</p>`,
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

      {/* BUTTONS */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Investigating Officer (IO)", id: "io" },
            { label: "Standard Operating Procedure", id: "sop" },
            { label: "Juvenile Treatment Guidelines", id: "guide" },
            { label: "Child Welfare Police Officer", id: "cwpo" },
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

      {/* FULL CNCP SOP CONTENT HERE */}
      {activeTab === "sop" && (
        <div className="w-full max-w-6xl mx-auto px-6 pb-40">
          <div className="text-center mb-12 underline font-bold text-2xl text-slate-800 font-poppins">
            Standard Operating Procedure
          </div>

          {/* STEP 1 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img1}
                  alt="Apprehended"
                  className="w-full max-w-md border-2 border-black rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins">
                  1. IF A CHILD IS APPREHENDED
                </h3>
                <p className="text-xl mb-4 text-slate-700">
                  If a person who appears to be a child is found in conflict
                  with the law, the special juvenile police unit or child
                  welfare police officer takes charge of the situation.
                </p>
                <div className="flex gap-4 mt-4">
                  <div className="bg-blue-900 text-white p-4 text-[12px] md:text-base rounded-lg shadow-lg w-1/2 leading-snug">
                    The police officer must be present in{" "}
                    <em>civilian clothing</em>.
                  </div>
                  <div className="bg-blue-900 text-white p-4 text-[12px] md:text-base rounded-lg shadow-lg w-1/2 leading-snug">
                    The child must <strong>not</strong> be placed in a police
                    lock-up or jail.
                  </div>
                </div>
              </div>
            </div>
            <PathConnector direction="left-to-right" />
          </div>

          {/* STEP 2 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row-reverse items-start gap-10 py-6">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img2}
                  alt="Board"
                  className="w-full max-w-md border-2 border-black rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2 text-right">
                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins">
                  2. PRODUCE BEFORE THE BOARD
                </h3>
                <p className="text-xl text-slate-700">
                  The <span className="text-red-600 font-bold">SJPU/CWPO</span>{" "}
                  must bring the child before the Juvenile Justice Board without
                  delay within 24 hours of apprehension (time spent travelling
                  is excluded).
                </p>
              </div>
            </div>
            <PathConnector direction="right-to-left" />
          </div>

          {/* STEP 3 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start gap-10 py-6">
              <div className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                <img
                  src={img3a}
                  alt="Cop"
                  className="w-full max-w-xs border-2 border-black rounded-xl"
                />
                <img
                  src={img3b}
                  alt="Phone"
                  className="w-full max-w-xs border-2 border-black rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins">
                  3. INFORMING FAMILY AND PROBATION OFFICER
                </h3>
                <p className="text-xl mb-2 text-slate-600">
                  As soon as possible after apprehension the SJPU/CWPO must:
                </p>
                <ul className="list-disc pl-5 text-xl space-y-2 text-slate-700">
                  <li>
                    Inform the parent/guardian and ask them to be present when
                    the child is produced before the Board.
                  </li>
                  <li>
                    Inform the probation officer (or if unavailable, a Child
                    Welfare Officer) to prepare a Social Investigation Report
                    (SIR).
                  </li>
                </ul>
                <div className="bg-blue-900 text-white p-4 text-base rounded-lg shadow-lg mt-6 w-3/4">
                  *The SIR should be prepared and submitted to the Board within
                  two weeks.
                </div>
              </div>
            </div>
            <PathConnector direction="left-to-right" />
          </div>

          {/* STEP 4 */}
          <div className="relative mt-8">
            <div className="flex flex-col md:flex-row items-start gap-6 py-6">
              <div className="w-full md:w-1/3 text-xl leading-relaxed pr-2 text-slate-800">
                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins">
                  4. INITIAL DECISION: RELEASE OR CUSTODY
                </h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    The officer-in-charge or the Board{" "}
                    <strong>should release the child on bail</strong> unless
                    release would expose the child to danger or defeat justice.
                  </li>
                  <li>
                    Place the child under supervision of a probation officer or
                    under the care of a fit person (for rehabilitation), unless
                    there are reasonable grounds to believe that release would
                    expose the child to criminals, danger, or defeat justice.
                  </li>
                </ul>
                <p className="mt-4 text-slate-800">
                  If the officer/Board refuses bail, they must record the
                  reasons in writing.
                </p>
              </div>

              <div className="w-full md:w-1/3 text-xl leading-relaxed text-slate-800">
                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins">
                  4.A IF NOT RELEASED IMMEDIATELY
                </h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    If the officer-in-charge refuses to release, the child must
                    be kept only in an observation home (in prescribed manner)
                    until the Board can consider the case.
                  </li>
                  <li>
                    If the Board refuses bail, it must order the child to an
                    observation home or place of safety for a period specified
                    while the inquiry continues.
                  </li>
                </ul>

                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins mt-4">
                  4.B IF BAIL CONDITIONS ARE NOT MET
                </h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    If a child released on bail cannot meet the bail conditions
                    within 7 days, they must be produced again before the Board
                    so the Board can modify the bail conditions.
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img4}
                  alt="Apprehended"
                  className="w-full max-w-md border-2 border-black rounded-xl"
                />
              </div>
            </div>

            <PathConnector direction="step4-to-5" />
          </div>

          {/* STEP 5 */}
          <div className="flex justify-end mt-16 pr-0 md:pr-4">
            <div className="flex flex-col md:flex-row items-start gap-10">
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={img5}
                  alt="Apprehended"
                  className="w-full max-w-md border-2 border-black rounded-xl"
                />
              </div>

              <div className="w-full md:w-1/2 p-6">
                <h3 className="font-bold text-2xl uppercase mb-2 font-poppins">
                  5. PERSON GIVEN CHARGE OF THE CHILD
                </h3>
                <ul className="list-disc pl-5 text-xl space-y-2 text-slate-700">
                  <li>
                    Any person or organisation given custody by the Board is
                    responsible for the child’s maintenance and welfare while
                    the order lasts — just like a parent.
                  </li>
                  <li>
                    If a parent or other person claims the child back, the child
                    stays with the person the Board appointed until the Board
                    decides the parent/other person is fit to take charge.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OTHER TABS */}
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

export default CcwlPolicePage;
