import React from "react";
import Navbar from "../components/Navbar";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import chevUp from "../assets/chevUp.svg";
import chevDown from "../assets/chevDown.svg";
import soona from "../assets/soona.png";
import multi from "../assets/multi.png";
import koji from "../assets/koji.png";
import nova from "../assets/nova.png";
import thinks from "../assets/thinks.png";
import cabi from "../assets/cabi.png";
import palmetto from "../assets/palmetto.png";
import acres from "../assets/acres.png";
import satrr from "../assets/satrr.png";
import rew from "../assets/rew.png";
import ant from "../assets/ant.png";
import star1 from "../assets/star1.svg";
import brad from "../assets/brad.png";
import rikin from "../assets/rikin.png";
import Footer from "../components/Footer";

export default function caseStudies() {
  return (
    <>
      <div className="w-full fixed top-0 z-50 bg-[#0C2233]">
        <Navbar />
      </div>
      <section>
        <div className="w-full h-auto flex justify-center flex-col items-center pt-[220px] pb-10 lg:pt-[135px] lg:pb-15">
          <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
            CASE STUDIES
          </div>
          <h1 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-semibold w-[90%] sm:w-[80%] md:w-[65%] lg:w-[55%] leading-snug sm:leading-tight lg:leading-[60px] mt-2 tracking-tight lg:tracking-[-1px] text-[#0c2233] text-center">
            High‒impact growth campaigns{" "}
            <span className="bg-[#CEFD94]">with proven results.</span>
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#0c2233] text-center mx-auto w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%] mt-4">
            We’ve found success working with teams in nearly every industry,
            from early traction startups to large enterprises. Discover how we
            bring our services to life to drive lasting growth for our partners.
          </p>
          <BiChevronDown
            size={30}
            className="mt-6 cursor-pointer lg:size-[40px]"
          />
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              SOONA
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              Tackling Rising Acquisition Costs with an Ad Creative Testing
              Framework
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "1.4M",
                  label: "Increase in Impressions",
                  icon: chevUp,
                },
                { value: "45%", label: "Increase in CRV", icon: chevUp },
                {
                  value: "57%+",
                  label: "Increase in Total Sales",
                  icon: chevUp,
                },
                { value: "$200+", label: "CPA", icon: chevDown },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={soona} alt="soona" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={multi} alt="multi" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              MULTIVERSE
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full">
              Building an Inbound Pipeline in a New Region with Account-Based
              Marketing Principles
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  value: "189%",
                  label: "Increase MQLs in 6 months",
                  icon: chevUp,
                },
                {
                  value: "22%",
                  label: "Decrease monthly spend",
                  icon: chevDown,
                },
                {
                  value: "38%",
                  label: "Increase account in the US",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              NOVA CREDIT
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              Overcoming Regulatory Roadblocks by Reimagining Paid Media
              Strategies for Fintech
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "55%",
                  label: "Below Target CPA",
                  icon: chevDown,
                },
                {
                  value: "72%",
                  label: "Increase Total Conversions",
                  icon: chevUp,
                },
                {
                  value: "111%",
                  label: "Increase Total Impressions",
                  icon: chevUp,
                },
                {
                  value: "299%",
                  label: "Increase in from Q4 → Q1*",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={nova} alt="nova" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={thinks} alt="thinks" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              THINKS
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full">
              Scaling Results By Diversifying Channel Mix: Using Third-Party
              Data to Unlock Growth on Meta
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  value: "23%",
                  label: "Increase in Lead",
                  icon: chevUp,
                },
                {
                  value: "16%",
                  label: "Increase in MQLs*",
                  icon: chevUp,
                },
                {
                  value: "16%",
                  label: "Decrease in CPQL*S",
                  icon: chevDown,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              KOJI
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              Koji Proving ROI on YouTube Awareness Campaigns for a B2C SaaS
              Brand
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "70%",
                  label: "Increase in Total Users",
                  icon: chevUp,
                },
                {
                  value: "52%",
                  label: "Increase in Total Sessions",
                  icon: chevUp,
                },
                {
                  value: "57%+",
                  label: "Increase in Organic SignUp",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={koji} alt="koji" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={cabi} alt="cabi" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              CABI
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full">
              Validating a New DTC Revenue Stream for an Established Women’s
              Clothing Brand
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  value: "68.5%",
                  label: "Increase in New Customers",
                  icon: chevUp,
                },
                {
                  value: "66%",
                  label: "Increase in Revenue",
                  icon: chevUp,
                },
                {
                  value: "33%",
                  label: "Decrease in CAC",
                  icon: chevDown,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              PALMETTO
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              Developing an Inbound Pipeline to Scale Qualified B2B Leads for a
              Clean Energy Company
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "110%",
                  label: "Increase in New Customers",
                  icon: chevUp,
                },
                {
                  value: "76%",
                  label: "Increase in Paid Sales",
                  icon: chevUp,
                },
                {
                  value: "54%",
                  label: "Increase in Total Leads",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img
              src={palmetto}
              alt="palmetto"
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={acres} alt="acres" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              ACRES
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full">
              Scaling Campaigns that Generate High-Value Customers for a Fintech
              Software Company
            </p>

            <div className="w-full pt-4 sm:pt-5">
              {[
                {
                  value: "272%",
                  label: "Increase in Subscriptions",
                  icon: chevUp,
                },
                {
                  value: "45%",
                  label: "Increase in Subscriber",
                  icon: chevUp,
                },
                {
                  value: "31%",
                  label: "Increase in Premium Lead",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              STARRYAI
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              Achieving a 50% Surge in Organic Traffic within 60 Days, Reducing
              Dependency on Paid Strategies
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "57%",
                  label: "Increase in non-branded",
                  icon: chevUp,
                },
                {
                  value: "113K",
                  label: "ROI from targeted countries",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={satrr} alt="satrr" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row mt-7 px-4 sm:px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[65.7%] pt-6 sm:pt-8 md:pt-10 lg:pt-15">
            <img src={rew} alt="rew" loading="lazy" className="w-full" />
          </div>

          <div className="h-auto w-full lg:w-[34.3%] pt-6 sm:pt-8 md:pt-9 pl-0 sm:pl-4 md:pl-6 lg:pl-9">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              REWIRING AMERICA
            </div>

            <p className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-semibold text-[#0c2233] leading-[30px] sm:leading-[32px] md:leading-[34px] lg:leading-[36px] mt-1 w-full">
              Maximize ROI on Rewiring America’s Early Paid Advertising Efforts
            </p>
            <p className="text-[16px] mt-6 sm:text-[18px] md:text-[20px] font-normal text-[#0c2233]">
              Here’s how we supported Rewiring America: We helped them test and
              validate early paid advertising efforts by providing
              cross-functional support, including design, content creation,
              tracking, campaign management, and more.
            </p>
            <p className="flex items-center gap-1 mt-6 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
              Read the case study
              <span>
                <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
              </span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto mt-10 flex flex-col-reverse md:flex-col-reverse lg:flex-row px-6 lg:px-27">
          <div className="h-auto w-full lg:w-[34.3%] pt-4">
            <div className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]">
              ANTICA FARMACISTA
            </div>
            <p className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-semibold text-[#0c2233] leading-[32px] sm:leading-[34px] lg:leading-[36px] mt-1 w-[90%]">
              How Antica Farmacista Scaled Beyond Branded Search & Increased
              Paid Media ROAS by 20%
            </p>

            <div className="w-full pt-7 pr-4 sm:pr-6 md:pr-8 lg:pr-9 ">
              {[
                {
                  value: "18%",
                  label: "Increase in revenue",
                  icon: chevUp,
                },
                {
                  value: "32%",
                  label: "Growth in paid media",
                  icon: chevUp,
                },
                {
                  value: "113K",
                  label: "Increase in paid ROAS",
                  icon: chevUp,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between"
                >
                  <div className="flex items-center gap-1 w-[40%]">
                    <img
                      src={item.icon}
                      alt="icon"
                      loading="lazy"
                      className="w-[17%]"
                    />
                    <h3 className="text-[18px] sm:text-[20px] font-extrabold text-[#0c2233]">
                      {item.value}
                    </h3>
                  </div>
                  <div>
                    <p className="text-[18px] sm:text-[20px] font-normal text-[#0c2233]">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}

              <div className="w-full h-[55px] mt-2 border-t-2 border-[#807F7E] flex items-center justify-between">
                <p className="flex items-center gap-1 text-[16px] sm:text-[18px] lg:text-[19px] font-semibold hover:text-[#FF6A39] cursor-pointer transition-transform duration-500 hover:-rotate-6 hover:text-[21px]">
                  Read the case study
                  <span>
                    <BiChevronRight className="text-[22px] sm:text-[24px] lg:text-[30px] hover:text-[#FF6A39]" />
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="h-auto w-full lg:w-[65.7%] cursor-pointer pt-10 lg:pt-15">
            <img src={ant} alt="ant" loading="lazy" className="w-full" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto flex justify-center px-4 sm:px-6 md:px-8 flex-col items-center pt-10 lg:pt-39">
          <div
            className="h-auto py-2 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-4 mt-4 text-xs sm:text-sm font-semibold tracking-wide text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[39px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]"
          >
            EXPLORE
          </div>
          <h1
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] font-semibold 
                 w-full sm:w-[80%] md:w-[65%] lg:w-[43%] 
                 leading-snug sm:leading-tight lg:leading-[60px] 
                 mt-2 tracking-tight lg:tracking-[-1px] 
                 text-[#0c2233] text-center"
          >
            Tackling critical challenges at every stage of the funnel.
          </h1>
          <div className="w-full h-auto pt-6 px-4 sm:px-6 md:px-10 lg:px-23">
            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                CFOs ask CMOs to do more with less.
              </h2>
              <div
                className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 mt-2 lg:mt-4 text-xs sm:text-sm font-bold tracking-wide text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-sm lg:tracking-[1.5px]"
              >
                soona
              </div>
            </div>
            <div className="w-full h-auto py-[42px] flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                We need to improve lead quality while scaling results.
              </h2>
              <div className="h-full flex flex-col gap-2">
                <div className="flex flex-wrap gap-2 lg:gap-1">
                  <div
                    className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Antica Farmacista
                  </div>
                  <div
                    className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Multiverse B2B
                  </div>
                </div>
                <div className="flex flex-wrap justify-start lg:justify-end gap-2 lg:gap-1">
                  <div
                    className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 mt-2 lg:mt-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Thnks
                  </div>
                  <div
                    className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 mt-2 lg:mt-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                  lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                  >
                    Palmetto
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                Identify top converting user flows, and optimize accordingly.
              </h2>
              <div className="flex flex-wrap gap-2 lg:gap-1">
                <div
                  className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Nova Credit
                </div>
                <div
                  className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Acres
                </div>
              </div>
            </div>

            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                We need to validate a new revenue stream.
              </h2>
              <div className="flex flex-wrap gap-2 lg:gap-1">
                <div
                  className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Rewiring America
                </div>
                <div
                  className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  cabi
                </div>
              </div>
            </div>

            <div className="w-full h-auto lg:h-[125px] flex flex-col lg:flex-row items-start lg:items-center justify-between border-t-2 border-b-2 border-[#000000] pr-2 gap-2">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                We need to prove the success of upper and midfunnel channels.
              </h2>
              <div className="flex flex-wrap gap-2 lg:gap-1">
                <div
                  className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  Koji
                </div>
                <div
                  className="h-auto py-2 bg-[#ff6a39] rounded-[40px] flex justify-center items-center px-4 text-xs sm:text-sm font-bold text-[#0C2233] whitespace-normal w-fit 
                lg:h-[45px] lg:py-0 lg:px-5 lg:text-[20px]"
                >
                  starryai
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row px-6 md:px-10 lg:px-19 mt-10 pt-21 pb-24 gap-10 lg:gap-0">
            <div className="w-full lg:w-[49%] h-auto">
              <img src={star1} alt="star" loading="lazy" />
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-9">
                “I view our partnership with Tuff as more like an extension of
                my team.
                <span className="text-[#0C2233] font-bold">
                  We strategize together, ask tough questions, examine the
                  results, optimize – and it just keeps getting better. Exactly
                  what I was looking for.”
                </span>
              </p>
              <div className="flex mt-18 gap-4 items-start">
                <div className="rounded-[40%] w-[60px] h-[60px] overflow-hidden">
                  <img
                    src={brad}
                    alt="brad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Brad Veach
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    VP of Marketing at Thnks
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[49%] h-auto pl-0 lg:pl-13">
              <img src={star1} alt="star" loading="lazy" />
              <p className="text-[20px] md:text-[28px] font-medium text-[#000000] leading-8 mt-9">
                <span className="text-[#0C2233] font-bold">
                  “What’s great about Tuff is that we’ve been guided by them to
                  seek bolder results.
                </span>
                Tuff has been great about being graceful with feedback while
                also making sure the insight that inspired an asset in the first
                place is still rooted in the data.”
              </p>
              <div className="flex mt-18 gap-4 items-start">
                <div className="rounded-[40%] w-[60px] h-[60px] overflow-hidden">
                  <img
                    src={rikin}
                    alt="rikin"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2">
                  <h3 className="text-[20px] font-semibold text-[#0C2233]">
                    Rikin Diwan
                  </h3>
                  <p className="text-[19px] font-medium text-[#0C2233] mt-[-3px]">
                    Chief Growth Officer, soona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-[77vh] homeImg3 flex items-center justify-center p-1 md:px-19">
          <div className="w-[90%] md:w-full h-[360px] bg-[#213545] flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-[30px] sm:text-[42px] md:text-[52px] font-semibold text-[#FFFEFB]">
              Ready to grow?
            </h2>
            <p className="text-[18px] sm:text-[20px] md:text-[24px] font-medium mt-3 text-[#FFFEFB]">
              Your compounding growth curve begins here.
            </p>
            <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold mt-6 p-4 bg-[#FF6A39] px-8 rounded-[2px] transition-transform duration-500 hover:-rotate-6">
              Book a Strategy Call
            </button>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
