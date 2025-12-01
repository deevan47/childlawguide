import React, { useState, useMemo, useRef, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { MAP_NODES, ExtendedNodePosition } from "../constants";
import webBackground from "/web.jpeg";

interface WebMapViewProps {
  onTopicSelect: (id: string, x?: number, y?: number) => void;
  onBack: () => void;
  isZoomingOut: boolean;
}

const WebMapView: React.FC<WebMapViewProps> = ({
  onTopicSelect,
  onBack,
  isZoomingOut,
}) => {
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

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
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };
  }, []);

  const visibleNodes = useMemo(() => {
    const nodes = [...MAP_NODES].sort((a, b) => {
      if (a.id === hoveredNodeId) return 1;
      if (b.id === hoveredNodeId) return -1;
      return 0;
    });

    return nodes.filter((node) => {
      if (node.level === 0 || node.level === 1) return true;
      const hoveredObj = MAP_NODES.find((n) => n.id === hoveredNodeId);
      if (!hoveredObj) return false;
      if (node.id === hoveredNodeId) return true;
      if (node.parentId === hoveredNodeId) return true;
      if (hoveredObj.parentId === node.id) return true;
      if (hoveredObj.parentId === node.parentId && node.level > 1) return true;
      return false;
    });
  }, [hoveredNodeId]);

  const renderConnections = () => {
    return visibleNodes.map((node) => {
      if (!node.parentId) return null;
      const parent = MAP_NODES.find((n) => n.id === node.parentId);
      const isParentVisible = visibleNodes.find((n) => n.id === parent?.id);

      if (parent && isParentVisible) {
        if (node.level >= 3) {
          return (
            <path
              key={`conn-${node.id}`}
              d={`M ${parent.x} ${parent.y} L ${node.x} ${node.y}`}
              fill="none"
              stroke="#6b7280"
              strokeWidth="0.3"
              className="opacity-70"
            />
          );
        }
        return (
          <path
            key={`conn-${node.id}`}
            d={`M ${parent.x} ${parent.y} L ${node.x} ${node.y}`}
            fill="none"
            stroke="#b91c1c"
            strokeWidth="0.6"
            strokeOpacity="0.8"
          />
        );
      }
      return null;
    });
  };

  const renderNodes = () => {
    return visibleNodes.map((node: ExtendedNodePosition) => {
      const isHovered = hoveredNodeId === node.id;

      const charWidth = node.label.length * 1.1;
      const minWidth = 10;
      const calculatedWidth = Math.max(minWidth, charWidth + 6);

      let bgClass = "";
      let height = 7;
      let fontSize = 1.4;

      if (node.color === "black") {
        bgClass = "bg-black shadow-2xl border-2 border-gray-700";
        height = 10;
        fontSize = 2.0;
      } else if (node.color === "blue") {
        bgClass = "bg-[#1e40af] shadow-xl border-t border-blue-400";
        height = 8.5;
        fontSize = 1.7;
      } else {
        bgClass = "bg-[#b91c1c] shadow-lg border-t border-red-400";
        height = 7;
        fontSize = 1.3;
      }

      const hoverEffect = isHovered ? "scale-110 z-50 drop-shadow-2xl" : "z-10";

      return (
        <foreignObject
          key={node.id}
          x={node.x - calculatedWidth / 2}
          y={node.y - height / 2}
          width={calculatedWidth}
          height={height}
          className="overflow-visible"
        >
          <div
            className={`${bgClass} text-white ${hoverEffect} w-full h-full rounded-full flex items-center justify-center text-center transition-all duration-300 cursor-pointer px-1 shadow-md`}
            style={{
              fontFamily: "Impact, sans-serif",
              fontSize: `${fontSize}px`,
              lineHeight: 1.1,
              paddingTop: "2px",
            }}
            onMouseEnter={() => handleNodeEnter(node.id)}
            onMouseLeave={handleNodeLeave}
            onClick={() => onTopicSelect(node.id, node.x, node.y)}
          >
            <span className="select-none px-1 uppercase tracking-wide drop-shadow-sm whitespace-nowrap">
              {node.label}
            </span>
          </div>
        </foreignObject>
      );
    });
  };

  return (
    <div
      className={`w-full h-full relative bg-cover bg-center bg-no-repeat overflow-hidden transition-all duration-1000 ${
        isZoomingOut ? "scale-[3] opacity-0" : "scale-100 opacity-100"
      }`}
      style={{ backgroundImage: `url(${webBackground})` }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      `}</style>

      <div className="absolute top-0 w-full h-20 z-50 flex items-center justify-between px-8 bg-gradient-to-b from-white via-white/80 to-transparent">
        <button
          onClick={onBack}
          className="flex items-center justify-center w-12 h-12 bg-black rounded-full shadow-lg hover:bg-gray-800 transition-transform active:scale-95 group border-2 border-gray-100"
        >
          <ArrowLeft
            className="text-white group-hover:-translate-x-1 transition-transform"
            size={24}
          />
        </button>

        <div className="flex flex-col items-end text-right">
          <h1
            className="text-3xl text-black tracking-wide uppercase drop-shadow-sm"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            Child Welfare System
          </h1>
          <p
            className="text-sm text-gray-600 font-semibold tracking-wider uppercase"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Government of India
          </p>
        </div>
      </div>

      <div className="absolute top-24 left-12 z-40 hidden md:block animate-bounce-slow">
        <div className="absolute -top-10 left-1/2 w-0.5 h-16 bg-gray-400 -translate-x-1/2"></div>
        <img
          src="https://api.dicebear.com/9.x/avataaars/svg?seed=Spidey&clothing=blazerAndShirt&eyes=happy&top=shortHair&hairColor=black&skinColor=light"
          alt="Guide"
          className="w-28 h-28 relative top-4 rotate-180 drop-shadow-2xl"
        />
        <div className="absolute top-28 left-20 w-48 bg-white text-black p-3 rounded-xl rounded-tl-none shadow-xl border border-gray-200 animate-fade-in-up">
          <p
            className="text-xs font-semibold leading-tight"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Select a category to view roles & responsibilities.
          </p>
        </div>
      </div>

      <svg
        className="w-full h-full pointer-events-none md:pointer-events-auto"
        viewBox="0 0 160 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <g className="transition-all duration-300 ease-out">
          {renderConnections()}
        </g>
        <g className="transition-all duration-300 ease-out">{renderNodes()}</g>
      </svg>
    </div>
  );
};

export default WebMapView;
