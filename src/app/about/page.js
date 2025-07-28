"use client";
import Image from "next/image";
import { useState } from "react"
export default function AboutPage() {

    const [activeTab, setActiveTab] = useState("mission")

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
    }

    const tabs = [
        { key: "mission", label: "Our Mission" },
        { key: "vision", label: "Our Vision" },
        { key: "values", label: "Our Values" },
    ]

    
    return(
        <div>
            <div id="about header div"></div>
            <div>
                <div className="bg-[#DBEAFE] h-144 flex px-26 pt-28">
                    <div className="w-150 h-75">
                        <div className="flex items-center gap-2 mb-10">
                            <div className="bg-[#1D2130] w-19 h-1"></div>
                            <p className="text-[#1D2130] ml-5 font-bold  ">ABOUT US </p>
                        </div>
                        <h1 className="font-bold text-6xl">Discover how we Improve the lives of people.</h1>
                        <p className="mt-6 w-123 text-base text-[#525560] ">When you donate, you&apos;re supporting youth empowerment, students orientations and kingdom expansions —an investment in the leaders of tomorrow.</p>

                    </div>
                    <div className="ml-18 mt-6 relative w-138 h-96 ">
                        <Image
                            src="/images/about-header.jpg"
                            fill={true}
                            alt="About Us Header Image"
                            className="rounded-[20px] object-cover"
                        />
                        <div className="absolute inset-0 rounded-[20px]  "></div>
                    </div>
                </div>
                <div className="px-18">
                    <div className="mt-20 flex justify-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold">Ever Heard Our Story?</h2>
                    </div>                    
                    <div className="flex justify-between ">
                        <div className="mt-10 ">
                            <p className="font-handlee text-2xl font-semibold sm:text-3xl md:text-4xl max-w-full sm:max-w-md lg:max-w-lg">
                                Our Journey started in <span className="text-[#B39D21]">2020...</span>
                            </p>
                            <p className="w-134 text-base text-[#605D64] mt-4">
                                To further support their aspirations, we provide 
                                scholarships for external entrance exams, ensuring that 
                                financial barriers do not stand in the way of their future. 
                                We believe that every child deserves the chance.To further support 
                                their aspirations, we provide scholarships for external entrance exams. 
                                We believe that every child deserves the chance.To further support their 
                                aspirations, we provide scholarships for external entrance exams.

                            </p>
                            <p className="mt-4 font-handlee text-2xl font-semibold sm:text-3xl md:text-4xl max-w-full sm:max-w-md lg:max-w-lg">
                                Now in <span className="text-[#B39D21]">2025,</span> we have set the record
                            </p>
                            <p className="w-134 text-base text-[#605D64] mt-4">
                                We are dedicated to addressing the alarming dropout rates among 
                                secondary school students. We believe that every child deserves the 
                                chance to succeed, which is why we actively engage with students, 
                                teaching them essential leadership skills and empowering them to 
                                set and achieve their goals. To further support their aspirations, 
                                we provide scholarships for external entrance exams, ensuring that 
                                financial barriers do not stand in the way of their future.To further 
                                support their aspirations, we provide scholarships for external entrance 
                                exams, ensuring that financial barriers do not stand in the way of their future.

                            </p>
                        </div>

                        <div className=" relative w-157 h-138">
                            <div className="absolute w-130 h-108 top-0 left-27">
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
                    <div className="">
                        <div className="mt-20 flex justify-center">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl text-black font-semibold">Empowerment runs in our DNA</h2>
                        </div>

                        <div className="mt-8 sm:mt-12 md:mt-16">
                            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                                <div className="relative w-full h-80 sm:h-96 md:h-[620px] sm:w-[620px] lg:w-1/2">
                                    <Image
                                        src="/images/who-we-are-1.jpg"
                                        alt="Students with teachers holding sdg banners"
                                        fill = {true}
                                        className="rounded-lg w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[#000000]/20 rounded-lg"></div>
                                </div>
                                <div className="relative w-full lg:w-1/2">
                                <div className="flex items-start">
                                    <div className="w-3 h-12 sm:h-16 rounded-sm bg-[#B39D21] mr-4"></div>
                                    <h2 className="font-handlee text-xl sm:text-2xl md:text-3xl max-w-full sm:max-w-md lg:max-w-lg">
                                    Raising leaders. Transforming lives. Impacting generations.
                                    </h2>
                                </div>
                                <p className="mt-4 text-[#191825]/50 text-base sm:text-lg max-w-full sm:max-w-md lg:max-w-lg">
                                    We are dedicated to addressing the alarming dropout rates 
                                    among secondary school students. We believe that every child 
                                    deserves the chance to succeed, which is why we actively engage 
                                    with students, teaching them essential leadership skills and 
                                    empowering them to set and achieve their goals. To further support 
                                    their aspirations, we provide scholarships for external entrance 
                                    exams, ensuring that financial barriers do not stand in the way of 
                                    their future.To further support their aspirations, we provide 
                                    scholarships for external entrance exams, ensuring that financial 
                                    barriers do not stand in the way of their future. We believe that 
                                    every child deserves the chance.To further support their 
                                    aspirations, we provide scholarships for external entrance exams, 
                                    ensuring that financial barriers do not stand in the way of their 
                                    future. We believe that every child deserves the chance.We are 
                                    dedicated to addressing the alarming dropout rates among secondary 
                                    school students. We believe that every child deserves the chance to 
                                    succeed, which is why we actively engage with students, teaching them 
                                    essential leadership skills and empowering them to set and achieve their 
                                    goals. To further support their aspirations, we provide scholarships 
                                    for external entrance exams, ensuring that financial barriers do not 
                                    stand in the way of their future.
                                </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 flex">
                            <div className="w-156">
                                <div className="w-156 h-86 relative">
                                    <Image
                                        src="/images/mission-1.jpg"
                                        alt="Students with teachers holding sdg banners"
                                        fill={true}
                                        className="rounded-sm w-full object-cover"
                                    />

                                </div>
                                <div className="mt-6 w-156 h-86 relative">
                                    <Image
                                        src="/images/mission-2.jpg"
                                        alt="Students with teachers holding sdg banners"
                                        fill={true}
                                        className="rounded-sm w-full object-cover"
                                    />

                                </div>
    
                            </div>
                            {/* Content Section */}
                            <div className="flex flex-col bg-[#EFF6FF] px-12 space-y-6 w-full justify-center">
                                <h2 className="text-2xl lg:text-3xl font-bold text-[#00004D] ">{content[activeTab].title}</h2>

                                {/* Tab Navigation */}
                                <div className="flex space-x-10 bg-[#EFF6FF] text-[#191825] p-1 rounded-lg">
                                    {tabs.map((tab) => (
                                    <button
                                        key={tab.key}
                                        onClick={() => setActiveTab(tab.key)}
                                        className={`px-4 py-2 text-sm font-medium transition-all duration-50 ${
                                        activeTab === tab.key
                                            ? "bg-[#EFF6FF] text-[#DC6803] border-b-2 border-[#DC6803] "
                                            : "text-[#767676] hover:text-[#DC6803]"
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                    ))}
                                </div>

                                {/* Content Text */}
                                <div className=" max-w-none">
                                    {content[activeTab].text.split("\n\n").map((paragraph, index) => (
                                    <p key={index} className="text-[#191825]/50 leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                    ))}
                                </div>


                            </div>
                        </div>
              
                    </div>
                </div>
            </div>
        </div>        
    )

}