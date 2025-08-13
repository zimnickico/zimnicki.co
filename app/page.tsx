import { Header } from "@/ui/header";
import { Navigation } from "@/ui/navigation";
import { WorkContainer, WorkSample, WorkSampleImage } from "@/ui/work";

export default function Page() {
  return (
    <main className="px-6 md:px-0">
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
