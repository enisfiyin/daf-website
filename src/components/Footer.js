"use client"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-card px-6 py-8 md:px-12 md:py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Mobile and Desktop Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info - Left column on desktop, top on mobile */}
          <div className="flex flex-col justify-center items-center md:col-span-1">
            <div className="mb-4">
              <Image src="/images/daf-logo.png" alt="DAF Logo" width={173} height={58} />
            </div>
            <p className="text-muted-foreground w-47 text-sm mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center hover:bg-secondary/80 cursor-pointer transition-colors">
                <Facebook className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center hover:bg-secondary/80 cursor-pointer transition-colors">
                <Twitter className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center hover:bg-secondary/80 cursor-pointer transition-colors">
                <Instagram className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="w-8 h-8 bg-secondary rounded flex items-center justify-center hover:bg-secondary/80 cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="flex justify-center md:col-span-2 md:grid grid-cols-1 md:grid-cols-2 gap-18 md:gap-12">
            {/* Helpful Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-card-foreground mb-4">Helpful Links</h4>
              <div className="h-0.5 bg-primary w-20 mb-5"></div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
              <div className="h-0.5 bg-primary w-20 mb-5"></div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Donate
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Our Impact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Us */}
          <div className="pl-15 md:pl-0 md:col-span-1">
            <h4 className="font-semibold text-card-foreground mb-4">Contact Us</h4>
            <div className="h-0.5 bg-primary w-20 mb-5"></div>
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">info@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">+23483344347</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Redemption camp, mowe,
                  <br />
                  Ogun state
                </span>
              </div>
            </div>
            {/* Email Subscription */}
            <div className="space-y-3">
              <div className="flex border border-border w-full max-w-sm h-12 md:h-14 gap-2 pl-4 pr-1 items-center rounded-lg bg-input">
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="flex-1 min-w-[31px] text-sm bg-transparent text-foreground focus:outline-none"
                />
                <button className="bg-accent hover:bg-accent/90 min-w-[65px] h-10 md:h-12 rounded-lg text-accent-foreground px-4 py-2 text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-border mt-8 pt-6">
          <p className="text-muted-foreground text-center text-sm">Copyright © 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
