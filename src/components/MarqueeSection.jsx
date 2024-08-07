import Image from "next/image";
import Marquee from "./magicui/marquee";

const MarqueeSection = () => {
  return (
    <Marquee>
      <div className="w-[900px] h-72 grid grid-cols-12 grid-rows-3 gap-2 *:rounded-xl">
        <div className="col-span-4 row-span-3 overflow-hidden relative">
          <Image
            src="/image.jpeg"
            className="w-full h-full object-cover object-center"
            layout="fill"
            alt="Image"
          />
          <div
            aria-hidden
            className="absolute inset-0 h-full w-full bg-black/50"
          />
        </div>
        <div className="relative col-span-4 row-span-3 bg-blue-500 overflow-hidden">
          <Image
            src="/image.jpeg"
            className="w-full h-full object-cover object-center"
            layout="fill"
            alt="Image"
          />
          <div
            aria-hidden
            className="absolute inset-0 h-full w-full bg-black/50"
          />
        </div>
        <div className="relative row-span-2 col-span-4 bg-primary-gradient overflow-hidden flex flex-col justify-center items-center text-center text-white">
          <div className="text-3xl font-bold">$ 2.8 Tn</div>
          <p>Market Size by 2025</p>
        </div>
        <div className="relative p-3 col-span-4 bg-green text-white overflow-hidden flex justify-center items-center">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold">80%</div>
            <div className="flex-1 text-sm">
              OIC Consumer Prefer <span>Saudi Products</span>
            </div>
          </div>
        </div>
      </div>
    </Marquee>
  );
};

export default MarqueeSection;
