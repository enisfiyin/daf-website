"use client"
import Image from "next/image"
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTheme } from "../components/theme-provider"

const items = [
  {
    image: "/icons/education.png",
    title: "Education",
    description:
      "We are committed to empowering students through accessible and quality education, ensuring they have the tools and resources needed to build a brighter future.",
  },
  {
    image: "/icons/youth-empowerment.png",
    title: "Youth Empowerment and Sustainable Development",
    description:
      "We aim to equip young people with the knowledge and skills to develop sustainable solutions, encouraging them to take initiative and create lasting impact in their communities.",
  },
  {
    image: "/icons/leadership.png",
    title: "Leadership and Governance",
    description:
      "Our focus is on fostering responsible leaders who can drive positive change in their communities, equipping them with the skills necessary to inspire others.",
  },
  {
    image: "/icons/church.png",
    title: "Church Expansion",
    description:
      "We strive to enhance spiritual growth and outreach by expanding faith communities, fostering support that nurtures both individual and collective faith journeys.",
  },
  {
    image: "/icons/partnership.png",
    title: "Partnership and Collaboration",
    description:
      "We believe in creating impactful alliances with various stakeholders to strengthen our efforts, ensuring that we work together to amplify our reach in the community.",
  },
]

const testimonials = [
  {
    title: "An amazing service",
    image: "/images/testimonial1.png",
    quote:
      "An amazing service! Lorem ipsum dolor sit amet consectetur adipiscing elit lectus a nunc mauris scelerisque sed egestas.",
    author: "John Carter",
    role: "Designer at Binfer",
  },
  {
    title: "One of a kind service",
    image: "/images/testimonial2.png",
    quote: "One of a kind service! Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet.",
    author: "Sophie Moore",
    role: "Head of Design at Blendia",
  },
  {
    title: "The best service",
    image: "/images/testimonial3.png",
    quote: "The best service! Convallis posuere morbi leo urna molestie at elementum eu facilisis.",
    author: "Andy Smith",
    role: "Developer at Acme",
  },
  {
    title: "One of a kind service",
    image: "/images/testimonial2.png",
    quote: "One of a kind service! Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet.",
    author: "Sophie Moore",
    role: "Head of Design at Blendia",
  },
  {
    title: "One of a kind service",
    image: "/images/testimonial2.png",
    quote: "One of a kind service! Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet.",
    author: "Sophie Moore",
    role: "Head of Design at Blendia",
  },
]

const projects = [
  {
    title: "The Agenda",
    description:
      "The Agenda Podcast is an engaging audio platform designed to spark insightful conversations on leadership, innovation, and social transformation. Targeting Nigerian youth, policymakers, social change makers, and the wider African public, it promotes a culture of responsibility, ownership, and collaboration as essential tools for driving change on the continent.",
    image: "/images/project-a.jpg",
  },
  {
    title: "Dare Adeboye Annual Scholarship Scheme",
    description:
      "DASS is a scholarship initiative that provides financial support to secondary school students from low-income families preparing for WAEC/NECO or promotional exams. The goal is to eliminate financial obstacles to education and empower young, brilliant minds to pursue their academic dreams and leadership potential.",
    image: "/images/project-a.jpg",
  },
  {
    title: "Impact Secondary School Project",
    description:
      "The Impact Project is a leadership development initiative for secondary school students across Nigeria. It focuses on nurturing self-leadership and transformational values, equipping young minds with the skills to become agents of change in their communities. By prioritizing leadership, the project seeks to build a generation capable of driving growth and transformation across Africa.",
    image: "/images/project-a.jpg",
  },
  {
    title: "Future Leaders Assembly",
    description:
      "Future Leaders Assembly is DAF's flagship event, empowering junior and senior secondary school students to become future-ready leaders. The program inspires teenagers to embrace responsibility, develop leadership traits, and acquire problem-solving, public speaking, and communication skills through mentorship, hands-on training, and networking opportunities",
    image: "/images/project-a.jpg",
  },
  {
    title: "Redemption City Career Fair",
    description:
      "In August 2024, the Redemption City Career Fair hosted over 5,000 job seekers and 50+ companies. The event is designed to connect young talents with employment opportunities while positioning Redemp",
    image: "/images/project-a.jpg",
  },
  {
    title: "Dare Adeboye Foundation Leadership Bootcamp",
    description:
      "The Leadership Bootcamp is a capacity-building program that equips Nigerian youth with vital leadership skills such as public speaking, decision-making, and negotiation. The second edition focuses on training 100 university students, graduates, and young professionals aged 18 – 35, empowering them to become effective leaders in politics, governance, and social impact sectors.",
    image: "/images/project-a.jpg",
  },
]

