"use client";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./home.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-grow relative">
        <section className="relative z-1">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#d08cf7] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>

          <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:py-12 lg:py-30 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex md:items-center ">
            <div className="flex-none space-y-5 max-w-xl">
              <div className="inline-flex items-center rounded-full px-3 py-1 text-sm/6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-[Avenirlight] gap-1">
                <span>Development and progression.</span>
                <a
                  href="/news"
                  className="font-semibold text-gray-800 whitespace-nowrap"
                >
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
              <h1 className="text-5xl text-gray-800 font-[Avenir] sm:text-7xl">
                PATHOLOGY <span className="font-[sagona]">AUTOMATION</span>
              </h1>
              <p className="text-lg font-[Avenirlight] ">
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
                  href="/investment"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-gray-700 hover:text-gray-900 duration-150 md:inline-flex font-[Avenir]"
                >
                  Want To Support Us? ⇀
                </a>
              </div>
            </div>
            <div className="flex-1 hidden md:flex md:justify-end self-start">
              <Image
                src="/images/landing.png"
                alt="Landing page illustration"
                width={500}
                height={500}
                className="max-w-lg"
              />
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#d08cf7] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
