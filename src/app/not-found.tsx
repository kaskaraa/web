export default function notfound() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[900px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <section className="bg-white min-h-screen">
      <div className="min-h-screen mx-auto px-4 flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-7xl tracking-tight font-[Sagona] lg:text-9xl text-primary-600">
            404 error
          </h1>
          <p className="text-3xl tracking-tight  text-gray-900 md:text-4xl font-[Avenir]">
            PAGE NOT FOUND
          </p>
          
         
        </div>
      </div>
    </section>
        </div>
  );
}