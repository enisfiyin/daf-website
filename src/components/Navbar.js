"use client"
import { useState } from "react"
import Image from "next/image"
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
    { name: "HOME", href: "#", active: true },
    { name: "ABOUT", href: "#" },
    { name: "PROJECTS", href: "#" },
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
    }
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-transparent">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center px-8 py-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/daf-logo.png"
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
                        ? "text-white bg-white/10 px-4 py-2 rounded"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-30">
                      {item.dropdownItems.map((dropItem, dropIndex) => (
                        <a
                          key={dropIndex}
                          href={dropItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
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
                      ? "text-white bg-white/10 px-4 py-2 rounded"
                      : "text-white/80 hover:text-white"
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
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Support
          </button>
        </div>
      </div>

      {/* Mobile Navigation Header */}
      <div className="lg:hidden flex justify-between items-center px-4 py-4">
        {/* Mobile Logo */}
        <div className="flex items-center">
          <Image
            src="/images/daf-logo.png"
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
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Top Section Only */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg z-30">
          {/* Mobile Menu Header */}
          <div className="flex justify-between items-center px-4 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <Image
                src="/images/daf-logo.png"
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
                className="text-gray-600 dark:text-gray-300 p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* Mobile Menu Items */}
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className={`flex items-center justify-between w-full text-left py-4 px-4 text-base font-medium transition-colors rounded-lg ${
                        item.active
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                          : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
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
                            className="block py-2 px-4 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded transition-colors"
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
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
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
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              onClick={toggleMenu}
            >
              Support
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}