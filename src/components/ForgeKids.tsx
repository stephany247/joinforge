import forgeKids1 from "../assets/forge-kids1.jpg";
import forgeKids2 from "../assets/forge-kids2.jpg";
import FadeIn from "./FadeInText";
import { TypingEffect } from "./typing-effect";

function ForgeKids() {
  return (
    <section className="bg-white text-black p-10 sm:mx-6 rounded-2xl text-center space-y-6">
      <h2 className="font-etna text-5xl">
        Introducing 
        <br className="block sm:hidden"/>
        <TypingEffect text="FORGEKIDS" className="text-green sm:ml-4" />
        {/* <span className="text-green">FORGEKIDS</span> */}
      </h2>
      <p className="font-medium md:font-semibold text-lg sm:text-xl max-w-2xl mx-auto">
        All kids deserve their first black belt. Teach your kids resilience,
        self defense and respect with ForgeKids
      </p>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src={forgeKids1}
          alt="Forge Kids"
          className="rounded-2xl md:rounded-3xl w-full h-80 md:h-full object-cover object-center"
        ></img>
        <div className="h-100 md:h-full overflow-hidden rounded-2xl md:rounded-3xl md:col-span-2">
          <img
            src={forgeKids2}
            alt="Forge Kids"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

export default ForgeKids;
