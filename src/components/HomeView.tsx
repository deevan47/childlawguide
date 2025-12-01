import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants';

interface HomeViewProps {
  onDive: () => void;
  onTopicSelect: (id: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onDive, onTopicSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showFixedGuide, setShowFixedGuide] = useState(false);

  // Handle scroll animation to toggle the fixed guide
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, clientHeight } = scrollContainerRef.current;
        // Show guide once we scroll 80% past the hero section
        const shouldShow = scrollTop > clientHeight * 0.8;
        setShowFixedGuide(shouldShow);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  // Reusable component for the black numbered buttons
  const AgencyButton = ({ number, label, id }: { number: string, label: string, id: string }) => (
    <button
      onClick={() => onTopicSelect(id)}
      className="group relative flex items-center bg-black hover:bg-gray-900 text-white rounded-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl w-full md:w-[280px] h-14 md:h-16"
    >
      <div className="bg-black px-5 h-full flex items-center justify-center font-mono text-2xl md:text-3xl border-r border-gray-800 text-white group-hover:text-red-500 transition-colors">
        {number}
      </div>
      <div className="flex-1 px-4 text-left font-bold text-sm md:text-base uppercase tracking-wide">
        {label}
      </div>
    </button>
  );

  return (
    <div 
      ref={scrollContainerRef}
      className="h-screen w-full overflow-y-auto scrollbar-hide bg-[#Fdfbf7] relative"
    >
      
      {/* ================= HERO SECTION (100vh) ================= */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden shrink-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.hero}
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 h-full items-center relative">
          
          {/* Left: Typography */}
          <div className="text-white space-y-2 flex flex-col justify-center animate-fade-in-up text-center lg:text-left h-full pb-20 lg:pb-0">
            <h3 className="text-sm md:text-base font-bold tracking-[0.2em] uppercase text-gray-300 mb-2">
              One Stop Guide on How to Deal with
            </h3>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tighter">
              Children <br/> in Conflict <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                With The Law
              </span>
            </h1>
            <h2 className="text-2xl md:text-5xl font-serif italic text-blue-300 font-light mt-4">
              & Children in Need of Care
            </h2>
          </div>

          {/* Right: Duo Characters (Boy & Girl Side by Side) */}
          <div className="relative h-full flex items-end justify-center lg:justify-end pb-0">
             {/* Increased negative space to bring them closer */}
             <div className="relative flex items-end -space-x-12 md:-space-x-24 translate-y-4 lg:translate-y-0">
                
                {/* Dialogue Box */}
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 animate-bounce-slow z-30 w-48 bg-white text-black p-4 rounded-2xl rounded-bl-none shadow-xl text-sm font-semibold text-center hidden md:block border border-gray-200">
                   Hey! We are your friendly guides. <br/> Scroll down to explore!
                </div>

                {/* Girl Image */}
                <img 
                  src={ASSETS.girl} 
                  alt="Girl Guide" 
                  className="w-[160px] md:w-[320px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 z-10"
                />

                {/* Boy Image */}
                <img 
                  src={ASSETS.boy} 
                  alt="Boy Guide" 
                  className="w-[170px] md:w-[340px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 z-20"
                />
             </div>
          </div>

          {/* Dive Button */}
          <div className="absolute bottom-10 lg:bottom-16 w-full flex justify-center left-0 z-40">
             <button 
              onClick={onDive}
              className="group bg-black text-white px-10 py-5 rounded-full font-bold text-lg flex items-center space-x-3 hover:scale-110 transition-transform duration-300 border border-gray-700 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-blue-500/50"
            >
              <span>Dive into the Web</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= RED SECTION (Scrolled Content) ================= */}
      <section 
        className="relative w-full min-h-screen bg-[#9f1e22] text-white pt-20 pb-32"
        style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #b92b2b 0%, #9f1e22 100%)` }}
      >
          {/* --- FIXED GUIDE CHARACTER --- */}
          <div 
            className={`fixed top-20 left-10 z-40 transition-all duration-700 ease-out hidden lg:block ${
              showFixedGuide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img 
              src={ASSETS.guide} 
              alt="Guide"
              className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl" 
            />
            <div className="absolute top-100 -right-10 bg-white text-black text-xs font-bold p-3 rounded-xl rounded-tl-none shadow-lg w-32 animate-fade-in-up">
               Click a button to learn more!
            </div>
          </div>

          <div className="container mx-auto px-6 max-w-5xl flex flex-col gap-24 relative z-10">

            {/* SECTION 1: NEED OF CARE */}
            <div className="flex flex-col items-center text-center">
              <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 drop-shadow-md">
                    Children in Need of Care <br/> and Protection
                </h1>
                <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-50"></div>
                <p className="text-sm md:text-lg text-red-100 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                  Children in Need of Care and Protection (CNCP) involve children without support, working exploited children, abused/neglected children, children with special needs, orphaned/abandoned/surrendered children, missing or run-away children and at-risk children.
                </p>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-8 text-white/90">
                  Following are the agencies responsible for CNCP:
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <AgencyButton number="01" label="CWC" id="cncp-stk-cwc" />
                    <AgencyButton number="02" label="Police Officers" id="cncp-stk-police" />
                    <AgencyButton number="03" label="DCPU" id="cncp-stk-dcpu" />
                    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6">
                      <AgencyButton number="04" label="Social Worker" id="cncp-stk-govsw" />
                      <AgencyButton number="05" label="Children's Home" id="cncp-stk-homes" />
                    </div>
                </div>
              </div>
            </div>

            {/* SECTION 2: CONFLICT WITH LAW */}
            <div className="flex flex-col items-center text-center">
              <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 drop-shadow-md">
                    Children in Conflict <br/> with the Law
                </h1>
                <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-50"></div>
                <p className="text-sm md:text-lg text-red-100 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                  A Child in Conflict the Law (CCL) refers to a child who has been found to have committed an offence and has not completed eighteen years of age at the date of commission of the offence.
                </p>
                <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-8 text-white/90">
                  Following are the agencies responsible for CCL:
                </h3>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <AgencyButton number="01" label="JJB" id="ccl-jjb" />
                    <AgencyButton number="02" label="Police Officers" id="ccl-police" />
                    <AgencyButton number="03" label="Child Welfare Officer" id="ccl-cwo" />
                    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6">
                      <AgencyButton number="04" label="Social Worker" id="ccl-govsw" />
                      <AgencyButton number="05" label="Children's Home" id="ccl-homes" />
                    </div>
                </div>
              </div>
            </div>

            {/* SECTION 3: CHILD WELFARE */}
            <div className="flex flex-col items-center text-center">
              <div className="max-w-4xl w-full">
                <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 drop-shadow-md">
                    Child Welfare
                </h1>
                <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-50"></div>
                <p className="text-sm md:text-lg text-red-100 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                  Child Welfare ensures to provide necessary support to the children having physio-psychological issues and those presenting obnoxious behaviour as well. It aims to provide the parents of these children the right guidance and the agencies to approach.
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    <AgencyButton number="01" label="Child Rights" id="cat-rights" />
                    <AgencyButton number="02" label="POCSO Act" id="cat-pocso" />
                    {/* These two don't have direct pages yet, mapped to CNCP/CCL general categories or you can create specific ones */}
                    <AgencyButton number="03" label="Obnoxious Behaviour" id="cat-ccl" />
                    <AgencyButton number="04" label="Physio-Psych Issues" id="cat-cncp" />
                </div>
              </div>
            </div>

          </div>
      </section>

      <footer className="bg-black text-white py-6 text-center text-sm z-10">
         <p>© 2025 FLAME. All Rights Reserved. Education for Protection.</p>
      </footer>
    </div>
  );
};

export default HomeView;