// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <section className="py-14 lg:py-24 relative">
        {/* Gradient Background */}
        

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img
                src="/images/about.jpg"
                alt="About Us tailwind page"
                className="w-full h-[500px] object-cover rounded-lg max-lg:mx-auto"
              />
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="text-slate-900 text-4xl font-[Sagona]  mb-9 max-lg:text-center relative">
                  About Us
                </h2>
                <p className="text-lg font-[Avenirlight]  leading-8 text-gray-600 max-lg:text-center max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
                  <a
                    href="about/team"
                    className="text-blue-500 hover:underline transition-colors duration-200 ease-in-out flex items-center gap-1 font-[avenir]"
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
              <h2 className="text-slate-900 text-4xl font-[Sagona]  mb-9 max-lg:text-center relative">
                 Based in Montreal
                </h2>
                <p className="text-lg font-[Avenirlight]  leading-8 text-gray-600 max-lg:text-center max-w-2xl mx-auto">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit.Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in.
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
