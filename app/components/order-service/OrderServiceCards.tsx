"use client";
import Image from "next/image";

import { motion } from "framer-motion";

// icons
import FormIcon from "../../image/svg/form.svg";
import PhoneIcon from "../../image/svg/phone.svg";
import MailIcon from "../../image/svg/email.svg";
import MapIcon from "../../image/svg/map.svg";
import RealEstateIcon from "../../image/svg/real_estate.svg";
import EventsIcon from "../../image/svg/events.svg";

export default function OrderServiceCards() {
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
    <div className="w-full flex flex-col items-center">
      <div className="w-full px-8 lg:px-32 flex flex-col gap-6 lg:gap-12 items-center py-20 max-w-7xl">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="text-center"
        >
          Dodatkowe informacje
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={list}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-fit"
        >
          {/* CARD 1 */}
          <motion.div variants={item} className="order-card">
            <div className="flex gap-6 md:gap-10">
              <Image src={RealEstateIcon} alt="Form icon" width={75} />
              <Image src={EventsIcon} alt="Form icon" width={75} />
            </div>

            <p className="px-2 lg:px-10 text-center">
              Szczegóły dostępnych usług mozesz sprawdzić na podstronie
              "Usługi". Jeśli potrzebujesz drona w innym celu - napisz do nas,
              jesteśmy chętni do każdej współpracy i realizacji Twoich planów.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div variants={item} className="order-card">
            <Image src={MapIcon} alt="Form icon" width={75} />
            <p className="px-2 lg:px-10 text-center">
              Naszą działalność prowadzimy głównie na terenie Warszawy i okolic,
              ale jesteśmy otwarci na ewentualne propozycje z całej Polski.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div variants={item} className="order-card">
            <div className="flex gap-4 md:gap-10 flex-col md:flex-row">
              <div className="flex flex-col gap-2 items-center">
                <Image src={PhoneIcon} alt="Form icon" width={75} />
                <span>+48 796 248 923</span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <Image src={MailIcon} alt="Form icon" width={75} />
                <a
                  href="mailto:kontakt@dronecone.pl"
                  target="_blank"
                  className="nav-link"
                >
                  kontakt@dronecone.pl
                </a>
              </div>
            </div>

            <p className="px-2 lg:px-10 text-center">
              Masz jakieś pytania? Odpowiemy na wszystkie! Po prostu zadzwoń lub
              napisz.
            </p>
          </motion.div>

          {/* CARD 4 */}
          <motion.div variants={item} className="order-card">
            <Image src={FormIcon} alt="Form icon" width={75} />
            <p className="px-2 lg:px-10 text-center">
              Jesteś chętny na współpracę? Wypełnij poniższy formularz, a my
              zwrócimy się do ciebie z indywidualną wyceną i wszystkimi
              szczegółami.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
