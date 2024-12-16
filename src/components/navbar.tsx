import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full bg-fg border-b border-oPurple flex justify-center fixed">
      <div className="flex justify-between items-center px-10 py-4 !text-oPrimary text-2xl font-sono uppercase w-full max-w-5xl">
        <h1 className="font-[900]">
          <Link href="/"><span className="text-oBlue">Omer</span><span className="text-oRed">Landau</span></Link>
        </h1>
        <ul className="flex gap-4 font-[500]">
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
