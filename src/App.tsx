import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import WebMapView from './components/WebMapView';
import ContentView from './components/ContentView';
import { TOPIC_CONTENT } from './constants';
import { PAGE_REGISTRY } from './pageRegistry';

type ViewState = 'home' | 'map' | 'content';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const applyHash = () => {
      const raw = window.location.hash || '';
      const hash = raw.startsWith('#') ? raw.slice(1) : raw;
      
      if (!hash) {
        setCurrentView('home');
        setSelectedTopicId(null);
        return;
      }
      
      if (hash === 'map') {
        setCurrentView('map');
        setSelectedTopicId(null);
        return;
      }

      if (TOPIC_CONTENT[hash] || PAGE_REGISTRY[hash]) {
        setCurrentView('content');
        setSelectedTopicId(hash);
      } else {
        setCurrentView('home');
        setSelectedTopicId(null);
      }
    };

    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  const handleTopicSelect = (id: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.hash = id;
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.hash = '';
      setIsTransitioning(false);
    }, 200);
  };

  const handleBackToMap = () => {
     setIsTransitioning(true);
     setTimeout(() => {
       window.location.hash = 'map';
       setIsTransitioning(false);
     }, 200);
  };

  const renderContent = () => {
    if (!selectedTopicId) return null;

    const SpecificPage = PAGE_REGISTRY[selectedTopicId];
    
    if (SpecificPage) {
      return <SpecificPage onBack={handleBackToMap} onHome={handleBackToHome} />;
    }

    const data = TOPIC_CONTENT[selectedTopicId] || TOPIC_CONTENT['default'];
    return <ContentView data={data} onBack={handleBackToMap} onHome={handleBackToHome} />;
  };

  return (
    <div className="min-h-screen font-sans relative bg-slate-900">
      <Navbar onNavigateHome={handleBackToHome} onNavigateTopic={handleTopicSelect} />

      <main className="relative w-full h-screen pt-[72px]">
        {currentView === 'home' && (
          <div className={`absolute inset-0 transition-all duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <HomeView onDive={() => handleTopicSelect('map')} onTopicSelect={handleTopicSelect} />
          </div>
        )}

        {currentView === 'map' && (
          <div className={`absolute inset-0 transition-opacity duration-700 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <WebMapView 
              onTopicSelect={(id) => handleTopicSelect(id)} 
              onBack={handleBackToHome} 
              isZoomingOut={isTransitioning} 
            />
          </div>
        )}

        {currentView === 'content' && (
          <div className={`absolute inset-0 z-20 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {renderContent()}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;