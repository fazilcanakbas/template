"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const STORIES_DATA = [
  {
    id: 1,
    image: "/blog-1.png",
    logo: "/logo-1.png",
    stat: "900",
    statLabel: "travelers",
    tags: ["Travel", "Retail", "North America"],
    title: "How Lush reimagined work travel with Perk",
    author: "Sarah Levitin",
    role: "Travel and Events Manager North America",
    width: "col-span-3",
    imgClass: "aspect-square"
  },
  {
    id: 2,
    image: "/blog-2.png",
    logo: "/logo-2.png",
    stat: "90%",
    statLabel: "expense automation",
    tags: ["Spend", "Retail", "Switzerland"],
    title: "How On automates 90% of their expenses with Perk",
    author: "Martin Hoffmann",
    role: "CFO, Co-CEO",
    width: "col-span-6",
    imgClass: "h-[380px]"
  },
  {
    id: 3,
    image: "/blog-3.png",
    logo: "/logo-3.png",
    stat: "60",
    statLabel: "hours saved annually",
    tags: ["Travel", "Retail", "North America"],
    title: "How Perk saves Fabletics 60 hours every year on travel management",
    author: "Sören Heise",
    role: "VP of Financial Planning Europe",
    width: "col-span-3",
    imgClass: "aspect-square"
  }
];

export default function SuccessStories() {
  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        
        {/* Main Rounded Container */}
        <div className="bg-[#F5F5EB] rounded-[32px] p-6 md:p-10 md:px-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[38px] font-medium text-[#1a1a1a] tracking-tight leading-[0.9]"
            >
              Businesses getting the job done
            </motion.h2>
          </div>

          {/* Stories Grid - 3-6-3 Ratio, Bottom Aligned */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {STORIES_DATA.map((story) => (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: story.id * 0.1 }}
                className={`${story.width} flex flex-col`}
              >
                {/* Image Container */}
                <div className={`relative ${story.imgClass} w-full rounded-[30px] overflow-hidden mb-6 group shadow-sm`}>
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-5 left-5 text-white">
                    <div className="text-[32px] font-semibold leading-none mb-1">{story.stat}</div>
                    <div className="text-xs font-medium opacity-90">{story.statLabel}</div>
                  </div>

                  {/* Logo Placement */}
                  <div className="absolute top-2">
                    <img src={story.logo} alt="Brand Logo" className="h-14 w-auto brightness-0 invert opacity-100" />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {story.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white rounded-full text-[11px] font-semibold text-[#1a1a1a] border border-black/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content - Aligned via min-height */}
                <h3 className="text-[20px] font-regular text-[#1a1a1a] leading-[1.2] mb-6 min-h-[72px]">
                  {story.title}
                </h3>

                <div className="mt-auto">
                  <div className="mb-8 min-h-[44px]">
                    <div className="text-[13px] font-semibold text-[#1a1a1a]">{story.author}</div>
                    <div className="text-[12px] text-[#1a1a1a]/60 font-medium">{story.role}</div>
                  </div>

                  <button className="flex items-center gap-1.5 px-4 py-2 bg-transparent rounded-full border border-black text-[#1a1a1a] text-[12px] font-semibold hover:bg-[#BEFF50] hover:border-[#BEFF50] transition-all duration-300">
                    Read more <ChevronRight size={14} strokeWidth={3} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Section Footer */}
          <div className="mt-20 flex justify-end">
            <button className="flex items-center gap-2 px-7 py-3.5 bg-transparent border border-black rounded-full text-[#1a1a1a] font-semibold hover:bg-[#BEFF50] hover:border-[#BEFF50] transition-all duration-300 text-sm shadow-sm">
              Browse all stories
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
