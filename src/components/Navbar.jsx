import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  BiCalendarPlus,
  BiChevronDown,
  BiChevronRight,
  BiMenu,
  BiSpreadsheet,
} from "react-icons/bi";
import { GoPencil } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <nav className="w-full xl:h-[68px] md:h-[145px] flex items-center px-6 md:px-14 pr-6 md:pr-20 pb-36 md:pb-0 nav relative">
      <div
        className="block lg:hidden md:hidden absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer text-white text-[46px]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="transition-transform duration-100 ease-in-out">
          {menuOpen ? <RxCross2 /> : <BiMenu />}
        </div>{" "}
      </div>

      <section
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          md:static md:translate-x-0 md:translate-y-0
          md:flex-1 md:flex md:justify-start
          lg:flex-none
        "
      >
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            loading="lazy"
            className="h-[66px] cursor-pointer"
          />
        </Link>
      </section>

      <section className="hidden xl:flex ml-24 justify-center">
        <ul className="lies flex items-center gap-6 text-[18px] cursor-pointer font-semibold text-[#FFFEFB]">
          <li className="relative group flex items-center cursor-pointer">
            Services
            <BiChevronDown className="text-[26px]" />
            <div className="absolute top-full left-[-14px] mt-3 w-56 cursor-pointer text-[17px] font-normal text-black bg-white shadow-lg rounded p-6 py-5 hidden group-hover:block z-10">
              <p className="pb-[14px] hover:text-[#FF6A39]">Paid Media</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">
                Performance Creative
              </p>
              <p className="pb-[14px] hover:text-[#FF6A39]">Video Marketing</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">SEO</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">GEO & AEO</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">
                Content Marketing
              </p>
              <p className="pb-[14px] hover:text-[#FF6A39]">CRO</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">Data & Analytics</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">All</p>
            </div>
          </li>
          <li className="relative group flex items-center cursor-pointer">
            About Us
            <BiChevronDown className="text-[26px]" />
            <div className="absolute top-full left-[-14px] mt-3 w-[260px] cursor-pointer text-[17px] font-normal text-black bg-white shadow-lg rounded p-6 py-5 hidden group-hover:block z-10">
              <p className="pb-[14px] hover:text-[#FF6A39]">Our Team</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">How We Work</p>
              <p className="pb-[14px] hover:text-[#FF6A39]">
                Growth Marketing Agency
              </p>
            </div>
          </li>
          <li className="relative group flex items-center cursor-pointer">
            Resources
            <BiChevronDown className="text-[26px]" />
            <div className="absolute top-full left-[-370%] mt-3 w-[895%] cursor-pointer text-[17px] font-normal text-black bg-white shadow-lg rounded p-16 py-5 pb-11 hidden group-hover:block z-10">
              <div className="w-full h-auto flex mt-4">
                <div className="w-[33%] hover-change">
                  <GoPencil className="text-[56px] icon" />
                  <h2 className="text-[24px] font-bold mt-1">Blog</h2>
                  <p className="text-[17px] font-semibold mt-2">
                    The latest trends, analytics, and strategies for Facebook,
                    Google, YouTube, SEO, Content, and more.
                  </p>
                </div>
                <div className="w-[33%] pl-4 hover-change">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-book-text-icon lucide-book-text icon"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                    <path d="M8 11h8" />
                    <path d="M8 7h6" />
                  </svg>
                  <h2 className="text-[24px] font-bold">Guides</h2>
                  <p className="text-[17px] font-semibold">
                    Take a deep dive and get into the weeds with us! Get the
                    step-by-step playbook on our most asked-for services.
                  </p>
                </div>
                <div className="w-[33%] pl-6 hover-change">
                  <BiSpreadsheet className="text-[70px] icon" />
                  <h2 className="text-[24px] font-bold">Spreadsheets</h2>
                  <p className="text-[17px] font-semibold">
                    13 Ready-to-Go Growth Marketing Spreadsheets Startups Can
                    Use to Boost Productivity
                  </p>
                </div>
              </div>
            </div>
          </li>
          <Link to="/case-studies">
            <li>Case Studies</li>
          </Link>
          <Link to="/a-goodway-group-company">
            <li>A Goodway Group Company</li>
          </Link>
        </ul>
      </section>

      <div
        className="hidden xl:hidden md:flex md:flex-4 md:justify-center text-white text-[46px] cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <RxCross2 /> : <BiMenu />}
      </div>

      <section className="md:flex-1 md:flex md:justify-end absolute right-2 lg:right-20 top-1/2 -translate-y-1/2">
        <button className="text-[#FFFEFB] md:block hidden cursor-pointer text-[16px] font-semibold h-auto w-max p-2 px-[13px] rounded-[2px] border-2 border-[#FFFEFB] transition-transform duration-500 hover:-rotate-6">
          Book a Strategy Call
        </button>
        <div className="block md:hidden text-white text-[46px] cursor-pointer">
          <BiCalendarPlus />
        </div>
      </section>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black p-4 px-4 md:px-48 z-20 md:block xl:hidden">
          <ul className="transition-all duration-300">
            {[
              {
                title: "Services",
                items: [
                  "Paid Media",
                  "Performance Creative",
                  "Video Marketing",
                  "SEO",
                  "Content Marketing",
                  "CRO",
                  "Data",
                  "All",
                ],
              },
              {
                title: "About Us",
                items: ["Our Team", "How We Work", "Growth Marketing Agency"],
              },
              {
                title: "Resources",
                isCustom: true,
              },
            ].map((section) => (
              <li key={section.title}>
                <div
                  onClick={() => handleDropdownToggle(section.title)}
                  className="py-6 text-[24px] font-semibold flex items-center justify-between cursor-pointer"
                >
                  {section.title}
                  {openDropdown === section.title ? (
                    <BiChevronDown className="text-[40px] text-gray-500 transition-transform duration-300" />
                  ) : (
                    <BiChevronRight className="text-[40px] text-gray-500 transition-transform duration-300" />
                  )}
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openDropdown === section.title
                      ? "max-h-[1000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {section.isCustom ? (
                    <div className="pb-8 flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                        <GoPencil className="text-[36px] mt-1 text-gray-800" />
                        <div>
                          <h2 className="text-[20px] font-bold">Blog</h2>
                          <p className="text-[15px] font-medium text-gray-700">
                            The latest trends, analytics, and strategies for
                            Facebook, Google, YouTube, SEO, Content, and more.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="36"
                          height="36"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-book-text text-gray-800"
                        >
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
                          <path d="M8 11h8" />
                          <path d="M8 7h6" />
                        </svg>
                        <div>
                          <h2 className="text-[20px] font-bold">Guides</h2>
                          <p className="text-[15px] font-medium text-gray-700">
                            Take a deep dive and get into the weeds with us! Get
                            the step-by-step playbook on our most asked-for
                            services.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <BiSpreadsheet className="text-[36px] text-gray-800" />
                        <div>
                          <h2 className="text-[20px] font-bold">
                            Spreadsheets
                          </h2>
                          <p className="text-[15px] font-medium text-gray-700">
                            13 Ready-to-Go Growth Marketing Spreadsheets
                            Startups Can Use to Boost Productivity
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <ul className="pl-4 pb-8 text-[16px] text-gray-700 font-normal">
                      {section.items.map((item, i) => (
                        <li key={i} className="py-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="border-b border-gray-300"></div>
              </li>
            ))}

            <li className="py-6 text-[24px] font-semibold border-b border-gray-300">
              Case Studies
            </li>
            <li className="py-6 text-[24px] font-semibold border-b border-gray-300">
              A Goodway Group Company
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
