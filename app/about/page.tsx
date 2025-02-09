// components
import AboutUsCards from "../components/AboutUsCards";
import AboutUsCardsLonger from "../components/about/AboutUsCardsLonger";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Cone | Poznaj nas",
  description:
    "Wojciech i Krzysztof - wspólnie założyliśmy firmę DroneCone z ambicją dorównania amerykańskim potentatom w branży usług dronowych. Energia i pasja stanowią naszą siłę napędową",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Drone Cone | Poznaj nas",
    description:
      "Wojciech i Krzysztof - wspólnie założyliśmy firmę DroneCone z ambicją dorównania amerykańskim potentatom w branży usług dronowych. Energia i pasja stanowią naszą siłę napędową",
    url: "https://dronecone.pl/about",
    images: ["https://dronecone.pl/BanerCanva.png"],
  },
};

export default function About() {
  return (
    <div className="mt-14 md:mt-24 lg:mt-36 w-screen overflow-hidden pb-28">
      <AboutUsCards />
      <AboutUsCardsLonger />
    </div>
  );
}
