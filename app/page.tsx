"use client";

import { motion } from "framer-motion";
import VideoSection from "./components/VideoSection";
import FeatureSlider from "./components/FeatureSlider";
import SuccessStories from "./components/SuccessStories";
import StatsCTA from "./components/StatsCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full bg-[#F5F5EB] pt-20 pb-0 flex flex-col items-center">
        <div className="w-full max-w-[1400px] mx-auto px-10 flex flex-col items-center relative z-10">
          
          {/* Animated Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-6 relative z-20"
          >
            <h1 className="text-4xl md:text-[68px] font-semibold text-[#1a1a1a] tracking-tight max-w-4xl mx-auto leading-[1.05]">
              The intelligent platform<br />for travel and spend
            </h1>
          </motion.div>

          {/* Phone and Cards Container */}
          <div className="relative w-full max-w-[1200px] h-[520px] flex justify-center">
            
            {/* CARDS */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: -400, y: -420 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="absolute bottom-0 z-10"
            >
              <img src="/solust.png" alt="Ana Torres" className="w-[200px] h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: -240, y: -330 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              className="absolute bottom-0 z-20"
            >
              <img src="/solorta.png" alt="Expense submitted tag" className="w-[120px] h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: -340, y: -140 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="absolute bottom-0 z-10"
            >
              <img src="/solalt.png" alt="Flight ticket" className="w-[250px] h-auto" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 400, y: -300 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
              className="absolute bottom-0 z-10"
            >
              <img src="/sagust.png" alt="Set the budget" className="w-[240px] h-auto " />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 0, y: 100 }}
              animate={{ opacity: 1, scale: 1, x: 320, y: -120 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
              className="absolute bottom-0 z-20"
            >
              <img src="/sagalt.png" alt="Mark Adams" className="w-[200px] h-auto" />
            </motion.div>

            {/* PHONE */}
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="absolute bottom-0 z-30"
            >
              <img
                src="/telefon.png"
                alt="Phone app interface"
                className="w-auto h-[520px] object-cover object-top"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-6 -right-30 z-40 hidden lg:block"
            >
              <img 
                src="/heroalt.png" 
                alt="Reviews and Stars" 
                className="w-[320px] h-auto"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-[#D2D2C8] py-1 w-full border-t border-black/5 overflow-hidden">
        <div className="max-w-[1400px] mx-auto flex items-center px-10">
          <div className="flex-none pr-10 z-10 bg-[#D2D2C8]">
            <p className="text-[#1a1a1a] font-normal whitespace-nowrap text-lg">
              Trusted by 1,000s of global teams
            </p>
          </div>

          <div className="flex-1 relative overflow-hidden ml-4">
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-[#D2D2C8] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#D2D2C8] to-transparent z-10" />

            <motion.div
              className="flex w-max"
              animate={{ x: [0, "-50%"] }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="flex items-center gap-15 pr-15">
                {[...Array(15)].map((_, i) => (
                  <img
                    key={`logo-${i}`}
                    src={`/logo-${i + 1}.png`}
                    alt={`Partner Logo ${i + 1}`}
                    className="h-[58px] scale-1.1 w-auto opacity-100 grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                  />
                ))}
              </div>
              <div className="flex items-center gap-15 pr-15">
                {[...Array(15)].map((_, i) => (
                  <img
                    key={`logo-dup-${i}`}
                    src={`/logo-${i + 1}.png`}
                    alt={`Partner Logo ${i + 1}`}
                    className="h-[58px] scale-1.1 w-auto opacity-100 grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <VideoSection />
      
      <FeatureSlider />

      <SuccessStories />

      <StatsCTA />
    </main>
  );
}
