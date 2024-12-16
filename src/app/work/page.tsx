import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center min-h-full">
      <div className="flex md:flex-row flex-col items-center p-10 gap-10 max-w-5xl">
        <div className="min-h-64 gap-4 flex flex-col ">
          <h2 className="font-sono uppercase text-3xl font-[500]">
            [Project 1]
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            molestiae, in, vel assumenda a eveniet eius ex non veniam officiis
            doloremque est accusantium! Nihil blanditiis maxime veritatis nulla
            corporis minima!
          </p>
          <Link href={"/work/project-1"}>
            <Button
              type={"button"}
              variant={"primary"}
              label={"View Case Study"}
            ></Button>
          </Link>
        </div>
        <div className="min-h-64 gap-4 flex flex-col ">
          <h2 className="font-sono uppercase text-3xl font-[500]">
            [Project 2]
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            molestiae, in, vel assumenda a eveniet eius ex non veniam officiis
            doloremque est accusantium! Nihil blanditiis maxime veritatis nulla
            corporis minima!
          </p>
          <Link href={"/work/project-2"}>
            <Button
              type={"button"}
              variant={"primary"}
              label={"View Case Study"}
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
