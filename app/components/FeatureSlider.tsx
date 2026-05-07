"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";

const FEATURE_DATA = [
  {
    id: 1,
    type: "light",
    title: "Plan and manage events",
    description: "You set the budget. Your teams book their own tickets. With Perk, you can create custom landing pages that let you share event details, track RSVPs, follow up on need-to-knows, and check in post-event. All without losing sight of cost.",
    image: "/kart-1.png",
    bgColor: "#FAFAF5"
  },
  {
    id: 2,
    type: "green",
    title: "Seamlessly book and manage trips",
    description: "Forget multiple tabs. You can book every part of a work trip and see all the details in one helpful itinerary. With our extensive global inventory, Perk gives you access to 1000s of options and proprietary rates across flights, stays, trains and cars.",
    image: "/kart-2.png",
    bgColor: "#BEFF50"
  },
  {
    id: 3,
    type: "light",
    title: "Make trip changes in seconds",
    description: "Plans change and so can your trips. Rebook or cancel flights and hotels in just a few taps. No need to contact customer support or even open your laptop.",
    image: "/kart-3.png",
    bgColor: "#FAFAF5"
  },
  {
    id: 4,  
    type: "light",
    title: "Expense management simplified",
    description: "Track every spend in real-time. No more manual entry or lost receipts. Our AI categorizes everything for you instantly.",
    image: "/kart-4.png",
    bgColor: "#FAFAF5"
  },
  {
    id: 5,
    type: "full-image",
    title: "Global coverage, local feel",
    description: "Support for teams across the globe with multi-currency and local compliance built-in. Scale your business without the paperwork headache.",
    image: "/kart5.png",
    bgColor: "transparent"
  }
];

// Double the data for infinite loop
const INFINITE_DATA = [...FEATURE_DATA, ...FEATURE_DATA, ...FEATURE_DATA];

export default function FeatureSlider() {
  const [currentIndex, setCurrentIndex] = useState(FEATURE_DATA.length);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  }, [isAnimating]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const totalItems = FEATURE_DATA.length;
    if (currentIndex >= totalItems * 2) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(totalItems);
      }, 500);
    } else if (currentIndex < totalItems) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(totalItems * 2 - 1);
      }, 500);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const activeDotIndex = currentIndex % FEATURE_DATA.length;

  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-10">
        
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-[56px] font-semibold text-[#1a1a1a] leading-[1.1] tracking-tight mb-6">
            Wave goodbye to the<br />work behind the work
          </h2>
          <p className="text-lg text-[#1a1a1a]/60 max-w-xl mx-auto font-normal">
            From booking to reconciliation, Perk keeps everything moving—no chasing, no checking, no wasted time.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[620px] mb-12">
          <motion.div 
            className="flex gap-6 h-full"
            animate={{ x: -(currentIndex * 424) }}
            transition={{ duration: isAnimating ? 0.6 : 0, ease: [0.22, 1, 0.36, 1] }}
          >
            {INFINITE_DATA.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="flex-none w-[400px] h-full rounded-[32px] overflow-hidden relative flex flex-col border border-black/5"
                style={{ backgroundColor: card.bgColor }}
              >
                {card.type === "full-image" ? (
                  <>
                    <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="relative z-10 p-10 mt-auto bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <h3 className="text-3xl font-semibold text-white mb-4 leading-tight">{card.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed mb-8">{card.description}</p>
                      <button className="flex items-center gap-1.5 px-4 py-2.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white text-[12px] font-medium hover:bg-[#BEFF50] hover:text-[#1a1a1a] hover:border-[#BEFF50] transition-all duration-300">
                        Learn more <ChevronRight size={12} strokeWidth={2.5} />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="h-[260px] p-6 flex justify-center items-center overflow-hidden">
                      <img src={card.image} alt={card.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="p-10 pt-4 flex flex-col flex-1">
                      <h3 className="text-3xl font-semibold text-[#1a1a1a] mb-4 leading-tight">{card.title}</h3>
                      <p className="text-[#1a1a1a]/70 text-sm leading-relaxed mb-8">{card.description}</p>
                      <div className="mt-auto">
                        <button className={`flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-black text-[#1a1a1a] text-[12px] font-medium transition-all duration-300 bg-transparent
                          ${card.type === "green" 
                            ? "hover:bg-black hover:text-white" 
                            : "hover:bg-[#BEFF50] hover:border-[#BEFF50]"}`}>
                          Learn more <ChevronRight size={12} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls Footer */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex items-center gap-2">
            {FEATURE_DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(FEATURE_DATA.length + i);
                  setIsAnimating(true);
                }}
                className={`h-2.5 transition-all duration-300 rounded-full
                  ${activeDotIndex === i ? "w-8 bg-[#1a1a1a]" : "w-2.5 bg-[#1a1a1a]/20 hover:bg-[#1a1a1a]/40"}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 mr-4">
              <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 hover:bg-black/5 transition-all text-[#1a1a1a]">
                <ChevronLeft size={24} />
              </button>
              <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 hover:bg-black/5 transition-all text-[#1a1a1a]">
                <ChevronRight size={24} />
              </button>
            </div>
            
            <button className="flex items-center gap-2 px-8 py-3.5 border border-[#1a1a1a] rounded-full text-[#1a1a1a] font-semibold hover:bg-black/5 transition-all text-sm">
              Show all features
              <ArrowRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
