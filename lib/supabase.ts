import { createClient } from "@supabase/supabase-js"

// Check if environment variables are defined
if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL environment variable is not defined")
}

if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_ANON_KEY environment variable is not defined")
}

// Initialize Supabase client with environment variables
export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

// Initialize Supabase client for client-side usage
export const createClientSideSupabaseClient = () => {
  if (
    typeof window !== "undefined" &&
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ) {
    return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  }
  return null
}

