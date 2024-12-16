import Image from "next/image";
import omemoji_light from "../components/images/omemoji-light.png";
import omemoji_dark from "../components/images/omemoji-dark.png";

export default function Omemoji() {
  return (
    <>
      <Image
        priority={true}
        src={omemoji_light}
        className="block dark:hidden"
        style={{
          objectFit: "contain",
        }}
        alt=""
      />
      <Image
        priority={true}
        src={omemoji_dark}
        className="hidden dark:block"
        style={{
          objectFit: "contain",
        }}
        alt=""
      />
    </>
  );
}
