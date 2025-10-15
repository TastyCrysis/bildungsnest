import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center pt-6 px-14 text-lg">
      <Image
        src="/Logo-small.jpg"
        alt="logo"
        width={50}
        height={50}
        className="bg-[#fbefd9] rounded-full"
      />
      <Link
        href="mailto:info@bildungsnest-eurasburg.de"
        className="cursor-pointer"
      >
        Kontakt
      </Link>
    </div>
  );
}
