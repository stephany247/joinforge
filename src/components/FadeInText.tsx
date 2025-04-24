import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type FadeInSectionProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
};

const FadeInText = ({
  children,
  className = "",
  duration = 0.8,
}: FadeInSectionProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.h2>
  );
};
export default FadeInText;