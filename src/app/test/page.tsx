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
    bio: "/",
    link: "#",
    imageUrl: "/",
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
              className="max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 flex flex-col h-full"
            >
              <a href={partner.link}>
                <img
                  className="w-full rounded-lg mb-4"
                  src={partner.imageUrl}
                  alt={partner.imageAlt}
                />
              </a>
              <a href={partner.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {partner.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
                {partner.bio}
              </p>
              <a
                href={partner.link}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
