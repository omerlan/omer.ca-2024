import Omemoji from "@/components/omemoji";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col gap-8 justify-center items-center h-full px-10">
      <Omemoji />
      <div className="flex flex-col">
        <h1 className="flex flex-col font-sono uppercase text-center font-bold xl:text-8xl md:text-7xl sm:text-6xl text-6xl">
          <span className="text-oBlue">
            Designer<span className="text-oPurple">&#x2b;</span>
          </span>
          <span className="text-oRed">Developer</span>
        </h1>
        <p className="xl:text-xl md:text-lg sm:text-md text-sm">
          Hi, I’m Omer. I’m an interaction designer
          <br />
          based in Toronto, Canada.
        </p>
      </div>
    </div>
  );
}
