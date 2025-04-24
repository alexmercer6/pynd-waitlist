"use server"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with environment variables
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)