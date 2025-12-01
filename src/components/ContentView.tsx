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
    <div className="relative w-full h-full bg-slate-900 text-white overflow-hidden font-poppins">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
        .font-impact { font-family: 'Impact', sans-serif; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.4); }
      `}</style>

      {/* FIXED BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src={bg} alt="Background" className="w-full h-full object-cover opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40" />
      </div>

      {/* BACK BUTTON - Fixed to ensure it never scrolls away or gets overlapped */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50">
        <button 
          onClick={onBack} 
          className="group flex items-center gap-3 px-5 py-3 bg-black/40 hover:bg-white text-white hover:text-black rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-white shadow-2xl"
        >
          <ArrowLeft size={20} />
          <span className="font-poppins font-medium text-sm tracking-wide">BACK</span>
        </button>
      </div>

      {/* SPLIT LAYOUT */}
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row">
        
        {/* LEFT: CHARACTER (Fixed) */}
        <div className="hidden md:flex md:w-5/12 h-full items-end justify-center relative pointer-events-none">
           <img 
             src={char} 
             alt="Character" 
             className="w-auto max-h-[85vh] object-contain drop-shadow-2xl animate-in slide-in-from-left duration-1000" 
             style={{ filter: 'drop-shadow(0 0 50px rgba(0,0,0,0.6))' }} 
           />
        </div>

        {/* RIGHT: CONTENT (Scrollable) */}
        <div className="w-full md:w-7/12 h-full overflow-y-auto custom-scrollbar">
          {/* Added extra top padding (pt-32 md:pt-40) to prevent content from overlapping the back button */}
          <div className="min-h-full flex flex-col justify-center p-8 md:p-20 pt-32 md:pt-40">
            <div className="max-w-3xl ml-auto md:mr-10">
              
              {/* TITLE (Impact Font) */}
              <h1 className="font-impact text-6xl md:text-8xl text-white uppercase tracking-wide leading-[0.9] mb-4 drop-shadow-lg">
                {data.title}
              </h1>

              {/* SUBTITLE (Poppins Font) */}
              <h2 className="font-poppins text-xl md:text-2xl text-gray-400 font-light italic mb-10 pb-6 border-b border-gray-700">
                {data.subtitle}
              </h2>

              {/* BODY CONTENT (Poppins Font) */}
              <div className="font-poppins text-base md:text-lg text-gray-200 leading-8 font-light tracking-wide space-y-6">
                {children ? children : <div dangerouslySetInnerHTML={{ __html: data.content }} />}
              </div>
              
              <div className="h-32"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContentView;