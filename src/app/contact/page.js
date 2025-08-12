"use client"

import Image from "next/image"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      {/* Top Section */}
      <div className="container mt-20 mx-auto ">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left: Image */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/contact-us.jpg"
              alt="Students holding signs for social impact project"
              fill
              style={{ objectFit: "cover" }}
              className="object-cover"
            />

          </div>

          {/* Right: Contact Form */}
          <div className="bg-[var(--card)] p-6 md:p-8 lg:p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--card-foreground)]">Let&apos;s Get In Touch</h2>
            <p className="text-[var(--muted-foreground)] mb-6 text-sm">
              When you donate, you&apos;re supporting youth empowerment, students orientations and kingdom expansion.
            </p>
            <form className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[var(--card-foreground)] mb-1">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className="block w-full px-3 py-2 border border-[var(--border)] rounded-md shadow-sm bg-[var(--card)] text-[var(--card-foreground)] focus:outline-none focus:ring-[var(--ring)] focus:border-[var(--ring)]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[var(--card-foreground)] mb-1">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className="block w-full px-3 py-2 border border-[var(--border)] rounded-md shadow-sm bg-[var(--card)] text-[var(--card-foreground)] focus:outline-none focus:ring-[var(--ring)] focus:border-[var(--ring)]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--card-foreground)] mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="block w-full px-3 py-2 border border-[var(--border)] rounded-md shadow-sm bg-[var(--card)] text-[var(--card-foreground)] focus:outline-none focus:ring-[var(--ring)] focus:border-[var(--ring)]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[var(--card-foreground)] mb-1">
                  Phone number
                </label>
                <div className="flex gap-2">
                  <select
                    id="countryCode"
                    defaultValue="+234"
                    className="w-[100px] px-3 py-2 border border-[var(--border)] rounded-md shadow-sm bg-[var(--card)] text-[var(--card-foreground)] focus:outline-none focus:ring-[var(--ring)] focus:border-[var(--ring)]"
                  >
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="flex-1 block w-full px-3 py-2 border border-[var(--border)] rounded-md shadow-sm bg-[var(--card)] text-[var(--card-foreground)] focus:outline-none focus:ring-[var(--ring)] focus:border-[var(--ring)]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--card-foreground)] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your main message here..."
                  rows={5}
                  className="block w-full px-3 py-2 border border-[var(--border)] rounded-md shadow-sm bg-[var(--card)] text-[var(--card-foreground)] focus:outline-none focus:ring-[var(--ring)] focus:border-[var(--ring)]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white py-2 rounded-md font-medium"
              >
                Submit form
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto ">
        <div className="mb-8">
          <span className="inline-block bg-[var(--secondary)] text-[var(--secondary-foreground)] px-3 py-1 rounded-full text-sm font-medium mb-4">
            Reach Out To Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-[var(--card-foreground)]">We&apos;d Love to Hear From You</h2>
          <p className="text-[var(--muted-foreground)] text-sm">Have any questions to ask? use this reach out to us options</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Email Support */}
          <div className="flex flex-col items-start p-6 bg-[var(--card)] rounded-lg shadow-lg">
            <div className="p-3 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--card-foreground)]">Email Support</h3>
            <p className="text-[var(--muted-foreground)] text-sm mb-1">Send us a mail to our inbox</p>
            <a href="mailto:dafwebsitedesign@gmail.com" className="text-[var(--primary)] hover:underline text-sm">
              dafwebsitedesign@gmail.com
            </a>
          </div>

          {/* Call Us Directly */}
          <div className="flex flex-col items-start p-6 bg-[var(--card)] rounded-lg shadow-lg">
            <div className="p-3 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--card-foreground)]">Call Us Directly</h3>
            <p className="text-[var(--muted-foreground)] text-sm mb-1">Available from 9:00am-5:00pm</p>
            <a href="tel:+2348123456789" className="text-[var(--primary)] hover:underline text-sm">
              +2348123456789
            </a>
          </div>

          {/* Visit Our Head Office */}
          <div className="flex flex-col items-start p-6 bg-[var(--card)] rounded-lg shadow-lg mb-18">
            <div className="p-3 rounded-full bg-[var(--secondary)] text-[var(--secondary-foreground)] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-[var(--card-foreground)]">Visit Our Head Office</h3>
            <p className="text-[var(--muted-foreground)] text-sm mb-1">Reach us directly at our head office</p>
            <p className="text-[var(--primary)] text-sm">No 2, Abiona way, Redemption City, Ogun State</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}