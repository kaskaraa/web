// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./animations.css"; 
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
	title: "Kaskaraa Intruments About",
	description: "Kaskaraa Intruments is a research and development company focused on building the next generation pathology automation tools. Website by Nathan Aruna"
  };

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className=" animate-roll-in">
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
        <div className="gap-16 items-center py-8 px-5 max-w-screen-2xl mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-8">
          
          <div className="font-light text-gray-500 sm:text-lg">
            
            <h2 className="mb-4 text-4xl tracking-tight font-[Avenir] text-gray-800">
              Building the Future of Pathology
            </h2>
            <p className="text-lg font-[Avenirlight] mb-4">
              Kaskaraa Labs is a Montreal-based team of five students and professionals passionate about medicine, engineering, and innovation. Focused on advancing pathology, we design automated solutions to improve accuracy, efficiency, and patient outcomes.
            </p>
            <p className="text-lg font-[Avenirlight]">
              We believe technology can transform healthcare, and we are committed to building the future of diagnostics one breakthrough at a time. Our team works relentlessly to bridge the gap between science, technology, and real-world medical needs.
            </p>
            <div className="flex items-center gap-x-3 sm:text-sm py-5">
              <a
                href="/about/team"
                className="flex items-center justify-center gap-x-1 py-1 text-gray-700 hover:text-gray-900 duration-150 md:inline-flex font-[Avenir] text-lg"
              >
                The team ⇀
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              src="/images/about1.png"
              alt="About us image 1"
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
            <Image
              src="/images/about2.png"
              alt="About us image 2"
              width={500}
              height={500}
              className="mt-4 w-full lg:mt-10 rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="animate-roll-in">
        <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-30 lg:px-8">
          <h2 className="mb-8 text-4xl tracking-tight font-[Avenir] text-gray-800">
            Frequently asked questions
          </h2>
          <div className="border-t border-gray-200 md:gap-16 md:grid-cols-2">
            <div className="grid pt-8 text-left md:gap-16 md:grid-cols-2">
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    What is the meaning of our name?
                  </h3>
                  <p className="text-lg font-[Avenirlight] mb-4 text-gray-500">
                  Kaskara refers to a traditional sword known for precision and craftsmanship, symbolizing our commitment to cutting-edge, high-quality medical instruments.
                  </p>
                </div>
               
              </div>
              <div>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    What is the meaning of our name?
                  </h3>
                  <p className="text-lg font-[Avenirlight] mb-4 text-gray-500">
                  Kaskara refers to a traditional sword known for precision and craftsmanship, symbolizing our commitment to cutting-edge, high-quality medical instruments.
                   
                  </p>
                </div>
              </div>
            </div>
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
      <Footer />
    </>
  );
};

export default AboutPage;
