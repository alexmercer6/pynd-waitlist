"use client"

import { useEffect } from "react"
import WaitlistForm from "@/components/waitlist-form"
import { track } from "@vercel/analytics"

export default function Home() {
  // Track page view with section information
  useEffect(() => {
    track("page_view", { page: "home" })
  }, [])

  // Function to track button clicks
  const trackButtonClick = (buttonName: string) => {
    track("button_click", { button: buttonName })
  }

  // Function to track section views
  const trackSectionView = (sectionId: string) => {
    track("section_view", { section: sectionId })

    // Scroll to the section
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black mb-4 tracking-tighter">
            YOUR DAILY CRAVE,
            <br />
            <span className="text-rose-500">DELIVERED CURB-SIDE.</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Discover the best local food trucks and coffee vans near you. Pynd connects you to delicious eats and
            perfect brews, right when you want them.
          </p>
          <button
            className="bg-rose-500 hover:bg-rose-600 text-white text-xl font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              trackButtonClick("hero_cta")
              trackSectionView("waitlist")
            }}
          >
            JOIN THE WAITLIST
          </button>
        </div>
        <div className="absolute bottom-10 left-0 right-0 text-center">
          <button
            onClick={() => {
              trackButtonClick("scroll_down")
              trackSectionView("problem")
            }}
            className="animate-bounce"
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
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">FIND YOUR FLAVOR, FASTER.</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">THE PROBLEM</h3>
              <p className="text-xl">
                Ever missed your favorite coffee van or wished you knew where that amazing food truck parked today?
                Chasing down mobile vendors or relying on outdated social media posts is hit-or-miss.
              </p>
            </div>
            <div className="bg-rose-500 text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">THE SOLUTION</h3>
              <p className="text-xl">
                Pynd takes the guesswork out. Our app shows you nearby food trucks and coffee vans in real-time. Find
                what you crave, see menus, and get your fix easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">HOW PYND SATISFIES YOUR CRAVINGS</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">EXPLORE NEARBY GEMS</h3>
              <p>
                See which food trucks and coffee vans are operating near you right now or browse upcoming locations.
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
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">TRACK YOUR TREAT</h3>
              <p>Find vendors easily with real-time location tracking or check their regular schedules and spots.</p>
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
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">RATE & REMEMBER</h3>
              <p>
                Discover highly-rated vendors based on community reviews. Save your favorites so you never miss them
                again.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-center">BE THE FIRST TO BITE!</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="bg-rose-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">EARLY ACCESS</h3>
                <p className="text-lg">
                  Get exclusive early access to the Pynd app and start discovering local food & coffee vans first.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">SPECIAL DEALS</h3>
                <p className="text-lg">Receive special launch-day deals from participating vendors.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-amber-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">SHAPE THE FUTURE</h3>
                <p className="text-lg">Help us build the ultimate mobile foodie community with your feedback.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">STAY INFORMED</h3>
                <p className="text-lg">Stay in the loop about our official launch and new vendor additions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black mb-4 text-center">
            READY TO DISCOVER YOUR NEXT FAVORITE MOBILE BITE?
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Don't miss out! Join the Pynd waitlist and be the first to find and enjoy the best local food trucks and
            coffee vans.
          </p>
          <WaitlistForm />
          <p className="text-center text-zinc-400 mt-8">We respect your privacy. No spam, just tasty updates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-zinc-900 text-zinc-400">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-3xl font-black text-white">PYND</span>
          </div>
          <p>© {new Date().getFullYear()} Pynd. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

