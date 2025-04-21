import { Icon } from "@iconify/react";
import Button from "./Button";
import RadialGlow from "./RadialGlow";

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

function Highlights() {
  return (
    <section className="relative px-6 flex flex-col items-center justify-center gap-8">
      <q className="font-etna text-2xl md:text-4xl text-center mb-10 md:my-12 leading-6 md:leading-10 sm:max-w-8/10">
        If you don't have the capability to cause harm,{" "}
        <span className="text-green">
          you're not peaceful. You're only harmless
        </span>
        .
      </q>
      {/* features section  */}
      <ul className="grid gap-6 md:grid-cols-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-4">
            <div className="bg-green p-3 rounded-lg text-white">
              <Icon
                icon={feature.icon}
                width={32}
                height={32}
                className="text-black"
              />
            </div>
            <h4 className="text-lg font-light font-geist bg-clip-text text-transparent bg-[linear-gradient(163.73deg,_#FFFFFF_-53.91%,_rgba(255,_255,_255,_0.2)_144.68%)]">
              {feature.title}
            </h4>
          </li>
        ))}
        <RadialGlow className="top-1/12 left-1/2 -translate-1/2 md:left-0 md:-translate-1/5" />
      </ul>
      <Button className="md:mt-8" />

      {/* highlights section  */}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-3 w-full mt-12">
        {highlights.map((highlight, index) => {
          // Dynamically add the background image class based on the index
          const bgClass =
            index === 0
              ? "bg-[url(/images/punching-bag.jpg)]"
              : index === 1
              ? "bg-[url(/images/boxing-ring.jpg)]"
              : "bg-[url(/images/mma-cage.jpg)]";

          return (
            <div
              key={index}
              className={`relative bg-cover bg-center h-60 md:h-92 w-full rounded-lg ${bgClass} ${
                index === 2 ? "col-span-2 col-start-1 col-end-3 md:col-span-1" : ""
              }`}
              // style={{ backgroundImage: `url(${highlight.imageUrl})` }}
            >
              <p className="text-black bg-green text-center font-etna pb-2 sm:pb-3 sm:pt-1 w-9/10 sm:max-w-8/10 rounded-full absolute bottom-2 left-1/2 -translate-x-1/2">
                {highlight.title}
              </p>
            </div>
          );
        })}
      </div>
      <h2 className="font-brushKing uppercase leading-10 sm:leading-12 text-center my-6 sm:text-2xl sm:max-w-sm md:max-w-2xl">
        The <span className="text-red"> pain</span> you feel today is the{" "}
        <span className="text-green">strength</span> you feel tomorrow
      </h2>
    </section>
  );
}

export default Highlights;
