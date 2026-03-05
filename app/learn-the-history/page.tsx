import Image from "next/image";
import Link from "next/link";

export default function LearnTheHistory() {
  return (
    <div className="font-sans bg-[#F2F6F8] text-[#1C2B36] min-h-screen">
      {/* Sticky Back Button */}
      <Link
        href="/"
        className="
          fixed top-6 left-6 z-50
          inline-block
          bg-[#F2F6F8]
          text-[#1C2B36]
          border border-[#1C2B36]
          px-[clamp(0.75rem,2vw,1.5rem)]
          py-[clamp(0.5rem,1.5vw,1rem)]
          text-[clamp(0.875rem,2vw,1.25rem)]
          tracking-wide
          shadow-md
          transition
          no-underline
          cursor-pointer
        "
      >
        ← Home
      </Link>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-8 pt-24 pb-24">
        {/* Main Title */}
        <h1 className="font-serif tracking-[0.15em] text-[clamp(1.5rem,5vw,3rem)] uppercase mb-6 text-center">
          History of the Game on Great Bear Lake
        </h1>

        <p className="text-center text-[clamp(1rem,2vw,1.25rem)] text-[#4A5C68] mb-12">
          A story that began on frozen northern waters — and continues today.
        </p>

        {/* Image */}
        <div className="max-w-4xl mx-auto mb-16">
          <Image
            src="/learn-the-history.png"
            alt="Frozen Great Bear Lake in winter"
            width={1200}
            height={800}
            className="w-full h-auto rounded-sm shadow-lg"
            priority
          />
        </div>

        <div className="w-16 h-0.5 bg-[#B28A2E] mb-16 mx-auto" />

        {/* Section Header */}
        <h2 className="font-serif tracking-[0.15em] text-[clamp(1.25rem,4vw,2.5rem)] uppercase mb-10 text-center">
          A Moment Written Into History
        </h2>

        {/* Body Text */}
        <div className="space-y-8 text-[clamp(1rem,2vw,1.25rem)] leading-loose text-[#4A5C68]">
          <p>
            In the winter of <b>1825</b>, Arctic explorer{" "}
            <a
              href="https://en.wikipedia.org/wiki/John_Franklin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition"
            >
              Sir John Franklin
            </a>{" "}
            and his crew established their winter camp at{" "}
            <a
              href="https://www.pc.gc.ca/apps/dfhd/page_nhs_eng.aspx?id=1820"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition"
            >
              Fort Franklin
            </a>{" "}
            (now the present-day community of{" "}
            <a
              href="https://en.wikipedia.org/wiki/D%C3%A9l%C4%B1%CC%A8n%C4%99"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition"
            >
              Délı̨nę
            </a>
            ) on the southwest shore on the southwest shore of <b>Great Bear Lake</b>.
            Preparing for the long northern journey ahead, the men settled into daily
            routines that helped them endure the cold and isolation.
          </p>

          <Image
            src="/old-time-hockey.gif"
            alt="Old Time Hockey"
            width={400}
            height={400}
            className="w-1/4 h-auto rounded-sm shadow-lg"
            priority
          />

          <p>
            Among those routines was a morning activity Franklin casually recorded in his
            writings:
          </p>

          <blockquote className="border-l-4 border-[#B28A2E] pl-6 italic text-[#1C2B36]">
            <a
              href="https://www.pwnhc.ca/en/birthplace-hockey"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition"
            >
              “till the snow fell, the game of hockey played on the ice was the morning’s
              sport.”
            </a>
          </blockquote>

          <p>
            This simple line — a brief observation in a much larger journal — is now
            recognized as
            <b>
              {" "}
              one of the earliest written accounts of hockey being played on ice in North
              America
            </b>
            .
          </p>

          <p>
            It happened here, on{" "}
            <a
              href="https://en.wikipedia.org/wiki/Great_Bear_Lake"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition"
            >
              Sahtú
            </a>
            , the vast lake that has sustained the{" "}
            <a
              href="https://en.wikipedia.org/wiki/Dene"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-400 transition"
            >
              Dene
            </a>{" "}
            people for generations.
          </p>

          <p>
            Two hundred years later, the All-Star Alumni Winter Classic brings hockey
            <b> back </b>
            to the place where Franklin’s men once played.
          </p>

          <p>
            But this time, it’s not an expedition passing through. It’s a community-led
            celebration — rooted in culture, history, and northern pride.
          </p>

          <Image
            src="/modern-hockey.gif"
            alt="Modern Hockey"
            width={400}
            height={400}
            className="w-1/4 h-auto rounded-sm shadow-lg"
            priority
          />

          <div className="pt-8">
            <p className="font-semibold text-[#1C2B36] mb-3">The event honours:</p>

            <ul className="space-y-3">
              <li>· The Dene people who have lived on Sahtú since time immemorial</li>
              <li>· The explorers who recorded the earliest written game</li>
              <li>· The generations who carried the spirit of hockey forward</li>
              <li>· The youth who will shape the game’s future</li>
            </ul>
          </div>

          <p className="pt-8">
            What began as a morning pastime in 1825 has become a{" "}
            <b>national-scale celebration</b> on the same ice.
          </p>
        </div>
      </div>
    </div>
  );
}
