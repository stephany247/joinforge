import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function Header() {
  const icons = [
    "hugeicons:instagram",
    "hugeicons:facebook-01",
    "hugeicons:new-twitter-rectangle",
  ];

  return (
    <header className="text-lemon-green text-4xl flex place-content-center md:place-content-end gap-4 lg:mx-8">
      {icons.map((icon, index) => (
        <motion.span
          key={icon}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1 + index * 0.2, // 1 second base delay, then stagger by 0.2s
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Icon icon={icon} />
        </motion.span>
      ))}
    </header>
  );
}

export default Header;
