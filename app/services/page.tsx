import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Cone | zobacz nasze usługi",
  description:
    "Zdjęcia i filmy nieruchomości, zdjęcia i filmy wydarzeń, profesjonalne zdjęcia i filmy, filmy na instagrama, youtube'a i strony internetowe",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Drone Cone | zobacz nasze usługi",
    description:
      "Zdjęcia i filmy nieruchomości, zdjęcia i filmy wydarzeń, profesjonalne zdjęcia i filmy, filmy na instagrama, youtube'a i strony internetowe",
    url: "https://dronecone.pl/services",
    images: ["https://dronecone.pl/BanerCanva.png"],
  },
};

// next imports
import { redirect } from "next/navigation";

export default function Services() {
  redirect("services/real-estate");

  return <main></main>;
}
