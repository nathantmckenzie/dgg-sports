"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden relative">
      <button onClick={() => setOpen(!open)} className="text-white cursor-pointer">
        <div className="space-y-1">
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </div>
      </button>

      {open && (
        <div className="absolute right-0 mt-6 w-64 bg-[#577d85] border border-[#1C2B36]/20 shadow-lg rounded z-10">
          <nav className="flex flex-col p-4 gap-3 text-sm uppercase text-[#F2F6F8] font-semibold">
            <Link
              className="hover:underline"
              href="https://dgg-sports-main-site.vercel.app/"
            >
              DGG Sports
            </Link>
            <a className="hover:underline" href="#about">
              About the Event
            </a>
            <a className="hover:underline" href="#alumni">
              All-Star Alumni
            </a>
            <a className="hover:underline" href="#cultural">
              Cultural Programming
            </a>
            <a className="hover:underline" href="#schedule">
              Schedule
            </a>
            <a className="hover:underline" href="#location">
              Location
            </a>
            <a className="hover:underline" href="#partners">
              Sponsors
            </a>
            <a className="hover:underline" href="#auction">
              Auction & Merchandise
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
