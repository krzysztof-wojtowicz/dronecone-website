"use client";

// next imports
import Image from "next/image";

// motion
import { motion } from "framer-motion";

// icons
import PhotoIcon from "../../image/svg/photo.svg";

export default function HomeTitle() {
  const heading: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="mt-44 mb-36 md:mb-56 md:mt-72 text-center flex flex-col">
      <div className="relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.2, duration: 1.5 }}
          variants={heading}
          className="cursor-default"
        >
          <h1 className="text-center items-center justify-center flex flex-col md:flex-row gap-1 md:gap-6 px-5 tracking-tight leading-[0.8] bg-clip-text bg-gradient-to-r from-accent to-secondary text-transparent font-semibold">
            <span>Drone</span>
            <span>Cone</span>
          </h1>
          <h2 className="tracking-tight mt-4 lg:mt-0 px-5">
            Spojrzenie z{" "}
            <span className="bg-clip-text bg-gradient-to-r from-accent to-secondary text-transparent">
              innej
            </span>{" "}
            strony
          </h2>
        </motion.div>

        {/* FLYING PHOTOS */}

        {/* TOP RIGHT */}

        <motion.div
          initial={{ x: 250, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="absolute -top-36 md:-top-52 -right-12 md:right-0 lg:right-10  "
        >
          <div className="scale-[0.5] md:scale-[0.7] lg:scale-[0.8] xl:scale-100">
            <motion.div
              initial={{ rotate: 17, y: 8, x: -16 }}
              whileInView={{
                rotate: 15,
                y: 0,
                x: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              whileHover={{
                rotate: 17,
                y: 8,
                x: -16,
                transition: { duration: 0.5 },
              }}
              className="aspect-video rounded-md overflow-hidden rotate-[15deg] z-10 relative w-80 bg-stone-100"
            >
              <Image
                src="/artistic/artistic-16.jpg"
                alt="Drone Photo of lake"
                priority={true}
                fill={true}
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

            <div className="absolute bg-accent w-80 aspect-video rounded-md rotate-[17deg] top-2 right-4 z-0"></div>
          </div>
        </motion.div>

        {/* SM NONE/TOP LEFT */}
        <motion.div
          initial={{ x: -350, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.2 }}
          className="absolute md:-top-52 lg:-top-56 left-10 lg:left-10 scale-[0.5] md:scale-[0.7] lg:scale-[0.8] xl:scale-100 hidden md:block"
        >
          <div className="scale-[0.5] md:scale-[0.7] lg:scale-[0.8] xl:scale-100">
            <motion.div
              initial={{ rotate: -12, y: 8, x: 16 }}
              whileInView={{
                rotate: -10,
                y: 0,
                x: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              whileHover={{
                rotate: -12,
                y: 8,
                x: 16,
                transition: { duration: 0.5 },
              }}
              className="overflow-hidden aspect-video rounded-md -rotate-[10deg] z-10 relative w-80 bg-stone-100"
            >
              <Image
                src="/artistic/artistic-12.jpg"
                alt="Drone Photo of road"
                fill={true}
                priority={true}
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

            <div className="absolute bg-accent w-80 aspect-video rounded-md -rotate-[12deg] top-2 left-4 z-0"></div>
          </div>
        </motion.div>

        {/* SM BOTTOM LEFT/BOTTOM RIGHT */}
        <motion.div
          initial={{ x: 350, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, type: "spring", delay: 0.4 }}
          className="absolute top-[22rem] md:top-56 lg:top-64 left-4 right-auto md:left-auto md:right-60 lg:right-80 scale-[0.5] md:scale-[0.7] lg:scale-[0.8] xl:scale-100"
        >
          <div className="scale-[0.5] md:scale-[0.7] lg:scale-[0.8] xl:scale-100">
            <motion.div
              initial={{ rotate: -15, y: 8, x: 16 }}
              whileInView={{
                rotate: -12,
                y: 0,
                x: 0,
                transition: { duration: 0.5, delay: 1 },
              }}
              whileHover={{
                rotate: -15,
                y: 8,
                x: 16,
                transition: { duration: 0.5 },
              }}
              className="overflow-hidden aspect-video w-80 rounded-md -rotate-[12deg] z-10 relative bg-stone-100"
            >
              <Image
                src="/artistic/artistic-19.jpg"
                alt="Drone Photo of boats on sea"
                fill={true}
                priority={true}
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

            <div className="absolute bg-accent w-80 aspect-video rounded-md -rotate-[15deg] top-2 left-4 z-0"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
