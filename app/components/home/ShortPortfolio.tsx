"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

// icons
import PhotoIcon from "../../image/svg/photo.svg";

export default function ShortPortfolio() {
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
    <div className="mt-32 flex flex-col w-screen overflow-hidden">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1.5 } }}
        className="text-center mb-4 md:mb-0 font-medium"
      >
        Zobacz nasze prace
      </motion.h2>

      <div className="relative">
        <motion.div
          variants={list}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 px-10 gap-6 mt-10"
        >
          {/* ROW 1 */}
          <motion.div variants={item} className="portfolio-card">
            <iframe
              className="w-full aspect-video z-30"
              src={
                "https://www.youtube-nocookie.com/embed/Pvlawci1X8Q?si=oaBUFKm_CW0XafJu&amp;controls=0"
              }
              title="Sweden Lake"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="portfolio-card">
            <Image
              src="/realEstate/realEstate-12.jpg"
              fill={true}
              alt="Portfolio photo"
              className="z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          <motion.div variants={item} className="portfolio-card">
            <Image
              src="/artistic/artistic-16.jpg"
              fill={true}
              alt="Portfolio photo"
              className="z-30"
            />

            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          {/* ROW 2 */}
          <motion.div
            variants={item}
            className="portfolio-card hidden lg:block"
          >
            <Image
              src="/artistic/artistic-5.jpg"
              fill={true}
              alt="Portfolio photo"
              className="z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="portfolio-card hidden lg:block"
          >
            <iframe
              className="w-full aspect-video z-30"
              src="https://www.youtube-nocookie.com/embed/7k-dhxC7Vh8?si=y2F6LSJlWbCuIQ1C&amp;controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="portfolio-card hidden lg:block"
          >
            <Image
              src="/realEstate/realEstate-5.jpg"
              fill={true}
              className="z-30"
              alt="Portfolio photo"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          {/* ROW 3 */}
          <motion.div
            variants={item}
            className="portfolio-card hidden xl:block"
          >
            <Image
              src="/artistic/artistic-20.jpg"
              fill={true}
              className="z-30"
              alt="Portfolio photo"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="portfolio-card hidden xl:block"
          >
            <Image
              src="/artistic/artistic-12.jpg"
              fill={true}
              alt="Portfolio photo"
              className="z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="portfolio-card hidden xl:block"
          >
            <Image
              src="/artistic/artistic-3.jpg"
              fill={true}
              alt="Portfolio photo"
              className="z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="z-50 absolute -bottom-14 w-full h-1/4 bg-white shadow-[0_-20px_40px_50px_rgba(255,255,255,1)]">
          {" "}
          <motion.div className="flex w-full justify-center scale-125">
            <Link href="/portfolio">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.7, duration: 0.5 },
                }}
                whileHover={{
                  backgroundColor: "#EF9400",
                  color: "white",
                  transition: { type: "spring", duration: 1 },
                }}
                whileTap={{
                  scale: [1, 0.8, 1],
                  transition: { duration: 0.2 },
                }}
                className="btn-primary bg-white z-0 animate-bounce"
              >
                Pełne portfolio
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
