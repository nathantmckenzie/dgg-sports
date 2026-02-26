"use client";

import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xs uppercase tracking-widest cursor-pointer text-[#1C2B36]"
        >
          Close
        </button>

        <h2 className="font-serif tracking-[0.15em] uppercase text-xl mb-6 text-[#1C2B36]">
          {title}
        </h2>

        <div className="text-sm leading-relaxed space-y-4 text-[#1C2B36]">{children}</div>
      </div>
    </div>
  );
}
