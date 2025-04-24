"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitCustomerEmail, submitVendorInfo } from "@/app/actions/waitlist"
import { useFormState } from "react-dom"
import { track } from "@vercel/analytics"

// Initial state for form submissions
const initialState = {
  success: false,
  message: "",
}

export default function WaitlistForm() {
  const [activeTab, setActiveTab] = useState("customer")
  const [previousCustomerState, setPreviousCustomerState] = useState({ success: false })
  const [previousVendorState, setPreviousVendorState] = useState({ success: false })

  // Use React's useFormState hook to handle form submissions
  const [customerState, customerAction] = useFormState(submitCustomerEmail, initialState)
  const [vendorState, vendorAction] = useFormState(submitVendorInfo, initialState)

  // Track form submissions
  useEffect(() => {
    // Track customer form submission
    if (customerState.success && !previousCustomerState.success) {
      track("waitlist_signup", {
        userType: "customer",
        source: "waitlist_form",
      })
    }

    // Track vendor form submission
    if (vendorState.success && !previousVendorState.success) {
      track("waitlist_signup", {
        userType: "vendor",
        source: "waitlist_form",
      })
    }

    // Update previous states
    setPreviousCustomerState(customerState)
    setPreviousVendorState(vendorState)
  }, [customerState, vendorState, previousCustomerState, previousVendorState])

  // Track tab changes
  useEffect(() => {
    track("tab_change", {
      tab: activeTab,
      source: "waitlist_form",
    })
  }, [activeTab])

  // Show success message if form was submitted successfully
  if (customerState.success || vendorState.success) {
    return (
      <div className="max-w-md mx-auto bg-zinc-900 p-8 rounded-lg text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-rose-500 mx-auto mb-4"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-lg">{customerState.success ? customerState.message : vendorState.message}</p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto">
      <Tabs defaultValue="customer" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="customer" className="text-lg">
            Food Lovers
          </TabsTrigger>
          <TabsTrigger value="vendor" className="text-lg">
            Van Owners
          </TabsTrigger>
        </TabsList>

        <TabsContent value="customer">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <form action={customerAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                />
              </div>

              {customerState.message && !customerState.success && (
                <div className="text-red-500 text-sm">{customerState.message}</div>
              )}

              <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 h-12 text-lg font-bold">
                Submit
              </Button>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="vendor">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <form action={vendorAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-lg">
                  Business Name
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Your Food Truck or Coffee Van Name"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessType" className="text-lg">
                  Business Type
                </Label>
                <Input
                  id="businessType"
                  name="businessType"
                  type="text"
                  placeholder="Food Truck, Coffee Van, etc."
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                />
              </div>

              {/* New fields for state, suburb, and postcode */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="suburb" className="text-lg">
                    Suburb
                  </Label>
                  <Input
                    id="suburb"
                    name="suburb"
                    type="text"
                    placeholder="Your suburb"
                    required
                    className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-lg">
                    State
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Your state"
                    required
                    className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postcode" className="text-lg">
                  Postcode
                </Label>
                <Input
                  id="postcode"
                  name="postcode"
                  type="text"
                  placeholder="Your postcode"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="business@email.com"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                />
              </div>

              {vendorState.message && !vendorState.success && (
                <div className="text-red-500 text-sm">{vendorState.message}</div>
              )}

              <Button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-600 h-12 text-lg font-bold">
                JOIN AS A VENDOR
              </Button>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

