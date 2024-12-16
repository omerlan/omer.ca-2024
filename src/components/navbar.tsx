import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full bg-fg flex justify-center">
      <div className="flex justify-between items-center px-10 py-4 !text-oPrimary text-2xl font-sono uppercase font-[500] w-full max-w-5xl">
        {/* <h1 className="flex flex-col">
          <span>Omer</span>
          <span>Landau</span>
        </h1> */}
        <h1>
          <Link href="/">Omer Landau</Link>
        </h1>
        <ul className="flex gap-4">
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
