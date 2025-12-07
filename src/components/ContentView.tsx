import React from "react";
import { ArrowLeft } from "lucide-react";
import { TopicData } from "../types";
import { ASSETS } from "../constants";

interface ContentViewProps {
  data: TopicData;
  onBack: () => void;
  onHome: () => void;
  children?: React.ReactNode;
}

const ContentView: React.FC<ContentViewProps> = ({
  data,
  onBack,
  children,
}) => {
  const bg = data.bgImage || ASSETS.bgCommon;
  const char = data.characterImage || ASSETS.guide;

  const categorySubtitle = data.id.includes("ccl")
    ? "Children in Conflict with Law"
    : "Children in Need of Care and Protection";

  return (
    <div className="relative w-full h-full font-sans overflow-hidden bg-[#FFF8F0]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-impact { font-family: 'Impact', sans-serif; }
        
        .smooth-scroll { scroll-behavior: smooth; }

        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-char {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.1); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 4px; }
      `}</style>

      <div className="absolute inset-0 w-full h-full overflow-y-auto custom-scrollbar smooth-scroll">
        <div className="relative w-full min-h-[85vh] flex flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img
              src={bg}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/40" />
          </div>

          <div className="absolute top-6 left-6 z-50">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 px-5 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-lg transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <ArrowLeft size={24} />
            </button>
          </div>

          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-0 flex flex-col h-full justify-end">
            <div className="w-full text-left mb-8 md:mb-12 border-b border-white/20 pb-6">
              <h1 className="font-impact text-6xl md:text-8xl lg:text-[7rem] text-white uppercase tracking-wider leading-none drop-shadow-2xl whitespace-nowrap overflow-visible">
                {data.title}
              </h1>
              <h2 className="font-poppins text-xl md:text-2xl text-blue-200 font-light tracking-wide mt-2">
                {categorySubtitle}
              </h2>
            </div>

            <div className="w-full flex flex-col md:flex-row items-end">
              <div className="w-full md:w-auto flex-shrink-0 flex justify-start relative z-20">
                <img
                  src={char}
                  alt="Character"
                  className="w-40 md:w-64 lg:w-[320px] object-contain drop-shadow-2xl animate-char translate-y-1"
                  style={{ filter: "drop-shadow(0 0 40px rgba(0,0,0,10.8))" }}
                />
              </div>

              <div className="w-full md:flex-1 pl-0 md:pl-120 pb-12 md:pb-16 text-right">
                <div
                  className="font-poppins text-lg md:text-xl lg:text-2xl text-gray-50 leading-loose font-light tracking-wide drop-shadow-lg"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 w-full flex flex-col items-center pb-32 bg-[#FFF8F0] text-slate-800 pt-16">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ContentView;
