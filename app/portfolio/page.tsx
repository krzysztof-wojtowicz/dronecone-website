// next imports
import { redirect } from "next/navigation";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Cone | zobacz nasze portfolio",
  description:
    "Portfolio, zdjęcia i filmy z podróży, nieruchomości, wydarzenia, filmy",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Drone Cone | zobacz nasze portfolio",
    description:
      "Portfolio, zdjęcia i filmy z podróży, nieruchomości, wydarzenia, filmy",
    url: "https://dronecone.pl/portfolio",
    images: ["https://dronecone.pl/BanerCanva.png"],
  },
};

export default function Portfolio() {
  redirect("portfolio/all");

  return <main></main>;
}
