"use client";

// next imports
import Image from "next/image";

// icons
import Facebook from "../image/svg/facebook.svg";
import Youtube from "../image/svg/youtube.svg";
import Instagram from "../image/svg/instagram.svg";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex justify-center w-screen overflow-hidden"
    >
      <div className="flex flex-col mt-20 mb-40 divide-y-2 divide-stone-200 px-5 md:px-0 w-full md:w-4/5 lg:w-3/5 items-center justify-center">
        {/* ROW 1 - SOCIAL MEDIA */}
        <div className="flex w-full justify-between items-center py-10">
          <div>SocialMedia</div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-end md:items-center">
            <div className="nav-link">
              <a
                href="https://www.youtube.com/@DroneCone"
                target="_blank"
                className="flex"
              >
                Youtube
                <Image src={Youtube} width={25} alt="youtube_icon" />
              </a>
            </div>
            <div className="nav-link">
              <a
                href="https://www.instagram.com/drone__cone/"
                target="_blank"
                className="flex"
              >
                Instagram
                <Image src={Instagram} width={25} alt="instagram_icon" />
              </a>
            </div>
            <div className="nav-link">
              <a
                href="https://www.facebook.com/profile.php?id=61552030593052"
                target="_blank"
                className="flex"
              >
                Facebook
                <Image src={Facebook} width={25} alt="facebook_icon" />
              </a>
            </div>
          </div>
        </div>

        {/* ROW 2 - CONTACT */}
        <div className="flex w-full justify-between items-center py-10">
          <div>Kontakt</div>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-end md:items-center">
            <div>+48 796 248 923</div>
            <div className="nav-link">
              <a href="mailto:kontakt@dronecone.pl" target="_blank">
                kontakt@dronecone.pl
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
