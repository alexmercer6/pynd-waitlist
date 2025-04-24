"use server"

import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with environment variables
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

export async function setupDatabase() {
  try {
    // Create the function to create the customers table
    await supabase.rpc(
      "create_function_for_customers_table",
      {},
      {
        headers: {
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        },
      },
    )

    // Create the function to create the vendors table
    await supabase.rpc(
      "create_function_for_vendors_table",
      {},
      {
        headers: {
          Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        },
      },
    )

    return { success: true, message: "Database setup completed" }
  } catch (error) {
    console.error("Error setting up database:", error)
    return { success: false, message: "Failed to set up database" }
  }
}

// Create the SQL functions to create tables
export async function createSQLFunctions() {
  // Create function for customers table
  await supabase.rpc(
    "execute_sql",
    {
      sql: `
      CREATE OR REPLACE FUNCTION create_waitlist_customers_table()
      RETURNS void AS $$
      BEGIN
        CREATE TABLE IF NOT EXISTS waitlist_customers (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          email TEXT UNIQUE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      END;
      $$ LANGUAGE plpgsql;
    `,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      },
    },
  )

  // Create function for vendors table
  await supabase.rpc(
    "execute_sql",
    {
      sql: `
      CREATE OR REPLACE FUNCTION create_waitlist_vendors_table()
      RETURNS void AS $$
      BEGIN
        CREATE TABLE IF NOT EXISTS waitlist_vendors (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          email TEXT UNIQUE NOT NULL,
          business_name TEXT NOT NULL,
          business_type TEXT NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
        );
      END;
      $$ LANGUAGE plpgsql;
    `,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
      },
    },
  )
}

