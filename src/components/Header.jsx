import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <Image
        src="/Logo.jpg"
        alt="logo"
        width={800}
        height={800}
        className="object-cover"
      />
      <div className="text-center text-3xl font-bold text-[#553906]">
        <p>Gemeinsam für starke Kinder-</p>
        <p>mit Herz und Engagement.</p>
      </div>
      <div className="flex justify-center items-center py-10">
        <Link
          href="/Mitgliedsantrag.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#c08009] text-white text-xl font-bold px-8 py-3 rounded-full cursor-pointer inline-block no-underline hover:bg-[#a06a07] transition-colors"
        >
          Mitglied werden
        </Link>
      </div>
    </div>
  );
}
