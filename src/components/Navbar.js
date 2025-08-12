"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "./theme-provider"
import { ThemeToggle } from "./theme-toggle"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { theme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const navItems = [
    { name: "HOME", href: "/"},
    { name: "ABOUT", href: "/about" },
    { name: "PRESS RELEASE", href: "#" },
    { 
      name: "WHAT WE DO", 
      href: "#", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Education", href: "#" },
        { name: "Healthcare", href: "#" },
        { name: "Environment", href: "#" },
        { name: "Community Development", href: "#" }
      ]
    },
    { name: "CONTACT", href: "/contact" }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/daf-logo-1.png"
            alt="Foundation Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.hasDropdown ? (
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className={`flex items-center space-x-1 text-sm font-medium transition-colors ${
                      item.active
                        ? "text-[var(--primary-foreground)] bg-[var(--primary)]/10 px-4 py-2 rounded"
                        : "text-[var(--foreground)]/80 hover:text-[var(--foreground)]"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-[var(--card)] rounded-lg shadow-lg py-2 z-30">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-[var(--card-foreground)] hover:bg-[var(--secondary)] hover:text-[var(--secondary-foreground)] transition-colors"
                        >
                          {dropItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.active
                      ? "text-[var(--primary-foreground)] bg-[var(--primary)]/10 px-4 py-2 rounded"
                      : "text-[var(--foreground)]/80 hover:text-[var(--foreground)]"
                  }`}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link href="/support">
            <button className="bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
              Support
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="lg:hidden flex justify-between items-center px-4 py-4">
        {/* Mobile Logo */}
        <div className="flex items-center">
          <Image
            src="/images/daf-logo-1.png"
            alt="Foundation Logo"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-[var(--foreground)] p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Full Screen */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-[var(--background)] shadow-lg z-40">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-[var(--border)]">
            <div className="flex items-center">
              <Image
                src="/images/daf-logo-1.png"
                alt="Foundation Logo"
                width={100}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="text-[var(--foreground)] p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* Mobile Menu Items */}
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-[var(--border)] last:border-b-0">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className={`flex items-center justify-between w-full text-left py-4 px-4 text-base font-medium transition-colors rounded-lg ${
                        item.active
                          ? "bg-[var(--primary)]/20 text-[var(--primary)]"
                          : "text-[var(--foreground)] hover:bg-[var(--secondary)]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="ml-4 pb-2 space-y-1">
                        {item.dropdownItems.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href={dropItem.href}
                            className="block py-2 px-4 text-sm text-[var(--foreground)] hover:text-[var(--primary)] hover:bg-[var(--secondary)] rounded transition-colors"
                            onClick={toggleMenu}
                          >
                            {dropItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`block py-4 px-4 text-base font-medium transition-colors rounded-lg ${
                      item.active
                        ? "bg-[var(--primary)]/20 text-[var(--primary)]"
                        : "text-[var(--foreground)] hover:bg-[var(--secondary)]"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Support Button */}
          <div className="px-4 py-4 border-t border-[var(--border)] bg-[var(--secondary)]">
            <Link href="/support">
              <button
                className="w-full bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-semibold transition-colors"
                onClick={toggleMenu}
              >
                Support
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}