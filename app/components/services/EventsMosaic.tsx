"use client";

import Image from "next/image";

import { motion } from "framer-motion";

// icons
import pointer from "../../image/svg/hand_point.svg";
import lightroom from "../../image/svg/lightroom.svg";
import facebook from "../../image/svg/facebook_original.svg";
import wordpress from "../../image/svg/wordpress.svg";
import instagram from "../../image/svg/instagram_original.svg";
import resolve_logo from "../../image/svg/resolve_logo.svg";
import youtube from "../../image/svg/youtube_original.svg";

export default function EventsMosaic() {
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
      transition: { duration: 1 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="w-full px-10 mt-10">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="md:rounded-xl md:overflow-hidden w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-0 md:shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)]"
      >
        {/* ELEMENT 1 SQUARE 1/1 (ROW 1) - ORANGE SQUARE */}
        <motion.div
          variants={item}
          className="hidden md:flex md:col-start-2 lg:col-start-3 xl:col-start-auto md:row-start-1 lg:row-start-4 xl:row-start-auto aspect-square col-span-1 row-span-1  xl:bg-gradient-to-br xl:from-accent xl:to-secondary w-full overflow-hidden justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src="/events/events-2.jpg"
              alt="orange background, event"
              fill={true}
              className="object-cover xl:opacity-20 h-full mix-blend-normal md:mix-blend-overlay xl:mix-blend-normal z-30"
            />
          </div>
        </motion.div>

        {/* ELEMENT 2 HORIZONTAL 2/1 (ROW 1) - PHOTO */}
        <motion.div
          variants={item}
          className="w-full h-full rounded-xl md:rounded-none shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)] md:shadow-none row-start-2 md:row-start-3 lg:row-start-auto aspect-video md:aspect-[2/1] md:col-span-2 md:row-span-1 bg-stone-100 overflow-hidden flex justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src="/events/events-3.jpg"
              fill={true}
              alt="Example events photo"
              className="object-cover shadow-md"
            />
          </div>
        </motion.div>

        {/* ELEMENT 3 VERTICAL 1/2 (ROW 1 & 2) - PHOTOS DESCRIPTION */}
        <motion.div
          variants={item}
          className="rounded-xl md:rounded-none shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)] row-start-1 md:shadow-none w-full md:aspect-[1/2] md:col-span-1 md:row-span-2 bg-white overflow-hidden flex flex-col gap-4 items-center py-3 px-2"
        >
          <h4 className="text-center">Zdjęcia wydarzeń z drona</h4>
          <div className="flex flex-col items-start h-full gap-2 md:gap-0 md:justify-between py-2 md:py-4">
            {/* 1 - CHOOSING PHOTOS */}
            <div className="flex gap-2 items-center">
              <Image src={pointer} width={25} height={25} alt="Pointer icon" />
              <span>
                pakiet wielu zdjęć - sam wybierasz, które z nich kupujesz
              </span>
            </div>
            <div className="grid grid-cols-3 w-full gap-1">
              <div className="aspect-square rounded-md overflow-hidden relative">
                <Image
                  src="/events/events-2.jpg"
                  fill={true}
                  alt="Events example photo pack 1"
                  className="h-full object-cover shadow-md"
                />
              </div>
              <div className="aspect-square rounded-md overflow-hidden relative">
                <Image
                  src="/events/events-3.jpg"
                  fill={true}
                  alt="Events example photo pack 2"
                  className="h-full object-cover shadow-md"
                />
              </div>
              <div className="aspect-square rounded-md overflow-hidden relative">
                <Image
                  src="/events/events-4.jpg"
                  fill={true}
                  alt="Events example photo pack 3"
                  className="h-full object-cover shadow-md"
                />
              </div>
            </div>

            {/* 2 - PHOTO EDITING */}
            <div className="flex gap-2 items-center">
              <Image src={pointer} width={25} height={25} alt="Pointer icon" />
              <span>profesjonalna obróbka</span>
            </div>

            <div className="relative w-full">
              <div className="flex w-full aspect-video rounded-md overflow-hidden">
                <div className="relative w-1/2 h-full bg-stone-100">
                  <Image
                    src="/other/slider-3.jpg"
                    fill={true}
                    alt="Lightroom showcase before"
                    className="object-cover object-left"
                  />
                </div>

                <div className="relative w-1/2 h-full bg-stone">
                  <Image
                    src="/other/slider-4.jpg"
                    fill={true}
                    alt="Lightroom showcase after"
                    className="object-cover object-right"
                  />
                </div>
              </div>
              <div className="absolute top-1 left-1 rounded-xl overflow-hidden shadow-md shadow-sky-950">
                <Image
                  src={lightroom}
                  width={50}
                  height={50}
                  alt="Lightroom logo"
                  className="scale-[1.2] object-cover"
                />
              </div>
            </div>

            {/* 3 - SOCIAL MEDIA AND WEB*/}
            <div className="flex gap-2 items-center">
              <Image src={pointer} width={25} height={25} alt="Pointer icon" />
              <span>
                zdjęcia specjalnie przygotowane na stronę lub social media
              </span>
            </div>

            <div className="flex gap-2 justify-center items-center w-full">
              <Image
                src={facebook}
                width={50}
                height={50}
                alt="Facebook logo"
              />
              <Image
                src={instagram}
                width={50}
                height={50}
                alt="Instagram logo"
              />
              <Image
                src={wordpress}
                width={50}
                height={50}
                alt="Wordpress logo"
              />
              <Image src={youtube} width={50} height={50} alt="Youtube logo" />
            </div>
          </div>
        </motion.div>

        {/* ELEMENT 4 SQUARE 2/2 (ROW 2 & 3) - VIDEOS DESCRIPTION */}
        <motion.div
          variants={item}
          className="rounded-xl md:rounded-none shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)] md:shadow-none md:aspect-square md:col-span-2 md:row-span-2 bg-white w-full overflow-hidden flex flex-col items-center py-3 px-2"
        >
          <h4 className="text-center">Nagrania wydarzeń z drona</h4>

          <div className="flex flex-col gap-2 justify-between items-start w-full h-full py-4">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full">
              <div className="flex gap-2 items-center justify-start md:justify-center w-full">
                <Image
                  src={pointer}
                  width={25}
                  height={25}
                  alt="Pointer icon"
                />
                <span>Kinowe ujęcia w wysokiej jakości</span>
              </div>
              <div className="flex items-center w-full justify-center">
                <div className="relative w-2/3 h-full aspect-video">
                  <Image
                    src="/events/events-3.jpg"
                    fill={true}
                    alt="Quality video example"
                    className="aspect-video w-full rounded-md"
                  />
                  <div className="absolute -top-14 -right-20">
                    <Image
                      src="/Avata.png"
                      width={200}
                      height={200}
                      alt="Dji drone"
                      className="scale-[0.7] rotate-[15deg]"
                    />
                  </div>
                  <div className="absolute top-1 left-2 text-white font-2xl">
                    3840 × 2160
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full">
              <div className="flex items-center w-full  justify-center row-start-2 md:row-start-auto">
                <div className="relative w-2/3 h-full aspect-video">
                  <Image
                    src="/events/events-1.jpg"
                    fill={true}
                    alt="Top view photo of children"
                    className="aspect-video w-2/3 rounded-md"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center justify-start md:justify-center w-full ">
                <Image
                  src={pointer}
                  width={25}
                  height={25}
                  alt="Pointer icon"
                />
                <span>Inne spojrzenie na twoje wydarzenie</span>
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full">
              <div className="flex gap-2 items-center justify-start md:justify-center w-full ">
                <Image
                  src={pointer}
                  width={25}
                  height={25}
                  alt="Pointer icon"
                />
                <span>Montaż na wysokim poziomie</span>
              </div>
              <div className="flex items-center w-full  justify-center">
                <div className="aspect-video relative w-2/3 h-full">
                  <Image
                    src="/other/resolve_ss.jpg"
                    fill={true}
                    alt="Quality video"
                    className="aspect-video w-full rounded-md"
                  />
                  <div className="absolute top-0 right-0">
                    <Image
                      src={resolve_logo}
                      width={50}
                      height={50}
                      alt="Davinci resolve logo"
                      className=""
                    />
                  </div>
                  <div className="absolute top-1 left-2 text-white font-2xl">
                    Davinci Resolve
                  </div>
                </div>
              </div>
            </div>

            {/* ROW 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 w-full">
              <div className="flex items-center w-full  justify-center gap-6  row-start-2 md:row-start-auto">
                <div className="w-2/3 aspect-video bg-stone-300 rounded-md relative">
                  <Image
                    src={youtube}
                    width={50}
                    height={50}
                    alt="youtube logo"
                    className="absolute -bottom-4 right-0 left-0 mx-auto"
                  />
                </div>
                <div className="w-1/3 aspect-[9/16] bg-stone-300 rounded-md relative">
                  <Image
                    src={instagram}
                    width={50}
                    height={50}
                    alt="instagram logo"
                    className="absolute -bottom-4 right-0 left-0 mx-auto"
                  />
                </div>
              </div>
              <div className="flex gap-2 items-center justify-start md:justify-center w-full ">
                <Image
                  src={pointer}
                  width={25}
                  height={25}
                  alt="Pointer icon"
                />
                <span>Formaty na różne platformy</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ELEMENT 5 SQUARE 1/1 (ROW 2) - ORANGE SQUARE */}
        <motion.div
          variants={item}
          className="hidden md:flex md:col-start-2 lg:col-start-auto md:row-start-2 lg:row-start-auto aspect-square col-span-1 row-span-1 bg-gradient-to-br from-accent to-secondary w-full overflow-hidden justify-center"
        >
          <div className="relative w-full h-full">
            <Image
              src="/events/events-4.jpg"
              alt="background event photo example"
              fill={true}
              className="object-cover opacity-20 h-full mix-blend-overlay "
            />
          </div>
        </motion.div>

        {/* ELEMENT 6 HORIZONTAL 2/1 (ROW 3) - PHOTO */}
        <motion.div
          variants={item}
          className="h-full aspect-video lg:col-start-1 xl:col-start-auto lg:row-start-2 xl:row-start-auto rounded-xl md:rounded-none shadow-[0_0px_30px_0px_rgba(0,0,0,0.1)] md:shadow-none md:aspect-[2/1] md:col-span-2 md:row-span-1 bg-stone-100 w-full overflow-hidden flex justify-center  lg:bg-gradient-to-br lg:from-accent lg:to-secondary xl:bg-stone-100"
        >
          <div className="relative w-full h-full">
            <Image
              src="/events/events-1.jpg"
              fill={true}
              alt="Events photo example"
              className="object-cover shadow-md opacity-100 lg:opacity-20 xl:opacity-100 mix-blend-normal lg:mix-blend-overlay xl:mix-blend-normal"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
