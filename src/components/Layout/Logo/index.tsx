// Imports Hooks

import Image from "next/image";

// Imports Custom Hooks
import { getLogos } from "@/lib/data-service.";

export default async function Logo() {
  const logo = await getLogos()
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600 shadow-lg shadow-primary/20">
      <Image src={logo.isotipo} width={"35"} height={"35"} className="object-contain p-1 rounded" alt="logo de la agencia JEG Dev Studios" />
    </div>
  );
}