import Image from "next/image";
import Link from "next/link";
import MobileSocialMenu from "./MobileSocialMenu";

function SocialIcon({ src, alt, link }: { src: string; alt: string; link: string }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className="w-[clamp(25px,3vw,50px)] h-auto hover:opacity-80 transition"
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-[#7d9ba2]">
      <div className="mx-auto flex h-20 items-center gap-4 px-3 lg:px-10">
        {/* Left Logo */}
        <Image
          src="/deline-logo.svg"
          alt="Deline Logo"
          width={100}
          height={100}
          priority
          className="w-[clamp(30px,6vw,50px)] h-auto md:hidden"
        />

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-2 lg:gap-4 text-[clamp(0.45rem,1vw,.9rem)] font-semibold uppercase tracking-wide text-[#F2F6F8] w-full lg:w-auto">
          <Link
            href="https://dgg-sports-main-site.vercel.app/"
            className="hover:underline"
          >
            DGG Sports
          </Link>
          <a href="#about" className="hover:underline">
            About the Event
          </a>
          <a href="#alumni" className="hover:underline">
            All-Star Alumni
          </a>
          <a href="#cultural" className="hover:underline">
            Cultural Programming
          </a>
          <a href="#schedule" className="hover:underline">
            Schedule
          </a>
          <a href="#location" className="hover:underline">
            Location
          </a>
          <a href="#partners" className="hover:underline">
            Sponsors
          </a>
          <a href="#auction" className="hover:underline">
            Auction & Merchandise
          </a>
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center gap-[clamp(12px,2vw,24px)] ml-auto">
          <SocialIcon
            src="/facebook-logo.png"
            alt="Facebook"
            link="https://www.facebook.com/share/176KnLH4As/"
          />
          <SocialIcon src="/youtube-logo.png" alt="YouTube" link="#" />
          <SocialIcon src="/instagram-logo.png" alt="Instagram" link="#" />
          <SocialIcon src="/tiktok-logo.png" alt="TikTok" link="#" />
        </div>

        {/* Mobile Social Dropdown */}
        <div className="md:hidden ml-auto">
          <MobileSocialMenu />
        </div>

        {/* Right Logo */}
        <Image
          src="/all-star-game-logo.png"
          alt="All Star Game Logo"
          width={100}
          height={100}
          priority
          className="w-[clamp(30px,7vw,60px)] h-auto md:hidden"
        />
      </div>
    </header>
  );
}
