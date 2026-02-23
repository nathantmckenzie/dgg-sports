import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans bg-[#0F1720] text-[#D6DEE6]">
      {/* ================= HERO ================= */}
      <section className="relative w-full">
        <Image
          src="/hero.png"
          alt="Great Bear Lake Winter Classic"
          width={1920}
          height={1000}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
        {/* Soft gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/90 via-transparent to-transparent" />

        {/* CTA */}
        <div className="absolute bottom-[12%] left-[8%]">
          <Link
            href="/learn-the-history"
            className="inline-block text-[#9EC5D9] border border-[#9EC5D9]
                 px-[clamp(0.75rem,2vw,1.5rem)]
                 py-[clamp(0.5rem,1.5vw,1rem)]
                 text-[clamp(0.875rem,2vw,1.25rem)]
                 tracking-wide hover:bg-[#9EC5D9]/10 transition"
          >
            Learn the History
          </Link>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-[8vw] md:py-[10vw]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            A Celebration of Northern Ice
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            Two centuries after one of the earliest recorded hockey games on Great Bear
            Lake, the Winter Classic returns to Délı̨nę. This gathering blends sport,
            culture, history, and community — honouring the land, the people, and the
            enduring spirit of the game.
          </p>
        </div>
      </section>

      {/* ================= ALUMNI ================= */}
      <section id="alumni" className="py-[8vw] md:py-[10vw] bg-[#1A2430]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            All-Star Alumni
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            Legends of the game gather on sacred northern ice. Former NHL greats return to
            celebrate 200 years of hockey’s story, connect with youth, and honour the
            community that safeguarded one of the sport’s earliest written accounts.
          </p>
          <div className="flex justify-center my-12">
            <div className="w-32 h-[2px] bg-[#C9A227]" />
          </div>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            More than a roster, their presence represents respect — for the land, the
            culture, and the history that shaped Canada’s game.
          </p>
        </div>
      </section>

      {/* ================= CULTURAL ================= */}
      <section id="cultural" className="py-[8vw] md:py-[10vw]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            Cultural Programming
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)] mb-6">
            The Winter Classic is more than hockey. It is shaped by the people of Délı̨nę
            and the Sahtú region.
          </p>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            Visitors will experience drum dancing, storytelling, northern cuisine, hand
            games, artistry, and teachings from Elders — celebrating the connection
            between the land, the language, and the living history of Great Bear Lake.
          </p>
        </div>
      </section>

      {/* ================= SCHEDULE ================= */}
      <section id="schedule" className="py-[8vw] md:py-[10vw] bg-[#1A2430]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            Weekend Schedule Preview
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)] mb-6">
            Three days of hockey, culture, and northern celebration.
          </p>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            From opening ceremonies and alumni games to youth clinics, storytelling
            sessions, and community feasts, the Winter Classic offers something for
            families, fans, and visitors alike. A full detailed schedule will be released
            soon.
          </p>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section id="location" className="py-[8vw] md:py-[10vw]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            Délı̨nę — Great Bear Lake
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)] mb-10">
            Nestled on the shores of Sahtú (Great Bear Lake), Délı̨nę is a vibrant Dene
            community rooted in culture, history, and northern hospitality.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h4 className="text-white font-semibold mb-4 text-[clamp(1.125rem,2.2vw,1.5rem)]">
                Getting Here
              </h4>
              <ul className="space-y-2 list-disc list-inside text-[clamp(1rem,2vw,1.25rem)]">
                <li>Commercial flights</li>
                <li>Winter / ice road access</li>
                <li>Charter options</li>
                <li>Local transportation services</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-[clamp(1.125rem,2.2vw,1.5rem)]">
                Where to Stay
              </h4>
              <ul className="space-y-2 list-disc list-inside text-[clamp(1rem,2vw,1.25rem)]">
                <li>Local accommodations</li>
                <li>Community hosting options</li>
                <li>Regional lodging overflow</li>
                <li>Winter travel guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AUCTION ================= */}
      <section id="auction" className="py-[8vw] md:py-[10vw] bg-[#1A2430]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            Winter Classic Auction
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)] mb-6">
            Bid on exclusive memorabilia, signed jerseys, game-used equipment, and
            once-in-a-lifetime northern experiences.
          </p>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            Every winning bid directly supports youth programs, cultural initiatives, and
            community development in Délı̨nę and the Sahtú region.
          </p>
        </div>
      </section>

      {/* ================= MERCH ================= */}
      <section id="auction" className="py-[8vw] md:py-[10vw]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            Merch
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)] mb-6">
            Merch coming soon
          </p>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section id="partners" className="py-[8vw] md:py-[10vw] bg-[#1A2430]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="font-serif text-[clamp(1.875rem,5vw,3rem)] text-white mb-6">
            Partners & Sponsors
          </h2>
          <p className="text-[#D6DEE6] leading-relaxed text-[clamp(1rem,2.2vw,1.25rem)]">
            This historic event is made possible through collaboration with community
            leaders, regional organizations, and national partners dedicated to sport,
            culture, and northern communities.
          </p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black border-t border-[#1A2430] py-8">
        <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-5 text-[#9EC5D9] text-[clamp(0.75rem,1.5vw,0.875rem)]">
          <div>
            <h3 className="text-white font-bold mb-3 text-[clamp(1rem,2vw,1.25rem)]">
              All-Star Alumni Winter Classic
            </h3>
            <p>Honouring 200 years of hockey history on Great Bear Lake.</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-[clamp(1rem,2vw,1.25rem)]">
              Navigation
            </h4>
            <ul className="space-y-2 flex flex-row">
              <li>
                <Link href="#about" className="pr-2">
                  About
                </Link>
              </li>
              <li>
                <Link href="#alumni" className="pr-2">
                  Alumni
                </Link>
              </li>
              <li>
                <Link href="#cultural" className="pr-2">
                  Cultural
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="pr-2">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="#location" className="pr-2">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-[clamp(1rem,2vw,1.25rem)]">
              Connect
            </h4>
            <ul className="space-y-2 flex flex-row">
              <li>
                <Link href="#" className="pr-2">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="pr-2">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="pr-2">
                  YouTube
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-[clamp(0.625rem,1vw,0.75rem)] text-[#5C7080]">
              © 2026 All-Star Alumni Winter Classic. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
