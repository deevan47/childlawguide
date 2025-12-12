import React, { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Flame } from "lucide-react";
import { NAVIGATION_ITEMS, TOPIC_CONTENT } from "../constants";
import flameLogo from "../assets/images/flame.png";

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateTopic: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onNavigateTopic }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<
    { id: string; title: string; subtitle?: string }[]
  >([]);

  const handleNavClick = (href?: string) => {
    if (href) {
      onNavigateTopic(href);
      setIsMobileMenuOpen(false);
    }
  };

  const navigate = (id?: string) => {
    if (!id) {
      window.location.hash = "";
      onNavigateHome();
      return;
    }
    window.location.hash = id;
    onNavigateTopic(id);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-[#1e3a8a] text-white border-b border-blue-900 shadow-2xl font-sans">
      <div className="container mx-auto px-6 h-[72px] flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="flex items-center space-x-3 group relative z-50 focus:outline-none"
        >
          <img
            src={flameLogo}
            alt="FLAME Logo"
            className="h-20 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center h-full space-x-1">


          {NAVIGATION_ITEMS.map((item, index) => (
            <div
              key={index}
              className="relative group h-full flex items-center px-1"
            >
              {/* Top Level Item */}
              <button
                onClick={() => handleNavClick(item.href)}
                className="flex items-center space-x-1 px-4 py-2 rounded-full font-semibold text-sm xl:text-base tracking-wide hover:bg-white/10 hover:text-blue-100 transition-all focus:outline-none"
              >
                <span>{item.label}</span>
                {item.subItems && (
                  <ChevronDown
                    size={14}
                    className="opacity-70 group-hover:opacity-100 group-hover:rotate-180 transition-transform duration-300"
                  />
                )}
              </button>

              {/* Level 1 Dropdown */}
              {item.subItems && (
                <div
                  className="absolute top-full left-0 pt-2 w-72 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 ease-out 
                  delay-300 group-hover:delay-0
                  transform translate-y-4 group-hover:translate-y-0"
                >
                  {/* Invisible Bridge to prevent closing when moving cursor */}
                  <div className="absolute top-0 left-0 w-full h-4 bg-transparent -mt-2"></div>

                  {/* Dropdown Container */}
                  <div className="bg-white text-slate-800 shadow-2xl rounded-xl border border-slate-100 overflow-visible relative p-1">
                    <div className="flex flex-col">
                      {item.subItems.map((subItem, subIndex) => (
                        <div
                          key={subIndex}
                          className="relative group/sub rounded-lg"
                        >
                          <button
                            onClick={() => handleNavClick(subItem.href)}
                            className="w-full text-left px-4 py-3 hover:bg-blue-50 flex items-center justify-between text-sm font-bold text-slate-700 hover:text-blue-700 transition-colors rounded-lg group-hover/sub:bg-blue-50"
                          >
                            <span>{subItem.label}</span>
                            {subItem.subItems && (
                              <ChevronRight
                                size={16}
                                className="text-slate-400 group-hover/sub:text-blue-600 group-hover/sub:translate-x-1 transition-transform"
                              />
                            )}
                          </button>

                          {/* Level 2 Dropdown (Nested) */}
                          {subItem.subItems && (
                            <div
                              className="absolute top-0 left-full pl-2 w-64 
                              opacity-0 invisible 
                              group-hover/sub:opacity-100 group-hover/sub:visible 
                              transition-all duration-300 ease-out 
                              delay-300 group-hover/sub:delay-0
                              transform -translate-x-2 group-hover/sub:translate-x-0 z-[9999]"
                            >
                              {/* Side Bridge */}
                              <div className="absolute top-0 left-0 w-4 h-full bg-transparent -ml-2"></div>

                              <div className="bg-white text-slate-800 shadow-2xl rounded-xl border border-slate-100 p-1 mt-0">
                                <div className="flex flex-col">
                                  {subItem.subItems.map(
                                    (nestedItem, nestedIndex) => (
                                      <button
                                        key={nestedIndex}
                                        onClick={() =>
                                          handleNavClick(nestedItem.href)
                                        }
                                        className="w-full text-left px-4 py-3 hover:bg-blue-50 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors rounded-lg"
                                      >
                                        {nestedItem.label}
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Search Bar (Moved to Right) */}
          <div className="relative ml-4">
            <div className="flex items-center bg-white rounded-full px-4 py-2 border border-blue-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200 transition-all w-64 shadow-sm">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                className="bg-transparent border-none outline-none text-slate-700 placeholder-slate-400 text-sm w-full font-medium"
                onChange={(e) => {
                  const query = e.target.value;
                  setSearchQuery(query);
                  if (query.length > 1) {
                    const results = Object.values(TOPIC_CONTENT).filter(
                      (topic) =>
                        topic.title.toLowerCase().includes(query.toLowerCase()) ||
                        (topic.subtitle &&
                          topic.subtitle
                            .toLowerCase()
                            .includes(query.toLowerCase())) ||
                        (topic.keywords &&
                          topic.keywords.some((k) =>
                            k.toLowerCase().includes(query.toLowerCase())
                          ))
                    );
                    setSearchResults(results);
                  } else {
                    setSearchResults([]);
                  }
                }}
                onBlur={() => setTimeout(() => setSearchResults([]), 200)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full right-0 w-80 bg-white text-slate-800 shadow-2xl rounded-xl border border-slate-100 mt-2 overflow-hidden z-[10000]">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => {
                      handleNavClick(result.id);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-blue-50 border-b border-slate-100 last:border-none transition-colors"
                  >
                    <div className="font-bold text-sm text-blue-900">
                      {result.title}
                    </div>
                    <div className="text-xs text-slate-500">
                      {result.subtitle}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-white/10 text-white transition-colors focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-[#1e3a8a] text-white z-40 overflow-y-auto animate-fade-in">
          <div className="container mx-auto px-6 py-8 flex flex-col space-y-4">
            {NAVIGATION_ITEMS.map((item, idx) => (
              <div key={idx} className="border-b border-blue-800/50 pb-2">
                <div
                  className="flex justify-between items-center py-4 text-lg font-bold tracking-wide cursor-pointer hover:text-blue-200"
                  onClick={() => {
                    if (item.subItems) {
                      setActiveMobileSubmenu(
                        activeMobileSubmenu === item.label ? null : item.label
                      );
                    } else {
                      handleNavClick(item.href);
                    }
                  }}
                >
                  <span>{item.label}</span>
                  {item.subItems && (
                    <ChevronDown
                      className={`transition-transform duration-300 ${activeMobileSubmenu === item.label ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </div>

                {item.subItems && activeMobileSubmenu === item.label && (
                  <div className="pl-4 mt-2 mb-4 space-y-2 bg-blue-900/40 rounded-xl p-4 border border-blue-800/50">
                    {item.subItems.map((sub, sIdx) => (
                      <div key={sIdx}>
                        <div
                          className="py-3 font-medium flex justify-between items-center text-sm md:text-base cursor-pointer hover:text-blue-200"
                          onClick={() =>
                            !sub.subItems && handleNavClick(sub.href)
                          }
                        >
                          <span
                            className={
                              sub.subItems
                                ? "text-white font-bold"
                                : "text-blue-100"
                            }
                          >
                            {sub.label}
                          </span>
                          {sub.subItems && <ChevronDown size={14} />}
                        </div>
                        {sub.subItems && (
                          <div className="pl-4 space-y-2 border-l-2 border-blue-500/30 mt-1 mb-2 ml-1">
                            {sub.subItems.map((nested, nIdx) => (
                              <div
                                key={nIdx}
                                className="py-2 text-sm text-blue-300 active:text-white cursor-pointer hover:text-white hover:bg-blue-800/30 px-2 rounded"
                                onClick={() => handleNavClick(nested.href)}
                              >
                                {nested.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
