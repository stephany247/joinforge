import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function Header() {
  const icons = [
    {
      icon: "hugeicons:instagram",
      href: "https://www.instagram.com/joinforge.hq?igsh=aXZieXZuMW5uNHVm",
    },
    {
      icon: "hugeicons:facebook-01",
      href: "#", // Replace with the Facebook link
    },
    {
      icon: "hugeicons:new-twitter-rectangle",
      href: "https://x.com/joinforge_hq?s=21&t=2UwXgm9psHxQmocbxUcwKw",
    },
  ];

  return (
    <header className="text-lemon-green text-4xl flex place-content-center md:place-content-end gap-4 lg:mx-8">
      {icons.map(({ icon, href }, index) => (
        <motion.a
          key={icon}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={`Visit our ${icon.split(":")[1]} page`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1 + index * 0.2, // 1 second base delay, then stagger by 0.2s
          }}
          viewport={{ once: true, amount: 0.5 }}
          className="size-9 md:size-10 relative z-20 cursor-pointer"
        >
            <Icon icon={icon} />
        </motion.a>
      ))}
    </header>
  );
}

export default Header;
