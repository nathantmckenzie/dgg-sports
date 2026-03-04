import Image from "next/image";
import Link from "next/link";
import LegalModals from "@/app/components/LegalModals";

export default function Home() {
  return (
    <div className="bg-[#F2F6F8] text-[#1C2B36]">
      <header className="w-full bg-[#1C2B36] border-b border-[#1C2B36]/10">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="https://en.wikipedia.org/wiki/D%C3%A9l%C4%B1%CC%A8n%C4%99"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/deline-logo.svg"
              alt="Deline Logo"
              width={35}
              height={35}
              sizes="50px"
              className="cursor-pointer"
              priority
            />
          </a>
          <Link
            href="https://dgg-sports-main-site.vercel.app/"
            className="
        inline-block
        px-5 py-2
        bg-[#2A3B48]
        text-[#F2F6F8]
        text-sm
        font-semibold
        uppercase
        tracking-wide
        rounded-sm
        hover:bg-[#3a5162]
        transition
        
      "
          >
            DGG Sports
          </Link>
          <Link
            href="https://dgg-sports-main-site.vercel.app/"
            className="
        inline-block
        px-5 py-2
        bg-[#2A3B48]
        text-[#F2F6F8]
        text-sm
        font-semibold
        uppercase
        tracking-wide
        rounded-sm
        hover:bg-[#3a5162]
        transition
        
      "
          >
            Contact
          </Link>
          <a
            href="https://www.facebook.com/share/176KnLH4As/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook-logo.png"
              alt="Facebook Logo"
              width={50}
              height={50}
              sizes="50px"
              className="cursor-pointer"
              priority
            />
          </a>
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
          className="bg-white/10 px-4 rounded absolute max-w-[90vw] w-full backdrop-blur-xs 
top-[0%] left-1/2 -translate-x-1/2 font-serif tracking-[0.15em] text-center mt-3 sm:mt-6"
        >
          <h2 className="text-[clamp(0.75rem,1.75vw,1.5rem)] uppercase mb-2 font-bold">
            Where Hockey Was Born.
            <br />
            Where Its Spirit Still Lives.
          </h2>

          <h3 className="text-[clamp(.5rem,1.75vw,1rem)] mt-0 font-bold">
            Join us March 20 – 22, 2026 on the frozen expanse of Great Bear Lake in
            Délı̨nę, NT for a historic northern homecoming 200 years in the making.
          </h3>
        </div>

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
    font-serif
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
              On the vast frozen surface of{" "}
              <a
                href="https://spectacularnwt.com/story/why-great-bear-is-now-even-greater/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition"
              >
                Great Bear Lake
              </a>
              , a simple game played nearly two centuries ago became part of hockey’s
              earliest history. This year, the sport returns to{" "}
              <a
                href="https://deline.ca/en"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition"
              >
                Délı̨nę
              </a>{" "}
              for a once-in-a-lifetime gathering that honours the land, the people, and
              the legacy that continues to inspire Canadia.
              <br />
              <br />
              This year’s event is a chance to reconnect—with the land, with each other,
              and with the roots of the game. It’s a moment for players, families, and
              community members to gather where hockey’s story began, sharing memories,
              meals, and the joy of being on the ice together. What started as a simple
              game has become a lasting legacy, and this celebration brings it full
              circle.
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
          <div className="w-full text-center md:text-left">
            <h2 className="text-[#4A5C68] font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              WHERE HOCKEY’S PAST MEETS ITS HEROES.{" "}
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)] mb-6">
              On the frozen expanse of Great Bear Lake, over 20 NHL alumni will gather to
              honour 200 years of the sport they helped define. Their stories, their
              passion, and their connection to the game bring a powerful energy to this
              northern homecoming — a celebration of legacy, community, and the enduring
              spirit of hockey.
            </p>
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)] mb-6">
              The alumni arriving in Délı̨nę bring decades of experience, shared memories,
              and a genuine appreciation for the communities that shaped the game long
              before bright lights and packed arenas. Their visit is a chance to reconnect
              with the roots of hockey, meet the people who carry its earliest history,
              and take part in a moment that bridges generations of players and fans.
            </p>
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)] mb-12">
              As we welcome them to Great Bear Lake, here are the NHL alumni joining this
              historic northern homecoming:
            </p>

            <div className="text-[clamp(0.75rem,1.25vw,1.5rem)] grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-10 tracking-[0.12em] text-[#4A5C68] uppercase text-center">
              <span>Dave Babych</span>
              <span>Wayne Babych</span>
              <span>Ray Bourque</span>
              <span>Guy Carbonneau</span>
              <span>Wendel Clark</span>
              <span>Shayne Corson</span>
              <span>Dave Ellett</span>
              <span>Ryan Getzlaf</span>
              <span>Doug Gilmour</span>
              <span>Al Iafrate</span>
              <span>Trevor Kidd (Goalie)</span>
              <span>Joe Kocur</span>
              <span>Eric Lindros</span>
              <span>Paul MacLean</span>
              <span>Patrick Marleau</span>
              <span>Lanny McDonald (Coach)</span>
              <span>Jordan Nolan</span>
              <span>Billy Ranford</span>
              <span>Cliff Ronning</span>
              <span>John Scott</span>
              <span>Bryan Trottier (Coach)</span>
              <span>Tiger Williams</span>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= CULTURAL ================= */}
      <section id="cultural" className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full  text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              HONOURING THE LAND AND THE PEOPLE WHO KEEP ITS STORIES ALIVE
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              Cultural programming throughout the Winter Classic highlights the rich
              traditions of Délı̨nę and the{" "}
              <a
                href="https://sahtulanduseplan.org/sites/default/files/2022-07/sahtu_atlas_-_section1-the-sahtu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition"
              >
                Sahtú Region
              </a>
              . From drum dances and hand games to Elders’ teachings and community feasts,
              each experience reflects the deep connection between the people, the land,
              and the early history of hockey on Great Bear Lake.
              <br />
              <br />
              Visitors will have a chance to learn directly from the people of Délı̨nę.
              Through shared activities, local teachings, and time spent with community
              members, guests can experience the traditions that continue to shape life on
              Great Bear Lake and the history that connects this place to the early game.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= SCHEDULE ================= */}
      <section id="schedule" className="py-[12vw] md:py-32">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,1.75vw,1.5rem)] mb-8 uppercase">
              THREE DAYS OF HOCKEY, CULTURE, AND NORTHERN SPIRIT
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)] mb-10">
              The Winter Classic brings together community events, on‑ice action, cultural
              experiences, and live entertainment. Each day offers a mix of hockey, music,
              and time on the land, giving guests and residents a chance to experience the
              weekend in a way that feels welcoming and connected.
            </p>
            <h2 className="text-[clamp(1rem,1.75vw,1.25rem)] mb-5 uppercase font-serif">
              Live Entertainment
            </h2>
            <p className="mb-10 text-[clamp(1rem,1.5vw,1.25rem)] text-[#4A5C68] ">
              Award-winning Canadian icons{" "}
              <a
                href="https://www.instagram.com/p/DU8IbQtgBNM/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition"
              >
                Chad Brownlee
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/p/C__Z9j-o9LQ/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition"
              >
                Tom Cochrane
              </a>
              , and{" "}
              <a
                href="https://www.instagram.com/p/DRU7NX-DV01/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-400 transition"
              >
                Aaron Pritchett
              </a>{" "}
              will be performing throughout the weekend as part of the celebration.
            </p>
            <h2 className="text-[clamp(1rem,1.75vw,1.25rem)] mb-5 uppercase font-serif">
              Schedule
            </h2>
            <ul className="space-y-4 text-[#4A5C68] leading-loose text-[clamp(1rem,1.5vw,1.25rem)] text-[#4A5C68] mb-10">
              <li>
                <strong>March 20:</strong> Gala, Player Meet & Greet, Team Selection, Live
                Performances
              </li>
              <li>
                <strong>March 21:</strong> Opening Ceremony, All-Star Alumni Hockey Game,
                Evening Concert
              </li>
              <li>
                <strong>March 22:</strong> Closing Ceremony, Ice Fishing
              </li>
            </ul>
            <p className="text-[clamp(1rem,1.75vw,1.25rem)]">
              WITH MORE ACTIVITES AND EVENTS TO BE ANNOUNCED
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
            <br />
            <p className="leading-loose text-[clamp(1rem,1.5vw,1.25rem)]">
              Délı̨nę offers visitors a chance to experience the Sahtú region in a way that
              is both personal and memorable. Days on the land, time spent with community
              members, and the quiet beauty of Great Bear Lake all come together to give
              guests a deeper understanding of the place where this story began.
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
            className="grid grid-cols-1 
                    gap-5 
                    text-center"
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
