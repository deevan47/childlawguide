import React, { useState } from "react";
import ContentView from "../../../components/ContentView";
import { TOPIC_CONTENT } from "../../../constants";

// Assets
import policeBg from "../../../assets/images/hfcbg.png";
import guideImage from "../../../assets/images/hfc.png";

// SOP Images
import img1 from "../../../assets/images/cwc/psop1.png";
import img2 from "../../../assets/images/cwc/psop2.png";
import img3a from "../../../assets/images/cwc/psop3a.png";
import img3b from "../../../assets/images/cwc/psop3b.png";
import img4 from "../../../assets/images/cwc/psop4.png";

// --- PATH CONNECTOR (Exact same style as CWC page) ---
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
          stroke="#000000ff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="7, 15"
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
    title: "Homes For Children",
    subtitle: "Children in Need of Care and Protection",
    bgImage: policeBg,
    characterImage: guideImage,
    content: `<p>The Juvenile Justice Act, 2015, sets up special government-registered Child Care Institutions (CCIs) for Children in Need of Care and Protection (CNCP). These homes are different from those for CCLs and include Children's Homes, which offer long-term shelter, food, and education, and Specialized Adoption Agencies (SAAs), which handle adoption. The Child Welfare Committee (CWC) places CNCPs in these CCIs, which follow strict rules to give individualized care and support, aiming for the child to be successfully returned to their family or placed in new families through adoption or foster care.</p>`,
  };

  const [activeTab, setActiveTab] = useState("sop");

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      <style>{`
        /* Movement animation (same as CWC page) */
        @keyframes travelDash {
          from { stroke-dashoffset: 30; }
          to { stroke-dashoffset: 0; }
        }
        .animate-travel {
          animation: travelDash 1s linear infinite;
        }
      `}</style>

      {/* TOP BUTTONS */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-12 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Institutional Care", id: "ic" },
            { label: "Community-based Care", id: "cbc" },
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

      {/* ---- SOP CONTENT ---- */}
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
                <h3 className="font-bold text-xl mb-2 font-poppins">
                  1. IF A CHILD IS APPREHENDED
                </h3>
                <p className="text-sm mb-4">
                  If a person who appears to be a child is found in conflict with the law, the special juvenile police unit or child welfare police officer takes charge of the situation.
                </p>

                <div className="flex gap-4 mt-4">
                  <div className="bg-blue-900 text-white p-3 text-xs rounded-lg shadow-lg w-1/2">
                    *The police officer must be present in civilian clothing.
                  </div>

                  <div className="bg-blue-900 text-white p-3 text-xs rounded-lg shadow-lg w-1/2">
                    *The child must NOT be placed in a police lock-up or jail.
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
                <h3 className="font-bold text-xl mb-2 font-poppins">
                  2. PRODUCE BEFORE THE BOARD
                </h3>
                <p className="text-sm">
                  The <span className="text-red-600 font-bold">SJPU/CWPO</span>{" "}
                  must bring the child before the Juvenile Justice Board without delay within 24 hours of apprehension (time spent travelling is excluded).
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
                  alt="Cop File"
                  className="w-full max-w-xs border-2 border-black rounded-xl"
                />
                <img
                  src={img3b}
                  alt="Phone"
                  className="w-full max-w-xs border-2 border-black rounded-xl"
                />
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="font-bold text-xl mb-2 font-poppins">
                  3. INFORMING FAMILY AND PROBATION OFFICER
                </h3>

                <ul className="list-disc pl-5 text-sm space-y-2">
                  As soon as possible after apprehension the SJPU/CWPO must:
                  <li><strong>Inform the parent/guardian</strong> (if they can be found) and ask them to be present when the child is produced before the Board.</li>
                  <li>
                    <strong>Inform the probation officer</strong> (or if none available, a Child Welfare Officer) to prepare a Social Investigation Report (SIR) about the child’s background.
                  </li>
                </ul>

                <div className="bg-blue-900 text-white p-4 text-xs rounded-lg shadow-lg mt-6 w-3/4">
                  *The SIR should be prepared and submitted to the Board within
                  two weeks.
                </div>
              </div>
            </div>

            <PathConnector direction="left-to-right" />
          </div>

          {/* STEP 4 */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-start gap-6 py-6">
              <div className="w-full md:w-1/3 text-xs leading-relaxed pr-4">
                <h3 className="font-bold text-lg mb-2 font-poppins">
                  4. INITIAL DECISION: RELEASE OR CUSTODY
                </h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>
                    The officer-in-charge or the Board should release the child on bail (with or without surety) or
                  </li>                  <li>
                    Place the child under supervision of a probation officer or under the care of a fit person (for rehabilitation), unless there are reasonable grounds to believe that release would expose the child to criminals, danger, or defeat justice.
                  </li>
If the officer/Board refuses bail, they must record the reasons in writing.
                </ul>
              </div>

              <div className="w-full md:w-1/3 text-xs leading-relaxed border-l-2 border-dashed border-gray-300 pl-4">
                <h3 className="font-bold text-sm mb-2 font-poppins">
                  4.A If the officer-in-charge refuses to release, the child must be kept only in an observation home (in prescribed manner) until the Board can consider the case.
                  <li>If the Board refuses bail, it must order the child to an observation home or place of safety for a period specified while the inquiry continues.</li>
                </h3>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Child must be kept only in an observation home.</li>
                </ul>

                <h3 className="font-bold text-sm mt-6 mb-2 font-poppins">
                  4.B IF CHILD CANNOT MEET BAIL CONDITIONS
                </h3>
                <p>If bail not met in 7 days, produce child again to modify.</p>
              </div>

              <div className="w-full md:w-1/3 flex justify-center items-center">
                <img
                  src={img4}
                  alt="Final Order"
                  className="w-full max-w-sm border-2 border-black rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* STEP 5 */}
          <div className="flex justify-end mt-8">
            <div className="w-full md:w-1/2 bg-white p-6 border-2 border-black rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-2 font-poppins">
                5. PERSON GIVEN CHARGE OF THE CHILD
              </h3>

              <ul className="list-disc pl-5 text-sm space-y-2">
                <li>
                  Person/organisation given custody is responsible for child's
                  welfare.
                </li>
                <li>Board decides if parent is fit to take the child back.</li>
              </ul>
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

export default PolicePage;
