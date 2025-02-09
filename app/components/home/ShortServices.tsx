"use client";
import { motion } from "framer-motion";

// svg icons
import EventsIcon from "../../image/svg/events.svg";
import PhotogrammetryIcon from "../../image/svg/photogrammetry.svg";
import InspectionIcon from "../../image/svg/inspection.svg";
import RealEstateIcon from "../../image/svg/real_estate.svg";

// components
import ServiceCard from "./ServiceCard";

export default function ShortServices() {
  return (
    <div className="mt-72 md:mt-96 w-full">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1.5 } }}
        className="text-center font-medium"
      >
        Nasze usługi dronowe
      </motion.h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mx-10 lg:mx-14 xl:mx-20 mt-14">
        {/* REAL ESTATE CARD */}
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2, duration: 1 },
          }}
        >
          <ServiceCard
            icon={RealEstateIcon}
            iconAlt="house icon"
            title="Filmy i zdjęcia nieruchomości"
            description="Oferujemy profesjonalne usługi fotografii i filmowania nieruchomości z dronów. Nasze materiały wspierają efektywną sprzedaż, zadowalając zarówno firmy, jak i klientów indywidualnych."
            link="services/real-estate"
            photoPath="/realEstate/realEstate-1.jpg"
            photoAlt="Real estate example photo"
          />
        </motion.div>

        {/* EVENTS CARD */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5, duration: 1 },
          }}
        >
          <ServiceCard
            icon={EventsIcon}
            iconAlt="calendar icon"
            title="Filmy i zdjęcia wydarzeń"
            description="Świadczymy usługi dokumentowania wydarzeń sportowych, pikników, wesel i innych eventów, rejestrując je za pomocą zdjęć i nagrań z dronów. Tego typu ujęcia stanowią świetną pamiątkę."
            link="/services/events"
            photoPath="/events/events-2.jpg"
            photoAlt="Events example photo"
          />
        </motion.div>

        {/* INSPECTION CARD */}
        {/* <ServiceCard
          icon={InspectionIcon}
          iconAlt="document icon"
          title="Inspekcja i dokumentacja z drona"
          description="Regularnie dostarczamy cotygodniowe raporty z placów budowy oraz dokumentację wideo z drona."
          link="/services/inspection"
          photoPath="/inspection/inspection-3.jpg"
          photoAlt="Inspection example photo"
        /> */}

        {/* PHOTOGRAMMETRY CARD */}
        {/* <ServiceCard
          icon={PhotogrammetryIcon}
          iconAlt="layers icon"
          title="Fotogrametria i ortofotomapy"
          description="Specjalizujemy się w tworzeniu zaawansowanych modeli 3D budynków oraz dostarczaniu aktualnych i precyzyjnych ortofotomap."
          link="/services/photogrammetry"
          photoPath="/realEstate/realEstate-1.jpg"
          photoAlt="Photogrammetry example photo"
        /> */}
      </div>
    </div>
  );
}
