"use client";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function SupportPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [allowThanks, setAllowThanks] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { fullName, email, allowThanks });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="bg-hero-background flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-26 py-8 sm:py-12 lg:pt-28 lg:h-144">
          <div className="w-full lg:w-150 max-w-xl mb-8 lg:mb-0">
            <div className="flex items-center gap-2 mb-6 lg:mb-10">
              <div className="bg-foreground w-12 lg:w-19 h-1"></div>
              <p className="text-foreground font-bold text-sm sm:text-base lg:ml-5">DONATE</p>
            </div>
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-6xl leading-tight">
              Support Our Mission to empower people.
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-base text-foreground max-w-md lg:w-123">
              When you donate, you&apos;re supporting youth empowerment, students orientations and kingdom expansions —an investment in the leaders of tomorrow.
            </p>
          </div>
          <div className="w-full lg:w-138 max-w-xl relative h-64 sm:h-80 lg:h-96 lg:ml-18 lg:mt-6">
            <Image
              src="/images/donate.png"
              fill={true}
              alt="About Us Header Image"
              className="rounded-[20px] object-cover"
            />
            <div className="absolute inset-0 rounded-[20px]"></div>
          </div>
        </div>
        <div className="bg-background p-4 sm:p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <div className="mb-8">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-semibold text-foreground mb-4">
                Introduction
              </h1>
              <p className="text-foreground/80 leading-relaxed mb-4 text-sm sm:text-base">
                We believe that community are the lifeline behind great lasting secondary school students. We believe that
                every child deserves the chance to succeed, which is why we dedicate to supporting our students from
                underserved communities with a comprehensive financial aid program that covers tuition, books, and other
                essentials, we provide scholarships for external entrance exams, ensuring that financial barriers do not
                stand in the way of their future but in our actively engage with students, teaching them essential
                leadership skills and empowering them to act and achieve their goals. To further support their aspirations.
              </p>

              <div
                className={`overflow-hidden text-[#191825]/50 transition-all duration-500 ease-in-out ${
                  isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="mb-4 text-sm sm:text-base">
                  Our comprehensive approach extends beyond traditional academic support. We understand that true
                  educational transformation requires addressing the whole student - their academic needs, personal
                  development, and future aspirations. Through our mentorship programs, we pair students with successful
                  professionals who provide guidance, inspiration, and real-world insights into various career paths.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                  We also recognize the importance of family and community involvement in a student&apos;s success. Our
                  programs include workshops for parents and guardians, helping them understand how to best support their
                  children&apos;s educational journey. We organize community events that celebrate student achievements and
                  foster a culture of learning and excellence.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                  Technology plays a crucial role in modern education, and we ensure our students have access to the
                  latest educational tools and resources. From computer labs to online learning platforms, we bridge the
                  digital divide that often exists in underserved communities. Our students graduate not only with strong
                  academic foundations but also with the digital literacy skills essential for success in today&apos;s world.
                </p>
                <p className="text-sm sm:text-base">
                  Every donation, every investment in our mission, directly impacts a student&apos;s life. When you support us,
                  you&apos;re not just funding education - you&apos;re investing in dreams, potential, and the future leaders of our
                  communities. Together, we can break the cycle of educational inequality and create lasting change.
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#B39D21] font-bold mt-4 focus:outline-none hover:underline text-sm sm:text-base"
              >
                {isExpanded ? "SHOW LESS" : "LEARN MORE..."}
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Left Column - Subscription Form */}
              <div className="bg-background rounded-lg p-4 sm:p-6 lg:p-6 shadow-sm">
                <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-foreground mb-2">
                  Be an investor in impact
                </h2>
                <p className="text-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                  Want to stay updated on how your donation is making a difference?
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-xs sm:text-sm lg:text-sm font-medium text-foreground mb-1">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm lg:text-sm font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-sm sm:text-base"
                    />
                  </div>

                  <div className="flex items-center space-x-2 py-2">
                    <input
                      id="thanks"
                      type="checkbox"
                      checked={allowThanks}
                      onChange={(e) => setAllowThanks(e.target.checked)}
                      className="h-4 w-4 text-[#000080] focus:ring-[#000080] border-gray-300 rounded"
                    />
                    <label htmlFor="thanks" className="text-xs sm:text-sm lg:text-sm text-foreground">
                      May we thank you personally?
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#000080] hover:bg-[#5c4d9c] text-white py-2 sm:py-3 px-4 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm sm:text-base"
                  >
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Right Column - Account Details */}
              <div className="bg-background rounded-lg p-4 sm:p-6 lg:p-6 shadow-sm">
                <h2 className="font-handlee text-lg sm:text-xl lg:text-xl font-bold text-foreground mb-4 sm:mb-6">
                  Want to Support, Here&apos;s the account number.
                </h2>

                <div className="border border-gray-200 rounded-lg p-3 sm:p-4 lg:p-4 space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm lg:text-sm font-medium text-foreground">Account Number</span>
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-xs sm:text-sm lg:text-sm font-medium">2223300004569987</span>
                      <button
                        onClick={() => copyToClipboard("2223300004569987")}
                        className="p-1 hover:bg-gray-100 rounded transition-colors duration-200"
                        title="Copy account number"
                      >
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm lg:text-sm font-medium text-foreground">Beneficiary Name</span>
                    <span className="text-xs sm:text-sm lg:text-sm">Organization</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm lg:text-sm font-medium text-foreground">Bank</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs sm:text-sm lg:text-sm">Access Bank</span>
                      <svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="mt-3 sm:mt-4 lg:mt-4 p-2 sm:p-3 lg:p-3 bg-blue-50 rounded-md">
                  <p className="text-xs sm:text-sm lg:text-xs text-blue-800 flex items-start space-x-2">
                    <span className="text-blue-600 mt-0.5 text-sm">💡</span>
                    <span>
                      PLEASE SEND PROOF OF YOUR PAYMENT TO{" "}
                      <span className="font-medium">TEAM. WHATSAPP OR EMAIL FOR ACKNOWLEDGMENT YOUR SUPPORT</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}