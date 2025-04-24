import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-8 px-12 md:px-6 m-5 flex flex-col md:flex-row md:justify-around md:items-center gap-6 md:gap-2 rounded-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 sm:mx-6 lg:mx-6"
    >
      <h1 className="font-etna text-2xl md:text-4xl text-center">
        Contact Us:
      </h1>
      {/* First Column */}
      <div className="space-y-3">
        {contactCol1.map((item, index) => (
          <div key={index} className="flex items-center gap-2 md:gap-4">
            <Icon icon={item.icon} className="text-2xl" />
            <a href="#" className="font-light md:text-xl text-wrap">
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
    </motion.section>
  );
}

export default Contact;
