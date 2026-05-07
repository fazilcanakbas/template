"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, ChevronRight, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Update circular progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="w-full bg-white py-24 flex flex-col items-center">
      <div className="max-w-[1400px] mx-auto px-10 flex flex-col items-center">
        
        {/* Top Text Content */}
        <div className="text-center max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[56px] font-semibold text-[#1a1a1a] leading-[1.1] tracking-tight mb-8"
          >
            Real work. Real business.<br />Real impact.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-[#1a1a1a]/60 leading-relaxed font-normal"
          >
            The endless booking and rebooking, the uploading receipts, the chasing, checking, reconciling. 
            We call this shadow work. Every company has it, it's the work behind the work, slowing people 
            down and costing companies more than they realise.
          </motion.p>
        </div>

        {/* Video Player Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full rounded-[40px] overflow-hidden shadow-2xl group cursor-pointer"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/perk-launch_brand-video_en-us-teaser.mp4" type="video/mp4" />
          </video>

          {/* Video Overlays */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
          
          {/* Controls Overlay */}
          <div className="absolute top-8 right-10 flex items-center gap-4">
            <div className="relative flex items-center justify-center w-12 h-12">
              {/* Circular Progress SVG */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="2"
                  fill="transparent"
                />
                <motion.circle
                  cx="24"
                  cy="24"
                  r="22"
                  stroke="white"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray="138.23"
                  animate={{ strokeDashoffset: 138.23 - (138.23 * progress) / 100 }}
                  transition={{ ease: "linear" }}
                />
              </svg>
              <button 
                className="relative z-10 w-9 h-9 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all"
                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              >
                {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" className="ml-0.5" />}
              </button>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); setIsModalOpen(true); }}
              className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30 text-white font-medium hover:bg-[#BEFF50] hover:text-[#1a1a1a] hover:border-[#BEFF50] transition-all text-sm group/btn"
            >
              <Play size={16} className="fill-current group-hover/btn:fill-[#1a1a1a]" />
              Watch full video
            </button>
          </div>
        </motion.div>

        {/* Bottom Text Content */}
        <div className="text-center max-w-3xl mt-20 flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-[#1a1a1a]/80 leading-relaxed font-medium mb-10"
          >
            Perk's AI powered platform brings travel bookings, events, expense management, 
            and invoice payments together in one intelligent platform, so your teams 
            can get back to real work.
          </motion.p>
          
          <motion.a 
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-8 py-4 bg-[#BEFF50] text-[#1a1a1a] rounded-full font-semibold hover:bg-[#aee645] transition-all tracking-tight"
          >
            Discover our product
            <ChevronRight size={20} strokeWidth={2.5} />
          </motion.a>
        </div>

      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-10 right-10 text-white/60 hover:text-white transition-colors z-[110]"
            >
              <X size={40} />
            </button>

            {/* Modal Video Container */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(190,255,80,0.1)]"
            >
              <video
                autoPlay
                controls
                className="w-full h-full object-cover"
              >
                <source src="/perk-launch_brand-video_en-us-teaser.mp4" type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
