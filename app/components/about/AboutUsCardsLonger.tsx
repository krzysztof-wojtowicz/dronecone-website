"use client";

// next imports
import Image from "next/image";

import { motion } from "framer-motion";

// icons
import PhotoIcon from "../../image/svg/photo.svg";

export default function AboutUsCardsLonger() {
  return (
    <div className="mt-52 md:mt-40 lg:mt-48 w-full grid grid-cols-1 lg:grid-cols-2 px-10 md:px-36 lg:px-40 gap-y-20 gap-x-14 items-center">
      {/* THIRD CARD */}
      <div className="relative bg-white rounded-md px-6 py-3 w-full h-min">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, duration: 1 },
          }}
          className="flex flex-col"
        >
          <h3 className="text-center md:text-start">
            Zamiłowanie do dronów FPV
          </h3>
          <p className="mt-3">
            W ostatnim czasie wchłonął nas świat dronów FPV (First Person View).
            To niewielkie i wyjątkowo zwrotne maszyny, które umożliwiają
            doświadczenie otoczenia w sposób zupełnie niepowtarzalny –
            praktycznie "wcielając się" w drona dzięki specjalnym goglom.
            Korzystając z tej technologii możemy tworzyć filmy zapewniające
            maksimum przeżyć dla odbiorców. Nagrania z drona FPV świetnie
            sprawdzają się we wnętrzach nieruchomości, jak i również przy
            realizacji wydarzeń sportowych. To nie tylko doskonała zabawa, ale
            także szansa na uchwycenie niepowtarzalnych, artystycznych ujęć.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            rotate: 0,
            transition: { delay: 0.2, duration: 0.8 },
          }}
          whileHover={{ scale: 1.2, rotate: -10, transition: { duration: 1 } }}
          className="absolute z-10 -rotate-[15deg] rounded-md -top-28 md:-top-28 -left-10 md:-left-28 w-[150px] lg:w-[200px] h-[75px] lg:h-[100px]"
        >
          <Image src="/Cinelog25.png" alt="Meet us!" fill={true} />
        </motion.div>
      </div>

      {/* FPV PHOTO */}
      <motion.div
        initial={{
          opacity: 0,
          x: 200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 1 },
        }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative"
      >
        <motion.div
          initial={{ rotate: 18 }}
          whileInView={{
            rotate: 10,
            transition: { delay: 1.5, duration: 0.5 },
          }}
          whileHover={{
            rotate: 18,
            transition: { duration: 0.5 },
          }}
          className="bg-stone-100 overflow-hidden absolute z-10 rotate-[10deg] rounded-md top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-44 lg:right-auto w-[200px] h-[266px] aspect-[4/3]"
        >
          <Image
            src="/About-3.jpg"
            alt="Meet us!"
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

        <div className="absolute z-0 rotate-[18deg] rounded-md bg-accent top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-44 lg:right-auto w-[200px] h-[266px]"></div>
      </motion.div>

      {/* TRAVELS */}
      <motion.div
        initial={{
          opacity: 0,
          x: -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { delay: 0.2, duration: 1 },
        }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative mt-72 lg:mt-0"
      >
        <motion.div
          initial={{ rotate: -13 }}
          whileInView={{
            rotate: -8,
            transition: { delay: 1.5, duration: 0.5 },
          }}
          whileHover={{
            rotate: -13,
            transition: { duration: 0.5 },
          }}
          className="grid grid-cols-2 justify-center rounded-md overflow-hidden aspect-video absolute z-10 -rotate-[8deg] top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-0 lg:right-auto w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]"
        >
          <div className="w-full h-full relative bg-stone-100">
            <Image
              src="/artistic/artistic-6.jpg"
              alt="Drone pilot!"
              fill={true}
              className="object-cover z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </div>
          <div className="w-full h-full relative bg-stone-100">
            <Image
              src="/artistic/artistic-10.jpg"
              alt="Drone pilot!"
              fill={true}
              className="object-cover z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </div>
          <div className="w-full h-full relative bg-stone-100">
            <Image
              src="/artistic/artistic-13.jpg"
              alt="Drone pilot!"
              fill={true}
              className="object-cover z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </div>
          <div className="w-full h-full relative bg-stone-100">
            <Image
              src="/artistic/artistic-20.jpg"
              alt="Drone pilot!"
              fill={true}
              className="object-cover z-30"
            />
            <div className="relative w-full h-full opacity-30">
              <Image
                src={PhotoIcon}
                width={50}
                alt="Photo icon, placeholder"
                className="absolute right-0 left-0 mx-auto top-0 bottom-0 my-auto"
              />
            </div>
          </div>
        </motion.div>

        <div className="absolute z-0 -rotate-[13deg] rounded-md bg-accent top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-0 lg:right-auto aspect-video w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]"></div>
      </motion.div>

      {/* FOURTH CARD */}
      <div className="relative bg-white rounded-md px-6 py-3 w-full h-min mt-48 lg:mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, duration: 1 },
          }}
          className="flex flex-col"
        >
          <h3 className="text-center md:text-start">Podróże i drony</h3>
          <p className="mt-3">
            Jako zapaleni fani biegów na orientację, nierzadko mamy okazję do
            odkrywania świata poprzez wyjazdy i podróże. W takich chwilach drony
            stanowią idealne uzupełnienie. Pozwalają rozszerzyć perspektywę na
            piękno otaczającej natury, co często prowadzi do zebrania
            niezapomnianego materiału wideo, lub zdjęć, którymi możemy później
            dzielić się z innymi.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 15 }}
          whileInView={{
            scale: 1,
            opacity: 1,
            rotate: 15,
            transition: { delay: 0.2, duration: 0.8 },
          }}
          whileHover={{ scale: 1.2, rotate: 30, transition: { duration: 1 } }}
          className="absolute z-10 rounded-md -bottom-32 md:-bottom-32 -right-10 md:-right-28 w-[200px] aspect-[1280/1000]"
        >
          <Image src="/Mini3Pro.png" alt="Meet us!" fill={true} />
        </motion.div>
      </div>
    </div>
  );
}
