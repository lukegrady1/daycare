"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];
  return (
    <Comp
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  delayStep = 0.06,
  className,
}: {
  children: ReactNode[];
  delayStep?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((c, i) => (
        <FadeIn key={i} delay={i * delayStep}>
          {c}
        </FadeIn>
      ))}
    </div>
  );
}
