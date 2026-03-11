"use client";

import { useState } from "react";
import Image from "next/image";

export default function MobileSocialMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-xl font-bold cursor-pointer"
      >
        ☰
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-0 border border-black bg-[#7d9ba2] rounded shadow-lg p-3 flex flex-col gap-3 z-50">
          <SocialIcon
            src="/facebook-logo.png"
            alt="Facebook"
            link="https://www.facebook.com/share/176KnLH4As/"
          />
          <SocialIcon src="/youtube-logo.png" alt="YouTube" link="#" />
          <SocialIcon src="/instagram-logo.png" alt="Instagram" link="#" />
          <SocialIcon src="/tiktok-logo.png" alt="TikTok" link="#" />
        </div>
      )}
    </div>
  );
}

function SocialIcon({ src, alt, link }: { src: string; alt: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="relative w-8 h-8">
      <Image src={src} alt={alt} fill className="object-contain" />
    </a>
  );
}
