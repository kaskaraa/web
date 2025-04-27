// app/about/page.tsx
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const TeamPage = () => {
  return (
    <>
      <Navbar />

      <section className="py-24">
        <div className="mx-auto max-w-screen-2xl sm:px-6 lg:px-1">
          <div className="mb-12">
            <h2 className="text-5xl text-center font-[Avenir] text-gray-800">
              Our team
            </h2>
          </div>
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            <div className="block group md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238374.png"
                  alt="Antonio image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Nathan Aruna
              </h4>
              <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Engineering Oversight
              </span>
            </div>
            <div className="block group md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238396.png"
                  alt="Patricia image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Domenico Valentino
              </h4>
              <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Lead Software Engineer
              </span>
            </div>
            <div className="group group md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238411.png"
                  alt="Jerom image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Raphael Ethier
              </h4>
              <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Lead Mechanical Engineer
              </span>
            </div>
            <div className="block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4">
              <div className="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238425.png"
                  alt="Yasmine image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Arielle Benarroch
              </h4>
              <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Research, Legal & Marketing
              </span>
            </div>
            <div className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1">
              <div className="relative mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696238446.png"
                  alt="Martin image"
                  className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-indigo-600"
                />
              </div>
              <h4 className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-indigo-600">
                Majed Munazzit
              </h4>
              <span className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900">
                Clinical Researcher
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TeamPage;
