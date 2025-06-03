"use client";

import { useEffect, useState } from "react";
import WaitlistForm from "@/components/waitlist-form";
import { track } from "@vercel/analytics";

export default function Home() {
  // Track page view with section information
  useEffect(() => {
    track("page_view", { page: "home" });
  }, []);

  // State for active tab in waitlist section
  const [activeTab, setActiveTab] = useState("customer");

  // Function to track button clicks
  const trackButtonClick = (buttonName: string) => {
    track("button_click", { button: buttonName });
  };

  // Function to track section views
  const trackSectionView = (sectionId: string) => {
    track("section_view", { section: sectionId });

    // Scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVendorWaitlistClick = () => {
    setActiveTab("vendor");
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCustomerWaitlistClick = () => {
    setActiveTab("customer");
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleVendorMoreInfoClick = () => {
    setActiveTab("vendor");
    document.getElementById("vendor_section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main id="main-content" className="bg-black text-white">
      {/* Hero Section */}
      <section
        className="min-h-screen flex  flex-col justify-center items-center gap-10 p-4"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-center"
        >
          CONNECTING <span className="text-rose-500">MORE </span>CUSTOMERS
          <br />
          WITH <span className="text-rose-500">LOCAL MOBILE </span>COFFEE
        </h1>
        <div className="flex flex-col justify-between text-center">
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="bg-slate-800 p-4 text-center rounded-lg">
              <div className="">
                <h3 className="text-xl font-bold mb-2">FOR CUSTOMERS</h3>
                <p className="mb-4">
                  Find delicious food trucks and coffee vans near you,
                  instantly.
                </p>
              </div>
              <button
                tabIndex={0}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-sm sm:text-base"
                onClick={handleCustomerWaitlistClick}
                aria-label="Join customer waitlist"
              >
                JOIN WAITLIST
              </button>
            </div>
            <div className="bg-slate-800 p-4 text-center rounded-lg">
              <div className="">
                <h3 className="text-xl font-bold mb-2">FOR VENDORS</h3>
                <p className="mb-4">
                  Grow your mobile business with more visibility and customers.
                </p>
              </div>
              <button
                tabIndex={0}
                className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 text-sm sm:text-base"
                onClick={handleVendorMoreInfoClick}
                aria-label="Learn more about partnering with us"
              >
                PARTNER WITH US
              </button>
            </div>
          </div>
        </div>
        <button
          tabIndex={0}
          onClick={() => {
            trackButtonClick("scroll_down");
            trackSectionView("problem");
          }}
          className="animate-bounce"
          aria-label="Scroll down to learn more"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </section>

      {/* Problem/Solution Section */}
      <section
        id="problem"
        className="py-20 bg-white text-black"
        aria-labelledby="benefits-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="benefits-heading"
            className="text-4xl md:text-6xl font-black mb-12 text-center"
          >
            BENEFITS OF PYND
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">FOR FOOD LOVERS</h3>
              <ul className="space-y-4 text-xl" role="list">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-rose-500 mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    No more guesswork — always know which coffee vans are nearby
                    and when
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-rose-500 mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Discover new favorites even in unfamiliar areas with ratings
                    and reviews
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-rose-500 mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Enjoy more variety with access to multiple vendors in one
                    place
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-rose-500 text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">FOR VENDORS</h3>
              <ul className="space-y-4 text-xl" role="list">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Increase visibility to customers in your area</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Manage orders and customer relationships efficiently
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-white mr-2 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Build loyal customer base through the platform</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black" aria-labelledby="features-heading">
        <div className="container mx-auto px-4">
          <h2
            id="features-heading"
            className="text-4xl md:text-6xl font-black mb-12 text-center"
          >
            KEY FEATURES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-rose-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">REAL-TIME LOCATION</h3>
              <p>
                Find nearby vendors with precise tracking and schedule
                information
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                  aria-hidden="true"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">MENU BROWSING</h3>
              <p>View complete menus, prices and daily specials in advance</p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" y1="9" x2="9.01" y2="9"></line>
                  <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">TRUSTED COMMUNITY</h3>
              <p>
                Our two-way review system helps match quality vendors with great
                customers for the perfect experience
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-lg text-center">
              <div className="bg-lime-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">PROXIMITY ALERTS</h3>
              <p>
                Get notified when your favorite vendors are nearby or when new
                food trucks enter your area
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section
        className="py-20 bg-white text-black"
        aria-labelledby="join-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="join-heading"
            className="text-4xl md:text-6xl font-black mb-12 text-center"
          >
            BE THE FIRST TO BITE!
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4">
              <div
                className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">EARLY ACCESS</h3>
                <p className="text-lg">
                  Get exclusive early access to the Pynd app and start
                  discovering local food & coffee vans first.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div
                className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">SPECIAL DEALS</h3>
                <p className="text-lg">
                  Receive special launch-day deals from participating vendors.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div
                className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">SHAPE THE FUTURE</h3>
                <p className="text-lg">
                  Help us build the ultimate mobile coffee and food community
                  with your feedback.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div
                className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">STAY INFORMED</h3>
                <p className="text-lg">
                  Stay in the loop about our official launch and new vendor
                  additions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Section */}
      <section
        id="vendor_section"
        className="py-20 bg-cyan-900 text-white"
        aria-labelledby="vendor-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="vendor-heading"
            className="text-4xl md:text-6xl font-black mb-12 text-center"
          >
            GROW YOUR MOBILE BUSINESS
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white text-black p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4 text-cyan-700">
                WHY JOIN PYND?
              </h3>
              <ul className="space-y-4" role="list">
                <li className="flex items-start">
                  <span
                    className="text-cyan-500 font-bold mr-2"
                    aria-hidden="true"
                  >
                    01.
                  </span>
                  <span>
                    Reach more customers in your area without expensive
                    marketing
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="text-cyan-500 font-bold mr-2"
                    aria-hidden="true"
                  >
                    02.
                  </span>
                  <span>
                    Streamline orders and optimise routes for your business
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="text-cyan-500 font-bold mr-2"
                    aria-hidden="true"
                  >
                    03.
                  </span>
                  <span>
                    Build customer loyalty with our integrated reviews and
                    ratings system
                  </span>
                </li>
                <li className="flex items-start">
                  <span
                    className="text-cyan-500 font-bold mr-2"
                    aria-hidden="true"
                  >
                    04.
                  </span>
                  <span>Simple pricing structure with no hidden fees</span>
                </li>
              </ul>
              <button
                className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
                onClick={handleVendorWaitlistClick}
                aria-label="Join vendor waitlist"
              >
                JOIN WAITLIST
              </button>
            </div>

            <div className="space-y-6">
              <div className="bg-cyan-800 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">VENDOR DASHBOARD</h4>
                <p>
                  Manage your menu, track orders, and update your location all
                  from one simple interface.
                </p>
              </div>
              <div className="bg-cyan-800 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">CUSTOMER ANALYTICS</h4>
                <p>
                  Gain insights into customer behavior, popular items, and peak
                  hours to optimize your business.
                </p>
              </div>
              <div className="bg-cyan-800 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">FLEXIBLE SCHEDULING</h4>
                <p>
                  Update your location in real-time or set a regular schedule
                  that customers can follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section
        id="waitlist"
        className="py-20 bg-black"
        aria-labelledby="waitlist-heading"
      >
        <div className="container mx-auto px-4">
          <h2
            id="waitlist-heading"
            className="text-4xl md:text-6xl font-black mb-4 text-center"
          >
            JOIN THE WAITLIST
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Join the Pynd waitlist today. Whether you're a foodie looking for
            your next favorite bite or a vendor ready to grow your business,
            we're building Pynd for you.
          </p>

          <WaitlistForm activeTab={activeTab} setActiveTab={setActiveTab} />
          <p className="text-center text-zinc-400 mt-8">
            We respect your privacy. No spam, just tasty updates about our
            launch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900 text-zinc-400" role="contentinfo">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-3xl font-black text-white">PYND</span>
          </div>

          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://instagram.com/pynd.app"
              className="hover:text-white transition-colors"
              aria-label="Follow us on Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="mailto:alex@pynd.com.au"
              className="hover:text-white transition-colors"
              aria-label="Contact us via email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>

          <p className="mb-2">
            Contact us:{" "}
            <a
              href="mailto:alex@pynd.com.au"
              className="text-rose-400 hover:text-rose-300 transition-colors"
            >
              alex@pynd.com.au
            </a>
          </p>
          <p>© {new Date().getFullYear()} Pynd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
