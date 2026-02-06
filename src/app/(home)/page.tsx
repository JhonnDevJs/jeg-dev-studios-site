// Import hooks


// Import Custom Hooks


// Imports libs
import { getPageFaqs, getPageAssets } from "@/lib/data-service.";

// Import Components

import HomeClient from "./homeClient";

export const revalidate = 3600;

export default async function Home() {
  const faqs = await getPageFaqs("home");
  const assets = await getPageAssets("home");

  return <HomeClient initialFaqs={faqs} assets={assets} />;
}
