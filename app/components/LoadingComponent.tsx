"use client";

import Image from "next/image";

import LoadingIcon from "../image/svg/loading.svg";

import { motion } from "framer-motion";

export default function LoadingComponent() {
  return (
    <motion.main
      initial={{ opacity: 0.8 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-screen h-screen absolute top-0 left-0 z-50 bg-white overflow-hidden"
    >
      <div className="flex w-full h-full items-center justify-center">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-center items-center justify-center flex flex-col md:flex-row gap-1 md:gap-6 px-5 tracking-tight leading-[0.8] bg-clip-text bg-gradient-to-r from-accent to-secondary text-transparent font-semibold">
            <span>Drone</span>
            <span>Cone</span>
          </h1>
          <Image
            src={LoadingIcon}
            alt="Loading icon"
            width={75}
            className="animate-spin"
          />
        </div>
      </div>
    </motion.main>
  );
}
