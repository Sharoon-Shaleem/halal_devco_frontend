import { MAX_NEWS_ITEMS, newsItems } from "@/constants";

const NewsFeed = () => {
  return (
    <section className="space-y-20">
      <div className="lg:ml-[26%] md:ml-[20%] space-y-4">
        <p className="text-lg">News & Media</p>
        <h2 className=" text-3xl lg:text-6xl text-balance text-dark-green font-semibold">
          Championing <span className="font-light">Saudi Arabia's</span>
          <span className="block text-green font-semibold">
            Halal Industries
          </span>
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-8 divide-y-2 divide-mehdi">
        {newsItems.slice(0, MAX_NEWS_ITEMS).map((item, index) => (
          <div
            key={item.id ?? index}
            className="pt-14 flex flex-col md:flex-row gap-6 md:gap-28">
            <div className="space-y-2 text-center">
              <div className="text-6xl lg:text-7xl font-bold">
                {String(new Date(item.date).getDate()).padStart(2, "0")}{" "}
              </div>
              <p className="text-gray-400">
                {new Date(item.date).toLocaleString("default", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl lg:text-3xl font-semibold">
                {item.title}
              </h3>
              <p className="text-base lg:text-lg">{item.description}</p>
              <div className="text-gray-400">
                Publish Date: {item.publishDate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
