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
        className="w-[clamp(25px,3vw,40px)] h-auto hover:opacity-80 transition"
      />
    </Link>
  );
}

export default function Header() {
  return (
    <header className="w-full bg-[#7d9ba2]">
      <div className="mx-auto flex h-20 items-center gap-4 px-3 lg:px-10">
        {/* Navigation */}
        <nav
          className="
            flex flex-wrap justify-center
            text-[clamp(0.5rem,2vw,.8rem)]
            font-semibold uppercase tracking-wide text-[#F2F6F8]
            w-full lg:w-auto
            min-[1350px]:flex-nowrap
            [&>a]:px-2
            [&>a:not(:last-child)]:after:content-['|']
            [&>a:not(:last-child)]:after:ml-2
          "
        >
          <Link href="https://dggsports.com/" className="hover:underline px-2">
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
          <a href="#auction&merchandise" className="hover:underline">
            Auction
          </a>
          <a href="#auction&merchandise" className="hover:underline">
            Merchandise
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-[clamp(1px,1vw,15px)] ml-auto">
          <SocialIcon
            src="/facebook-logo.png"
            alt="Facebook"
            link="https://www.facebook.com/share/176KnLH4As/"
          />
          <SocialIcon
            src="/youtube-logo.png"
            alt="YouTube"
            link="https://www.youtube.com/@DGGSportsEntertainment"
          />
          <SocialIcon
            src="/instagram-logo.png"
            alt="Instagram"
            link="https://www.instagram.com/dggallstarclassic"
          />
          <SocialIcon
            src="/tiktok-logo.png"
            alt="TikTok"
            link="https://www.tiktok.com/@dggsportsentertainment"
          />
        </div>

        <div className="md:hidden ml-auto">
          <MobileSocialMenu />
        </div>
      </div>
    </header>
  );
}
