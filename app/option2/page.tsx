import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-[#F2F6F8] text-[#1C2B36]">
      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <Image
          src="/hero2.png"
          alt="Great Bear Lake Winter Classic"
          width={1920}
          height={1000}
          sizes="100vw"
          className="w-full h-auto block"
          priority
        />
        <div
          className="bg-white/30 px-4 py-2 rounded absolute max-w-[90vw] w-full backdrop-blur-sm 
top-[0%] left-1/2 -translate-x-1/2 font-serif tracking-[0.15em]
text-[clamp(.5rem,2vw,1.5rem)] uppercase text-white text-center"
        >
          <h1 className="mb-2">
            Where Hockey Was Born.
            <br />
            Where Its Spirit Still Lives.
          </h1>

          <h4 className="mt-0">
            Join us on the frozen expanse of Great Bear Lake in Délı̨nę, Northwest
            Territories for a historic northern homecoming 200 years in the making.
          </h4>
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
    text-[clamp(0.5rem,2vw,2rem)]   /* scales on different screen sizes */
    rounded-full        /* fully rounded pill shape */
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
      <section className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
        <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          {/* <div className="w-full md:w-1/2">
            <Image
              src="/about.png"
              alt="About"
              width={960}
              height={540}
              className="w-full h-auto object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            />
          </div> */}

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1rem,4vw,3rem)] mb-8 uppercase">
              WHERE THE GAME BEGAN, THE CELEBRATION BEGINS.
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,2vw,1.25rem)]">
              On the vast frozen surface of Great Bear Lake, a simple game played nearly
              two centuries ago became part of hockey’s earliest history. This year, the
              sport returns to Délı̨nę for a once-in-a-lifetime gathering that honours the
              land, the people, and the legacy that continues to inspire Canadians.
            </p>
          </div>
        </div>
      </section>

      <div className="h-px bg-[#1C2B36]/10 mx-8" />

      {/* ================= ALUMNI (Ceremonial Dark Section) ================= */}
      <section className="py-[12vw] md:py-32">
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

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[#4A5C68] font-serif tracking-[0.15em] text-[clamp(1rem,4vw,3rem)] mb-8 uppercase">
              WHERE HOCKEY’S PAST MEETS ITS HEROES.{" "}
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,2vw,1.25rem)]">
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
      <section className="py-[12vw] md:py-32 bg-[#1C2B36] text-[#E6EDF2]">
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

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1rem,4vw,3rem)] mb-8 uppercase">
              HONOURING THE LAND AND THE PEOPLE WHO KEEP ITS STORIES ALIVE
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="leading-loose text-[clamp(1rem,2vw,1.25rem)]">
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
      <section className="py-[12vw] md:py-32">
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

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="font-serif tracking-[0.15em] text-[clamp(1rem,4vw,3rem)] mb-8 uppercase">
              THREE DAYS OF HOCKEY, CULTURE, AND NORTHERN SPIRIT
            </h2>
            <div className="w-16 h-[2px] bg-[#B28A2E] mb-8 mx-auto md:mx-0" />
            <p className="text-[#4A5C68] leading-loose text-[clamp(1rem,2vw,1.25rem)]">
              The Winter Classic brings a full lineup of events to Délı̨nę — from NHL
              alumni appearances and youth clinics to drum dances, storytelling, and
              community feasts. Explore the highlights below and get ready for an
              unforgettable weekend on the lake.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1C2B36] text-[#C9D6DF] py-16 mt-24">
        <div className="max-w-6xl mx-auto px-8 text-center space-y-6">
          <h3 className="font-serif tracking-[0.15em] uppercase text-lg">
            All-Star Alumni Winter Classic
          </h3>
          <p className="text-sm">
            Honouring 200 years of hockey history on Great Bear Lake.
          </p>
          <p className="text-xs text-[#8FA3B2]">© 2026 All-Star Alumni Winter Classic</p>
        </div>
      </footer>
    </div>
  );
}
