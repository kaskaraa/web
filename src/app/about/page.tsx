// app/about/page.tsx
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const AboutPage = () => {
  return (
    
    <>
        <Navbar />

      <section className="py-14 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
          <div className="img-box">
            <img
              src="https://pagedone.io/asset/uploads/1702034769.png"
              alt="About Us tailwind page"
              className="max-lg:mx-auto object-cover"
            />
          </div>
          <div className="lg:pl-[100px] flex items-center">
            <div className="data w-full">
              <h2 className="font-manrope font-[Avenir] text-4xl lg:text-5xl text-gray-800 mb-9 max-lg:text-center relative">
                About Us
              </h2>
              <p className="font-[Avenirlight] text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                Driven by a passion for seamless user experiences, we've meticulously curated pagedone to empower
                creators, designers, and developers alike. Our mission is to provide a comprehensive toolkit,
                enabling you to build intuitive, beautiful interfaces that resonate with users on every interaction.
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
              <img
                src="https://pagedone.io/asset/uploads/1702034785.png"
                alt="About Us tailwind page"
                className="block lg:hidden mb-9 mx-auto object-cover"
              />
              <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-black mb-9 max-lg:text-center">
                We are Creative Since 2005
              </h2>
              <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                Pagedone isn’t just a collection of components and guidelines; it's a philosophy. We go beyond
                aesthetics, prioritizing accessibility, scalability, and usability. Every element, from the tiniest
                detail to the grandest layout, is meticulously crafted to enhance functionality and elevate user
                satisfaction.
              </p>
            </div>
          </div>
          <div className="img-box">
            <img
              src="https://pagedone.io/asset/uploads/1702034785.png"
              alt="About Us tailwind page"
              className="hidden lg:block object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">Our results in numbers</h2>
        <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
          <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
            <div className="flex gap-5">
              <div className="font-manrope text-2xl font-bold text-indigo-600">240%</div>
              <div className="flex-1">
                <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                <p className="text-xs text-gray-500 leading-5">
                  Company's remarkable growth journey as we continually innovate and drive towards new heights of
                  success.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
            <div className="flex gap-5">
              <div className="font-manrope text-2xl font-bold text-indigo-600">175+</div>
              <div className="flex-1">
                <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                <p className="text-xs text-gray-500 leading-5">
                  Our very talented team members are the powerhouse of pagedone and pillars of our success.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 rounded-2xl shadow-md shadow-gray-100">
            <div className="flex gap-5">
              <div className="font-manrope text-2xl font-bold text-indigo-600">625+</div>
              <div className="flex-1">
                <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                <p className="text-xs text-gray-500 leading-5">
                  We have accomplished more than 625 projects worldwide and we are still counting many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16 rounded-full">
          <h2 className="text-4xl font-manrope font-bold text-gray-900 text-center">What our happy user says!</h2>
        </div>

        <div style={{ "--swiper-navigation-color": "#fff", "--swiper-pagination-color": "#fff" }} className="swiper mySwiper2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="relative mb-20">
                <div className="max-w-max mx-auto lg:max-w-4xl">
                  <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                    I have been using pagedone for several months now, and I must say that it has made my life a lot
                    easier. The platform's intuitive interface and ease of use have allowed me to manage my finances
                    more effectively and make informed investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative mb-20">
                <div className="max-w-max mx-auto lg:max-w-4xl">
                  <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                    I have been using pagedone for several months now, and I must say that it has made my life a lot
                    easier. The platform's intuitive interface and ease of use have allowed me to manage my finances
                    more effectively and make informed investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and effort.
                  </p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="relative mb-20">
                <div className="max-w-max mx-auto lg:max-w-4xl">
                  <p className="text-lg text-gray-500 leading-8 mb-8 text-center">
                    I have been using pagedone for several months now, and I must say that it has made my life a lot
                    easier. The platform's intuitive interface and ease of use have allowed me to manage my finances
                    more effectively and make informed investment decisions. I particularly like the product's
                    auto-tracking feature, which has saved me a lot of time and effort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <section className="py-14 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="font-manrope text-4xl text-center font-bold text-gray-900 mb-6">Meet our team</h2>
          <p className="text-lg text-gray-500 text-center">
            We provide all the advantages that can simplify all your financial and banking support without any further issues.
          </p>
        </div>
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col items-center lg:items-start p-8 bg-white rounded-lg shadow-md transition-all duration-500">
            <div className="w-full lg:w-48 h-64">
              <img
                src="https://pagedone.io/asset/uploads/1696238786.png"
                alt="Harsh Patel"
                className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
              />
            </div>
            <div className="text-center lg:text-left lg:max-w-xs flex-1 mt-6">
              <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                <h6 className="text-lg text-gray-900 font-semibold mb-1">Harsh Patel</h6>
                <span className="text-sm text-gray-500 group-hover:text-indigo-600">Co-Founder & CEO</span>
              </div>
              <p className="text-gray-500 leading-6 mb-7">
                I am the co-founder of pagedone, and we’ve pushed our limits so far to make it successful.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center lg:items-start p-8 bg-white rounded-lg shadow-md transition-all duration-500">
            <div className="w-full lg:w-48 h-64">
              <img
                src="https://pagedone.io/asset/uploads/1696238869.png"
                alt="Alexa Kimberly"
                className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
              />
            </div>
            <div className="text-center lg:text-left lg:max-w-xs flex-1 mt-6">
              <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                <h6 className="text-lg text-gray-900 font-semibold mb-1">Alexa Kimberly</h6>
                <span className="text-sm text-gray-500 group-hover:text-indigo-600">Lead Designer</span>
              </div>
              <p className="text-gray-500 leading-6 mb-7">
                I’ve been the lead designer for pagedone since the beginning and enjoyed every bit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center lg:items-start p-8 bg-white rounded-lg shadow-md transition-all duration-500">
            <div className="w-full lg:w-48 h-64">
              <img
                src="https://pagedone.io/asset/uploads/1696238786.png"
                alt="Ethan Smith"
                className="rounded-2xl h-full object-cover mx-auto lg:mx-0 lg:w-full"
              />
            </div>
            <div className="text-center lg:text-left lg:max-w-xs flex-1 mt-6">
              <div className="mb-5 pb-5 border-b border-solid border-gray-300">
                <h6 className="text-lg text-gray-900 font-semibold mb-1">Ethan Smith</h6>
                <span className="text-sm text-gray-500 group-hover:text-indigo-600">CTO</span>
              </div>
              <p className="text-gray-500 leading-6 mb-7">
                As the CTO, I ensure that pagedone stays ahead of the curve with cutting-edge technology.
              </p>
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
