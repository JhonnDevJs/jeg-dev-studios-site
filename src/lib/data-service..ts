import { supabase } from "./supabase";

export interface Faq {
  question: string;
  answer: string;
}

export async function getPageFaqs(slug: string): Promise<Faq[]> {
  const { data, error } = await supabase
    .from("faqs")
    .select("question, answer")
    .eq("page_slug", slug)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Error fetching FAQS: ", error);
    return [];
  }
  return (data as Faq[]) || [];
}

export interface SiteAsset {
  section_key: string;
  image_url: string;
  alt_text: string;
}

export async function getPageAssets(slug: string) {
  const { data, error } = await supabase
    .from("site_assets")
    .select("section_key, image_url, alt_text")
    .eq("page_slug", slug);

  if (error) {
    console.error("Error fetching Assets: ", error);
    return {};
  }

  const assetsMap: Record<string, SiteAsset> = {};
  (data || []).forEach((item) => {
    assetsMap[item.section_key] = item;
  });

  return assetsMap;
}

export interface Logo {
  key_name: string;
  url: string;
}

export async function getLogos() {
  const { data, error } = await supabase
    .from("logos")
    .select("key_name, url");

  if (error) {
    console.error("Error fetching logos:", error);
    return {};
  }

  // Convertimos el array a un objeto para acceso rápido: logos.isotipo
  const logosMap: Record<string, string> = {};
  (data || []).forEach((item) => {
    logosMap[item.key_name] = item.url;
  });
  
  return logosMap;
}