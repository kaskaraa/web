// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./animations.css"; 
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kaskaraa Instruments About",
  description: "Kaskaraa Instruments is a research and development company focused on building the next generation pathology automation tools."
};

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center">
        <section className="animate-roll-in w-full">
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
                Kaskaraa Instruments is a Montreal-based team of four students and professionals passionate about medicine, engineering, and innovation. Focused on advancing pathology, we design automated robotic solutions to improve accuracy, efficiency, and patient outcomes.
              </p>
              <p className="text-lg font-[Avenirlight]">
                We believe robotics can transform healthcare, and we are committed to building the future of diagnostics one breakthrough at a time. Our team works constantly to bridge the gap between science, robotics, and real-world medical needs.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm py-5">
                <a href="/about/team"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-[sagona] bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex">
                The team →
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
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;