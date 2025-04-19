// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="py-14 lg:py-24 relative">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 blur-xl h-full z-[-1]"
          style={{
            background:
              "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
          }}
        ></div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="https://content.ilabsolutions.com/wp-content/uploads/2022/10/HistologyLabHero-640x392-revised.jpg"
                alt="About Us tailwind page"
                className="w-full h-[500px] object-cover rounded-lg max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-[Avenir] text-4xl lg:text-5xl text-gray-800 mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="font-[Avenirlight] text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.{" "}
                  <a
                    href="about/team"
                    className="text-blue-500 hover:underline transition-colors duration-200 ease-in-out flex items-center gap-1"
                  >
                    The team
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3"
                      />
                    </svg>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-gray-800 mb-9 max-lg:text-center">
                  Based in Montreal
                </h2>
                <p className="font-[Avenirlight] text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
              </div>
            </div>
            <div className="img-box">
              <img
                src="https://travel.destinationcanada.com/_next/image?url=https%3A%2F%2Fadmin.destinationcanada.com%2Fsites%2Fdefault%2Ffiles%2F2023-06%2FQC-Montreal-Skyline_hero.jpg&w=1920&q=75"
                alt="About Us tailwind page"
                className="w-full h-[500px] object-cover rounded-lg max-lg:mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
