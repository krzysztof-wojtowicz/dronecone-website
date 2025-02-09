"use client";
import { motion } from "framer-motion";

// next imports
import Link from "next/link";

// components
import AboutUsCards from "../AboutUsCards";

export default function ShortAbout() {
  return (
    <div className="w-screen overflow-hidden z-10 bg-white pb-6 mt-20 md:mt-0">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1.5 } }}
        className="text-6xl text-center font-medium mb-20 md:mb-0"
      >
        Poznaj nas!
      </motion.h2>
      <AboutUsCards />
      <div className="flex justify-center w-full scale-125 mt-28 md:mt-0">
        <Link href="/about">
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
            Więcej o nas
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
