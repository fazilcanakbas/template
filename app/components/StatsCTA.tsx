"use client";

import { motion } from "framer-motion";
import { ChevronRight, Calendar, Smile, Briefcase, Globe } from "lucide-react";

const STATS_BADGES = [
  {
    id: "founded",
    text: "Founded in 2015",
    icon: <Calendar size={16} />,
    color: "bg-[#8BE1F0]",
    className: "top-[-50px] left-[-150px]",
  },
  {
    id: "employees",
    text: "1,800+ employees",
    icon: <Smile size={16} />,
    color: "bg-[#C4B5FD]",
    className: "top-[-45px] right-[-120px]",
  },
  {
    id: "offices",
    text: "12 offices globally",
    icon: <Briefcase size={16} />,
    color: "bg-[#F0C1E1]",
    className: "bottom-[-10px] left-[-120px]",
  },
  {
    id: "customers",
    text: "10,000+ customers worldwide",
    icon: <Globe size={16} />,
    color: "bg-[#FFB085]",
    className: "bottom-[-40px] right-[-180px]",
  }
];

export default function StatsCTA() {
  return (
    <section className="w-full bg-[#121212] py-48 relative overflow-hidden flex flex-col items-center">

      <div className="relative inline-block text-center mb-16">
        {/* Floating Badges - Positioned relative to heading */}
        {STATS_BADGES.map((badge) => (
          <motion.div
            key={badge.id}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute ${badge.className} ${badge.color} px-6 py-4 rounded-full flex items-center gap-2.5 shadow-xl z-20 hidden md:flex cursor-default`}
          >
            <span className="text-[#1a1a1a]">{badge.icon}</span>
            <span className="text-[#1a1a1a] font-semibold text-[13px] tracking-tight whitespace-nowrap">{badge.text}</span>
          </motion.div>
        ))}

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-[64px] md:text-[86px] font-semibold leading-[0.9] tracking-tight"
        >
          Ready to get<br />to work?
        </motion.h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-10 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/50 text-[16px] md:text-[18px] max-w-xl mx-auto mb-16 leading-relaxed font-regular"
        >
          We're on a mission to erase shadow work—the work behind work—from every corner of business so you can take back time to focus on what matters.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-7 py-3.5 bg-[#BEFF50] text-[#1a1a1a] rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-all text-[14px]">
            Get to know us <ChevronRight size={16} strokeWidth={2.5} />
          </button>
          <button className="px-7 py-3.5 bg-transparent border border-white/20 text-white rounded-full font-semibold flex items-center gap-2 hover:bg-white/5 transition-all text-[14px]">
            Join the team <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>

      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#BEFF50]/3 blur-[140px] rounded-full -z-0 pointer-events-none" />
    </section>
  );
}
