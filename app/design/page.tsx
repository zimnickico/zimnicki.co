import { Card } from "@/ui/hCard";
import { Header } from "@/ui/header";
import { Navigation } from "@/ui/navigation";
import { WorkContainer, WorkSample, WorkSampleImage } from "@/ui/work";

export default function Page() {
    return (
        <main className="">
            <Card />
            <Navigation />
            <WorkContainer>
                < WorkSample title="Designing for XYZ.">
                    <WorkSampleImage
                        img="/ono-edit-employee.png"
                        className="col-span-2"
                    />
                    <WorkSampleImage img="/ono-mobile-perf.png" className="col-span-1" />
                    <WorkSampleImage img="/ono-mobile-perf.png" />
                </WorkSample>
            </WorkContainer >
        </main >
    );
}


