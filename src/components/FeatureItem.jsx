import HexagonImage from "@/components/HexagonImage";
import { HexagonIcon } from "lucide-react";

const FeatureItem = ({ feature }) => {
  if (!feature) return null;

  return (
    <div
      className={`flex flex-col items-center lg:flex-row even:lg:flex-row-reverse gap-8 relative pt-16 pb-24`}
    >
      {/* Timeline part */}
      <div className="absolute -left-2 lg:left-1/2 -translate-x-1/2 h-full top-0 bottom-0">
        <div
          className="w-1 h-full border-dashed border-l-2  border-gray-300"
        />
        <div
          className="absolute w-1 bg-mehdi"
          style={{ originY: 0 }}
        />
      </div>
      <div className="absolute -left-2 lg:left-1/2 transform -translate-x-1/2 top-0 -translate-y-1/2 z-10">
        <HexagonIcon
          className="w-12 h-12 fill-mehdi text-white"
        />
      </div>
      {/*----------- Timeline part -----------*/}

      <div className="lg:w-1/2 flex justify-center items-center even:order-2">
        <HexagonImage className="w-2/3" src={feature.image} />
      </div>
      <div className="lg:w-1/2 space-y-8 odd:order-2 flex justify-center items-center px-10">
        <div className="space-y-8">
          <h3 className="text-3xl lg:text-4xl font-light">
            {feature.title.split(" ").map((word, i, arr) =>
              i >= arr.length - 3 ? (
                <span key={i} className="text-green font-semibold">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h3>
          <p>{feature.description}</p>
          <div className="flex flex-wrap gap-4">
            {feature.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-2 items-center">
                <HexagonIcon
                  className="fill-mehdi text-mehdi"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
