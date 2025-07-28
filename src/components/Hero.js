"use client"
import Image from "next/image"
import { useTheme } from "./theme-provider"
import Navbar from "./Navbar"

export default function Hero() {
  const { theme } = useTheme()
  
  return (
    <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen w-full">
      {/* Navigation Component */}
      <Navbar />

      {/* Hero Image */}
      <Image
        className="object-cover"
        src="/images/header.jpg"
        alt="Empowering communities hero image"
        fill
        priority
        quality={85}
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#000000]/20 from-70% sm:from-80% lg:from-86% ${theme === "dark" ? "to-background/80" : "to-[#FFFFFF]"}`}
      ></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter text-white font-bold max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
          Empowering Communities &amp; Transforming Lives.
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-inter mt-3 sm:mt-4 md:mt-5 max-w-full sm:max-w-lg md:max-w-xl lg:max-w-3xl">
          Join us in our mission to create lasting change. We believe in the power of community-driven solutions to
          address pressing challenges. From education to environmental sustainability, we are dedicated to making a
          difference where it matters most.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 mt-4 sm:mt-6 md:mt-8">
          <button className="flex items-center justify-center w-49 sm:w-48 md:w-56 h-12 sm:h-14 text-primary-foreground font-semibold bg-primary border-3 border-white rounded-lg hover:bg-primary/90 transition-colors">
            <span>Watch the video</span>
            {/* <Play className="ml-2" size={20} fill="#FFFFFF" /> */}
          </button>
          <button className="flex items-center justify-center w-41 sm:w-36 md:w-40 h-12 sm:h-14 text-primary font-semibold bg-white rounded-lg hover:bg-gray-100 transition-colors">
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}