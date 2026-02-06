// Import hooks


// Import Custom Hooks


// Imports libs
import { getPageFaqs, getPageAssets } from "@/lib/data-service.";

// Import Components

import BlogSection from "@/components/Blog/BlogSection";
import HomeClient from "./homeClient";

export const revalidate = 3600;

export default async function Home() {
  const faqs = await getPageFaqs("home");
  const assets = await getPageAssets("home");

  return <HomeClient blogSection={<BlogSection/>} initialFaqs={faqs} assets={assets} />;
}
