import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="w-full bg-[#7d9ba2]">
      <div className="mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}

        <Image src="/deline-logo.svg" alt="Deline Logo" width={45} height={45} priority />

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-4 text-[clamp(0.6rem,0.9vw,0.75rem)] font-semibold uppercase tracking-wide text-[#F2F6F8]">
          <Link
            href="https://dgg-sports-main-site.vercel.app/"
            className="hover:underline"
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

        {/* Right side */}
        <div className="flex flex-row items-center gap-[clamp(6px,1vw,16px)] relative">
          <a
            href="https://www.facebook.com/share/176KnLH4As/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-[clamp(30px,3vw,50px)] h-[clamp(30px,3vw,50px)] shrink-0"
          >
            <Image
              src="/facebook-logo.png"
              alt="Facebook Logo"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </a>

          <div className="relative w-[clamp(30px,3vw,50px)] h-[clamp(30px,3vw,50px)] shrink-0">
            <Image
              src="/youtube-logo.png"
              alt="Youtube Logo"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </div>

          <div className="relative w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)] shrink-0">
            <Image
              src="/instagram-logo.png"
              alt="Instagram Logo"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </div>

          <div className="relative w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)] shrink-0 mr-5">
            <Image
              src="/tiktok-logo.png"
              alt="Tiktok Logo"
              fill
              className="object-contain cursor-pointer"
              priority
            />
          </div>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
