import heroImage from "../assets/hero-image.jpg";
import Button from "./Button";
import RadialGlow from "./RadialGlow";

function Hero() {
  return (
    <section className="px-6 flex flex-col items-center justify-center md:items-start gap-6 sm:gap-4">
      <h2 className="text-sm md:text-2xl font-light text-center md:text-left md:-mb-16 w-8/10 sm:w-full">
        Africa’s martial arts fastest growing fitness Chain..
      </h2>
      <div className="space-y-4 relative z-10">
        <h1 className="font-etna text-8xl md:text-[12rem] lg:text-[14rem] tracking-[2%] text-gradient-custom inline-block">
          FORGE
        </h1>
        <h2 className="sm:text-center md:text-left md:text-2xl">
          24/7 Access Walk-in Fighting Gym <br />
          📍Lagos & Abuja
        </h2>
      </div>
      <Button className="my-6 md:mt-2" />
      <RadialGlow className="top-1/4 sm:top-1/5 md:right-8" />

      <img src={heroImage} alt="Boxer" className="rounded-2xl md:max-h-8/10"></img>
    </section>
  );
}

export default Hero;
