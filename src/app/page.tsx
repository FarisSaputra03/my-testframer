"use client";
import Image from "next/image";
import Hero from "@/components/hero";
import Static from "@/components/static";
import Team from "@/components/team";
import Test from "@/components/test";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Section>
        <Hero />
      </Section>
      <Section>
        <Static />
      </Section>
      <Team />
      <Test />
    </>
  );
}
