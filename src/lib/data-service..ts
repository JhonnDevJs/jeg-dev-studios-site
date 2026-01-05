import { supabase } from "./supabase";

export async function getPageFaqs(slug: string) {
  const { data, error } = await supabase
    .from("faqs")
    .select("question, answer")
    .eq("page_slug", slug)
    .order("sort_order", { ascending: true });
  if (error) {
    console.error("Error fetching FAQS: ", error)
    return [];
  }
  return data;
}

export async function getPageAssets(slug: string) {
  const { data, error } = await supabase
    .from("site_assets")
    .select("section_key, image_url, alt_text")
    .eq("page_slug", slug);

  if (error) {
    console.error("Error fetching Assets: ", error);
    return {}
  }

  const assetsMap: Record<string, any> = {};
  data.forEach((item => {
    assetsMap[item.section_key] = item;
  }))

  return assetsMap;
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
  data.forEach((item) => {
    logosMap[item.key_name] = item.url;
  });
  
  return logosMap;
}