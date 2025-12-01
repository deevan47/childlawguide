import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import WebMapView from './components/WebMapView';
import ContentView from './components/ContentView';
import { ViewState } from './types';
import { TOPIC_CONTENT } from './constants';

// --- Import Custom Pages Here ---
import CcwlGovtSwPage from './pages/ccwl/CcwlGovtSwPage';

// --- Map IDs to Custom Page Components ---
const PAGE_COMPONENTS: Record<string, React.FC<{ onBack: () => void; onHome: () => void }>> = {
  'ccl-govsw': CcwlGovtSwPage, 
  // Add other custom pages here: 'id': ComponentName,
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedTopicData, setSelectedTopicData] = useState(TOPIC_CONTENT['default']);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (!hash) {
        if (currentView !== 'home') handleBackToHome(false);
      } else if (hash === 'map') {
        if (currentView !== 'map') handleDive(false);
      } else {
        if (selectedTopicId !== hash) handleTopicSelect(hash, undefined, undefined, false);
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView, selectedTopicId]);

  useEffect(() => {
    if (selectedTopicData && currentView === 'content') {
      document.title = `${selectedTopicData.title} - FLAME`;
    } else {
      document.title = 'FLAME - Child Law Guide';
    }
  }, [selectedTopicData, currentView]);

  const handleDive = (updateHash = true) => {
    if (updateHash) window.location.hash = 'map';
    setIsTransitioning(true);
    setTimeout(() => { setCurrentView('map'); setIsTransitioning(false); }, 1000);
  };

  const handleTopicSelect = (id: string, x?: number, y?: number, updateHash = true) => {
    const data = TOPIC_CONTENT[id] || { ...TOPIC_CONTENT['default'], id, title: id };
    
    if (updateHash) window.location.hash = id;
    if (x !== undefined && y !== undefined) setZoomOrigin({ x, y });

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTopicId(id);
      setSelectedTopicData(data);
      setCurrentView('content');
      setIsTransitioning(false);
      setZoomOrigin(null);
    }, 800);
  };

  const handleBackToHome = (updateHash = true) => {
    if (updateHash) window.history.pushState(null, '', window.location.pathname);
    setIsTransitioning(true);
    setTimeout(() => { setSelectedTopicId(null); setCurrentView('home'); setIsTransitioning(false); }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-900 font-sans overflow-hidden relative">
      <Navbar onNavigateHome={() => handleBackToHome(true)} onNavigateTopic={(id) => handleTopicSelect(id)} />

      <main className="relative w-full h-screen">
        {currentView === 'home' && (
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out origin-center ${isTransitioning ? 'scale-[3] opacity-0' : 'scale-100 opacity-100'}`}>
            <HomeView onDive={() => handleDive(true)} onTopicSelect={(id) => handleTopicSelect(id)} />
          </div>
        )}

        {currentView === 'map' && (
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning && !zoomOrigin ? 'opacity-0' : 'opacity-100'}`}>
            <WebMapView onTopicSelect={(id, x, y) => handleTopicSelect(id, x, y, true)} onBack={() => handleBackToHome(true)} isZoomingOut={isTransitioning && !!selectedTopicData} />
          </div>
        )}

        {currentView === 'content' && selectedTopicId && (
          <div className={`absolute inset-0 z-20 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {PAGE_COMPONENTS[selectedTopicId] ? (
               React.createElement(PAGE_COMPONENTS[selectedTopicId], {
                 onBack: () => handleBackToHome(true),
                 onHome: () => handleBackToHome(true),
               })
            ) : (
               <ContentView 
                 data={selectedTopicData} 
                 onBack={() => handleBackToHome(true)} 
                 onHome={() => handleBackToHome(true)} 
               />
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;