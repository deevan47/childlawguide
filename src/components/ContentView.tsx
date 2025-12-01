import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { TopicData } from '../types';
import { ASSETS } from '../constants';

interface ContentViewProps {
  data: TopicData;
  onBack: () => void;
  onHome: () => void;
  children?: React.ReactNode;
}

const ContentView: React.FC<ContentViewProps> = ({ data, onBack, children }) => {
  const bg = data.bgImage || ASSETS.bgCommon;
  const char = data.characterImage || ASSETS.guide;

  return (
    <div className="relative w-full h-full bg-slate-900 text-white font-sans overflow-hidden">
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
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.3); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.4); border-radius: 4px; }
      `}</style>

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <img src={bg} alt="Background" className="w-full h-full object-cover" />
        {/* Gradient: Darker on right to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/50" />
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar smooth-scroll">
        
        {/* BACK BUTTON */}
        <div className="sticky top-6 left-6 z-50 px-6 pt-6 w-fit">
          <button 
            onClick={onBack} 
            className="group flex items-center gap-3 px-5 py-2 bg-white/10 hover:bg-white text-white hover:text-black rounded-lg transition-all duration-300 backdrop-blur-md border border-white/20 shadow-xl"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        {/* HERO SECTION */}
        <div className="relative w-full min-h-[85vh] flex flex-col md:flex-row items-end justify-between w-full pb-16 pt-20">
          
          {/* LEFT: Character Image (Anchored Bottom Left) */}
          <div className="w-full md:w-5/12 lg:w-1/3 flex justify-start items-end relative z-20 pl-4 md:pl-10 mb-8 md:-mb-8">
             <img 
               src={char} 
               alt="Character" 
               className="w-48 md:w-72 lg:w-[380px] object-contain drop-shadow-2xl animate-char"
               style={{ filter: 'drop-shadow(0 0 50px rgba(0,0,0,0.9))' }}
             />
          </div>

          {/* RIGHT: Text Content */}
          <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col items-center md:items-end text-center md:text-right space-y-8 z-10 pr-6 md:pr-16 lg:pr-24">
            
            {/* Title & Subtitle */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <h1 className="font-impact text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-wider drop-shadow-2xl leading-[0.9]">
                {data.title}
              </h1>
              
              <h2 className="font-poppins text-xl md:text-3xl text-blue-200 italic font-light tracking-wide border-b border-gray-500/50 pb-4 inline-block drop-shadow-md">
                {data.subtitle}
              </h2>
            </div>

            {/* DESCRIPTION TEXT - Huge, Spacious, Right Aligned */}
            <div 
              className="font-poppins text-lg md:text-xl lg:text-2xl text-gray-5 leading-[1.8] font-light tracking-wide drop-shadow-lg mt-6 max-w-4xl"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />

          </div>
        </div>

        {/* CHILDREN SECTION (Buttons + Details) */}
        <div className="relative z-20 w-full flex flex-col items-center pb-32">
           {children}
        </div>

      </div>
    </div>
  );
};

export default ContentView;