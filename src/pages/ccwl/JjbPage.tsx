import React, { useState, useRef, useEffect } from "react";
import { Volume2, Pause } from "lucide-react";
import ContentView from "../../components/ContentView";
import { TOPIC_CONTENT } from "../../constants";
import jjbBg from "../../assets/images/justicebg.png";
import jjbMascot from "../../assets/images/bjudge.png";
import sopImg1 from "../../assets/images/cwc/jjsop1.png";
import sopImg2 from "../../assets/images/cwc/jjsop2.png";
import sopImg3 from "../../assets/images/cwc/jjsop3.png";
import sopImg4 from "../../assets/images/cwc/jjsop4.png";
import sopImg5 from "../../assets/images/cwc/jjsop5.png";
import jjpa1 from "../../assets/images/cwc/jjpa1.png";
import jjpa2 from "../../assets/images/cwc/jjpa2.png";
import jjpa3 from "../../assets/images/cwc/jjpa3.png";
import jjpa4 from "../../assets/images/cwc/jjpa4.png";
import jjpa5 from "../../assets/images/cwc/jjpa5.png";
import jjpa6 from "../../assets/images/cwc/jjpa6.png";
import mascot1 from "../../assets/images/cwc/jsopleft.png";
import mascot2 from "../../assets/images/cwc/jsopright.png";
import audio1File from "../../assets/audio/jjsopa1.mp3";
import audio2File from "../../assets/audio/jjsopa2.mp3";
import audio3File from "../../assets/audio/jjsopa3.mp3";

// 1. Audio Trigger Icon
const AudioTrigger: React.FC<{
  id: string;
  src: string;
  currentPlayingId: string | null;
  onPlay: (id: string) => void;
}> = ({ id, src, currentPlayingId, onPlay }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlaying = currentPlayingId === id;

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current
        .play()
        .catch((e) => console.error("Audio play error:", e));
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlaying]);

  const toggle = () => {
    if (isPlaying) {
      onPlay("");
    } else {
      onPlay(id);
    }
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center justify-center ml-2 align-middle hover:scale-110 transition-transform"
    >
      <audio ref={audioRef} src={src} onEnded={() => onPlay("")} />
      {isPlaying ? (
        <Pause size={18} className="text-red-600 fill-current" />
      ) : (
        <Volume2 size={18} className="text-slate-800" />
      )}
    </button>
  );
};

// 2. Speech Bubble
const SpeechBubble: React.FC<{
  text: string;
  audioId: string;
  audioSrc: string;
  currentPlayingId: string | null;
  onPlay: (id: string) => void;
  className?: string;
  tailClass?: string;
}> = ({
  text,
  audioId,
  audioSrc,
  currentPlayingId,
  onPlay,
  className,
  tailClass,
}) => {
  return (
    <div
      className={`bg-white border-2 border-black rounded-3xl py-3 px-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-20 ${className}`}
    >
      <p className="font-poppins text-base md:text-sm font-bold text-black flex items-center justify-between gap-3">
        {text}
        <AudioTrigger
          id={audioId}
          src={audioSrc}
          currentPlayingId={currentPlayingId}
          onPlay={onPlay}
        />
      </p>
      <div
        className={`absolute w-4 h-4 bg-white border-b-2 border-r-2 border-black ${tailClass}`}
      ></div>
    </div>
  );
};

const FlowchartArrows = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      preserveAspectRatio="none"
    >
      <defs>
        <marker
          id="arrow"
          markerWidth="6"
          markerHeight="6"
          refX="0"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L6,3 z" fill="#000" />
        </marker>
      </defs>
      {/*arrows for sop */}
      <line
        x1="50%"
        y1="34%"
        x2="50%"
        y2="39%"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="8,8"
        markerEnd="url(#arrow)"
      />

      <line
        x1="50%"
        y1="65%"
        x2="50%"
        y2="58%"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="8,8"
      />

      <line
        x1="16.5%"
        y1="58%"
        x2="83.5%"
        y2="58%"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="8,8"
      />

      <line
        x1="16.5%"
        y1="58%"
        x2="16.5%"
        y2="69%"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="8,8"
        markerEnd="url(#arrow)"
      />

      <line
        x1="50%"
        y1="65%"
        x2="50%"
        y2="69%"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="8,8"
        markerEnd="url(#arrow)"
      />

      <line
        x1="83.5%"
        y1="58%"
        x2="83.5%"
        y2="69%"
        stroke="black"
        strokeWidth="3"
        strokeDasharray="8,8"
        markerEnd="url(#arrow)"
      />
    </svg>
  );
};

