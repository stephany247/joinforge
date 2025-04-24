import { Icon } from "@iconify/react";
import Button from "./Button";
import RadialGlow from "./RadialGlow";
import { motion } from "framer-motion";
import FadeIn from "./FadeInText";
import FadeInText from "./FadeInText";

const features = [
  {
    icon: "hugeicons:gymnastic",
    title: "WALK-IN FIGHTING GYM",
  },
  {
    icon: "hugeicons:game",
    title: "GAMES & TOURNAMENTS",
  },
  {
    icon: "game-icons:high-kick",
    title: "FORGEKIDS (SELF DEFENSE AND BELTS FOR KIDS)",
  },
  {
    icon: "fluent:people-community-48-regular",
    title: "EXCLUSIVE COMMUNITY & VIRAL CHALLANGES",
  },
];

const highlights = [
  { imageUrl: "/images/punching-bag.jpg", title: "Punching Bag" },
  { imageUrl: "/images/boxing-ring.jpg", title: "Boxing Ring" },
  { imageUrl: "/images/mma-cage.jpg", title: "MMA Cage" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.5, // 👈 1s between each item
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const highlightItem = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.6 } },
};

function Highlights() {
  return (
    <section className="relative px-6 flex flex-col items-center justify-center gap-8">
      <FadeInText className="text-center sm:max-w-8/10 md:max-w-xl mb-10 md:my-12 leading-6 md:leading-10">
        <q className="font-etna text-2xl md:text-4xl">
          If you don't have the capability to cause harm,{" "}
          <span className="text-green">
            you're not peaceful. You're only harmless
          </span>
          .
        </q>
      </FadeInText>

      {/* features section  */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-6 md:gap-8 md:max-w-9/10"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={listItem}
            className="flex items-center gap-4"
          >
            {/* Fade the icon in slightly after the text */}
            <motion.div
              initial={{ opacity: 0.4, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.5, duration: 0.4 }} // fade after the text
              className="bg-green p-3 rounded-lg text-white shrink-0"
            >
              <Icon
                icon={feature.icon}
                width={32}
                height={32}
                className="text-black"
              />
            </motion.div>
            <h4 className="text-lg md:text-xl font-light font-geist bg-clip-text text-transparent bg-[linear-gradient(163.73deg,_#FFFFFF_-53.91%,_rgba(255,_255,_255,_0.2)_144.68%)]">
              {feature.title}
            </h4>
          </motion.li>
        ))}
        <RadialGlow className="top-1/12 lg:top-2/12 left-1/2 -translate-1/2 md:left-0 md:-translate-1/5" />
      </motion.ul>
      <Button className="md:mt-8" />

      {/* highlights section  */}
      <motion.div
        className="grid gap-3 md:gap-4 grid-cols-2 md:grid-cols-3 w-full mt-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {highlights.map((highlight, index) => {
          // Dynamically add the background image class based on the index
          const bgClass =
            index === 0
              ? "bg-[url(/images/punching-bag.jpg)]"
              : index === 1
              ? "bg-[url(/images/boxing-ring.jpg)]"
              : "bg-[url(/images/mma-cage.jpg)]";

          return (
            <motion.div
              key={index}
              variants={highlightItem}
              className={`relative bg-cover bg-center h-60 md:h-100 w-full rounded-lg md:rounded-2xl ${bgClass} ${
                index === 2
                  ? "col-span-2 col-start-1 col-end-3 md:col-span-1"
                  : ""
              }`}
            >
              <p className="text-black bg-green text-center font-etna pb-2 sm:pb-3 sm:pt-1 w-9/10 sm:max-w-8/10 md:max-w-full rounded-full absolute bottom-2 left-1/2 -translate-x-1/2">
                {highlight.title}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
      <FadeInText className="font-brushKing uppercase leading-10 sm:leading-12 md:leading-16 text-center my-6 md:my-16 sm:text-2xl sm:max-w-sm md:max-w-2xl">
        The <span className="text-red"> pain</span> you feel today is the{" "}
        <span className="text-green">strength</span> you feel tomorrow
      </FadeInText>
    </section>
  );
}

export default Highlights;
