import Button from "./Button";
import { Icon } from "@iconify/react";
import RadialGlow from "./RadialGlow";
import { motion } from "framer-motion";
import FadeInText from "./FadeInText";


const forgeComparison = [
  {
    title: "Regular GYM (LIFT)",
    customStyle:
      "border border-border backdrop-blur-lg bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.16)_100%)]",
    items: [
      "Lose 5kg in 4months",
      "When you stop working out, you lose your strength and muscles gradually.",
      "Aesthetics, people's opinion about your looks, harmless e.t.c",
      "1X Cardio health, improved endurance, energy, fair locomotion.",
      "No self defence skill, zero fighting experience.",
    ],
    showCheck: false,
    wrapperClass: "p-[0.5px] md:p-0.25 rounded-2xl z-10 w-full",
    innerClass:
      "border border-border backdrop-blur-lg bg-[radial-gradient(146.13%_118.42%_at_50%_-15.5%,rgba(255,255,255,0)_0%,rgba(255,255,255,0.16)_100%)] rounded-2xl p-6 w-full h-full",
  },
  {
    title: "FORGE [MARTIAL ARTS]",
    items: [
      "Lose 5kg in 1month [4X weight loss guaranteed]",
      "Even when you stop, its a lifetime skill you can't lose.",
      "Self confidence coming from within. Knowing you can harm somebody and still refraining.",
      "4X Cardio health, improved endurance, energy, great locomotion.",
      "Great self defence skill, great fighting experience.",
    ],
    showCheck: true,
    wrapperClass:
      "bg-border-gradient p-[0.5px] md:p-0.25 rounded-2xl z-10 w-full",
    innerClass: "bg-fancy-gradient rounded-2xl p-6 w-full",
  },
];

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};


function WhyForge() {
  return (
    <section className="relative p-5 flex flex-col items-center justify-center gap-6 sm:max-w-10/10 md:max-w-4xl mx-auto">
      <Button />
      <FadeInText className="text-center my-8 md:my-16">
        <q className="font-aArbeiBerry text-3xl sm:text-4xl md:text-5xl ">
          If you're looking for{" "}
          <span className="text-green">a sign, this is </span>it.
        </q>
      </FadeInText>
      <RadialGlow className="md:top-1/5 z-0" />
      <h2 className="font-etna text-4xl md:text-5xl lg:text-6xl md:mb-6 z-10">
        Why Forge
      </h2>
      <div className="flex flex-col md:flex-row gap-6 mx-auto">
        {forgeComparison.map((section, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl w-full ${section.wrapperClass}`}
          >
            <div className={section.innerClass}>
              <h3 className="text-xl font-etna mb-6">{section.title}</h3>
              <ul className="space-y-5 list-disc pl-5">
                {section.items.map((item, idx) => (
                  <motion.li
                  key={idx}
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={listItemVariants}
                  className="text-sm md:text-xl font-light">
                    {item}
                    {section.showCheck && (
                      <Icon
                        icon="rivet-icons:check"
                        className="text-green font-extrabold text-xl ml-2 inline"
                      />
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <Button className="mt-8" />
    </section>
  );
}

export default WhyForge;
