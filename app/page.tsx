// components
import HomeTitle from "./components/home/HomeTitle";
import ShortAbout from "./components/home/ShortAbout";
import ShortPortfolio from "./components/home/ShortPortfolio";
import ShortServices from "./components/home/ShortServices";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Cone | usługi dronem",
  description:
    "Profesjonalne usługi dronem, zdjęcia i filmy z drona, filmy i zdjęcia nieruchomości, realizacja wydarzeń",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Drone Cone | Usługi dronem",
    description:
      "Profesjonalne usługi dronem, zdjęcia i filmy z drona, filmy i zdjęcia nieruchomości, realizacja wydarzeń",
    url: "https://dronecone.pl",
    images: ["https://dronecone.pl/BanerCanva.png"],
  },
};

export default function Home() {
  return (
    <main className="w-screen overflow-hidden">
      <HomeTitle />
      <ShortServices />
      <ShortPortfolio />
      <ShortAbout />
    </main>
  );
}
