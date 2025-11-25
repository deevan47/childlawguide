import React from 'react';
import { TopicData } from '../types';
import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

interface ContentViewProps {
  data: TopicData;
  onBack: () => void; // Now maps to 'Home' in App.tsx
  onHome: () => void;
}

const ContentView: React.FC<ContentViewProps> = ({ data, onBack, onHome }) => {
  return (
    <div className="min-h-screen bg-paper overflow-y-auto w-full relative pt-0 animate-fade-in">
      
      {/* 
         FIXED NAVIGATION BUTTON 
         Navigate directly to HOME as requested
      */}
      <button 
        onClick={onBack}
        className="fixed top-24 left-6 z-50 bg-white text-slate-900 px-6 py-3 rounded-full shadow-xl border border-slate-200 flex items-center gap-3 font-bold hover:bg-slate-50 hover:text-blue-600 transition-all hover:scale-105 active:scale-95 group"
        aria-label="Return to Home"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
        <span>Back to Home</span>
      </button>

      {/* Header Image */}
      <div className="relative w-full h-[50vh] md:h-[60vh]">
        <img 
          src={data.image} 
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/20 to-black/30"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-center md:text-left">
          <div className="container mx-auto max-w-4xl pt-10">
             {/* Breadcrumb Visual */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest text-accent mb-3 opacity-90 justify-center md:justify-start">
               <span className="text-gray-600 bg-white/80 px-2 py-1 rounded">{data.category === 'Root' ? 'Home' : data.category}</span>
               <ChevronRight size={14} className="text-gray-800" />
               <span className="text-black bg-white/80 px-2 py-1 rounded shadow-sm">{data.title}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-primary uppercase leading-tight drop-shadow-sm bg-white/40 backdrop-blur-sm inline-block px-4 rounded-lg">
              {data.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 py-8 md:py-12 max-w-4xl relative z-10 -mt-10">
        
        <div className="w-full bg-white p-8 md:p-16 rounded-3xl shadow-2xl border border-gray-100">
          {/* Subtitle / Description Header */}
          <div className="mb-10 pb-10 border-b border-gray-100">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full mb-2 md:mb-0">
                  {data.subtitle}
                </h2>
             </div>
             <p className="text-2xl md:text-3xl text-slate-800 font-serif leading-relaxed italic">
              {data.description}
            </p>
          </div>
          
          {/* Main HTML Content */}
          <div className="prose prose-lg md:prose-xl max-w-none text-slate-600 font-sans leading-loose">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>

          {/* Footer Actions */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-6">
             <button onClick={onHome} className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                <Home size={18} /> Go Home
             </button>
          </div>
        </div>

      </div>
      
      {/* Simple Footer */}
      <div className="bg-slate-900 text-slate-500 py-12 text-center text-xs mt-12">
        <p>© 2024 FLAME - Juvenile Justice Educational Tool</p>
      </div>

    </div>
  );
};

export default ContentView;