"use client";
import { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

// icons
import PhotoIcon from "../../image/svg/photo.svg";

interface Props {
  activeCategory: string;
}

interface gridContentElement {
  type: string;
  content: any;
  video: string;
  id: number;
  tag: string;
}

export default function Gallery(props: Props) {
  const { activeCategory } = props;

  const gridContent = [
    {
      type: "photo",
      content: "/artistic/artistic-1.jpeg",
      video: "",
      id: 1,
      tag: "artistic",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/mhmeIGGBaC8?si=cuX43UWRSeHdVZWZ&amp;controls=0",
      id: 302,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-1.jpg",
      video: "",
      id: 2,
      tag: "realEstate",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/Pvlawci1X8Q?si=oaBUFKm_CW0XafJu&amp;controls=0",
      id: 3,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/artistic/artistic-2.jpg",
      video: "",
      id: 4,
      tag: "artistic",
    },

    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/7k-dhxC7Vh8?si=y2F6LSJlWbCuIQ1C&amp;controls=0",
      id: 100,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-2.jpg",
      video: "",
      id: 5,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/artistic/artistic-3.jpg",
      video: "",
      id: 6,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-3.jpg",
      video: "",
      id: 7,
      tag: "realEstate",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/B66cnByCksQ?si=MhC72YkelGerLG7N&amp;controls=0",
      id: 8,
      tag: "artistic",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/acJJc_NgrOA?si=sP1VNcfU-kHJkfXW&amp;controls=0",
      id: 200,
      tag: "events",
    },
    {
      type: "photo",
      content: "/events/events-7.jpg",
      video: "",
      id: 102,
      tag: "events",
    },
    {
      type: "photo",
      content: "/artistic/artistic-4.jpg",
      video: "",
      id: 9,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/events/events-1.jpg",
      video: "",
      id: 10,
      tag: "events",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-4.jpg",
      video: "",
      id: 11,
      tag: "realEstate",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/w9SBjYHK_Vs?si=bj1t_U5bqriWvj9t&amp;controls=0",
      id: 13,
      tag: "events",
    },
    {
      type: "photo",
      content: "/artistic/artistic-5.jpg",
      video: "",
      id: 12,
      tag: "artistic",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/8tLcNCoUt4I?si=fIggsrixZwbPK-_1&amp;controls=0",
      id: 301,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/events/events-5.jpg",
      video: "",
      id: 101,
      tag: "events",
    },
    {
      type: "photo",
      content: "/artistic/artistic-16.jpg",
      video: "",
      id: 14,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-5.jpg",
      video: "",
      id: 15,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-6.jpg",
      video: "",
      id: 16,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/events/events-8.jpg",
      video: "",
      id: 103,
      tag: "events",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/lHV28oso-bw?si=m67DlXr7lBuNVj_t&amp;controls=0",
      id: 17,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/artistic/artistic-6.jpg",
      video: "",
      id: 18,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-7.jpg",
      video: "",
      id: 19,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-8.jpg",
      video: "",
      id: 20,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/events/events-2.jpg",
      video: "",
      id: 21,
      tag: "events",
    },

    {
      type: "photo",
      content: "/artistic/artistic-7.jpg",
      video: "",
      id: 23,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/artistic/artistic-8.jpg",
      video: "",
      id: 24,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/artistic/artistic-9.jpg",
      video: "",
      id: 25,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-9.jpg",
      video: "",
      id: 26,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/artistic/artistic-10.jpg",
      video: "",
      id: 27,
      tag: "artistic",
    },
    {
      type: "video",
      content: "",
      video:
        "https://www.youtube-nocookie.com/embed/oHmi-bM2PaA?si=cU1gm97Inymm7_hX&amp;controls=0",
      id: 28,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-10.jpg",
      video: "",
      id: 29,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-11.jpg",
      video: "",
      id: 30,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/artistic/artistic-11.jpg",
      video: "",
      id: 31,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/events/events-3.jpg",
      video: "",
      id: 32,
      tag: "events",
    },
    {
      type: "photo",
      content: "/artistic/artistic-12.jpg",
      video: "",
      id: 33,
      tag: "artistic",
    },
    // {
    //   type: "photo",
    //   content: "/inspection/inspection-1.jpg",
    //   video: "",
    //   id: 34,
    //   tag: "inspection",
    // },
    {
      type: "photo",
      content: "/artistic/artistic-13.jpg",
      video: "",
      id: 35,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/events/events-9.jpg",
      video: "",
      id: 104,
      tag: "events",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-12.jpg",
      video: "",
      id: 36,
      tag: "realEstate",
    },
    // {
    //   type: "photo",
    //   content: "/inspection/inspection-2.jpg",
    //   video: "",
    //   id: 37,
    //   tag: "inspection",
    // },
    {
      type: "photo",
      content: "/artistic/artistic-14.jpg",
      video: "",
      id: 38,
      tag: "artistic",
    },
    {
      type: "photo",
      content: "/events/events-4.jpg",
      video: "",
      id: 105,
      tag: "events",
    },
    {
      type: "photo",
      content: "/realEstate/realEstate-13.jpg",
      video: "",
      id: 39,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/artistic/artistic-15.jpg",
      video: "",
      id: 40,
      tag: "artistic",
    },
    // {
    //   type: "photo",
    //   content: "/inspection/inspection-3.jpg",
    //   video: "",
    //   id: 41,
    //   tag: "inspection",
    // },
    {
      type: "photo",
      content: "/realEstate/realEstate-14.jpg",
      video: "",
      id: 42,
      tag: "realEstate",
    },
    {
      type: "photo",
      content: "/artistic/artistic-16.jpg",
      video: "",
      id: 43,
      tag: "artistic",
    },
  ];

  const filterFunction = (element: gridContentElement) => {
    if (activeCategory === "all") {
      return true;
    } else if (activeCategory === "artistic" && element.tag === "artistic") {
      return true;
    } else if (
      activeCategory === "real-estate" &&
      element.tag === "realEstate"
    ) {
      return true;
    } else if (activeCategory === "events" && element.tag === "events") {
      return true;
    }

    return false;
  };

  const list: any = {
    visible: {
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
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
    <div className="w-full flex flex-col items-center">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="px-10 mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full"
      >
        {gridContent
          .filter((element) => filterFunction(element))
          .map((block) => (
            <motion.div
              variants={item}
              className="portfolio-card"
              key={block.id}
            >
              {block.type === "photo" && (
                <Image
                  src={block.content}
                  fill={true}
                  alt="Portfolio photo"
                  className="z-30"
                />
              )}
              {block.type === "video" && (
                <iframe
                  className="w-full aspect-video z-30"
                  src={block.video}
                  title="Sweden Lake"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
              <div className="relative w-full h-full opacity-30">
                <Image
                  src={PhotoIcon}
                  width={50}
                  alt="Photo icon, placeholder"
                  className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
                />
              </div>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
