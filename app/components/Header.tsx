"use client";

import Image from "next/image";
import { Globe, ChevronRight, Menu, ChevronDown, X, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCT_MENU = {
  header: {
    label: "Product overview",
    title: "Discover our product"
  },
  columns: [
    {
      title: "Travel",
      links: [{ label: "Travel overview", href: "#" }]
    },
    {
      title: "Spend",
      links: [
        { label: "Spend in Europe", href: "#" },
        { label: "Spend in North America", href: "#" }
      ]
    },
    {
      title: "Events",
      links: [{ label: "Events overview", href: "#" }]
    },
    {
      title: "Other products",
      links: [{ label: "Discover AmTrav", href: "#" }]
    }
  ],
  footer: {
    label: "More from our product",
    href: "#"
  }
};

const SOLUTIONS_MENU = {
  header: {
    label: "Solutions overview",
    title: "Discover our solutions"
  },
  columns: [
    {
      title: "Book and spend",
      links: [{ label: "For travelers", href: "#" }]
    },
    {
      title: "Manage and organize",
      links: [{ label: "For travel managers", href: "#" }]
    },
    {
      title: "Track and budget",
      links: [{ label: "For finance teams", href: "#" }]
    }
  ]
};

const HAMBURGER_MENU = {
  columns: [
    {
      title: "Services",
      links: [
        { label: "Travel booking", href: "#" },
        { label: "SME travel management", href: "#" }
      ]
    },
    {
      title: "Research",
      links: [
        { label: "The cost of shadow work", href: "#" },
        { label: "Value of business travel report", href: "#" },
        { label: "Travel disruption survey", href: "#" },
        { label: "Travel wellness survey", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Calculators", href: "#" },
        { label: "Guides", href: "#" },
        { label: "Templates", href: "#" },
        { label: "eBooks", href: "#" },
        { label: "Blog", href: "#" }
      ]
    },
    {
      title: "About",
      links: [
        { label: "Company", href: "#" },
        { label: "Media center", href: "#" },
        { label: "Partner program", href: "#" },
        { label: "User reviews", href: "#" }
      ]
    },
    {
      title: "Media and legal",
      links: [
        { label: "News", href: "#" },
        { label: "Press Releases", href: "#" },
        { label: "Legal", href: "#" }
      ]
    }
  ]
};

const LANGUAGES = [
  { 
    id: "en", 
    label: "English", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
        <path d="M12 2C14.7614 2 17 4.23858 17 7C17 9.76142 14.7614 12 12 12C9.23858 12 7 9.76142 7 7C7 4.23858 9.23858 2 12 2Z" fill="#10B981"/>
        <path d="M12 12C14.7614 12 17 14.2386 17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17C7 14.2386 9.23858 12 12 12Z" fill="#10B981"/>
        <path d="M2 12C2 9.23858 4.23858 7 7 7C9.76142 7 12 9.23858 12 12C12 14.7614 9.76142 17 7 17C4.23858 17 2 14.7614 2 12Z" fill="#10B981"/>
        <path d="M12 12C12 9.23858 14.2386 7 17 7C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17C14.2386 17 12 14.7614 12 12Z" fill="#10B981"/>
      </svg>
    )
  },
  { 
    id: "tr", 
    label: "Türkçe", 
    icon: (
      <svg width="20" height="20" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="800" fill="#E30A17"/>
        <circle cx="425" cy="400" r="200" fill="#FFFFFF"/>
        <circle cx="475" cy="400" r="160" fill="#E30A17"/>
        <polygon points="718,400 582,444 634,328 634,472 582,356" fill="#FFFFFF"/>
      </svg>
    )
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (isHamburgerOpen) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    setActiveMenu(null);
    setIsLangOpen(false);
  };

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setIsLangOpen(true);
  };

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => {
      setIsLangOpen(false);
    }, 200);
  };

  const currentMenu = activeMenu === "Product" ? PRODUCT_MENU : activeMenu === "Solutions" ? SOLUTIONS_MENU : null;

  return (
    <div className={`sticky z-[99] transition-all duration-300 flex justify-center ${isScrolled ? "top-4 px-4" : "top-0 px-0"}`}>
      <header className={`w-full transition-all duration-300 ease-in-out ${isScrolled
          ? "max-w-[1320px] rounded-[22px] bg-[#F5F5EB]/95 backdrop-blur-md shadow-lg"
          : "bg-[#F5F5EB]"
        }`}>
        <div className={`max-w-[1400px] mx-auto px-10 flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-20 sm:px-6" : "h-18 sm:px-5"}`}>
          <div className="flex items-center">
            <a href="/" aria-label="Home" className="flex items-center">
              <Image
                src="/digivisor.svg"
                alt="Digivisor Logo"
                width={isScrolled ? 120 : 140}
                height={28}
                className="transition-all duration-300"
                priority
              />
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-2 h-full" aria-label="Main navigation">
            {["Product", "Solutions", "Customers", "Pricing", "Integrations"].map((item) => (
              <div 
                key={item} 
                className="relative h-full flex items-center"
                onMouseEnter={() => (item === "Product" || item === "Solutions") && handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className={`text-sm font-medium text-[#1a1a1a] px-4 py-2 rounded-lg hover:bg-black/5 transition-colors tracking-tight flex items-center gap-1 ${activeMenu === item ? "bg-black/5" : ""}`}
                >
                  {item}
                  {(item === "Product" || item === "Solutions") && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeMenu === item ? "rotate-180" : ""}`} />
                  )}
                </a>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`hidden lg:flex items-center gap-1 px-2.5 py-2 border-none bg-transparent text-[#1a1a1a] cursor-pointer rounded-lg hover:bg-black/5 transition-colors text-sm ${isLangOpen ? "bg-black/5" : ""}`} 
                aria-label="Select language"
              >
                <Globe size={18} strokeWidth={2} />
                <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, x: "-50%" }}
                    exit={{ opacity: 0, y: 5, x: "-50%" }}
                    className="absolute top-full left-1/2 mt-2 w-45 bg-white rounded-lg shadow-2xl border border-black overflow-hidden p-1.5 z-[100]"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg transition-colors ${selectedLang.id === lang.id ? "bg-[#F5F5EB]" : "hover:bg-black/[0.03]"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-sm overflow-hidden flex items-center justify-center">
                            {lang.icon}
                          </div>
                          <span className={`text-[15px] ${selectedLang.id === lang.id ? "font-semibold" : "font-medium"} text-[#1a1a1a]`}>{lang.label}</span>
                        </div>
                        {selectedLang.id === lang.id && <Check size={16} className="text-[#1a1a1a]" />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="#" className="hidden lg:flex items-center gap-1 px-[18px] py-[9px] text-[13.5px] font-medium bg-[#BEFF50] text-[#1a1a1a] rounded-full hover:bg-[#aee645] transition-all tracking-tight shadow-sm">
              Book a demo <ChevronRight size={16} strokeWidth={2.5} />
            </a>

            <a href="#" className="hidden lg:flex items-center gap-1 px-[18px] py-[9px] text-[13.5px] font-medium bg-transparent text-[#1a1a1a] border border-[#1a1a1a] rounded-full hover:bg-black/5 transition-all tracking-tight">
              Get started <ChevronRight size={16} strokeWidth={2.5} />
            </a>

            <button 
              onClick={toggleHamburger}
              className={`flex items-center justify-center w-10 h-10 border-none bg-transparent text-[#1a1a1a] cursor-pointer rounded-full hover:bg-black/5 transition-colors ${isHamburgerOpen ? "bg-black/5" : ""}`} 
              aria-label="Menu"
            >
              {isHamburgerOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {currentMenu && !isHamburgerOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              onMouseEnter={() => handleMouseEnter(activeMenu!)}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1320px] px-4 pt-2 z-[98]"
            >
              <div className="bg-white rounded-[22px] shadow-2xl border border-black/5 overflow-hidden">
                <div className="p-10">
                  <div className="mb-12">
                    <p className="text-[#1a1a1a]/40 text-sm font-medium mb-3">{currentMenu.header.label}</p>
                    <h2 className="text-[#1a1a1a] text-2xl font-medium">{currentMenu.header.title}</h2>
                  </div>

                  <div className={`grid ${activeMenu === "Product" ? "grid-cols-4" : "grid-cols-3"} gap-10`}>
                    {currentMenu.columns.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-6">
                        <h4 className="text-[#1a1a1a]/40 text-[13px] font-medium">{col.title}</h4>
                        <div className="flex flex-col gap-4">
                          {col.links.map((link, lIdx) => (
                            <a key={lIdx} href={link.href} className="text-[#1a1a1a] text-[18px] font-medium hover:opacity-60 transition-opacity">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {"footer" in currentMenu && (
                  <div className="px-10 pb-10">
                    <a href={(currentMenu as any).footer.href} className="flex items-center justify-between group py-4">
                      <span className="text-[#1a1a1a] font-medium">{(currentMenu as any).footer.label}</span>
                      <ChevronDown size={16} className="-rotate-90 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="w-full h-[1px] bg-black/5" />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isHamburgerOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-[1320px] px-4 pt-2 z-[98]"
            >
              <div className="bg-[#121212] rounded-[22px] shadow-2xl border border-white/5 overflow-hidden p-10">
                <div className="grid grid-cols-5 gap-8">
                  {HAMBURGER_MENU.columns.map((col, idx) => (
                    <div key={idx} className="flex flex-col gap-6">
                      <h4 className="text-white/40 text-[13px] font-medium">{col.title}</h4>
                      <div className="flex flex-col gap-4">
                        {col.links.map((link, lIdx) => (
                          <a 
                            key={lIdx} 
                            href={link.href} 
                            className="text-white text-[16px] font-medium hover:text-[#BEFF50] transition-colors"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
