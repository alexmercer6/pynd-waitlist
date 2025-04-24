"use server"

import { revalidatePath } from "next/cache"
import { supabase } from "@/lib/supabase"

// Function to submit customer email to waitlist
export async function submitCustomerEmail(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string

    if (!email) {
      return { success: false, message: "Email is required" }
    }

    const { error } = await supabase.from("waitlist_customers").insert([{ email }])

    if (error) {
      console.error("Error submitting customer email:", error)

      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return { success: false, message: "This email is already on our waitlist!" }
      }

      return { success: false, message: "Failed to submit. Please try again." }
    }

    revalidatePath("/")
    return { success: true, message: "You're on the list! We'll notify you when Pynd is ready to launch!" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

// Function to submit vendor information to waitlist
export async function submitVendorInfo(prevState: any, formData: FormData) {
  try {
    const email = formData.get("email") as string
    const businessName = formData.get("businessName") as string
    const businessType = formData.get("businessType") as string
    const suburb = formData.get("suburb") as string
    const state = formData.get("state") as string
    const postcode = formData.get("postcode") as string

    if (!email || !businessName || !businessType || !suburb || !state || !postcode) {
      return { success: false, message: "All fields are required" }
    }

    const { error } = await supabase.from("waitlist_vendors").insert([
      {
        email,
        business_name: businessName,
        business_type: businessType,
        suburb,
        state,
        postcode,
      },
    ])

    if (error) {
      console.error("Error submitting vendor info:", error)

      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return { success: false, message: "This email is already on our waitlist!" }
      }

      return { success: false, message: "Failed to submit. Please try again." }
    }

    revalidatePath("/")
    return { success: true, message: "You're on the list! We'll notify you when Pynd is ready for vendors!" }
  } catch (error) {
    console.error("Unexpected error:", error)
    return { success: false, message: "An unexpected error occurred. Please try again." }
  }
}

