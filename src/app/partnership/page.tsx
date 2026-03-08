// app/partners/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaskaraa Instruments Partners",
  description:
    "Kaskaraa Instruments is a research and development company focused on building the next generation pathology automation tools. Website by Nathan Aruna",
};

const partners = [
  {
    name: "ThinkSci Outreach",
    bio: "The ThinkSci Outreach Program is a youth-led initiative dedicated to empowering underrepresented students in STEM. Through hands-on workshops, mentorship, and community-based research opportunities, they foster curiosity, creativity, and critical thinking across Montreal and Ottawa — uniting students from high school to graduate level around a mission to make science accessible, inclusive, and inspiring.",
    link: "https://linktr.ee/thinkscioutreach?fbclid=PAZXh0bgNhZW0CMTEAAafyKkuNqNs1PLKGjO89YRLwuEJQJap_ZsZ1_J2rQh9JKf1rLyhSsfaLLtuXfA_aem_Mn2wCh79D2202YvGdOW5vQ",
    imageUrl: "/images/partnership/thinksci.png",
    imageAlt: "ThinkSci Outreach",
  },
];

const PartnerPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <section className="w-full py-12">
          <div className="mx-auto max-w-screen-2xl px-5 lg:px-8">
            
            <div className="mb-12">
              <h2 className="text-5xl text-center font-[Avenir] text-gray-800">
                Our partners
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {partners.map((partner, i) => (
                <div key={i} className="block group flex flex-col">
                  <a href={partner.link}>
                    <img
                      className="w-full rounded-lg mb-6 transition-all duration-500 border border-transparent "
                      src={partner.imageUrl}
                      alt={partner.imageAlt}
                    />
                  </a>
                  <a href={partner.link}>
                    <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 transition-all duration-500 group-hover:text-gray-600">
                      {partner.name}
                    </h4>
                  </a>
                  <p className="font-[Avenirlight] text-gray-500 text-sm leading-relaxed flex-grow transition-all duration-500 group-hover:text-gray-600">
                    {partner.bio}
                  </p>
                  <a
                    href={partner.link}
                    className="inline-flex items-center gap-x-1 mt-4 py-2 px-4 text-sm text-white font-[Avenir] bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full w-fit"
                  >
                    Learn more →
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerPage;