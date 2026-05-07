"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown, ChevronRight, Check } from "lucide-react";
import { useState, useRef } from "react";

const SOCIALS = [
  { id: "linkedin", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>), href: "#" },
  { id: "x", icon: (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>), href: "#" },
  { id: "instagram", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>), href: "#" },
  { id: "facebook", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>), href: "#" },
  { id: "youtube", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>), href: "#" }
];

const FOOTER_LINKS = [
  {
    title: "Solutions",
    links: ["Finance teams", "Travel managers", "Travelers"],
    subSections: [{ title: "Add-ons", links: ["Integrations", "FlexiTravel", "Green Trip", "VIP Experience", "Group Trip", "Invoice", "Perk Card", "Lodge Card"] }]
  },
  {
    title: "Product",
    links: ["Expense", "Pay", "Spend management", "Events", "24/7 support", "Travel alerts", "Flights", "Rail", "Accommodation", "Car rental", "Traveler tracker", "Policies and approvals", "Duty of Care", "Travel reporting"]
  },
  {
    title: "Resources",
    links: ["Corporate travel resources", "Corporate travel glossary", "Blog", "Compliance center", "Developer doc"],
    subSections: [{ title: "Research", links: ["The cost of shadow work", "Value of business travel report", "Travel disruption survey", "Travel wellness survey"] }]
  },
  {
    title: "Services",
    links: ["Travel booking", "Travel software", "SME travel management", "Travel expense management software", "Finance transformation"],
    subSections: [{ title: "About", links: ["Company", "Careers", "Partner program", "Customers", "User reviews", "Media center"] }]
  }
];

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

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setIsLangOpen(true);
  };

  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => {
      setIsLangOpen(false);
    }, 200);
  };

  return (
    <div className="w-full relative">
      <div className="relative z-10 bg-white">
        {/* 1. Top Dark Integration Section */}
        <div className="bg-[#BEFF50]">
          <div className="bg-[#30302A] py-12 md:py-20 rounded-b-[40px] md:rounded-b-[40px] relative z-10 flex items-center justify-center">
            <div className="w-full max-w-[1400px] px-6 md:px-10 text-center">
              <div className="bg-[#121212] border border-white/5 rounded-[24px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-white/90 text-base font-medium">
                  Located in North America? Check out our latest expense management integrations.
                </p>
                <button className="flex items-center gap-2 px-6 py-2.5 border border-white rounded-full text-white text-sm font-semibold hover:bg-white/5 transition-all">
                  Explore integrations <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Lime Green Footer Section */}
        <div className="bg-[#BEFF50] rounded-b-[40px] md:rounded-b-[30px] overflow-hidden">
          <div className="max-w-[1400px] mx-auto pt-10 px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
                <h3 className="text-[#1a1a1a] text-[24px] font-medium leading-tight">How can we<br />help?</h3>
                <nav className="flex items-center gap-8">
                  <a href="#" className="text-[#1a1a1a] font-medium text-sm hover:opacity-70 transition-opacity">Contact us</a>
                  <a href="#" className="text-[#1a1a1a] font-medium text-sm hover:opacity-70 transition-opacity">Help center</a>
                  <a href="#" className="text-[#1a1a1a] font-medium text-sm hover:opacity-70 transition-opacity">Status</a>
                </nav>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex items-center gap-3">
                  {SOCIALS.map((social) => (
                    <a key={social.id} href={social.href} className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#BEFF50] hover:scale-110 transition-transform">{social.icon}</a>
                  ))}
                </div>
                <button className="flex items-center gap-4 bg-black text-white px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity">
                  <div className="flex items-center gap-3 border-r border-white/20 pr-4">
                    <svg width="22" height="22" viewBox="15 10 20 20" fill="none"><path d="M28.5378 20.5785C28.5468 19.8815 28.732 19.1981 29.076 18.5919C29.4201 17.9857 29.9119 17.4763 30.5058 17.1112C30.1285 16.5725 29.6309 16.1291 29.0523 15.8163C28.4737 15.5035 27.8302 15.33 27.1728 15.3094C25.7705 15.1622 24.4111 16.1485 23.6965 16.1485C22.9681 16.1485 21.8678 15.324 20.6831 15.3484C19.9168 15.3732 19.1699 15.596 18.5153 15.9952C17.8607 16.3944 17.3207 16.9564 16.9478 17.6264C15.3328 20.4226 16.5375 24.5321 18.0845 26.7923C18.8586 27.8991 19.7632 29.1354 20.9469 29.0915C22.1052 29.0435 22.5378 28.3529 23.936 28.3529C25.3212 28.3529 25.727 29.0915 26.9347 29.0636C28.1777 29.0435 28.9608 27.9519 29.7076 26.8347C30.2638 26.0461 30.6917 25.1745 30.9756 24.2522C30.2535 23.9468 29.6373 23.4356 29.2038 22.7823C28.7703 22.129 28.5387 21.3626 28.5378 20.5785Z" fill="white"></path><path d="M26.2565 13.8227C26.9342 13.0091 27.2681 11.9634 27.1873 10.9077C26.1519 11.0165 25.1955 11.5113 24.5087 12.2936C24.1729 12.6758 23.9156 13.1204 23.7518 13.6021C23.5879 14.0837 23.5205 14.593 23.5536 15.1006C24.0714 15.106 24.5838 14.9937 25.052 14.7724C25.5202 14.551 25.932 14.2263 26.2565 13.8227Z" fill="white"></path></svg>
                    <svg width="18" height="18" viewBox="38 12 15 16" fill="none"><path d="M45.2478 19.6632L39.0334 26.2592C39.0337 26.2606 39.0341 26.2617 39.0344 26.2631C39.225 26.9794 39.8792 27.5068 40.6556 27.5068C40.966 27.5068 41.2574 27.4229 41.5073 27.2756L41.5271 27.2639L48.5225 23.2273L45.2478 19.6632Z" fill="#EB3131"></path><path d="M51.5356 18.5405L51.5296 18.5365L48.5095 16.7856L45.1069 19.8134L48.5213 23.2273L51.5255 21.4939C52.0522 21.2096 52.4097 20.6543 52.4097 20.014C52.4097 19.3783 52.057 18.8258 51.5356 18.5405Z" fill="#F6B60B"></path><path d="M39.0328 13.7407C38.9955 13.8785 38.9758 14.0228 38.9758 14.1726V25.8285C38.9758 25.9781 38.9952 26.1229 39.0331 26.2601L45.4619 19.8326L39.0328 13.7407Z" fill="#5778C5"></path><path d="M45.2937 20.0006L48.5104 16.7848L41.5229 12.7336C41.269 12.5814 40.9725 12.4937 40.6553 12.4937C39.8789 12.4937 39.2238 13.022 39.0332 13.7391C39.033 13.7398 39.033 13.7403 39.033 13.7409L45.2937 20.0006Z" fill="#3BAD49"></path></svg>
                  </div>
                  <span className="text-[14px] font-regular whitespace-nowrap">Get the app</span>
                </button>
                
                {/* Reusable Language Selector */}
                <div className="relative">
                  <button 
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className={`flex items-center gap-2 border border-black/20 px-4 py-2.5 rounded-xl transition-all cursor-pointer ${isLangOpen ? "bg-black/5" : "hover:bg-black/5"}`}
                  >
                    <Globe size={18} className="text-[#1a1a1a]" />
                    <span className="text-[#1a1a1a] font-semibold text-sm">{selectedLang.label}</span>
                    <ChevronDown size={16} className={`text-[#1a1a1a] transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
                  </button>

                  <AnimatePresence>
                    {isLangOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, x: "-50%" }}
                        className="absolute top-full left-1/2 mt-2 w-52 bg-white rounded-lg shadow-2xl border border-black overflow-hidden p-1.5 z-[100]"
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
              </div>
            </div>

            <div className="w-full h-[1px] bg-black/10 mb-10" />

            {/* Link Columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-4">
              {FOOTER_LINKS.map((section, idx) => (
                <div key={idx} className="flex flex-col gap-10">
                  <div className="flex flex-col gap-4">
                    <h4 className="text-[#6e6e64] text-[16px] font-medium">{section.title}</h4>
                    <ul className="flex flex-col gap-3">{section.links.map((link, lIdx) => (
                      <li key={lIdx}><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:underline underline-offset-4">{link}</a></li>
                    ))}</ul>
                  </div>
                  {section.subSections?.map((sub, sIdx) => (
                    <div key={sIdx} className="flex flex-col gap-4">
                      <h4 className="text-[#6e6e64] text-[16px] font-medium">{sub.title}</h4>
                      <ul className="flex flex-col gap-3">{sub.links.map((link, lIdx) => (
                        <li key={lIdx}><a href="#" className="text-[#1a1a1a] text-[15px] font-medium hover:underline underline-offset-4">{link}</a></li>
                      ))}</ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Large Marquee Text */}
          <div className="w-full pb-8 overflow-hidden select-none relative bg-[#BEFF50]">
            <div className="flex overflow-hidden">
              <motion.div 
                animate={{ x: [0, "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex whitespace-nowrap"
              >
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="text-[120px] md:text-[200px] font-bold text-[#1a1a1a] tracking-tighter mr-60">
                    Powering real work
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Sticky Reveal White Bottom Section */}
      <section className="sticky bottom-0 -z-10 bg-white py-16 px-6 md:px-10 pointer-events-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <img src="/digivisor.svg" alt="Digivisor" className="h-10 w-auto self-start" />
              <p className="text-[#1a1a1a] text-[14px] font-medium">© 2026 Digivisor</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-left">
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Cookies policy</a>
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Modern slavery act statement</a>
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Legal</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Cardholder terms</a>
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Trust center</a>
              </div>
              <div className="flex flex-col gap-4">
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Imprint</a>
                <a href="#" className="text-[#1a1a1a] text-[14px] font-medium hover:underline">Privacy policy</a>
              </div>
            </div>
          </div>

          <p className="text-[#1a1a1a]/40 text-[10px] leading-relaxed max-w-5xl">
            Cards provided to EEA residents are issued by Transact Payments Malta Limited and cards provided to UK residents are issued by Transact Payments Limited pursuant to licence by Visa Europe Limited. Transact Payments Malta Limited is duly authorised and regulated by the Malta Financial Services Authority as a Financial Institution under the Financial Institution Act 1994. Registration number C 91879. Transact Payments Limited is authorised and regulated by the Gibraltar Financial Services Commission.
          </p>
        </div>
      </section>
    </div>
  );
}
