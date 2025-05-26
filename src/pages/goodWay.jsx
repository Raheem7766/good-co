import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.png";
import check from "../assets/check.svg";
import Footer from "../components/Footer";

export default function goodWay() {
  return (
    <>
      <div className="w-full fixed top-0 z-50 bg-[#0C2233]">
        <Navbar />
      </div>
      <section>
        <div className="w-full h-auto flex flex-col lg:flex-row creative pt-[80px] pb-15">
          <div className="order-2 sm:order-1 w-full lg:w-[60%] h-auto pt-14 px-6 lg:px-20">
            <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
              PART OF GOODWAY GROUP
            </div>
            <h2 className="text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] font-semibold text-[#0C2233] leading-tight lg:leading-[60px] mt-5 md:tracking-[-2.5px]">
              We are the performance marketing engine of the Goodway Group.
            </h2>
            <p className="text-base sm:text-lg text-[#0C2233] mt-8 leading-[27px] max-w-[94%]">
              Established in 2016, Tuff has a proven track record as a growth
              leader, working directly with some of the most exciting startups,
              scaleups, and established brands. Today, as a part of the Goodway
              Group, our approach is all about making marketing a powerful force
              for growth. We’ve got supercharged, cross-functional agile teams
              that are all about getting things done. They focus on rapid test
              and learn strategies to keep things moving forward, leveraging
              consumer intent signals, technology, media, and content. We’re not
              just redefining performance; we’re making it better than ever.
            </p>
            <button className="text-lg sm:text-xl font-extrabold text-[#0C2233] bg-[#FF6A39] mt-5 px-8 py-5 rounded-md transition-transform duration-500 hover:-rotate-6">
              Learn more about Goodway Group
            </button>
          </div>

          <div className="order-1 sm:order-2 w-full lg:w-[40%] h-auto pt-14 px-6 mt-18 md:mt-0 flex justify-center items-center">
            <img
              src={Hero}
              alt="Hero"
              loading="lazy"
              className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px] max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full h-auto pb-24 adline bg-[#0C2233] pt-3">
          <div className="h-[40px] w-max p-2 bg-[#CEFD94] m-auto rounded-[20px] flex justify-center items-center px-5 mt-26 text-sm font-semibold tracking-[1.5px] text-[#0C2233]">
            OUR SERVICES
          </div>

          <p className="text-[24px] sm:text-[32px] lg:text-[43px] mx-auto font-semibold text-[#FFFEFB] leading-snug lg:leading-[3.5rem] mt-3 text-center max-w-[95%] sm:max-w-[50%]">
            We’ve got you covered with a wide range of experiences and knowledge
          </p>

          <div className="w-full h-auto flex flex-wrap gap-8 px-6 sm:px-10 lg:px-19 justify-center">
            {/* Card 1 */}
            <div className="w-full sm:w-[48%] lg:w-[23.2%] h-auto mt-16">
              <h2 className="text-[28px] font-semibold text-[#FFFEFB] text-center">
                Creative & Content
              </h2>
              {[
                "Performance Creative",
                "Strategic Messaging",
                "Video Marketing",
                "Content Marketing",
              ].map((item, i) => (
                <div
                  key={i}
                  className="h-auto w-full bg-[#304351] border border-[#495966] text-[20px] font-semibold mt-4 py-7 text-[#FFFEFB] text-center"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-[48%] lg:w-[23.2%] h-auto mt-16">
              <h2 className="text-[28px] font-semibold text-[#FFFEFB] text-center">
                Measurement
              </h2>
              <div className="h-auto w-full bg-[#304351] border border-[#495966] text-[20px] font-semibold mt-4 py-7 text-[#FFFEFB] text-center">
                Data & Analytics
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-[48%] lg:w-[23.2%] h-auto mt-16">
              <h2 className="text-[28px] font-semibold text-[#FFFEFB] text-center">
                Media Activation
              </h2>
              {["Socail", "Programmatic", "Search", "TikTok", "SEO"].map(
                (item, i) => (
                  <div
                    key={i}
                    className="h-auto w-full bg-[#304351] border border-[#495966] text-[20px] font-semibold mt-4 py-7 text-[#FFFEFB] text-center"
                  >
                    {item}
                  </div>
                )
              )}
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-[48%] lg:w-[23.2%] h-auto mt-16">
              <h2 className="text-[28px] font-semibold text-[#FFFEFB] text-center">
                Customer Experience
              </h2>
              {["CRO", "Email"].map((item, i) => (
                <div
                  key={i}
                  className="h-auto w-full bg-[#304351] border border-[#495966] text-[20px] font-semibold mt-4 py-7 text-[#FFFEFB] text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-22 pb-24">
          <h2 className="text-[30px] md:text-[43px] font-semibold text-[#0C2233] text-center">
            Engagements go beyond tactics and channels.
          </h2>
          <p className="text-[20px] font-medium text-[#0C2233] mx-auto text-center w-[90%] md:w-[70%] lg:w-[53%] mt-3">
            No matter what your current growth stage, we are equipped to help
            move your marketing and team forward with remote collaboration best
            practices.
          </p>

          <div className="w-full h-auto flex flex-col lg:flex-row gap-8 px-6 md:px-10 lg:px-19 mt-16">
            <div className="w-full lg:w-[31.2%] h-auto px-6 md:px-8 pt-8 pb-17 border-[1px] border-[#E0E0DF]">
              <img src={check} alt="check" loading="lazy" />
              <h2 className="text-[22px] font-extrabold mt-8 text-[#0C2233]">
                Strategy & Execution
              </h2>
              <p className="text-[17px] font-medium text-[#0C2233] mt-5">
                Our team has full-stack skills and technical expertise, so we’re
                not afraid to get in the weeds. This includes things like rapid
                message testing, building amazingly effective web pages,
                usability testing, ad optimization, A/B testing, and
                multivariate testing. We’re ready to bolt-on to your existing
                marketing team to support the overall strategy and nitty-gritty
                execution.
              </p>
            </div>

            <div className="w-full lg:w-[31.2%] h-auto px-6 md:px-8 pt-8 pb-17 border-[1px] border-[#E0E0DF]">
              <img src={check} alt="check" loading="lazy" />
              <h2 className="text-[22px] font-extrabold mt-8 text-[#0C2233]">
                Consulting
              </h2>
              <p className="text-[17px] font-medium text-[#0C2233] mt-5">
                We offer a mix of individual and/or team-based coaching services
                to managers and senior growth leaders. We’ll support you on your
                day-to-day or unique complex growth needs to give your team a
                measurable lift. We believe strategy is not a phase, but a way
                of making deliberate decisions and we can bring a long-term
                perspective to help execute your vision.
              </p>
            </div>

            <div className="w-full lg:w-[31.2%] h-auto px-6 md:px-8 pt-8 pb-17 border-[1px] border-[#E0E0DF]">
              <img src={check} alt="check" loading="lazy" />
              <h2 className="text-[22px] font-extrabold mt-8 text-[#0C2233]">
                Help with hiring
              </h2>
              <p className="text-[17px] font-medium text-[#0C2233] mt-5">
                You want to make sure you have a meaningful interview process
                and making the right choices to help you long into the future.
                Many marketing leaders over the years have looked to Tuff to
                provide coverage and the peace of mind that comes with trusted
                interviewing, assessments, and training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto lg:h-[77vh] homeImg3 flex items-center justify-center p-1 pt-10 lg:pt-0 md:px-10 lg:px-19">
          <div className="w-full md:w-[90%] lg:w-full h-auto lg:h-[360px] bg-[#213545] flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-20 lg:px-92 py-10 lg:py-0">
            <h2 className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[52px] font-semibold text-[#FFFEFB]">
              What does success look like for your team?
            </h2>
            <button className="text-[#0C2233] cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-6 py-3 px-6 lg:p-4 lg:px-8 bg-[#FF6A39] rounded-[2px] transition-transform duration-500 hover:-rotate-6">
              Let's Talk
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
