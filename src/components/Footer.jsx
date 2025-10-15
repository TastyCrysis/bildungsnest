import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="m-10 flex justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/Logo-small.jpg"
          alt="logo"
          width={70}
          height={70}
          className="bg-[#fbefd9] rounded-full"
        />
        <div className="text-center">
          <p className="text-xl font-bold text-[#553906]">Bildungsnest</p>
          <p className="text-lg text-[#553906]">Eurasburg</p>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/imprint">Impressum</Link>
        <Link href="/privacy">Datenschutz</Link>
      </div>
    </div>
  );
}
