"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function HeaderTop() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#BEFF50] w-full py-2.5 relative z-[100]">
      <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between sm:px-5">
        <p className="text-[13px] font-medium text-[#1a1a1a] tracking-tight">
          Focus on your next breakthrough. We&apos;ll handle the shadow work.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-[13px] font-semibold text-[#1a1a1a] no-underline hover:underline underline-offset-[3px] transition-all">
            Learn more
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="flex items-center justify-center w-7 h-7 border-none bg-transparent text-[#1a1a1a] cursor-pointer rounded-full hover:bg-black/10 transition-colors"
            aria-label="Close announcement bar"
          >
            <X size={16} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