export default function Home() {
  const { theme } = useTheme()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="min-h-screen min-w-[320px] bg-background text-foreground transition-colors duration-300">
      <Hero />
      <div className="flex flex-col px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 md:space-x-12 lg:space-x-16 justify-center items-center mt-8 sm:mt-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">250K</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Children Reached</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">100K</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Youth Empowered</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground">2+</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">States Reached</p>
          </div>
        </div>

        {/* Who Are We Section */}
        <div className="flex justify-center items-center mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold">WHO ARE WE?</h2>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
            <div className="relative w-full h-80 sm:h-96 md:h-[500px] sm:w-[620px] lg:w-1/2">
              <Image
                src="/images/who-we-are-1.jpg"
                alt="Students with teachers holding sdg banners"
                fill={true}
                className="rounded-lg w-full object-cover"
              />
              <div className={`absolute inset-0 rounded-lg ${theme === "dark" ? "bg-black/40" : "bg-black/20"}`}></div>
            </div>
            <div className="relative w-full lg:w-1/2">
              <div className="flex items-start">
                <div className="w-3 h-12 sm:h-16 rounded-sm bg-accent mr-4"></div>
                <h2 className="font-handlee text-xl sm:text-2xl md:text-3xl max-w-full sm:max-w-md lg:max-w-lg text-foreground">
                  Raising leaders. Transforming lives. Impacting generations.
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-full sm:max-w-md lg:max-w-lg">
                The Dare Adeboye Foundation (DAF) is a legacy and impact-driven organisation established to honour the
                life, values, and vision of Pastor Oluwadamilare Adeboye, a passionate advocate for youth development,
                leadership, and community transformation across Africa. DAF exists to continue his extraordinary legacy
                by empowering the next generation through education, leadership, and mentorship. We believe in the power
                of young people to shape a better future and are committed to equipping them with the tools,
                opportunities, and platforms to lead change in their communities.
              </p>
              <button className="mt-6 bg-accent hover:bg-accent/90 w-48 sm:w-56 h-12 sm:h-14 rounded-lg shadow-md font-bold text-accent-foreground transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-12 mt-8 sm:mt-12 lg:mt-16">
            <div className="relative w-full lg:w-1/2 h-80 sm:h-96 md:h-[500px]">
              <Image
                src="/images/scholarship-2.png"
                alt="Students with teachers holding sdg banners"
                fill={true}
                className="rounded-lg w-full h-auto object-cover"
              />
              <div className={`absolute inset-0 rounded-lg ${theme === "dark" ? "bg-black/40" : "bg-black/20"}`}></div>
            </div>
            <div className="relative w-full lg:w-1/2">
              <div className="flex items-start">
                <div className="w-3 h-12 sm:h-16 rounded-sm bg-accent mr-4"></div>
                <h2 className="font-handlee text-xl sm:text-2xl md:text-3xl max-w-full sm:max-w-md lg:max-w-lg text-foreground">
                  When you empower one child through education, you uplift an entire community.
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground text-base sm:text-lg max-w-full sm:max-w-md lg:max-w-lg">
                Since inception, we have empowered over 1,500 young leaders, disbursed over ₦10 million in scholarships,
                and collaborated with partners like MTN Nigeria, Ogun State Government, Techpoint, and The Coven Works
                to scale our impact. We are not just continuing a mission, we are building a movement that reflects
                Pastor Dare Adeboye's unwavering belief in the potential of young Africans to drive lasting change.
              </p>
              <button className="mt-6 bg-accent hover:bg-accent/90 w-48 sm:w-56 h-12 sm:h-14 rounded-lg shadow-md font-bold text-accent-foreground transition-colors">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Did You Know Section */}
        <div className="relative mt-12 sm:mt-16 md:mt-20 w-full h-96 sm:h-[400px] md:h-[450px]">
          <Image
            src="/images/poor-children.jpg"
            alt="Our facilitator with students during an outdoor session"
            fill
            className="object-cover rounded-2xl"
          />
          <div
            className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-gradient-to-r from-slate-900/90 to-slate-700/90" : "bg-gradient-to-r from-[#0D0D7C]/80 to-[#6C6C6C]/80"}`}
          ></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 sm:px-8 md:px-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Did You Know?</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 sm:mt-8 text-center">
              Over 30% of students drop out of secondary school due to financial constraints. This results in lost
              opportunities for many young individuals. By providing scholarships, we help remove these financial
              barriers, enabling students to continue their education and pursue their dreams. Your support can make a
              crucial difference in their lives.
            </p>
            <button className="bg-primary hover:bg-primary/90 w-40 sm:w-48 h-12 sm:h-14 rounded-lg shadow-md font-bold text-primary-foreground mt-6 sm:mt-8 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <div className="flex justify-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold">WHAT WE DO</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-8 sm:mt-12 md:mt-16">
            <div className="w-full lg:w-1/2">
              <p className="font-handlee text-lg sm:text-xl md:text-2xl max-w-full sm:max-w-md lg:max-w-lg text-foreground">
                We are dedicated to creating a positive impact through our core pillars, which guide our mission and
                drive our initiatives:
              </p>
              <div className="relative w-full h-80 sm:h-96 md:h-[500px] mt-4 sm:mt-6">
                <Image
                  src="/images/agenda.jpeg"
                  alt="Students holding sdg banners"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex h-auto min-h-[120px] sm:min-h-[140px] border-l-8 border-primary rounded-2xl shadow-md bg-card p-4 transition-colors"
                >
                  <div className="flex justify-center items-center w-12 sm:w-16">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={`${item.title} icon`}
                      width={48}
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div className="ml-3 sm:ml-4 flex-1">
                    <h2 className="text-base sm:text-lg md:text-xl font-bold text-card-foreground">{item.title}</h2>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="relative w-full mt-6 h-auto min-h-[1000px] sm:min-h-[1000px] md:min-h-[800px] sm:mt-6 md:mt-21">
        <Image
          src="/images/gallery-background.jpg"
          alt="Gallery background"
          fill={true}
          className={`object-cover rounded-2xl ${theme === "dark" ? "opacity-10" : "opacity-5"}`}
        />
        <div className="absolute mt-8 w-full justify-center items-center flex">
          <h2 className="text-5xl text-primary font-semibold">Gallery</h2>
        </div>
        <div className="absolute w-full justify-center items-center flex mt-4">
          <div className="md:flex">
            <div className="flex w-full mt-25 md:mt-29">
              <div className="flex flex-col mt-18 relative">
                <div className="relative w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/learn-more.jpg"
                    alt="Gallery image 1"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/000A2472.jpg"
                    alt="Gallery image 2"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col ml-2 md:ml-[21px] relative">
                <div className="relative w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image src="/images/sdg.jpg" alt="Gallery image 3" fill={true} className="rounded-2xl object-cover" />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/students.jpg"
                    alt="Gallery image 4"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col mt-31 ml-2 md:ml-[21px] relative">
                <div className="relative w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/064A4810.png"
                    alt="Gallery image 5"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col mt-18 ml-2 md:ml-[21px] relative">
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/064A4765-2.png"
                    alt="Gallery image 6"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex w-full md:mt-21">
              <div className="flex flex-col mt-36 ml-2 md:ml-[21px] relative">
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/064A4811-2.png"
                    alt="Gallery image 7"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col mt-21 ml-2 md:ml-[21px] relative">
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/IMG_9374.jpg"
                    alt="Gallery image 8"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col mt-2 ml-2 md:ml-[21px] relative">
                <div className="relative w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/who-we-are-2.jpg"
                    alt="Gallery image 9"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/IMG-20240722-WA0263.jpg"
                    alt="Gallery image 10"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col mt-22 ml-2 md:ml-[21px] relative">
                <div className="relative w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/000A2174.jpg"
                    alt="Gallery image 11"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
                <div className="relative mt-4 w-[80px] md:w-[88px] xl:w-[143px] aspect-[4/5]">
                  <Image
                    src="/images/000A2191.jpg"
                    alt="Gallery image 12"
                    fill={true}
                    className="rounded-2xl object-cover"
                  />
                  <div
                    className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-blue-900/30" : "bg-[#3E66DF]/20"}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full flex flex-col justify-center items-center mt-12 sm:mt-16 pb-8 sm:pb-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-foreground">
            Our Impact Stories
          </h3>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-full sm:max-w-md lg:max-w-2xl text-center text-muted-foreground">
            Our impact is captured in these powerful moments, each photo reflects lives touched, communities empowered,
            and a legacy of service that continues to inspire the next generation of African leaders.
          </p>
          <button className="bg-primary hover:bg-primary/90 w-48 sm:w-64 h-12 sm:h-14 rounded-lg shadow-md font-bold text-primary-foreground mt-6 sm:mt-8 transition-colors">
            SEE MORE PICTURES
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:justify-center sm:items-center mt-12 sm:mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold">
            What People Are Saying About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-full sm:max-w-md lg:max-w-2xl sm:text-center text-muted-foreground">
            From students to parents, educators to volunteers, the voices of those we&quot;ve impacted speak volumes.
            Their stories reflect the real change and hope the Dare Adeboye Foundation brings to communities every day.
          </p>
        </div>
        <div className="mt-8 sm:mt-12 overflow-hidden">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-card border border-border p-4 sm:p-6 w-full max-w-sm sm:max-w-md rounded-lg shadow-md transition-colors">
                  <div className="flex items-center mb-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt="Testimonial"
                      fill
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-card-foreground">
                    &quot;{testimonial.title}&quot;
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground italic mt-2">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-base sm:text-lg mt-3 font-semibold text-card-foreground">{testimonial.author}</p>
                  <p className="text-sm sm:text-base text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center">
            <button className="bg-primary hover:bg-primary/90 mt-8 sm:mt-12 w-48 sm:w-64 h-12 sm:h-14 rounded-lg shadow-md font-bold text-primary-foreground transition-colors">
              VIEW MORE TESTIMONIALS
            </button>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="mt-16 sm:mt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:justify-center sm:items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold">Our Upcoming Projects</h2>
          <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 max-w-full sm:max-w-md lg:max-w-2xl sm:text-center text-muted-foreground">
            We&apos;re gearing up for even greater impact, from exciting new scholarship opportunities to transformative
            youth empowerment programs. Our upcoming projects are purposefully designed to reach farther, uplift more
            lives, and shape a brighter future across Africa. Stay connected. The next chapter is bold, intentional, and
            for you.
          </p>
        </div>
        <div className="mt-8 sm:mt-12">
          <Slider {...settings2}>
            {projects.map((project, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="relative bg-card px-4 sm:px-6 w-full max-w-sm sm:max-w-md h-86 sm:h-[420px] rounded-[20px] border border-border shadow-md transition-colors">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt="Project"
                    fill
                    className="object-cover rounded-[20px]"
                  />
                  <div
                    className={`absolute inset-0 rounded-[20px] ${theme === "dark" ? "bg-black/70" : "bg-black/50"}`}
                  ></div>
                  <div className="absolute">
                    <h3 className="text-lg leading-tight sm:text-xl md:text-2xl mt-10 sm:mt-12 w-11/12 font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base mt-3 sm:mt-3 w-11/12 text-white">{project.description}</p>
                  </div>
                  <button className="absolute bg-white hover:bg-gray-100 w-36 sm:w-40 h-12 sm:h-14 rounded-lg shadow-md font-bold text-primary bottom-4 sm:bottom-6 left-4 sm:left-6 transition-colors">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Stay Updated Section */}
      <div className="mt-16 sm:mt-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        <div className="relative flex w-full justify-center items-center h-120 sm:h-96 md:h-[500px]">
          <Image src="/images/stay-updated.jpg" alt="Stay Updated" fill className="object-cover rounded-2xl" />
          <div
            className={`absolute inset-0 rounded-2xl ${theme === "dark" ? "bg-slate-900/90" : "bg-[#292C7C]/80"}`}
          ></div>
          <div className="absolute inset-0 flex flex-col sm:w-full sm:justify-center sm:items-center text-white px-7 sm:px-9">
            <h2 className="font-semibold mt-6 sm:mt-6 sm:w-158 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
              Stay Updated
            </h2>
            <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-6 sm:w-158 md:text-center">
              Be the first to know about our latest projects, inspiring stories, and impact-driven events.
            </p>
            <div className="mt-4 sm:mt-1 flex flex-col w-full sm:w-158 mt-8">
              <label htmlFor="name" className="">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder=""
                className="w-full sm:w-80 md:w-full h-9 sm:h-14 px-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <label htmlFor="email" className="mt-4">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder=""
                className="w-full sm:w-80 md:w-full h-9 sm:h-14 px-4 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            {/* Checkbox and Label */}
            <div className="flex items-start mt-6 sm:mt-8 max-w-full sm:max-w-158">
              <div className="w-5 h-5">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-5 mt-1 w-5 text-white appearance-none bg-white checked:bg-accent focus:ring-accent border-gray-300 rounded relative checked:after:content-['✔'] checked:after:absolute checked:after:text-white checked:after:-top-0.5 checked:after:left-1"
                />
              </div>
              <div>
                <label htmlFor="terms" className="ml-2 text-sm sm:text-base text-white">
                  Subscribe to stay connected with how we are transforming lives, one community at a time.
                </label>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="bg-white hover:bg-gray-100 text-primary w-36 sm:w-40 h-12 sm:h-14 rounded-lg shadow-md font-bold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <Footer />
    </div>
  )
}
