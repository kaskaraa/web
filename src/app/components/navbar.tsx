"use client";
import { useState } from "react";
import Link from "next/link";

interface NavItem {
  title: string;
  path: string;
  children?: { title: string; path: string }[];
}

const Navbar = () => {
  const [state, setState] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  const navigation: NavItem[] = [
    // {
    //   title: "Products",
    //   path: "/products",
    // },
    // {
    //   title: "Applications",
    //   path: "#",
    //   children: [
    //     { title: "Clinical", path: "/applications/clinical" },
    //     { title: "Research", path: "/applications/research" },
    //   ],
    // },
    {
      title: "Investment",
      path: "",
        children: [{ title: "Overview", path: "/investment" }, { title: "Mission Statement", path: "/investment" }]

    },
    { title: "Partnerships", path: "/partnerships" },
    { title: "Resources", path: "/" },
  ];

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block ">
      <Link href="/">
        <h1 className="text-xl text-gray-800 font-[Avenir] sm:text-xl">
          Kaskaraa Instruments.ﾒ
        </h1>
      </Link>
      <div className="md:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <header className="z-10">
      {state && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10"
          onClick={() => setState(false)}
        ></div>
      )}

      <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={`pb-5 md:text-sm ${
          state
            ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent z-50"
            : ""
        }`}
      >
        <div className="gap-x-14 items-center max-w-screen-2xl mx-auto px-4 md:flex md:px-8">
          <Brand />
          <div
            className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="flex-1 justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item: NavItem, idx) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = dropdownOpen === idx;

                return (
                  <li key={idx} className="w-full md:w-auto">
                    <div className="relative">
                      <Link
                        href={item.path}
                        className="w-full flex justify-between items-center text-left text-gray-700 hover:text-gray-900 font-[Avenir] py-2 px-4 md:inline-flex md:py-0 md:px-0 md:gap-x-1"
                        onClick={() =>
                          hasChildren
                            ? setDropdownOpen(isOpen ? null : idx)
                            : setDropdownOpen(null)
                        }
                      >
                        {item.title}
                        {hasChildren && (
                          <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        )}
                      </Link>

                      {hasChildren && isOpen && item.children && (
                        <ul className="md:absolute z-50 mt-2 w-full md:w-48 bg-white shadow-md rounded-xl py-2 space-y-2 md:space-y-1 border">
                          {item.children.map((child, cIdx) => (
                            <li key={cIdx}>
                              <Link
                                href={child.path}
                                className="block px-4 py-2 text-gray-700 hover:text-gray-900 font-[Avenir]"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
              <a
                href="/contact"
                className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-[Avenir] bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
