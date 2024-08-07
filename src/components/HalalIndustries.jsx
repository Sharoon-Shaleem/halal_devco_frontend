"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { halalIndustries, MAX_INDUSTRIES } from "@/constants";

const HalalIndustries = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    if (index < halalIndustries.industries.length - 1) {
      setActiveIndex((index + 1) % halalIndustries.industries.length);
    }
  };

  return (
    <section className="space-y-20 px-14 py-20 rounded-3xl bg-gradient-to-br from-green/30 to-green/10">
      <div className="space-y-4">
        <p className="text-lg">{halalIndustries.purpose}</p>
        <h2 className="text-3xl lg:text-6xl text-balance text-dark-green font-semibold">
          {halalIndustries.title.main}{" "}
          <span className="font-light">{halalIndustries.title.sub}</span>
          <span className="block text-green font-semibold">
            {halalIndustries.title.highlight}
          </span>
        </h2>
      </div>

      <div className="relative">
        <AnimatePresence>
          {halalIndustries.industries.slice(0, MAX_INDUSTRIES).map((industry, index) => (
            <motion.div
              key={industry.name}
              className="rounded-2xl overflow-hidden relative cursor-pointer"
              style={{ transformOrigin: "center" }}
              initial={{ opacity: 1, height: 384, marginBottom: 32 }}
              animate={{
                scale: activeIndex > index ? 0 : 1,
                height: activeIndex > index ? 0 : 384,
                zIndex: activeIndex > index ? 1 : 0,
                marginBottom: activeIndex > index ? 0 : 32,
              }}
              exit={{ scale: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => handleClick(index)}>
              <Image
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover object-center"
                fill
              />
              <div className="w-full absolute inset-0 bg-primary-gradient opacity-50" />
              <div className="max-w-5xl p-6 absolute bottom-3 space-y-6 text-white">
                <h3 className="text-3xl lg:text-4xl font-semibold">
                  {industry.name}
                </h3>
                <p className="text-sm lg:text-lg">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        <p>{halalIndustries.description}</p>
        <Button className="bg-primary-gradient">{halalIndustries.buttonText}</Button>
      </div>
    </section>
  );
};

export default HalalIndustries;
