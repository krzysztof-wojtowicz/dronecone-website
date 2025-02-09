import { redirect } from "next/navigation";

// components
import ServicesNav from "../../components/services/ServicesNav";

import RealEstateMosaic from "@/app/components/services/RealEstateMosaic";
import EventsMosaic from "@/app/components/services/EventsMosaic";
import InspectionMosaic from "@/app/components/services/InspectionMosaic";
import PhotogrammetryMosaic from "@/app/components/services/PhotogrammetryMosaic";

import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: { service_name: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const activeService = params.service_name;

  const serviceName =
    activeService === "real-estate"
      ? "Nieruchomości"
      : activeService === "events"
      ? "Wydarzenia"
      : "";

  const title = "Drone Cone | " + serviceName + " - szczegóły usługi";
  const url = "https://dronecone.pl/services/" + activeService;

  let description = "";

  if (activeService === "real-estate") {
    description =
      "Zdjęcia i filmy nieruchomości, profesjonalne zdjęcia i filmy, filmy z zewnątrz, filmy na instagrama, youtube'a i strony internetowe";
  } else if (activeService === "events") {
    description =
      "Zdjęcia i filmy wydarzeń, profesjonalne zdjęcia i filmy, filmy z powietrza, filmy na instagrama, youtube'a i strony internetowe";
  }

  return {
    title: title,
    description: description,
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: ["https://dronecone.pl/BanerCanva.png"],
    },
  };
}

export default function ServicesName({
  params,
}: {
  params: { service_name: string };
}) {
  const activeService = params.service_name;

  if (
    activeService !== "real-estate" &&
    activeService !== "events" //&&
    // activeService !== "inspection" &&
    // activeService !== "photogrammetry"
  ) {
    redirect("/services/real-estate");
  }

  return (
    <main className="">
      <ServicesNav activeService={activeService} />
      {activeService === "real-estate" && <RealEstateMosaic />}
      {activeService === "events" && <EventsMosaic />}
      {/* {activeService === "inspection" && <InspectionMosaic />}
      {activeService === "photogrammetry" && <PhotogrammetryMosaic />} */}
    </main>
  );
}
