import React, { useState, useMemo, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { MAP_NODES, ExtendedNodePosition } from '../constants';

interface WebMapViewProps {
  onTopicSelect: (id: string, x?: number, y?: number) => void;
  onBack: () => void;
  isZoomingOut: boolean;
}

const WebMapView: React.FC<WebMapViewProps> = ({ onTopicSelect, onBack, isZoomingOut }) => {
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // --- HOVER LOGIC ---
  const handleNodeEnter = (id: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setHoveredNodeId(id);
  };

  const handleNodeLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredNodeId(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  // --- VISIBILITY LOGIC ---
  const visibleNodes = useMemo(() => {
    return MAP_NODES.filter(node => {
      // Always show Root and Level 1
      if (node.level === 0 || node.level === 1) return true;

      const hoveredObj = MAP_NODES.find(n => n.id === hoveredNodeId);
      
      // Default hidden for deeper levels unless interacted with
      if (!hoveredObj) return false; 

      // Show if parent is hovered
      if (node.parentId === hoveredNodeId) return true; 
      
      // Show if self is hovered
      if (node.id === hoveredNodeId) return true; 
      
      // Show if child is hovered (keep parent visible)
      if (hoveredObj.parentId === node.id) return true;

      // Show siblings to keep the cluster visible
      if (hoveredObj.parentId === node.parentId && node.level > 1) return true;
      
      return false;
    });
  }, [hoveredNodeId]);

  // --- BACKGROUND SPIDER WEB PATTERN ---
  const renderSpiderWeb = () => {
    // Spokes
    const spokes = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30) * Math.PI / 180;
      const x2 = 80 + 100 * Math.cos(angle);
      const y2 = 50 + 100 * Math.sin(angle);
      spokes.push(
        <line 
            key={`spoke-${i}`} 
            x1="80" y1="50" 
            x2={x2} y2={y2} 
            stroke="#1f2937" 
            strokeWidth="0.2" 
            className="opacity-30"
        />
      );
    }
    
    // Concentric Webs (Red and Black lines like the image)
    const webs = [];
    const radiuses = [15, 30, 45, 60, 80, 100];
    radiuses.forEach((r, idx) => {
        let points = "";
        for (let i = 0; i <= 12; i++) {
             const angle = (i * 30) * Math.PI / 180;
             // Add slight curve/irregularity
             const rVar = r + (i % 2 === 0 ? 1 : -1); 
             const x = 80 + rVar * Math.cos(angle);
             const y = 50 + rVar * Math.sin(angle);
             points += `${x},${y} `;
        }
        webs.push(
            <polyline 
                key={`web-${idx}`} 
                points={points} 
                fill="none" 
                stroke={idx % 2 === 0 ? "#b91c1c" : "#000000"} 
                strokeWidth={idx % 2 === 0 ? "0.3" : "0.2"} 
                className="opacity-60"
            />
        );
    });

    return <g>{spokes}{webs}</g>;
  };

  // --- CONNECTION LINES (Brackets & Threads) ---
  const renderConnections = () => {
    return visibleNodes.map(node => {
      if (!node.parentId) return null;
      
      const parent = MAP_NODES.find(n => n.id === node.parentId);
      const isParentVisible = visibleNodes.find(n => n.id === parent?.id);

      if (parent && isParentVisible) {
        // Level 3 (Deepest) connected to Level 2: Use Bracket Style Connector
        if (node.level >= 3) {
           // Simple elbow connector
           return (
             <path
                key={`conn-${node.id}`}
                d={`M ${parent.x} ${parent.y} L ${node.x} ${node.y}`}
                fill="none"
                stroke="#374151" // Dark Grey
                strokeWidth="0.3"
                className="opacity-80"
             />
           );
        }

        // Level 1 or 2 connected to Parent: Thick Web Strand
        return (
          <path
            key={`conn-${node.id}`}
            d={`M ${parent.x} ${parent.y} L ${node.x} ${node.y}`}
            fill="none"
            stroke="#b91c1c" // Red
            strokeWidth="0.6"
            strokeOpacity="0.8"
          />
        );
      }
      return null;
    });
  };

  // --- RENDER NODES ---
  const renderNodes = () => {
    return visibleNodes.map((node: ExtendedNodePosition) => {
      const isHovered = hoveredNodeId === node.id;
      
      let bgClass = "";
      let width = 28; 
      let height = 8;
      let fontSize = 1.8;

      if (node.color === 'black') {
          // Center Node
          bgClass = "bg-black shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-gray-700";
          width = 36; height = 12; fontSize = 2.2;
      } else if (node.color === 'blue') {
          // Main Categories (Blue Pills)
          bgClass = "bg-[#1e3a8a] shadow-lg border border-blue-800";
          width = 30; height = 9; fontSize = 1.9;
      } else {
          // Topics / Sub-topics (Red Pills)
          bgClass = "bg-[#9f1e22] shadow-md border border-red-900";
          width = 24; height = 6.5; fontSize = 1.5;
      }

      // Highlight Effect
      const hoverEffect = isHovered ? "scale-110 z-50 ring-2 ring-white" : "z-10";

      return (
        <foreignObject
          key={node.id}
          x={node.x - (width / 2)}
          y={node.y - (height / 2)}
          width={width}
          height={height}
          className="overflow-visible"
        >
          <div
            className={`${bgClass} text-white ${hoverEffect} w-full h-full rounded-full flex items-center justify-center text-center transition-all duration-300 cursor-pointer font-sans px-2 shadow-xl`}
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.1 }}
            onMouseEnter={() => handleNodeEnter(node.id)}
            onMouseLeave={handleNodeLeave}
            onClick={() => onTopicSelect(node.id, node.x, node.y)}
          >
            <span className="font-semibold drop-shadow-md select-none">{node.label}</span>
          </div>
        </foreignObject>
      );
    });
  };

  return (
    <div className={`w-full h-full relative bg-[#Fdfbf7] overflow-hidden transition-all duration-1000 ${isZoomingOut ? 'scale-[3] opacity-0' : 'scale-100 opacity-100'}`}>
      
      {/* 1. TOP CONTROLS */}
      <div className="absolute top-6 left-6 flex items-center gap-4 z-50">
        <div className="w-14 h-14 bg-gray-300 rounded shadow-md flex flex-col items-center justify-center border border-gray-400">
             <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600">FLAME</span>
             <span className="text-[8px] font-bold text-gray-500">Logo</span>
        </div>
        <button 
            onClick={onBack}
            className="w-20 h-10 bg-black rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-900 transition-transform active:scale-95 group"
        >
            <ArrowLeft className="text-white group-hover:-translate-x-1 transition-transform" size={24} />
        </button>
      </div>

      {/* 2. SPIDERMAN CHARACTER (Hanging from top left) */}
      <div className="absolute top-0 left-20 z-40 hidden md:block animate-bounce-slow">
           {/* Web Thread */}
           <div className="absolute -top-10 left-1/2 w-0.5 h-32 bg-gray-400 -translate-x-1/2"></div>
           
           {/* Character Image */}
           <img 
             src="https://api.dicebear.com/9.x/avataaars/svg?seed=Spidey&clothing=blazerAndShirt&eyes=happy&top=shortHair&hairColor=black&skinColor=light" 
             alt="Guide"
             className="w-32 h-32 md:w-40 md:h-40 relative top-16 rotate-180 drop-shadow-2xl"
           />
           
           {/* Speech Bubble */}
           <div className="absolute top-28 left-28 w-48 bg-white text-black p-4 rounded-2xl rounded-tl-none shadow-xl border border-gray-200 animate-fade-in-up">
              <p className="text-sm font-bold font-sans leading-tight">
                Here you will be able to find your roles and responsibilities
              </p>
           </div>
      </div>

      {/* 3. SVG MAP LAYER */}
      <svg 
        className="w-full h-full pointer-events-none md:pointer-events-auto"
        viewBox="0 0 160 100" 
        preserveAspectRatio="xMidYMid meet"
      >
        {renderSpiderWeb()}
        <g className="transition-all duration-300 ease-out">{renderConnections()}</g>
        <g className="transition-all duration-300 ease-out">{renderNodes()}</g>
      </svg>
    </div>
  );
};

export default WebMapView;