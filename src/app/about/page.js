"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("mission");

  const content = {
    mission: {
      title: "Concerned about our Mission?",
      text: "We are dedicated to addressing the learning disparities among secondary school students. We believe that every child deserves access to quality education regardless of their background. Our mission is to support students, teaching them essential learning skills and empowering them to set and achieve their goals.\n\nTo further support their aspirations, we provide scholarships to encourage promising pupils, ensuring that financial barriers do not stand in the way of their future. We believe that every child deserves the chance to succeed, which is why we are wholly engaged in this cause.",
    },
    vision: {
      title: "Our Vision for the Future",
      text: "We envision a world where every student has equal access to quality education and the opportunity to reach their full potential. Our vision is to create sustainable educational programs that bridge the gap between disadvantaged communities and educational excellence.\n\nThrough innovative teaching methods and community partnerships, we aim to establish learning centers that serve as beacons of hope and transformation in underserved areas. We see a future where education becomes the great equalizer, opening doors to opportunities for all.",
    },
    values: {
      title: "Our Core Values",
      text: "Integrity guides everything we do - we believe in transparency, accountability, and honest communication with our communities. Compassion drives our commitment to understanding and addressing the unique challenges each student faces.\n\nExcellence is our standard in educational delivery, ensuring that every program we implement meets the highest quality benchmarks. Empowerment is at the heart of our approach, as we focus on building confidence and self-reliance in every student we serve.",
    },
  };

  const tabs = [
    { key: "mission", label: "Our Mission" },
    { key: "vision", label: "Our Vision" },
    { key: "values", label: "Our Values" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Header Section */}
        <div className="bg-hero-background flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-26 py-8 sm:py-12 lg:pt-28 lg:h-144">
          <div className="w-full lg:w-150 max-w-xl mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-6 lg:mb-10">
              <div className="bg-foreground w-12 lg:w-19 h-1"></div>
              <p className="text-foreground font-bold text-sm sm:text-base lg:ml-5">ABOUT US</p>
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
              Discover how we Improve the lives of people.
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-base text-foreground max-w-md lg:w-123">
              When you donate, you&apos;re supporting youth empowerment, students orientations and kingdom expansions —an investment in the leaders of tomorrow.
            </p>
          </div>
          <div className="w-full lg:w-138 max-w-xl relative h-64 sm:h-80 lg:h-96 lg:ml-18 lg:mt-6">
            <Image
              src="/images/about-header.jpg"
              fill={true}
              alt="About Us Header Image"
              className="rounded-[20px] object-cover"
            />
            <div className="absolute inset-0 rounded-[20px]"></div>
          </div>
        </div>

        {/* Story Section */}
        <div className="px-4 sm:px-10 lg:px-18">
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-foreground font-semibold">
              Ever Heard Our Story?
            </h2>
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-0">
            <div className="w-full lg:w-1/2 lg:mt-10">
              <p className="font-handlee text-xl sm:text-2xl lg:text-4xl font-semibold max-w-full sm:max-w-md lg:max-w-lg">
                Our Journey started in <span className="text-[#B39D21]">2020...</span>
              </p>
              <p className="mt-4 text-sm sm:text-base lg:text-base text-muted-foreground max-w-full sm:max-w-md lg:w-134">
                To further support their aspirations, we provide scholarships for external entrance exams, ensuring that financial barriers do not stand in the way of their future. We believe that every child deserves the chance.
              </p>
              <p className="mt-4 font-handlee text-xl sm:text-2xl lg:text-4xl font-semibold max-w-full sm:max-w-md lg:max-w-lg">
                Now in <span className="text-[#B39D21]">2025,</span> we have set the record
              </p>
              <p className="mt-4 text-sm sm:text-base lg:text-base text-muted-foreground max-w-full sm:max-w-md lg:w-134">
                We are dedicated to addressing the alarming dropout rates among secondary school students. We believe that every child deserves the chance to succeed, which is why we actively engage with students, teaching them essential leadership skills and empowering them to set and achieve their goals.
              </p>
            </div>
            <div className=" w-full lg:w-1/2 relative lg:ml-12 w-157 h-138">
                <div className="absolute w-full lg:w-130 h-64 sm:h-80 lg:h-108  top-0 left-27">
                    <Image
                        src="/images/story-1.jpg"
                        alt="Our Story Image"
                        width={522}
                        height={432}
                        className="object-cover rounded-sm"
                    />                                
                </div>
                <div className="absolute top-40 w-110 h-91 ">
                    <Image
                        src="/images/story-2.jpg"
                        alt="Our Story Image"
                        fill={true}
                        className="object-cover rounded-sm"
                    
                    />  
                                                    
                </div>
            </div>

          </div>

          {/* Empowerment Section */}
          <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl text-black font-semibold">
              Empowerment runs in our DNA
            </h2>
          </div>
          <div className="mt-8 sm:mt-12 lg:mt-16 flex flex-col lg:flex-row gap-6 lg:gap-12">
            <div className="relative w-full h-64 sm:h-80 lg:h-[620px] lg:w-1/2">
              <Image
                src="/images/who-we-are-1.jpg"
                alt="Students with teachers holding sdg banners"
                fill={true}
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-0 bg-[#000000]/20 rounded-lg"></div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex items-start">
                <div className="w-3 h-10 sm:h-12 lg:h-16 rounded-sm bg-[#B39D21] mr-4"></div>
                <h2 className="font-handlee text-xl sm:text-2xl lg:text-3xl max-w-full sm:max-w-md lg:max-w-lg">
                  Raising leaders. Transforming lives. Impacting generations.
                </h2>
              </div>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground max-w-full sm:max-w-md lg:max-w-lg">
                We are dedicated to addressing the alarming dropout rates among secondary school students. We believe that every child deserves the chance to succeed, which is why we actively engage with students, teaching them essential leadership skills and empowering them to set and achieve their goals.
              </p>
            </div>
          </div>

          {/* Mission/Vision/Values Section */}
          <div className="mt-8 sm:mt-12 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-156 flex flex-col gap-6">
              <div className="relative w-full h-64 sm:h-80 lg:h-86">
                <Image
                  src="/images/mission-1.jpg"
                  alt="Students with teachers holding sdg banners"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
              <div className="relative w-full h-64 sm:h-80 lg:h-86">
                <Image
                  src="/images/mission-2.jpg"
                  alt="Students with teachers holding sdg banners"
                  fill={true}
                  className="rounded-sm object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-full flex flex-col bg-[#EFF6FF] px-4 sm:px-8 lg:px-12 py-6 lg:py-8 space-y-6 justify-center">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#00004D]">
                {content[activeTab].title}
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-4 bg-[#EFF6FF] text-[#191825] p-1 rounded-lg">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`px-3 py-2 text-xs sm:text-sm lg:text-sm font-medium transition-all duration-50 ${
                      activeTab === tab.key
                        ? "bg-[#EFF6FF] text-[#DC6803] border-b-2 border-[#DC6803]"
                        : "text-[#767676] hover:text-[#DC6803]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="max-w-none">
                {content[activeTab].text.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-[#191825]/50 leading-relaxed mb-4 text-xs sm:text-sm lg:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}