// MAIN PAGE
const JjbPage: React.FC<{ onBack: () => void; onHome: () => void }> = ({
  onBack,
  onHome,
}) => {
  const baseData = TOPIC_CONTENT["ccl-jjb"] || TOPIC_CONTENT["default"];

  const data = {
    ...baseData,
    title: "JUVENILE JUSTICE BOARD",
    subtitle: "Children in Conflict with Law",
    bgImage: jjbBg,
    characterImage: jjbMascot,
    content: `<p>The Juvenile Justice Board (JJB) is the central and sole legal authority for a Child in Conflict with Law (CCL) under the Juvenile Justice Act. Its main role is to act as a specialised court that prioritises the child's rehabilitation and welfare over punishment. The JJB conducts the entire legal inquiry, ensures the child is handled fairly and protected from the adult criminal system, and decides on the best course of action - such as supervision or placement in a Special Home - always aiming for the child's reform and successful return to society.</p>`,
  };

  const [activeTab, setActiveTab] = useState("sop");
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  return (
    <ContentView data={data} onBack={onBack} onHome={onHome}>
      {/* NAV */}
      <div className="w-full max-w-6xl mx-auto mt-0 mb-8 px-4">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "Standard Operating Procedure", id: "sop" },
            { label: "Roles and Responsibilities", id: "rr" },
            { label: "Juvenile Treatment Guidelines", id: "jtg" },
            { label: "Special Juvenile Police Unit (SJPU)", id: "spju" },
            { label: "Preliminary Assessment", id: "pa" },
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

      {activeTab === "sop" && (
        <div className="w-full max-w-[1200px] mx-auto px-4 pb-40 relative">
          <h2 className="text-center text-3xl font-poppins font-bold underline decoration-2 underline-offset-4 text-slate-900 mb-12 italic">
            Standard Operating Procedure
          </h2>

          <div className="absolute top-10 left-0 w-full h-[1400px] pointer-events-none hidden lg:block">
            <FlowchartArrows />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="absolute right-[-20px] top-[-20px] hidden lg:flex flex-col items-end">
              <SpeechBubble
                text="What are petty offences?"
                audioId="audio1"
                audioSrc={audio1File}
                currentPlayingId={currentPlayingId}
                onPlay={setCurrentPlayingId}
                className="mb-2 mr-10 w-56"
                tailClass="bottom-[-8px] right-6 rotate-45 bg-white"
              />
              <img
                src={mascot1}
                alt="Mascot"
                className="w-32 md:w-40 drop-shadow-xl"
              />
            </div>

            <div className=" w-full max-w-[450px] ">
              <span className="absolute top-4 right-4 bg-red-100 text-red-800 text-base font-bold px-2 py-1 rounded border border-red-200">
                Starting inquiry
              </span>
              <img src={sopImg1} alt="Inquiry" />
            </div>

            <div className="mt-6 max-w-2xl text-left space-y-3 font-poppins text-base text-slate-800 font-medium">
              <p>
                • When a child alleged to be in conflict with law is brought
                before the Juvenile Justice Board (the Board),{" "}
                <strong>
                  the Board begins an inquiry (not a regular court trial)
                </strong>{" "}
                to understand the child’s situation and decide the next steps.
              </p>
              <p>
                • The Board may then pass appropriate orders under{" "}
                <strong>Sections 17 or 18</strong>.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-24 flex flex-col items-center">
            <div className="absolute left-[-40px] top-[-50px] hidden lg:flex flex-col items-start gap-12">
              <SpeechBubble
                text="What are serious offences?"
                audioId="audio2"
                audioSrc={audio2File}
                currentPlayingId={currentPlayingId}
                onPlay={setCurrentPlayingId}
                className="ml-24 w-60"
                tailClass="bottom-[-8px] left-6 rotate-45 bg-white"
              />

              <div className="flex items-center">
                <img
                  src={mascot2}
                  alt="Lawyer Mascot"
                  className="w-36 md:w-48 drop-shadow-xl z-20"
                />
                <SpeechBubble
                  text="Then what are heinous offences?"
                  audioId="audio3"
                  audioSrc={audio3File}
                  currentPlayingId={currentPlayingId}
                  onPlay={setCurrentPlayingId}
                  className="-ml-4 mt-12 w-64"
                  tailClass="top-[50%] -left-[9px] rotate-45 bg-white border-b-0 border-r-0 border-t-2 border-l-2"
                />
              </div>
            </div>

            <div className=" p-2 w-full max-w-[450px]">
              <img src={sopImg2} alt="Duration" />
            </div>

            <div className="absolute left-[70%] top-10 w-64 hidden lg:block text-base font-poppins text-slate-800 font-medium space-y-2">
              <p>
                • <strong>Normal Completion Time:</strong> Within 4 months of
                first production.
              </p>
              <p>
                • <strong>Extension:</strong> Can be extended by 2 months
                (maximum) by the Board.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <img
                  src={sopImg3}
                  alt="Heinous"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-base font-poppins text-slate-800 font-semibold text-center mt-2">
                • Normal Completion Time: Within 3 months of first production
                before the Board.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative">
                <img src={sopImg4} alt="Petty" className="w-full rounded-xl" />
              </div>
              <p className="text-base font-poppins text-slate-800 font-semibold text-center mt-2">
                • If inquiry not completed even after extension, case is{" "}
                <strong>closed/terminated</strong>.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="relative">
                <img
                  src={sopImg5}
                  alt="Extended"
                  className="w-full rounded-xl"
                />
              </div>
              <p className="text-base font-poppins text-slate-800 font-semibold text-center mt-2">
                <li>
                  Normal Completion Time: Additional extension allowed by Chief
                  Judicial Magistrate or Chief Metropolitan Magistrate (with
                  written reason).
                </li>{" "}
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "pa" && (
        <div className="w-full max-w-[1080px] mx-auto px-4 pb-40 relative">
          <h2 className="text-center text-3xl font-poppins font-bold underline decoration-2 underline-offset-4 text-slate-900 mb-12 italic">
            Preliminary Assessment
          </h2>

          <div className="absolute top-0 left-0 w-full h-[1200px] pointer-events-none hidden lg:block">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="pa-arrow"
                  markerWidth="6"
                  markerHeight="6"
                  refX="0"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L0,6 L6,3 z" fill="#000" />
                </marker>
              </defs>

              <line
                x1="70%"
                y1="390"
                x2="25%"
                y2="397"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="50%"
                y1="390"
                x2="75%"
                y2="390"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="75%"
                y1="390"
                x2="75%"
                y2="430"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
                markerEnd="url(#pa-arrow)"
              />

              <line
                x1="75%"
                y1="600"
                x2="75%"
                y2="700"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="75%"
                y1="700"
                x2="25%"
                y2="700"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="25%"
                y1="700"
                x2="25%"
                y2="720 "
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
                markerEnd="url(#pa-arrow)"
              />

              <line
                x1="25%"
                y1="900"
                x2="25%"
                y2="1020"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="25%"
                y1="1020"
                x2="75%"
                y2="1020"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="75%"
                y1="1000"
                x2="75%"
                y2="1040"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
                markerEnd="url(#pa-arrow)"
              />

              <line
                x1="75%"
                y1="1320"
                x2="75%"
                y2="1200"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="75%"
                y1="1320"
                x2="25%"
                y2="1320"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="25%"
                y1="1320"
                x2="25%"
                y2="1335"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
                markerEnd="url(#pa-arrow)"
              />

              <line
                x1="25%"
                y1="150"
                y2="400"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />

              <line
                x1="25%"
                y1="1605"
                x2="25%"
                y2="1400"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="25%"
                y1="1600"
                x2="75%"
                y2="1600"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
              />
              <line
                x1="75%"
                y1="1590"
                x2="75%"
                y2="1620"
                stroke="black"
                strokeWidth="2"
                strokeDasharray="8,8"
                markerEnd="url(#pa-arrow)"
              />
            </svg>
          </div>

          <div className="absolute right-0 top-0 hidden lg:flex flex-col items-end z-20">
            <div className="bg-white border-2 border-black rounded-3xl p-4 shadow-lg mb-2 relative w-64">
              <p className="text-2xl font-bold text-red-600 mb-1">Remember!</p>
              <p className="text-base font-poppins text-slate-800 leading-tight">
                This applies only if:
                <br />
                • The offence is heinous (punishable with &gt;7 years).
                <br />• The child is 16 years or older.
              </p>
              <div className="absolute w-4 h-4 bg-white border-b-2 border-r-2 border-black bottom-[-8px] right-10 rotate-45"></div>
            </div>
            <img src={mascot1} alt="Guide" className="w-32 drop-shadow-xl" />
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto pt-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-[400px] relative">
                <img src={jjpa1} alt="Step 1" className="w-full rounded-xl" />
              </div>
              <div className="text-left w-[400px]">
                <h4 className="font-bold text-2xl text-slate-900 mb-2 font-poppins">
                  Step 1: What the Board Assesses
                </h4>
                <p className="text-base text-slate-700 leading-relaxed whitespace-pre-line">
                  The Board must evaluate:
                  <br />
                  <li>
                    The child’s mental and physical capacity to commit the
                    offence.
                  </li>
                  <li>The child’s ability to understand the consequences.</li>
                  <li>
                    The circumstances under which the offence was allegedly
                    committed.
                  </li>
                  This is not a trial, only an assessment to decide whether the
                  child should be tried as a child or as an adult.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex justify-end">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-[800px]">
              <div className="text-right w-[400px] order-2 md:order-1 md:mr-6">
                <h4 className="font-bold text-2xl text-slate-900 mb-2 font-poppins">
                  Step 2: Expert Support
                </h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  <li>
                    The Board may take help from psychologists, psycho-social
                    workers, or other experts for this assessment.
                  </li>
                </p>
              </div>

              <div className="w-[400px] relative md:ml-10 md:mr-0 order-1 md:order-2">
                <img src={jjpa2} alt="Step 2" className="w-full rounded-xl" />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex justify-start">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-[800px]">
              <div className="w-[400px] relative">
                <img src={jjpa3} alt="Step 3" className="w-full rounded-xl" />
              </div>
              <div className="text-left w-[400px]">
                <h4 className="font-bold text-2xl text-slate-900 mb-2 font-poppins">
                  Step 3: Timeframe
                </h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  <li>
                    The assessment must be completed within 3 months of the
                    child’s first production before the Board (as per Section
                    14).
                  </li>
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex justify-end">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-[800px]">
              <div className="text-left w-[400px] order-2 md:order-1 md:mr-6">
                <h4 className="font-bold text-2xl text-slate-900 mb-2 font-poppins">
                  Step 4: Possible Outcomes
                </h4>
                <p className="text-base text-slate-700 leading-relaxed">
                  <strong>Outcome: </strong>Board decides the child should be
                  treated as a child
                  <br></br>
                  <strong>Next Step: </strong>Follows the summons case procedure
                  and disposes of the matter itself.
                  <br></br> <br></br>
                  <strong>Outcome: </strong>Board decides the child should be
                  tried as an adult <br></br>
                  <strong>Next Step: </strong>Transfers the case to the
                  Children’s Court for trial as an adult.
                </p>
              </div>

              <div className="w-[400px] relative md:ml-10 order-1 md:order-2">
                <img src={jjpa4} alt="Step 4" className="w-full rounded-xl" />
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex justify-start">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-[800px]">
              <div className="w-[400px] relative">
                <img src={jjpa5} alt="Step 5" className="w-full rounded-xl" />
              </div>
              <div className="text-left w-[400px]">
                <h4 className="font-bold text-2xl text-slate-900 mb-2 font-poppins">
                  5. 5. Orders by the Board after Inquiry
                </h4>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-16 flex justify-end">
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-[800px]">
              <div className="text-right w-[400px] order-2 md:order-1 md:mr-6">
                <h4 className="font-bold text-2xl text-slate-900 mb-2 font-poppins">
                  Additional Orders the Board Can Add (Section 18(2))
                </h4>
              </div>

              <div className="w-[400px] relative md:ml-10 order-1 md:order-2">
                <img src={jjpa6} alt="Step 6" className="w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab !== "sop" && activeTab !== "pa" && (
        <div className="text-center py-20">
          <h2 className="text-3xl font-impact text-gray-400">
            Content Coming Soon
          </h2>
        </div>
      )}
    </ContentView>
  );
};

export default JjbPage;
