import { Icon } from "@iconify/react";

const contactCol1 = [
  {
    icon: "fluent:mail-48-regular",
    text: "joinforge.hq@gmail.com",
  },
  {
    icon: "mdi:phone-outline",
    text: "+234 807 8205 271",
  },
];

const contactCol2 = [
  {
    icon: "hugeicons:instagram",
    text: "joinforge.hq",
  },
  {
    icon: "hugeicons:new-twitter-rectangle",
    text: "joinforge_hq",
  },
];

function Contact() {
  return (
    <section className="py-8 px-12 m-5 flex flex-col md:flex-row md:justify-around gap-6 rounded-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 sm:max-w-8/10 sm:mx-auto md:max-w-full">
      <h1 className="font-etna text-2xl md:text-4xl text-center">Contact Us:</h1>
      {/* First Column */}
      <div className="space-y-3">
        {contactCol1.map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            <Icon icon={item.icon} className="text-2xl" />
            <a href="#" className="font-light md:text-xl">
              {item.text}
            </a>
          </div>
        ))}
      </div>

      {/* Second Column */}
      <div className="space-y-3">
        {contactCol2.map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            <Icon icon={item.icon} className="text-2xl" />
            <a href="#" className="font-light md:text-xl">
              {item.text}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
