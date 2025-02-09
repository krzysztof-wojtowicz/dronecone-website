"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// components
import NavButton from "../NavButton";

import { motion } from "framer-motion";

interface Props {
  activeService: string;
}

export default function ServicesNav(props: Props) {
  const { activeService } = props;

  const { push } = useRouter();

  const [isRealEstate, setIsRealEstate] = useState(false);
  const [isEvents, setIsEvents] = useState(false);
  const [isInspection, setIsInspection] = useState(false);
  const [isPhotogrammetry, setIsPhotogrammetry] = useState(false);

  useEffect(() => {
    setIsRealEstate(false);
    setIsEvents(false);
    setIsInspection(false);
    setIsPhotogrammetry(false);

    if (activeService === "real-estate") {
      setIsRealEstate(true);
    } else if (activeService === "events") {
      setIsEvents(true);
    } else if (activeService === "inspection") {
      setIsInspection(true);
    } else if (activeService === "photogrammetry") {
      setIsPhotogrammetry(true);
    }
  }, []);

  const handleServiceChange = (buttonCategory: string) => {
    if (buttonCategory === "real-estate") {
      push("/services/real-estate");
    } else if (buttonCategory === "events") {
      push("/services/events");
    } else if (buttonCategory === "inspection") {
      push("/services/inspection");
    } else if (buttonCategory === "photogrammetry") {
      push("/services/photogrammetry");
    }
  };

  const list: any = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      transition: {
        when: "afterChildren",
      },
    },
  };

  const item: any = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="flex flex-col w-full mt-10"
    >
      <motion.h3 variants={item} className="text-center mb-6">
        Usługi
      </motion.h3>
      <div className="flex flex-wrap gap-8 justify-between md:justify-center items-center w-full px-12">
        <motion.div variants={item}>
          <NavButton
            isActive={isRealEstate}
            handleIsActive={handleServiceChange}
            buttonText="Nieruchomości"
            buttonCategory="real-estate"
          />
        </motion.div>
        <motion.div variants={item}>
          <NavButton
            isActive={isEvents}
            handleIsActive={handleServiceChange}
            buttonText="Wydarzenia"
            buttonCategory="events"
          />
        </motion.div>
        {/* <NavButton
          isActive={isInspection}
          handleIsActive={handleServiceChange}
          buttonText="Inspekcja i dokumentacja"
          buttonCategory="inspection"
        />
        <NavButton
          isActive={isPhotogrammetry}
          handleIsActive={handleServiceChange}
          buttonText="Fotogrametria i ortofotomapy"
          buttonCategory="photogrammetry"
        /> */}
      </div>
    </motion.div>
  );
}
