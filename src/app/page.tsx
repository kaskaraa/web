"use client";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow relative">
        <div
          className="absolute inset-0 blur-xl h-[580px] z-0" 
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>

        <section className="relative z-10"> 
          <div className="max-w-screen-xl mx-auto px-4 py-16 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex md:items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-gray-800 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Read up on new developments
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-5xl text-gray-800 font-[Avenir] sm:text-7xl">
                PATHOLOGY <span className="font-[sagona]">AUTOMATION</span>
              </h1>
              <p className="text-sm sm:text-base">
                We streamline pathology workflows with smart automation,
                enhancing accuracy, efficiency, and turnaround time for labs,
                hospitals, and research facilities.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="/about"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-[Avenirlight] bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                >
                  About Us
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 duration-150 md:inline-flex"
                >
                  Contact sales
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:flex md:justify-end self-start">
              <img src="/images/landing.png" className="max-w-md" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
