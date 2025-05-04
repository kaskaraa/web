// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Support Kaskaraa Intruments",
	description: "Kaskaraa Intruments is a research and development company focused on building the next generation pathology automation tools. Website by Nathan Aruna"
};
  

const SupportPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section>
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <div className="mx-auto max-w-screen-xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20 font-[Avenirlight]">
                  Development and progression.{" "}
                  <a href="#" className="font-semibold gray-800">
                    <span className="absolute inset-0" aria-hidden="true"></span>
                    Read more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-[Avenir] tracking-tight text-balance text-gray-800 sm:text-7xl">
                From Slide to Insight: Automating the <span className="font-[sagona]"> Pathology </span>Pipeline
                </h1>
                <p className="mt-8 text-lg font-[Avenirlight] text-pretty text-gray-500 sm:text-xl/8">
                We’re transforming the future of diagnostics by automating pathology workflows. 
  Our platform enhances speed, accuracy, and accessibility empowering clinicians 
  with data-driven decisions and improving patient outcomes.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-[Avenirlight] bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                  >
                   Get In Touch
                  </a>
                  <a
                    href="kaskaraa.com/mission.pdf"
                    className="text-sm/6 font-[Avenir] text-gray-900"
                  >
                    Mission Statement <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SupportPage;
