"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

export default function NavBar() {
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
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col px-5 md:px-8 lg:px-16 pt-2 lg:pt-8">
      <div className="flex justify-between items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring" },
          }}
          className="flex items-center"
        >
          <Link
            href="/"
            className="text-accent text-xl flex flex-col md:flex-row items-center gap-0 md:gap-4"
          >
            <Image
              src="/logo.svg"
              alt="dronecone logo"
              width={50}
              height={50}
              priority={true}
              className="hidden lg:block"
            />
            <div className="flex flex-col text-end">
              <div>Drone</div> <div className="">Cone</div>
            </div>
          </Link>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-12 items-center">
          <motion.nav
            variants={list}
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row gap-2 md:gap-12 items-center"
          >
            <motion.div variants={item}>
              <Link href="/services" className="nav-link hidden md:block">
                Usługi
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link href="/portfolio" className="nav-link hidden md:block">
                Portfolio
              </Link>
            </motion.div>
            <motion.div variants={item}>
              <Link href="/about" className="nav-link hidden md:block">
                O nas
              </Link>
            </motion.div>
          </motion.nav>

          <Link href="/order-service" className="">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
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
              className="btn-primary"
            >
              Zamów usługę
            </motion.div>
          </Link>
        </div>
      </div>
      <motion.nav
        variants={list}
        initial="hidden"
        animate="visible"
        className="flex md:hidden mt-4 md:mt-0 w-full justify-between px-10"
      >
        <motion.div variants={item}>
          <Link href="/services" className="nav-link">
            Usługi
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </motion.div>

        <motion.div variants={item}>
          <Link href="/about" className="nav-link">
            O nas
          </Link>
        </motion.div>
      </motion.nav>
    </div>
  );
}
