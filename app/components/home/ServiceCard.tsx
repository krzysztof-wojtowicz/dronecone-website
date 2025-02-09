"use client";
import { motion } from "framer-motion";

// next imports
import Image from "next/image";
import Link from "next/link";

// icons
import PhotoIcon from "../../image/svg/photo.svg";

interface Props {
  icon: any;
  iconAlt: string;
  title: string;
  description: string;
  link: string;
  photoPath: string;
  photoAlt: string;
}

export default function ServiceCard(props: Props) {
  const { icon, iconAlt, title, description, link, photoPath, photoAlt } =
    props;

  return (
    <div className="bg-white rounded-xl px-4 lg:px-6 py-3 relative shadow-[0_0px_50px_0px_rgba(0,0,0,0.1)] h-full">
      <div className="flex flex-col justify-between h-full text-center lg:text-start">
        <Image
          src={icon}
          alt={iconAlt}
          width={60}
          height={60}
          className="absolute -top-5 -left-5 z-10"
        />
        <h3 className="mx-6">{title}</h3>
        <p className="mt-4 mx-3 md:mx-10 lg:mx-4 text-start lg:text-start">
          {description}
          <Link
            href={link}
            className="text-accent underline ms-2 animate-pulse duration-1000"
          >
            <span>Dowiedz się więcej!</span>
          </Link>
        </p>
        <div className="flex justify-center my-4 w-full">
          <div className="relative">
            <div className="w-[200px] md:w-[450px] lg:w-[375px] xl:w-[500px] aspect-video absolute translate-x-3 translate-y-3 z-0 bg-accent rounded-md "></div>
            <motion.div
              initial={{ x: 12, y: 12 }}
              whileInView={{
                x: 0,
                y: 0,
                transition: { delay: 1, duration: 0.5 },
              }}
              whileHover={{
                x: 12,
                y: 12,
                transition: { delay: 0, duration: 0.3 },
              }}
              className="rounded-md z-10 relative w-[200px] md:w-[450px] lg:w-[375px] xl:w-[500px] aspect-video overflow-hidden bg-stone-100"
            >
              <Image
                src={photoPath}
                alt={photoAlt}
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
          </div>
        </div>
      </div>
    </div>
  );
}
