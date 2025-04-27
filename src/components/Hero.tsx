import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.jpg";
import Button from "./Button";
import RadialGlow from "./RadialGlow";
import { StaggeredFade } from "./StaggeredText";
import FadeInText from "./FadeInText";

function Hero() {
  return (
    <section className="relative px-6 flex flex-col items-center justify-center md:items-start lg:items-center xl:items-start gap-6 sm:gap-4 lg:text-center mx-auto lg:mx-8">
      <FadeInText className="relative z-10 text-sm md:text-xl font-light text-center md:text-left md:-mb-16 lg:ml-10 xl:ml-2 w-8/10 sm:w-full">
        Africa’s{" "}
        <span className="relative">
          martial arts{" "}
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                delay: 1.7,
                duration: 2.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        fastest growing fitness Chain..
      </FadeInText>
      <div className="space-y-4 relative z-0">
        <StaggeredFade
          text="FORGE"
          className="font-etna text-[7rem] sm:text-[12rem] md:text-[14rem lg:text-[20rem] whitespace-nowrap tracking-[0.02em] lg:tracking-[0.04em] lg:py-4 lg:pt-2 -mt-8 md:-mt-12 md:-mb-4 lg:-mt-24 lg:-mb-16 xl:-mt-12 xl:-mb-8 mx-auto lg:text-center text-gradient-custom"
        />
        <FadeInText className="sm:text-center md:text-left md:text-xl ml-1 lg:ml-2">
          24/7 Access Walk-in Fighting Gym <br />
          📍Lagos & Abuja
        </FadeInText>
      </div>
      <Button className="my-6 lg:mb-8 md:mt-2 lg:self-start lg:ml-2" />
      <RadialGlow className="top-1/6 sm:top-1/8 md:top-1/12 md:right-0" />
      <motion.img
        src={heroImage}
        alt="Boxer"
        className="rounded-2xl md:max-h-8/10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
    </section>
  );
}

export default Hero;
