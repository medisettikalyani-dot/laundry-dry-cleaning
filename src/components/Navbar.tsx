"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APMLogo } from "./APMLogo";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Keep activeItem in sync with pathname and hash changes
  useEffect(() => {
    const updateActiveItem = () => {
      if (pathname === "/contact") {
        setActiveItem("Contact");
      } else if (pathname === "/terms") {
        setActiveItem("");
      } else if (pathname === "/privacy") {
        setActiveItem("");
      } else if (pathname === "/") {
        if (typeof window !== "undefined" && window.location.hash) {
          const hash = window.location.hash.toLowerCase();
          if (hash.includes("contact") || hash.includes("book")) setActiveItem("Contact");
          else if (hash.includes("services") || hash.includes("wash") || hash.includes("dry")) setActiveItem("Services");
          else if (hash.includes("about")) setActiveItem("About");
          else if (hash.includes("gallery")) setActiveItem("Gallery");
          else setActiveItem("Home");
        } else {
          setActiveItem("Home");
        }
      }
    };

    updateActiveItem();
    window.addEventListener("hashchange", updateActiveItem);
    return () => window.removeEventListener("hashchange", updateActiveItem);
  }, [pathname]);

  // Track scroll position to enhance background blur and shadow subtly
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (label: string) => {
    setActiveItem(label);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-1.5 sm:py-2" : "py-2 sm:py-2.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Pill / Shell */}
        <nav
          className={`relative flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl md:rounded-full bg-[#F8F0E7]/95 backdrop-blur-md border border-[#E9D9C9] transition-all duration-300 ${
            scrolled
              ? "shadow-[0_8px_30px_rgb(32,32,32,0.06)]"
              : "shadow-[0_2px_12px_rgb(32,32,32,0.03)]"
          }`}
          aria-label="Main Navigation"
        >
          {/* Left: APM Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              onClick={() => handleLinkClick("Home")}
              className="inline-flex items-center rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE]"
              aria-label="APM Laundry & Dry Cleaning Home"
            >
              <APMLogo className="w-[104px] sm:w-[118px] md:w-[130px] lg:w-[136px] h-auto object-contain transition-transform duration-200 hover:scale-[1.02]" />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(item.label)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-[#C74708] bg-[#E9D9C9]/60 font-semibold"
                      : "text-[#202020] hover:text-[#C74708] hover:bg-[#E9D9C9]/35"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#C74708]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#contact"
              onClick={() => handleLinkClick("Contact")}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.98] transition-all duration-200 shadow-sm hover:shadow-[0_4px_14px_rgba(199,71,8,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F8F0E7]"
            >
              Book Now
            </Link>
          </div>

          {/* Right: Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#202020] hover:text-[#C74708] hover:bg-[#E9D9C9]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE]"
              aria-controls="mobile-navigation"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#C74708]" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-200 ease-in-out ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                    mobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-[#C74708]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        <div
          id="mobile-navigation"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-[420px] opacity-100 mt-2.5"
              : "max-h-0 opacity-0 pointer-events-none mt-0"
          }`}
        >
          <div className="rounded-2xl bg-[#F8F0E7] border border-[#E9D9C9] p-5 shadow-[0_12px_32px_rgba(32,32,32,0.08)] space-y-4">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleLinkClick(item.label)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#C74708] bg-[#E9D9C9]/60 font-semibold"
                        : "text-[#202020] hover:text-[#C74708] hover:bg-[#E9D9C9]/30"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#C74708]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="pt-2 border-t border-[#E9D9C9]/60">
              <Link
                href="/#contact"
                onClick={() => {
                  handleLinkClick("Contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center px-6 py-3.5 rounded-full text-base font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_14px_rgba(199,71,8,0.25)]"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
