"use client";

import { featureData } from "@/constants";
import FeatureItem from "./FeatureItem";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const FeatureSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="px-8 py-14 space-y-20">
      <div className="space-y-4 lg:pl-16">
        <p>Your Financial Future. The Halal Way</p>
        <h2 className="text-3xl lg:text-6xl text-balance text-dark-green font-light">
          Discover{" "}
          <span className="font-semibold">Investment Opportunities</span>
          <div>
            That Align With{" "}
            <span className="text-green font-semibold">Your Values.</span>
          </div>
        </h2>
      </div>
      <div ref={containerRef} className="relative">
        {featureData.map((feature, index) => (
          <FeatureItem
            key={index}
            feature={feature}
          />
        ))}
        <motion.div
          style={{ scaleY }}
          className="absolute bottom-0 top-0 -left-3 lg:left-[49.7%] translate-x-1/2 w-1.5 bg-green origin-top"
        />
      </div>
    </section>
  );
};

export default FeatureSection;
