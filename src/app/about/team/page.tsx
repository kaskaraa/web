// app/about/page.tsx
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kaskaraa Intruments Team",
  description: "Kaskaraa Intruments is a research and development company focused on building the next generation pathology automation tools. Website by Nathan Aruna"
  };
  
const TeamPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full py-12">
          <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-1">
            <div className="mb-12">
              <h2 className="text-5xl text-center font-[Avenir] text-gray-800">
                Our team
              </h2>
            </div>
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <Image
                    src="/images/team/Nathan.png"
                    alt="Nathan Aruna"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"
                  />
                </div>
                <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                  Nathan Aruna
                </h4>
                <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                  Engineering Oversight
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <Image
                    src="/images/team/Domenico.png"
                    alt="Domenico Valentino"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"
                  />
                </div>
                <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                  Domenico Valentino
                </h4>
                <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                  Lead Software Engineer
                </span>
              </div>
              <div className="group group md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <Image
                    src="/images/team/Raphael.png"
                    alt="Raphael Ethier"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"
                  />
                </div>
                <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                  Raphael Ethier
                </h4>
                <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                  Lead Mechanical Engineer
                </span>
              </div>
              <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
                <div className="relative mb-6">
                  <Image
                    src="/images/team/Arielle.png"
                    alt="Arielle Benarroch"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"
                  />
                </div>
                <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                  Arielle Benarroch
                </h4>
                <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                  Research, Legal & Marketing
                </span>
              </div>
              <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  <Image
                    src="/images/team/Majed.png"
                    alt="Majed Munazzit"
                    width={160}
                    height={160}
                    className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"
                  />
                </div>
                <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                  Majed Munazzit
                </h4>
                <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                  Lead Clinical Applications  
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
