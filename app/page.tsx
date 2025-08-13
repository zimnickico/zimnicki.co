import { Header } from "@/ui/header";
import { Microformats } from "@/ui/microformats";
import { Navigation } from "@/ui/navigation";
import { WorkContainer, WorkSample, WorkSampleImage } from "@/ui/work";

export default function Page() {
  return (
    <main className="px-6 md:px-0">
      <Microformats />
      <section className="mx-auto max-w-[42em]" id="intro">
        <Header />
      </section>
      <section className="mx-auto max-w-[42em]" id="design">
        <p className="text-stone-400 text-sm font-[450] tracking-[-3%] leading-[120%] pt-[2em]">
          Design
        </p>
        <WorkContainer>
          <WorkSample>
            <WorkSampleImage
              img="/ono-edit-employee.png"
              className="col-span-2"
            />
            <WorkSampleImage img="/ono-mobile-dash.png" />
            <WorkSampleImage img="/ono-mobile-perf.png" />
            <WorkSampleImage img="/ono-empty-sync.png" className="col-span-2" />
          </WorkSample>
          <WorkSample>
            <WorkSampleImage img="/outer-landing.png" className="col-span-2" />
            <WorkSampleImage img="/outer-pricing.png" className="col-span-2" />
          </WorkSample>
        </WorkContainer>
        <WorkSample>
          <WorkSampleImage img="/other-contracts.png" className="col-span-2" />
        </WorkSample>
      </section>
      <Navigation />
      <section className="mx-auto max-w-[42em]" id="webrings">
        <p className="text-stone-400 text-sm font-[450] tracking-[-3%] leading-[120%] pt-[2em]">
          Webrings
        </p>
        <div className="flex justify-between text-sm font-[450] tracking-[-3%] leading-[120%] pt-[2em] pb-[6em]">
          <div>
            An <a href="https://xn--sr8hvo.ws">IndieWeb Webring</a> 🕸💍
          </div>
          <div className="flex gap-[2em]">
            <a
              className="text-stone-400 hover:text-black transition-all duration-200"
              href="https://xn--sr8hvo.ws/previous"
            >
              ←
            </a>
            <a
              className="text-stone-400 hover:text-black transition-all duration-200"
              href="https://xn--sr8hvo.ws/next"
            >
              →
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[42em]" id="footer">
        <footer className="pb-[8em] flex items-center text-stone-400 text-sm font-[450] tracking-[-3%] leading-[120%] justify-between">
          <p>Last Updated: August 2025 </p>
          <ul className="flex gap-[2em]">
            <a
              className="hover:text-black transition-all duration-200"
              rel="me"
              href="https://github.com/zimnickico"
            >
              GitHub
            </a>
            <a
              className="hover:text-black transition-all duration-200"
              rel="me"
              href="https://x.com/zimnickico"
            >
              Twitter
            </a>
          </ul>
        </footer>
      </section>
    </main>
  );
}
