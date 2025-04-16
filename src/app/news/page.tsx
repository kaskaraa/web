"use client";
import Navbar from "../components/navbar";
import Newscard from "../components/newscard";

export default function News() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section class="bg-gray-2  pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-4">
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
        <Newscard />
      </div>
      </div>
      </section>

    </div>
  );
  
}
