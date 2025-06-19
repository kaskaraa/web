// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaskaraa Intruments Partners",
  description:
    "Kaskaraa Intruments is a research and development company focused on building the next generation pathology automation tools. Website by Nathan Aruna",
};

const partners = [
  {
    name: "ThinkSci Outreach",
    bio: "The ThinkSci Outreach Program (Programme ThinkSci) is a youth-led outreach program dedicated to empowering underrepresented students in STEM. Through hands-on workshops, mentorship, and community-based research opportunities, we foster curiosity, creativity, and critical thinking. We bring together a vibrant community of high school, CÉGEP, undergraduate, and graduate students across Montreal and Ottawa, united by a mission to make science accessible, inclusive, and inspiring - supporting the next generation of diverse innovators from the classroom to the lab and beyond",
    link: "#",
    imageUrl: "/images/partnership/thinksci.png",
    imageAlt: "ThinkSci Outreach",
  },
 
];

const PartnerPage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex flex-col justify-center items-center py-8 px-4">
        <div className="w-full max-w-screen-2xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-2 md:px-8">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="max-w-sm p-6 bg-gray-300 border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 flex flex-col h-full"
            >
              <a href={partner.link}>
                <img
                  className="w-full rounded-lg mb-4"
                  src={partner.imageUrl}
                  alt={partner.imageAlt}
                />
              </a>
              <a href={partner.link}>
                <h5 className="mb-2 text-2xl font-[avenir] text-gray-900 ">
                  {partner.name}
                </h5>
              </a>
              <p className="mb-3 font-[avenirlight] text-gray-800  flex-grow">
                {partner.bio}
              </p>
              <a
                href={partner.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PartnerPage;
