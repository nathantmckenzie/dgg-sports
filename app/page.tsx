import Image from "next/image";
import Link from "next/link";
import LegalModals from "@/app/components/LegalModals";

export default function Home() {
  return (
    <div className="bg-[#F2F6F8] text-[#1C2B36]">
      <header className="w-full bg-[#1C2B36] border-b border-[#1C2B36]/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-start">
          <Link
            href="https://dgg-sports-main-site.vercel.app/"
            className="
        inline-block
        px-5 py-2
        bg-[#1C2B36]
        text-[#F2F6F8]
        text-sm
        font-semibold
        uppercase
        tracking-wide
        rounded-sm
        hover:bg-[#2A3B48]
        transition
      "
          >
            DGG Sports
          </Link>
        </div>
      </header>
      {/* ================= HERO ================= */}
      <section id="home" className="relative w-full">
        <Image
          src="/hero.png"
          alt="Great Bear Lake Winter Classic"
          width={1920}
          height={1000}
          sizes="100vw"
          className="w-full h-auto block"
          priority
        />
        <div
          className="bg-white/20 px-4 rounded absolute max-w-[90vw] w-full backdrop-blur-xs 
top-[0%] left-1/2 -translate-x-1/2 font-serif tracking-[0.15em] text-center mt-6"
        >
          <h2 className="text-[clamp(0.75rem,1.75vw,1.5rem)] uppercase mb-2">
            Where Hockey Was Born.
            <br />
            Where Its Spirit Still Lives.
          </h2>

          <h3 className="text-[clamp(.5rem,1.75vw,1rem)] mt-0">
            Join us on the frozen expanse of Great Bear Lake in Délı̨nę, Northwest
            Territories for a historic northern homecoming 200 years in the making.
          </h3>
        </div>

        {/* Soft blend into page */}
        {/* <div
          className="absolute bottom-0 left-0 w-full h-56 
  bg-gradient-to-b 
  from-transparent 
  to-[#F2F6F8] 
  mix-blend-normal"
        /> */}
        <div className="absolute bottom-[12%] right-[8%]">
          <Link
            href="/learn-the-history"
            className="
    inline-block
    p-[15px]
    bg-[#1C2B36]       /* dark slate background */
    text-[#F2F6F8]     /* light text for contrast */
    font-semibold
    uppercase tracking-wide
    text-[clamp(0.75rem,1.5vw,2rem)]   /* scales on different screen sizes */
    rounded-sm
    shadow-lg           /* subtle lift over image */
    hover:bg-[#2A3B48]  /* slightly darker on hover */
    transition
    no-underline
    cursor-pointer
  "
          >
            Learn the History
          </Link>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              WHERE THE GAME BEGAN, THE CELEBRATION BEGINS.
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              On the vast frozen surface of Great Bear Lake, a simple game played nearly
              two centuries ago became part of hockey’s earliest history. This year, the
              sport returns to Délı̨nę for a once-in-a-lifetime gathering that honours the
              land, the people, and the legacy that continues to inspire Canadians.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/about.png"
              alt="About"
              width={960}
              height={540}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= ALUMNI (Ceremonial Dark Section) ================= */}
      <section id="alumni" className="py-[12vw] md:py-32">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          {/* <div className="w-full md:w-1/2">
            <Image
              src="/alumni.png"
              alt="All-Star Alumni"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            />
          </div> */}

          <div className="w-full text-center md:text-left">
            <h2 className="text-[#4A5C68] font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              WHERE HOCKEY’S PAST MEETS ITS HEROES.{" "}
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              On the frozen expanse of Great Bear Lake, over 20 NHL alumni will gather to
              honour 200 years of the sport they helped define. Their stories, their
              passion, and their connection to the game bring a powerful energy to this
              northern homecoming — a celebration of legacy, community, and the enduring
              spirit of hockey.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= CULTURAL ================= */}
      <section id="cultural" className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          {/* <div className="w-full md:w-1/2">
            <Image
              src="/cultural.png"
              alt="Cultural Programming"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div> */}

          <div className="w-full  text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              HONOURING THE LAND AND THE PEOPLE WHO KEEP ITS STORIES ALIVE
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              Cultural programming throughout the Winter Classic highlights the rich
              traditions of Délı̨nę and the Sahtú region. From drum dances and hand games
              to Elders’ teachings and community feasts, each experience reflects the deep
              connection between the people, the land, and the early history of hockey on
              Great Bear Lake.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= SCHEDULE ================= */}
      <section id="schedule" className="py-[12vw] md:py-32">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          {/* <div className="w-full md:w-1/2">
            <Image
              src="/schedule.png"
              alt="Weekend Schedule Preview"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div> */}

          <div className="w-full text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              THREE DAYS OF HOCKEY, CULTURE, AND NORTHERN SPIRIT
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              The Winter Classic brings a full lineup of events to Délı̨nę — from NHL
              alumni appearances and youth clinics to drum dances, storytelling, and
              community feasts. Explore the highlights below and get ready for an
              unforgettable weekend on the lake.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section id="location" className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              EXPERIENCE THE HEART OF THE SAHTÚ REGION{" "}
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              Délı̨nę welcomes visitors from across the North and beyond to celebrate on
              the land where hockey’s earliest story was written. Nestled on the shores of
              Great Bear Lake, the community offers breathtaking landscapes, rich culture,
              and genuine northern hospitality.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative w-full aspect-[16/9] rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <iframe
                src="https://www.google.com/maps?q=Del%C4%B1%CC%A8n%C4%99%2C%20Northwest%20Territories&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= PARTNERS & SPONSORS ================= */}
      <section id="partners" className="py-[12vw] md:py-32">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          {/* <div className="w-full md:w-1/2">
            <Image
              src="/schedule.png"
              alt="Weekend Schedule Preview"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div> */}

          <div className="w-full text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              HONOURING THE PARTNERS WHO MAKE THIS CELEBRATION POSSIBLE{" "}
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              The All-Star Alumni Winter Classic is made possible through the support of
              community partners, regional organizations, and national sponsors who share
              a commitment to celebrating the history of hockey on Great Bear Lake. Their
              contributions help bring this landmark event to life and ensure a meaningful
              experience for visitors, athletes, and the people of Délı̨nę.
            </p>
          </div>
        </div>
      </section>

      {/* ================= AUCTION ================= */}
      <section id="auction" className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              YOUR CHANCE TO OWN A PIECE OF THE CELEBRATION
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              From signed jerseys and game-used equipment to exclusive northern
              experiences, the Winter Classic auction offers something for every fan.
              Proceeds directly support community programming and youth engagement in the
              Sahtú region.
              <br />
              <br />
              Available soon.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/auction.png"
              alt="Cultural Programming"
              width={960}
              height={540}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0F1A22] text-[#E6EDF2] py-6 md:py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          {/* Top Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 
                    gap-5 md:gap-12 
                    text-center md:text-left"
          >
            {/* Brand */}
            <div className="space-y-3 md:space-y-6">
              <h3 className="font-serif tracking-[0.15em] uppercase text-base md:text-lg">
                All-Star Alumni Winter Classic
              </h3>
              <p className="text-xs md:text-sm text-[#B8C7D2] leading-relaxed">
                Honouring 200 years of hockey history on Great Bear Lake.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-6 text-[#B28A2E]">
                Navigation
              </h4>
              <ul className="grid grid-cols-2 space-x-2 space-y-2 md:space-y-3 text-xs md:text-sm">
                <li>
                  <Link href="#home">Home</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
                <li>
                  <Link href="/learn-the-history">History</Link>
                </li>
                <li>
                  <Link href="#alumni">Alumni</Link>
                </li>
                <li>
                  <Link href="#cultural-programming">Cultural Programming</Link>
                </li>
                <li>
                  <Link href="#schedule">Schedule</Link>
                </li>
                <li>
                  <Link href="#location">Location</Link>
                </li>
                <li>
                  <Link href="#partners">Partners & Sponsors</Link>
                </li>
                <li>
                  <Link href="#auction">Auction</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="uppercase tracking-widest text-xs md:text-sm mb-3 md:mb-6 text-[#B28A2E]">
                Connect With Us
              </h4>
              <ul className="flex flex-row justify-center md:flex-col space-x-2 space-y-2 md:space-y-3 text-xs md:text-sm">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div>
            <LegalModals />
          </div>

          {/* Divider */}
          <div className="mt-5 md:mt-10 border-t border-[#2A3B48] pt-3 md:pt-5 text-center text-[10px] md:text-xs text-[#8FA3B2]">
            © 2026 All-Star Alumni Winter Classic. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
