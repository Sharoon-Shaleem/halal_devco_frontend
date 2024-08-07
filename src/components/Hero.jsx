"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  console.log(scrollY)

  const y = useTransform(scrollY, [0, 300], ["0%", "-100%"]);

  return (
    <div ref={ref} className="pb-40">
      <section className="px-8 py-20 pb-44 border rounded-3xl bg-gradient-to-br from-green/30 to-green/10 relative">
        <div className="max-w-xl space-y-8">
          <h1 className="text-4xl lg:text-6xl font-light">
            Shaping the Future of{" "}
            <span className="block bg-primary-gradient bg-clip-text text-transparent font-semibold">
              Halal Investments
            </span>
          </h1>
          <p className="lg:text-lg">
            We provide consultancy on meeting halal product standards,
            propelling Saudi Arabia towards global leadership in the halal
            industry.
          </p>
          <Button
            size="lg"
            className="bg-primary-gradient text-black lg:text-lg">
            Book a Consultant
          </Button>
        </div>
        <motion.div
          className="z-50 absolute top-full rounded-3xl w-full h-full overflow-hidden flex justify-center items-center user-select-none pointer-events-none bg-stone-900"
          style={{ y, x: "-50%", left: "50%" }}>
          <Image
            src="/logo.svg"
            alt="Halal DevCo. logo"
            width={180}
            height={37}
            className="absolute top-5 left-5"
            priority
          />
          <video
            src="/video.mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            muted
            loop></video>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
