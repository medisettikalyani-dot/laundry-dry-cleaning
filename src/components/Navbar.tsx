"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { APMLogo } from "./APMLogo";
import { siteConfig } from "@/lib/seoConfig";

interface NavItem {
  label: string;
  href: string;
  sectionId?: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "How It Works", href: "/#how-it-works", sectionId: "how-it-works" },
  { label: "Reviews", href: "/#reviews", sectionId: "reviews" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "FAQ", href: "/#faq", sectionId: "faq" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  // Scroll spy with IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/contact") setActiveItem("Contact");
      else setActiveItem("");
      return;
    }

    const sectionIds = ["services", "how-it-works", "reviews", "about", "faq", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matched = navItems.find((item) => item.sectionId === entry.target.id);
          if (matched) {
            setActiveItem(matched.label);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Check top of page for Home
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 200) {
        setActiveItem("Home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // Handle Escape key on mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
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

  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hello APM Laundry! I would like to book a pickup."
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full py-2 bg-[#F8F0E7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full bg-[#FAF5EF] border border-[#E9D9C9] transition-shadow duration-200 ${
            scrolled ? "shadow-md" : "shadow-sm"
          }`}
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick("Home")}
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2869AE] rounded-lg min-h-[44px]"
            aria-label="APM Laundry & Dry Cleaning Home"
          >
            <APMLogo className="w-[110px] sm:w-[124px] h-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links (Pill highlight, NO red dot) */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(item.label)}
                  className={`min-h-[44px] px-3.5 py-2 rounded-full text-sm transition-colors inline-flex items-center justify-center ${
                    isActive
                      ? "text-[#C74708] bg-[#E9D9C9] font-bold"
                      : "text-[#202020] hover:text-[#C74708] hover:bg-[#E9D9C9]/50 font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Book Now Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold text-white bg-[#C74708] hover:bg-[#AF3C05] transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button (Min 44px) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 min-h-[44px] min-w-[44px] rounded-full flex items-center justify-center text-[#202020] hover:bg-[#E9D9C9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C74708]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 rounded-2xl bg-white border border-[#E9D9C9] shadow-lg animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => handleLinkClick(item.label)}
                    className={`min-h-[44px] px-4 py-2.5 rounded-xl text-base font-medium flex items-center transition-colors ${
                      isActive
                        ? "text-[#C74708] bg-[#FAF5EF] font-bold"
                        : "text-[#202020] hover:bg-[#FAF5EF]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-[#E9D9C9]">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[48px] px-4 py-3 rounded-xl text-base font-bold text-white bg-[#C74708] hover:bg-[#AF3C05] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
