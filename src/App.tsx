import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import WebMapView from './components/WebMapView';
import ContentView from './components/ContentView';
import { ViewState, TopicData } from './types';
import { TOPIC_CONTENT } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedTopic, setSelectedTopic] = useState<TopicData | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState<{x: number, y: number} | null>(null);

  // Dynamic Title Effect
  useEffect(() => {
    if (selectedTopic) {
      document.title = `${selectedTopic.title} - FLAME`;
    } else if (currentView === 'map') {
      document.title = 'Navigation Map - FLAME';
    } else {
      document.title = 'FLAME - Child Law Guide';
    }
  }, [selectedTopic, currentView]);

  // Scroll to top when view changes (Important for GitHub Pages SPA behavior)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, selectedTopic]);

  // Handle the "Dive" animation from Home -> Map
  const handleDive = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView('map');
      setIsTransitioning(false);
    }, 1000); // 1s matches the CSS transition duration
  };

  // Handle selecting a topic (works from Map OR Home Page list)
  const handleTopicSelect = (topicId: string, x?: number, y?: number) => {
    const data = TOPIC_CONTENT[topicId] || { ...TOPIC_CONTENT['default'], id: topicId, title: topicId };
    
    if (x !== undefined && y !== undefined) {
      setZoomOrigin({ x, y });
    }

    setIsTransitioning(true);
    
    // Slight delay to allow animations to start before switching components
    setTimeout(() => {
      setSelectedTopic(data);
      setCurrentView('content');
      setIsTransitioning(false);
      setZoomOrigin(null);
    }, 800);
  };

  // Logic: Back button from Content page now goes to HOME, not Map.
  const handleBackToHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedTopic(null);
      setCurrentView('home');
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-paper text-primary font-sans overflow-hidden relative">
      <Navbar onNavigateHome={handleBackToHome} onNavigateTopic={(id) => handleTopicSelect(id)} />
      
      <main className="relative w-full h-screen">
        
        {/* Home View */}
        {currentView === 'home' && (
          <div className={`absolute inset-0 transition-all duration-1000 ease-in-out origin-center ${isTransitioning ? 'scale-[3] opacity-0' : 'scale-100 opacity-100'}`}>
            <HomeView 
              onDive={handleDive} 
              onTopicSelect={handleTopicSelect}
            />
          </div>
        )}

        {/* Map View */}
        {currentView === 'map' && (
          <div className={`absolute inset-0 transition-opacity duration-1000 ${isTransitioning && !zoomOrigin ? 'opacity-0' : 'opacity-100'}`}>
             <WebMapView 
                onTopicSelect={handleTopicSelect} 
                onBack={handleBackToHome}
                isZoomingOut={isTransitioning && !!selectedTopic} // Zooming out to content
             />
          </div>
        )}

        {/* Content View */}
        {currentView === 'content' && selectedTopic && (
          <div className={`absolute inset-0 z-20 transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <ContentView 
              data={selectedTopic} 
              onBack={handleBackToHome} 
              onHome={handleBackToHome}
            />
          </div>
        )}

      </main>
    </div>
  );
};

export default App;