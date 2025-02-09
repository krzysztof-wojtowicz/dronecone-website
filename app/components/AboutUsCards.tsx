"use client";

// next imports
import Image from "next/image";

import { motion } from "framer-motion";

// icons
import PhotoIcon from "../image/svg/photo.svg";

export default function AboutUsCards() {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 px-10 md:px-36 lg:px-40 my-16 gap-y-20 gap-x-14 items-center">
      {/* FIRST CARD */}
      <div className="relative bg-white rounded-md px-6 py-3 w-full h-min">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, duration: 1 },
          }}
          className="flex flex-col"
        >
          <h3 className="text-center md:text-start">Kim jesteśmy?</h3>
          <p className="mt-3">
            Wojciech i Krzysztof - współzałożyciele firmy DroneCone. Naszą
            ambicją jest dorównanie amerykańskim potentatom w branży usług
            dronowych. Energia i pasja do dronów stanowią naszą siłę napędową.
            Oferujemy usługi najwyższej jakości, oparte na innowacjach i
            profesjonalizmie. Naszym celem jest zadowolenie klientów i zdobycie
            ich zaufania. Do naszej dyspozycji mamy profesjonalny sprzęt,
            umiejętności oraz uprawnienia, pozwalające świadczyć usługi w
            profesjonalny, bezpieczny i legalny sposób.
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
          className="absolute z-10 -rotate-[12deg] rounded-md -top-20 md:-top-28 -left-10 md:-left-36 w-[200px] md:w-[250px] lg:w-[300px] aspect-video"
        >
          <Image
            src="/Mavic3.png"
            alt="Meet us!"
            fill={true}
            className="-rotate-[12deg]"
          />
        </motion.div>
      </div>

      {/* TOGETHER PHOTO, PHOTO TOGETHER */}
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
          initial={{ rotate: 15 }}
          whileInView={{ rotate: 8, transition: { delay: 1.5, duration: 0.5 } }}
          whileHover={{
            rotate: 15,
            transition: { duration: 0.5 },
          }}
          className="bg-stone-100 overflow-hidden absolute z-10 rotate-[8deg] rounded-md top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-32 lg:right-auto w-[250px] md:w-[300px] h-[204px] md:h-[245px]"
        >
          <Image
            src="/About-1.jpg"
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

        <div className=" absolute z-0 rotate-[15deg] rounded-md bg-accent lg:-top-24 left-0 right-0 mx-auto lg:left-32 lg:right-auto w-[250px] md:w-[300px] h-[204px] md:h-[245px]"></div>
      </motion.div>

      {/* WOJCIECH LATA, LATA WOJCIECH */}
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
        className="relative mt-64 lg:mt-0"
      >
        <motion.div
          initial={{ rotate: -15 }}
          whileInView={{
            rotate: -8,
            transition: { delay: 1.5, duration: 0.5 },
          }}
          whileHover={{
            rotate: -15,
            transition: { duration: 0.5 },
          }}
          className="bg-stone-100 overflow-hidden absolute z-10 -rotate-[8deg] rounded-md top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-32 lg:right-auto w-[200px] h-[301px]"
        >
          <Image
            src="/About-2.jpg"
            alt="Drone pilot!"
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

        <div className="absolute z-0 -rotate-[15deg] rounded-md bg-accent top-auto lg:-top-24 left-0 right-0 mx-auto lg:left-32 lg:right-auto w-[200px] h-[301px]"></div>
      </motion.div>

      {/* SECOND CARD */}
      <div className="relative bg-white rounded-md px-6 py-3 w-full h-min mt-72 lg:mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.3, duration: 1 },
          }}
          className="flex flex-col"
        >
          <h3 className="text-center md:text-start">Dlaczego drony?</h3>
          <p className="mt-3">
            Drony otwierają przed nami niezliczone możliwości poznawania świata
            z niecodziennej perspektywy. Dzięki nim możemy pokazać piękną
            okolicę zabudowań, ale również skalę i przebieg wydarzeń wszelkiego
            rodzaju. Ujęcia z lotu ptaka działają na wyobraźnię klientów i
            znacznie podwyższają szansę na sprzedaż nieruchomości. Stanowią też
            świetną pamiątkę z wszelkiego rodzaju imprez - wesela, zawody,
            festyny i pikniki.
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
          whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 1 } }}
          className="absolute z-10 rounded-md -bottom-28 md:-bottom-24 -right-10 md:-right-28 w-[200px] aspect-[1280/1000]"
        >
          <Image src="/Avata.png" alt="Meet us!" fill={true} />
        </motion.div>
      </div>
    </div>
  );
}
