
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kaskaraa Intruments News",
  description: "Kaskaraa Intruments is a research and development company focused on building the next generation pathology automation tools. Website by Nathan Aruna"
  };

const posts = [
  {
    id:6,
    title: "CWSF 2025",
    date: "2025-06-5",
    category: "Presntation",
    link: "https://www.lapresse.ca/dialogue/chroniques/2025-06-04/expo-sciences/retenez-les-noms-de-ces-jeunes.php",
    description:
    "We are honoured to compete at the Canada-Wide Science Fair (CWSF) 2025, representing Quebec with our project. This prestigious event showcases the best young scientists from across the country.",
    author: {
      name: "Nathan Aruna",
      role: "Technical Project Manager",
      imageUrl: "/images/team/Nathan.png",
    },
  },
 
  {
    id: 5,
    title: "LaPresse Interview",
    date: "2025-06-5",
    category: "Press",
    link: "https://www.lapresse.ca/dialogue/chroniques/2025-06-04/expo-sciences/retenez-les-noms-de-ces-jeunes.php",
    description:
      "On May 22nd three of our team members had the incredible opportunity to participate at OCTAS 2025, proudly demoing our first prototype in the Collegial Student",
    author: {
      name: "Nathan Aruna",
      role: "Technical Project Manager",
      imageUrl: "/images/team/Nathan.png",
    },
  },
  {
    id: 4,
    title: "OCTAS 2025",
    date: "2025-05-23",
    category: "Event",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7331758092553961474",
    description:
      "On May 22nd three of our team members had the incredible opportunity to participate at OCTAS 2025, proudly demoing our first prototype in the Collegial Student",
    author: {
      name: "Nathan Aruna",
      role: "Technical Project Manager",
      imageUrl: "/images/team/Nathan.png",
    },
  },
  {
    id: 3,
    title: "Prototype Presentation MRSTF",
    date: "2025-05-13",
    category: "Press",
    link: "https://www.dawsoncollege.qc.ca/news/dawson-students-going-to-canada-wide-science-fair/#:~:text=Tell%20us%20about%20your%20project,an%20automated%20and%20scalable%20process.",
    description:
      "Dawson College featured our project in their news section on May 12, 2025",
    author: {
      name: "Nathan Aruna",
      role: "Technical Project Manager",
      imageUrl: "/images/team/Nathan.png",
    },
  },
  {
    id: 2,
    title: "Prototype Presentation SES",
    date: "2025-04-12",
    category: "Presntation",
    link: "https://technoscience.ca/delegation-qc-expo-pancanadienne-2025/",
    description:
      "Project demontration at the Super Expo Science on April 11, 2025. We showcased our prototype to a panel of judges allowing us to advance to Canada-Wide Science Fair (CWSF) 2025.",
    author: {
      name: "Nathan Aruna",
      role: "Technical Project Manager",
      imageUrl: "/images/team/Nathan.png",
    },
  },
  {
    id: 1,
    title: "Prototype Presentation MRSTF",
    date: "2025-03-24",
    category: "Presentation",
    link: "https://www.mrstf.ca",
    description:
      "We presented our first ever prototype at the Montreal Regional Science and Technology Fair (MRSTF) on March 23, 2025. The event was a great success, showcasing our innovative approach to pathology automation.",
    author: {
      name: "Nathan Aruna",
      role: "Technical Project Manager",
      imageUrl: "/images/team/Nathan.png",
    },
  },
];

export default function News() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <main className="flex-grow relative">
        <section className="relative z-1">
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-4xl font-[Avenir] tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  News and Insights
                </h2>
                <p className="text-lg font-[Avenirlight] mt-4 text-gray-500">
                  Project updates from the founders of Kaskaraa Intruments
                </p>
              </div>

              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map(
                  ({
                    id,
                    title,
                    date,
                    category,
                    link,
                    description,
                    author: { name, role, imageUrl },
                  }) => (
                    <article
                      key={id}
                      className="flex max-w-xl flex-col items-start justify-between"
                    >
                      <div className="flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={date}
                          className="text-gray-500 font-[Avenirlight]"
                        >
                          {new Date(date).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                        <a className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 ">
                          {category}
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 ">
                          <a>
                            <span className="absolute inset-0"></span>
                            {title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                          {description}
                        </p>

                        <a
                          href={link}
                          className="relative z-20 text-blue-600 underline hover:text-blue-800 transition-colors duration-150 font-[Avenirlight]"
                        >
                          Read more
                        </a>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                          src={imageUrl}
                          alt={name}
                          className="size-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm/6">
                          <p className="font-semibold text-gray-900">
                            <a href="#">
                              <span className="absolute inset-0"></span>
                              {name}
                            </a>
                          </p>
                          <p className="text-gray-600">{role}</p>
                        </div>
                      </div>
                    </article>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
