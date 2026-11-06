import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export async function incrementDownloads() {
  if (!supabase) return;
  try {
    await supabase.rpc("increment_downloads");
  } catch {
    // Fail silently as specified
  }
}

export async function submitWaitlist(email: string) {
  const parts = email.split("@");
  const domain = parts.length > 1 ? parts[1].toLowerCase().trim() : "";

  if (!supabase) {
    // If Supabase credentials are not provided yet, simulate successful local acceptance
    return { success: true, domain };
  }

  const { error } = await supabase.from("waitlist").insert([
    {
      email: email.trim().toLowerCase(),
      domain,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    throw error;
  }

  return { success: true, domain };
}
