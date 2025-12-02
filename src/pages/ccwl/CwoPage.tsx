import React from "react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";

import policeBg from "../../assets/images/justicebg.png";
import guideImage from "../../assets/images/welfare.png";

const CwoPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["cncp-stk-police"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "Child Welfare Officer",
    subtitle: "Children in Need of Care and Protection",
    bgImage: policeBg,
    characterImage: guideImage,
    content: `
      <p>
The Child Welfare Officer (CWO), often acting as the Probation Officer (PO), is the key professional focused on the rehabilitation of a Child in Conflict with Law (CCL). They act as a helpful link between the child, the Juvenile Justice Board (JJB), and the community. Their main job is to create the detailed Social Background Report (SBR), which gives the JJB crucial information about the child's life and family history for a fair decision. The CWO also assists the JJB in court, supervises the child on probation, guides them using the Individual Care Plan (ICP), and monitors them to help ensure their successful return to society.      </p>
      
    `,
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      {/* BUTTONS */}
      <div className="w-full max-w-[1080px] mx-auto mt-8 mb-20 px-6" style={{ paddingLeft: "4vw" }}>
        <div className="flex flex-wrap justify-start gap-5">
          {[
            { label: "Investigating Officer (IO)", id: "sec-io" },
            { label: "Standard Operating Procedure", id: "sec-sop" },
            { label: "Juvenile Treatment Guidelines", id: "sec-guide" },
            { label: "Parole Officer", id: "sec-parole" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => scrollToSection(btn.id)}
              className="min-w-[200px] px-10 py-5 rounded-full bg-gradient-to-b from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-poppins font-semibold text-lg tracking-wide shadow-xl transition-transform transform hover:-translate-y-1 active:scale-95 border-2 border-red-500/30"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="w-full max-w-[1080px] mx-auto px-6 space-y-28" style={{ paddingLeft: "4vw" }}>
        {/* IO Section */}
        <section id="sec-io" className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors">
          <div className="absolute top-6 right-6 opacity-15 font-impact text-8xl text-white group-hover:opacity-30 transition-opacity select-none">01</div>
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            <h3 className="font-impact text-4xl md:text-5xl text-blue-200 tracking-wide drop-shadow-md border-b border-white/20 pb-6 inline-block md:w-1/4">
              Investigating Officer (IO)
            </h3>
            <p className="font-poppins text-gray-100 leading-relaxed text-xl md:text-xl font-light tracking-wide md:w-3/4 md:pl-10">
              The Investigating Officer in a juvenile case <strong className="text-white font-semibold">must not be in uniform</strong>. Their role is to investigate circumstances of the child's situation, ensuring the child is not traumatized while gathering evidence.
            </p>
          </div>
        </section>

        {/* SOP Section */}
        <section id="sec-sop" className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors">
          <div className="absolute top-6 right-6 opacity-15 font-impact text-8xl text-white group-hover:opacity-30 transition-opacity select-none">02</div>
          <h3 className="font-impact text-4xl md:text-5xl text-blue-200 mb-8 tracking-wide drop-shadow-md border-b border-white/20 pb-6 inline-block">
            Standard Operating Procedure
          </h3>
          <p className="font-poppins text-gray-100 leading-relaxed text-xl font-light tracking-wide">
            The SOP includes immediate case registration, medical examination if needed, and production before the CWC within <strong className="text-white font-semibold">24 hours</strong>. Children must never be kept in police lock-ups.
          </p>
        </section>

        {/* Guidelines Section */}
        <section id="sec-guide" className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors">
          <div className="absolute top-6 right-6 opacity-15 font-impact text-8xl text-white group-hover:opacity-30 transition-opacity select-none">03</div>
          <h3 className="font-impact text-4xl md:text-5xl text-blue-200 mb-8 tracking-wide drop-shadow-md border-b border-white/20 pb-6 inline-block">
            Treatment Guidelines
          </h3>
          <div className="font-poppins text-gray-100 leading-relaxed text-xl font-light tracking-wide">
            <p className="mb-8">Police officers must follow these protocols:</p>
            <ul className="list-disc pl-8 space-y-5 marker:text-red-500">
              <li>Never use handcuffs on children.</li>
              <li>Speak politely and in child-friendly language.</li>
              <li>Provide immediate food and water.</li>
              <li>Contact parents or guardians without delay.</li>
            </ul>
          </div>
        </section>

        {/* Parole Section */}
        <section id="sec-parole" className="bg-white/5 backdrop-blur-xl rounded-3xl p-10 border border-white/20 shadow-2xl relative overflow-hidden group hover:bg-white/10 transition-colors">
          <div className="absolute top-6 right-6 opacity-15 font-impact text-8xl text-white group-hover:opacity-30 transition-opacity select-none">04</div>
          <h3 className="font-impact text-4xl md:text-5xl text-blue-200 mb-8 tracking-wide drop-shadow-md border-b border-white/20 pb-6 inline-block">
            Parole / Probation
          </h3>
          <p className="font-poppins text-gray-100 leading-relaxed text-xl font-light tracking-wide">
            Police coordinate with <strong className="text-white font-semibold">Probation Officers</strong>. They monitor released children discreetly to ensure safety without harassment.
          </p>
        </section>
      </div>
    </ContentView>
  );
};
export default CwoPage;