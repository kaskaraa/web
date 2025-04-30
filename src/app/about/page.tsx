// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import "./animations.css"; 

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white animate-roll-in">
        <div className="gap-16 items-center py-8 px-5 max-w-screen-2xl mx-auto lg:grid lg:grid-cols-2 lg:py-16 lg:px-8">
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-[Avenir] text-gray-800">
              Building the Future of Pathology
            </h2>
            <p className="text-lg font-[Avenirlight] mb-4">
              Kaskara Labs is a Montreal-based team of six students and professionals passionate about medicine, engineering, and innovation. Focused on advancing pathology, we design automated solutions to improve accuracy, efficiency, and patient outcomes.
            </p>
            <p className="text-lg font-[Avenirlight]">
              We believe technology can transform healthcare, and we are committed to building the future of diagnostics — one breakthrough at a time. Our team works relentlessly to bridge the gap between science, technology, and real-world medical needs.
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
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt=""
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="bg-white animate-roll-in">
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
                  <p className="text-gray-500">
                  Kaskara refers to a traditional sword known for precision and craftsmanship, symbolizing our commitment to cutting-edge, high-quality medical instruments.
                  </p>
                </div>
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
                  <p className="text-gray-500">
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
                  <p className="text-gray-500">
                  Kaskara refers to a traditional sword known for precision and craftsmanship, symbolizing our commitment to cutting-edge, high-quality medical instruments.
                   
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
