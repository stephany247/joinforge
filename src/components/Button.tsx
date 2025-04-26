import { motion } from "framer-motion";

function Button({ className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`bg-border-gradient size-fit p-0.25 rounded-full flex items-center justify-center ${className}`}
    >
      <a
        href="https://forms.gle/wg1zUTKMKsQf1vJf8"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm md:text-lg bg-fancy-gradient py-3.5 md:py-4 px-4 md:px-8 rounded-full text-center"
      >
        Claim Your Spot [Limited Early Access]
      </a>
    </motion.div>
  );
}

export default Button;
