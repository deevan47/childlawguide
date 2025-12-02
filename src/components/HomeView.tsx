import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

import heroImg from '../assets/images/home.jpeg';
import boyImg from '../assets/images/boy.png';
import girlImg from '../assets/images/girl.png';
import guideImg from '../assets/images/guide.png';

interface HomeViewProps {
  onDive: () => void;
  onTopicSelect: (id: string) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onDive, onTopicSelect }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showFixedGuide, setShowFixedGuide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollTop, clientHeight } = scrollContainerRef.current;
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

  const AgencyButton = ({ number, label, id }: { number: string; label: string; id: string }) => (
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
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-12 h-full items-center relative">
          <div className="text-white space-y-4 flex flex-col justify-center animate-fade-in-up text-center lg:text-left h-full pb-20 lg:pb-0">

            <h3
              className="koulen-text uppercase text-gray-300"
              style={{ fontSize: '40px' }}
            >
              ONE STOP GUIDE ON HOW TO DEAL WITH
            </h3>

            <h1
              className="impact-text font-black leading-tight"
              style={{ fontSize: '80px' }}
            >
              Children in Conflict with the Law and Children in Need of Care and Protection
            </h1>

          </div>

          <div className="relative h-full flex items-end justify-center lg:justify-end pb-0">
            <div className="relative flex items-end -space-x-12 md:-space-x-24 translate-y-4 lg:translate-y-0">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 animate-bounce-slow z-30 w-48 bg-white text-black p-4 rounded-2xl rounded-bl-none shadow-xl text-sm font-semibold text-center hidden md:block border border-gray-200">
                Hello! Welcome to our one–stop guide on how to help CCL and CNCP. We will be your guides to the website!
              </div>

              <img
                src={girlImg}
                alt="Girl Guide"
                className="w-[160px] md:w-[320px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 z-10"
              />

              <img
                src={boyImg}
                alt="Boy Guide"
                className="w-[170px] md:w-[340px] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500 z-20"
              />
            </div>
          </div>

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

      <section
        className="relative w-full min-h-screen bg-[#9f1e22] text-white pt-20 pb-32"
        style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #b92b2b 0%, #9f1e22 100%)` }}
      >
        <div
          className={`fixed top-20 left-10 z-40 transition-all duration-700 ease-out hidden lg:block ${
            showFixedGuide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <img src={guideImg} alt="Guide" className="w-32 h-32 md:w-48 md:h-48 drop-shadow-2xl" />

          <div className="absolute top-100 -right-10 bg-white text-black text-xs font-bold p-3 rounded-xl rounded-tl-none shadow-lg w-32 animate-fade-in-up">
            Click a button to learn more!
          </div>
        </div>

        <div className="container mx-auto px-6 max-w-5xl flex flex-col gap-24 relative z-10">

          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl w-full">
              <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 drop-shadow-md">
                Children in Need of Care <br /> and Protection
              </h1>

              <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-50"></div>

              <p className="text-sm md:text-lg text-red-100 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                Children in Need of Care and Protection (CNCP) include children without support,
                exploited/abused children, missing children, orphaned/surrendered children, and those at risk.
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

          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl w-full">
              <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 drop-shadow-md">
                Children in Conflict <br /> with the Law
              </h1>

              <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-50"></div>

              <p className="text-sm md:text-lg text-red-100 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                A Child in Conflict with the Law (CCL) refers to a child who has committed an offence before
                turning eighteen.
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

          <div className="flex flex-col items-center text-center">
            <div className="max-w-4xl w-full">
              <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-4 drop-shadow-md">
                Child Welfare
              </h1>

              <div className="w-24 h-1 bg-white mx-auto mb-8 rounded-full opacity-50"></div>

              <p className="text-sm md:text-lg text-red-100 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                Child Welfare supports children with psychological issues and behavioral challenges, while guiding parents and agencies.
              </p>

              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                <AgencyButton number="01" label="Child Rights" id="cat-rights" />
                <AgencyButton number="02" label="POCSO Act" id="cat-pocso" />
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
