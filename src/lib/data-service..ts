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