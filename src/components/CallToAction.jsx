import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10">
      <p className="md:text-lg">Get in touch</p>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-dark-green">
        <span className="font-semibold">Connect</span> with Us and Let's{" "}
        <span className="block">
          Start a{" "}
          <span className="text-green font-semibold">Conversation!</span>
        </span>
      </h2>
      <Button size="lg" className="bg-primary-gradient self-end">Contact us Now!!</Button>
    </section>
  );
}

export default CallToAction