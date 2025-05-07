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
        
        <div
          className="absolute inset-0 blur-xl h-[900px]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0.02) 20.79%, rgba(232, 121, 249, 0.1) 40.92%, rgba(204, 171, 238, 0.02) 70.35%)",
          }}
        ></div>
<div
          className="absolute inset-0 blur-xl h-[900px] "
          style={{
            background:
              "linear-gradient(190.6deg, rgba(192, 132, 252, 0.02) 20.79%, rgba(232, 121, 249, 0.1) 15.92%, rgba(204, 171, 238, 0.02) 30.35%) ",
          }}
        ></div>

        <section className="relative ">
          <div className="max-w-screen-2xl mx-auto px-4 py-8 sm:py-12 lg:py-30 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex md:items-center ">
            <div className="flex-none space-y-5 max-w-2xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-white"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-gray-800 text-white">
                  News
                </span>
                <p className="flex items-center font-[Avenirlight]">
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
                  href="/support-us"
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
        </section>

       

       
      </main>

      <section className=" pt-10 sm:pt-20 lg:pt-30 ">
        <Footer />
      </section>
    </div>
  );
}
