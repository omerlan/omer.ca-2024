import Button from "@/components/button";
import Omemoji from "@/components/omemoji";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex md:flex-row flex-col gap-8 justify-center items-center h-full px-10">
      <Omemoji />
      <div className="flex flex-col gap-4">
        <h1 className="flex flex-col font-sono uppercase text-center font-bold xl:text-8xl md:text-7xl sm:text-6xl text-6xl">
          <span className="text-oBlue">
            Designer<span className="text-oPurple">&#x2b;</span>
          </span>
          <span className="text-oRed shadow-xl">Developer</span>
        </h1>
        <p className="xl:text-xl md:text-lg sm:text-md text-sm">
          Hi, I’m Omer. I’m an interaction designer
          <br />
          based in Toronto, Canada.
        </p>
        <div className="flex gap-4">
          <Link href={"/work"}>
            <Button
              type={"button"}
              variant={"primary"}
              label={"Explore case studies"}
            ></Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              type={"button"}
              variant={"secondary"}
              label={"Contact me"}
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
