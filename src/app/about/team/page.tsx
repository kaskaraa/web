// app/about/page.tsx
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import type {Metadata}
from "next";
import Image from "next/image";

export const metadata : Metadata = {
    title: "Kaskaraa Instruments Team",
    description: "Kaskaraa Instruments is a research and development company focused on building t" +
            "he next generation pathology automation tools."
};

const TeamPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-grow flex items-center justify-center">
                <section className="w-full py-12">
                    <div
                        className="mx-auto max-w-screen-2xl sm:px-6 lg:px-1 flex flex-col items-center">
                        <div className="mb-12">
                            <h2 className="text-5xl text-center font-[Avenir] text-gray-800">
                                Our team
                            </h2>
                        </div>
                        <div
                            className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 w-full justify-items-center">
                            <div className="block group md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <Image
                                        src="/images/team/Nathan.png"
                                        alt="Nathan Aruna"
                                        width={160}
                                        height={160}
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"/>
                                </div>
                                <h4
                                    className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                                    Nathan Aruna
                                </h4>
                                <span
                                    className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                                    Founder & CEO — Engineering & Technology
                                </span>
                                <p
                                    className="font-[Avenirlight] text-gray-400 text-center text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                                    Nathan leads engineering and product development at Kaskaraa Instruments. Currently
                                    studying electrical engineering with a deep passion for technology and robotics, he
                                    is driven to create innovative solutions that can advance humanity. Nathan
                                    drives the research and development of our automation tools, working to ensure they
                                    are built to the highest standards of quality and performance. He has presented his
                                    research on the international stage, reflecting his commitment to pushing the boundaries of robotics.
                                    Outside of work, he enjoys travelling the world and exploring new music.
                                </p>
                            </div>
                            <div className="block group md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <Image
                                        src="/images/team/Domenico.png"
                                        alt="Domenico Valentino"
                                        width={160}
                                        height={160}
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"/>
                                </div>
                                <h4
                                    className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                                    Domenico Valentino
                                </h4>
                                <span
                                    className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                                    Co-Founder — Chief Software Architect
                                </span>
                                <p
                                    className="font-[Avenirlight] text-gray-400 text-center text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                                    Domenico leads software architecture and development at Kaskaraa Instruments. As a software 
                                    engineering student with a strong focus on systems design, algorithms, and full-stack development, 
                                    he is driven to build solutions that push the boundaries of what software can achieve in medical 
                                    and scientific applications. He co-directed the best-performing robotics team in Quebec, 
                                    demonstrating his technical ability. Domenico drives the research and development of our software 
                                    infrastructure, working to ensure the reliability and performance of our tools. Outside of work, he 
                                    enjoys DJ'ing, and playing his guitar.
                                </p>
                            </div>
                            <div className="group group md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <Image
                                        src="/images/team/Raphael.png"
                                        alt="Raphael Ethier"
                                        width={160}
                                        height={160}
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"/>
                                </div>
                                <h4
                                    className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                                    Raphael Ethier
                                </h4>
                                <span
                                    className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                                    Co-Founder — Chief of Hardware Engineering
                                </span>
                                <p
                                    className="font-[Avenirlight] text-gray-400 text-center text-sm mt-3 leading-relaxed max-w-xs mx-auto">
                                    Raphael leads hardware engineering and mechanical design at Kaskaraa Instruments. 
                                    Currently studying aerospace engineering with a strong foundation in mechanical 
                                    design, his passion for engineering was sparked through competitive robotics, where 
                                    he developed the technical expertise to lead and mentor the next generation of 
                                    engineers. Raphael drives the research and development of our hardware systems, 
                                    working to ensure our tools are designed for precision and reliability. Outside of 
                                    work, he loves to travel and immerse himself in different cultures.
                                </p>
                            </div>

                            <div
                                className="block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1">
                                <div className="relative mb-6">
                                    <Image
                                        src="/images/team/Majed.png"
                                        alt="Majed Munazzit"
                                        width={160}
                                        height={160}
                                        className="w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-gray-600"/>
                                </div>
                                <h4
                                    className="text-xl font-[Avenir] text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-gray-600">
                                    Majed Munazzit
                                </h4>
                                <span
                                    className="font-[Avenirlight] text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-600">
                                    Co-Founder — Business Development & Clinical Applications
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default TeamPage;
