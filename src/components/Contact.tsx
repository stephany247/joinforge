import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const contactCol1 = [
  {
    icon: "fluent:mail-48-regular",
    text: "joinforge.hq@gmail.com",
    href: "mailto:joinforge.hq@gmail.com", // Email link
  },
  {
    icon: "mdi:phone-outline",
    text: "+234 807 8205 271",
    href: "tel:+2348078205271", // Phone link
  },
];

const contactCol2 = [
  {
    icon: "hugeicons:instagram",
    text: "joinforge.hq",
    href: "https://www.instagram.com/joinforge.hq?igsh=aXZieXZuMW5uNHVm", // Instagram link
  },
  {
    icon: "hugeicons:new-twitter-rectangle",
    text: "joinforge_hq",
    href: "https://x.com/joinforge_hq?s=21&t=2UwXgm9psHxQmocbxUcwKw", // Twitter link
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
          <a
            key={index}
            href={item.href}
            className="flex items-center gap-2 md:gap-4 font-light md:text-xl text-wrap"
          >
            <Icon icon={item.icon} className="text-2xl" />
            {item.text}
          </a>
        ))}
      </div>

      {/* Second Column */}
      <div className="space-y-3">
        {contactCol2.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-4 font-light md:text-xl"
          >
            <Icon icon={item.icon} className="text-2xl" />
            {item.text}
          </a>
        ))}
      </div>
    </motion.section>
  );
}

export default Contact;
