"use server";

import { revalidatePath } from "next/cache";
import { supabase } from "@/lib/supabase";

// Function to submit customer email to waitlist
export async function submitCustomerEmail(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const suburb = formData.get("suburb") as string;
  const state = formData.get("state") as string;
  const postcode = formData.get("postcode") as string;

  const submittedData = { email, suburb, state, postcode };

  try {
    if (!email) {
      return {
        success: false,
        message: "Email is required",
        data: submittedData,
      };
    }

    const { error } = await supabase
      .from("waitlist_customers")
      .insert([{ email, postcode, suburb, state }]);

    if (error) {
      console.error("Error submitting customer email:", error);

      // Check if it\'s a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email is already on our waitlist!",
          data: submittedData,
        };
      }

      return {
        success: false,
        message: "Failed to submit. Please try again.",
        data: submittedData,
      };
    }

    revalidatePath("/");
    return {
      success: true,
      message:
        "You're on the list! We'll notify you when Pynd is ready to launch!",
      data: null,
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      data: submittedData,
    };
  }
}

// Function to submit vendor information to waitlist
export async function submitVendorInfo(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const businessName = formData.get("businessName") as string;
  const businessType = formData.get("businessType") as string;
  const suburb = formData.get("suburb") as string;
  const state = formData.get("state") as string;
  const postcode = formData.get("postcode") as string;

  const submittedData = {
    email,
    businessName,
    businessType,
    suburb,
    state,
    postcode,
  };

  try {
    if (!email || !businessName || !suburb || !state || !postcode) {
      // businessType is optional as per previous form
      return {
        success: false,
        message: "Please fill in all required fields.",
        data: submittedData,
      };
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
    ]);

    if (error) {
      console.error("Error submitting vendor info:", error);

      // Check if it\'s a duplicate email error
      if (error.code === "23505") {
        return {
          success: false,
          message: "This email is already on our waitlist!",
          data: submittedData,
        };
      }

      return {
        success: false,
        message: "Failed to submit. Please try again.",
        data: submittedData,
      };
    }

    revalidatePath("/");
    return {
      success: true,
      message:
        "You're on the list! We'll notify you when Pynd is ready for vendors!",
      data: null,
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      data: submittedData,
    };
  }
}
