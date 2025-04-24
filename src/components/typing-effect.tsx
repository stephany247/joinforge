"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";

type TypingEffectProps = {
    text: string;
    className?: string;
  };

export function TypingEffect({ text = "Typing Effect", className = " " }: TypingEffectProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span
      ref={ref}
      className={className}
    //   className="text-xl text-center sm:text-4xl font-bold tracking-widerer md:text-6xl md:leading-[4rem]"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
            {letter}
        </motion.span>
      ))}
    </span>
  );
}
