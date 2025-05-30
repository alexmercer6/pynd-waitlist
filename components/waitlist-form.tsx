"use client";

import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitCustomerEmail, submitVendorInfo } from "@/app/actions/waitlist";
import { useFormState, useFormStatus } from "react-dom";
import { track } from "@vercel/analytics";

// Initial state for form submissions
const initialState = {
  success: false,
  message: "",
  data: null,
};

// New SubmitButton component
function SubmitButton({
  children,
  className,
  pendingText = "Processing...",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  pendingText?: string;
} & React.ComponentPropsWithoutRef<typeof Button>) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className={className} {...props}>
      {pending ? pendingText : children}
    </Button>
  );
}

export default function WaitlistForm() {
  const [activeTab, setActiveTab] = useState("customer");

  // Use React's useFormState hook to handle form submissions
  const [customerState, customerAction] = useFormState(
    submitCustomerEmail,
    initialState
  );
  const [vendorState, vendorAction] = useFormState(
    submitVendorInfo,
    initialState
  );

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
        <p className="text-lg">
          {customerState.success ? customerState.message : vendorState.message}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <Tabs
        defaultValue="customer"
        className="w-full"
        onValueChange={setActiveTab}
      >
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
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  defaultValue={customerState.data?.email || ""}
                />
              </div>

              {/* New fields for state, suburb, and postcode */}
              <p className="text-zinc-400 mt-8">
                Optional...{"\n"}but adding your location helps us gauge demand
                in your area!
              </p>
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
                    className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                    defaultValue={customerState.data?.suburb || ""}
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
                    className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                    defaultValue={customerState.data?.state || ""}
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
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  defaultValue={customerState.data?.postcode || ""}
                />
              </div>

              {customerState.message && !customerState.success && (
                <div className="text-red-500 text-sm">
                  {customerState.message}
                </div>
              )}

              <SubmitButton className="w-full bg-rose-500 hover:bg-rose-600 h-12 text-lg font-bold">
                Submit
              </SubmitButton>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="vendor">
          <div className="bg-zinc-900 p-8 rounded-lg">
            <form action={vendorAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-lg">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="business@email.com"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  defaultValue={vendorState.data?.email || ""}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="businessName" className="text-lg">
                  Business Name *
                </Label>
                <Input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Your Food Truck or Coffee Van Name"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  defaultValue={vendorState.data?.businessName || ""}
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
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  defaultValue={vendorState.data?.businessType || ""}
                />
              </div>

              {/* New fields for state, suburb, and postcode */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="suburb" className="text-lg">
                    Suburb *
                  </Label>
                  <Input
                    id="suburb"
                    name="suburb"
                    type="text"
                    placeholder="Your suburb"
                    required
                    className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                    defaultValue={vendorState.data?.suburb || ""}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-lg">
                    State *
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Your state"
                    required
                    className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                    defaultValue={vendorState.data?.state || ""}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="postcode" className="text-lg">
                  Postcode *
                </Label>
                <Input
                  id="postcode"
                  name="postcode"
                  type="text"
                  placeholder="Your postcode"
                  required
                  className="bg-zinc-800 border-zinc-700 h-12 text-lg"
                  defaultValue={vendorState.data?.postcode || ""}
                />
              </div>

              {vendorState.message && !vendorState.success && (
                <div className="text-red-500 text-sm">
                  {vendorState.message}
                </div>
              )}

              <SubmitButton
                className="w-full bg-cyan-500 hover:bg-cyan-600 h-12 text-lg font-bold"
                pendingText="JOINING..."
              >
                JOIN AS A VENDOR
              </SubmitButton>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
