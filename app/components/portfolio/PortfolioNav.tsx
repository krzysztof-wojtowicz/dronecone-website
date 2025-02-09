"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

// components
import NavButton from "../NavButton";

interface Props {
  activeCategory: string;
}

export default function PortfolioNav(props: Props) {
  const { activeCategory } = props;

  const { push } = useRouter();

  const [isAll, setIsAll] = useState(false);
  const [isArtistic, setIsArtistic] = useState(false);
  const [isRealEstate, setIsRealEstate] = useState(false);
  const [isEvents, setIsEvents] = useState(false);

  useEffect(() => {
    setIsAll(false);
    setIsArtistic(false);
    setIsRealEstate(false);
    setIsEvents(false);

    if (activeCategory === "all") {
      setIsAll(true);
    } else if (activeCategory === "artistic") {
      setIsArtistic(true);
    } else if (activeCategory === "real-estate") {
      setIsRealEstate(true);
    } else if (activeCategory === "events") {
      setIsEvents(true);
    }
  }, []);

  const handleServiceChange = (buttonCategory: string) => {
    if (buttonCategory === "all") {
      push("/portfolio/all");
    } else if (buttonCategory === "artistic") {
      push("/portfolio/artistic");
    } else if (buttonCategory === "real-estate") {
      push("/portfolio/real-estate");
    } else if (buttonCategory === "events") {
      push("/portfolio/events");
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
        Portfolio
      </motion.h3>
      <div className="flex flex-wrap gap-8 justify-between md:justify-center items-center w-full px-12">
        <motion.div variants={item}>
          <NavButton
            isActive={isAll}
            handleIsActive={handleServiceChange}
            buttonText="Wszystko"
            buttonCategory="all"
          />
        </motion.div>
        <motion.div variants={item}>
          <NavButton
            isActive={isArtistic}
            handleIsActive={handleServiceChange}
            buttonText="Artystyczne"
            buttonCategory="artistic"
          />
        </motion.div>
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
      </div>
    </motion.div>
  );
}
