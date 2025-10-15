"use client";

import dynamic from "next/dynamic";

const KlaroInit = dynamic(() => import("@/components/KlaroInit"), {
  ssr: false,
});

export default function ClientKlaro() {
  return <KlaroInit />;
}
