// app/about/page.tsx
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const TeamPage = () => {
  return (
    <>
      <Navbar />

      <section className="py-14 lg:py-24 relative">
        <div className="py-4 mx-auto max-w-screen-2xl relative">
          <div className="mx-auto text-center">
            <h2 className="text-slate-900 text-4xl font-[sagona]">Meet our team</h2>
            <p className="text-slate-600 font-[Avenirlight] text-sm mt-6 leading-relaxed p-3">
              Veniam proident aute magna anim excepteur et ex consectetur velit
              ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure
              laboris ad ut. Esse cupidatat deserunt magna aute.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-12 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white">
              <img
                src=""
                className="w-full object-contain aspect-square object-top bg-gray-500 border rounded-md "
              />
              <div className="p-4">
                <h4 className="text-slate-800 text-base font-semibold font-[Avenir]">
                  Nathan Aruna
                </h4>
                <p className="text-slate-600 text-xs mt-1 font-[Avenirlight]">
                  Software Engineer
                </p>
                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed font-[Avenir]">
                    Eiusmod commodo aliquip laboris qui anim non voluptate
                    consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white">
              <img
                src=""
                className="w-full object-contain aspect-square object-top bg-gray-500 border rounded-md "
              />
              <div className="p-4">
                <h4 className="text-slate-800 text-base font-semibold font-[Avenir]">
                  Arielle Benarroch
                </h4>
                <p className="text-slate-600 text-xs mt-1 font-[Avenirlight]">
                  Software Engineer
                </p>
                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed font-[Avenir]">
                    Eiusmod commodo aliquip laboris qui anim non voluptate
                    consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white">
              <img
                src=""
                className="w-full object-contain aspect-square object-top bg-gray-500 border rounded-md "
              />
              <div className="p-4">
                <h4 className="text-slate-800 text-base font-semibold font-[Avenir]">
                  Domenico Valentino
                </h4>
                <p className="text-slate-600 text-xs mt-1 font-[Avenirlight]">
                  Software Engineer
                </p>
                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed font-[Avenir]">
                    Eiusmod commodo aliquip laboris qui anim non voluptate
                    consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white">
              <img
                src=""
                className="w-full object-contain aspect-square object-top bg-gray-500 border rounded-md "
              />
              <div className="p-4">
                <h4 className="text-slate-800 text-base font-semibold font-[Avenir]">
                  Raphael Ethier
                </h4>
                <p className="text-slate-600 text-xs mt-1 font-[Avenirlight]">
                  Software Engineer
                </p>
                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed font-[Avenir]">
                    Eiusmod commodo aliquip laboris qui anim non voluptate
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-white">
              <img
                src=""
                className="w-full object-contain aspect-square object-top bg-gray-500 border rounded-md "
              />
              <div className="p-4">
                <h4 className="text-slate-800 text-base font-semibold font-[Avenir]">
                  Nathan Aruna
                </h4>
                <p className="text-slate-600 text-xs mt-1 font-[Avenirlight]">
                  Software Engineer
                </p>
                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed font-[Avenir]">
                    Eiusmod commodo aliquip laboris qui anim non voluptate
                    consectetur.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden bg-white">
              <img
                src=""
                className="w-full object-contain aspect-square object-top bg-gray-500 border rounded-md "
              />
              <div className="p-4">
                <h4 className="text-slate-800 text-base font-semibold font-[Avenir]">
                  Nathan Aruna
                </h4>
                <p className="text-slate-600 text-xs mt-1 font-[Avenirlight]">
                  Software Engineer
                </p>
                <div className="mt-4">
                  <p className="text-gray-800 text-sm leading-relaxed font-[Avenir]">
                    Eiusmod commodo aliquip laboris qui anim non voluptate
                    consectetur.
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

export default TeamPage;
