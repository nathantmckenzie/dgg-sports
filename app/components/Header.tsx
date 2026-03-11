import Image from "next/image";
import Link from "next/link";
import MobileSocialMenu from "./MobileSocialMenu";

export default function Header() {
  return (
    <header className="w-full bg-[#7d9ba2] min-h-20">
      <div className="mx-auto px-3 lg:px-10 h-20 flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/deline-logo.svg"
          alt="Deline Logo"
          width={45}
          height={45}
          priority
          className="md:hidden"
        />

        {/* Nav links */}
        <nav className="flex flex-wrap justify-center gap-2 lg:gap-4 text-[clamp(0.4rem,1vw,0.6rem)] font-semibold uppercase tracking-wide text-[#F2F6F8] w-full lg:w-auto">
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
        <div className="hidden md:flex items-center gap-[clamp(6px,1vw,16px)]">
          <SocialIcon
            src="/facebook-logo.png"
            alt="Facebook"
            link="https://www.facebook.com/share/176KnLH4As/"
          />
          <SocialIcon src="/youtube-logo.png" alt="YouTube" link="#" />
          <SocialIcon src="/instagram-logo.png" alt="Instagram" link="#" />
          <SocialIcon src="/tiktok-logo.png" alt="TikTok" link="#" />
        </div>

        {/* Mobile dropdown */}
        <div className="md:hidden">
          <MobileSocialMenu />
        </div>
      </div>
    </header>
  );
}

function SocialIcon({ src, alt, link }: { src: string; alt: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-[clamp(20px,3vw,50px)] h-[clamp(30px,3vw,50px)] shrink-0"
    >
      <Image src={src} alt={alt} fill className="object-contain cursor-pointer" />
    </a>
  );
}
