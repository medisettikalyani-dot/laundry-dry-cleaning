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
  { label: "Contact", href: "/contact", sectionId: "contact" },
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

    const sectionIds = ["services", "special-items", "how-it-works", "reviews", "about", "faq", "contact"];
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "special-items") {
            setActiveItem("Services");
            return;
          }
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
    <header
      className={`sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? "shadow-sm border-b border-[#E2EDF3]"
          : "border-b border-[#E2EDF3]/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16 sm:h-20"
          aria-label="Main Navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={() => handleLinkClick("Home")}
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6F9E] rounded-lg transition-transform active:scale-95"
            aria-label="APM Laundry & Dry Cleaning Home"
          >
            <APMLogo className="h-12 sm:h-16 w-auto" priority />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(item.label)}
                  className={`min-h-[40px] px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-150 inline-flex items-center justify-center ${
                    isActive
                      ? "text-[#1D6F9E] bg-[#EBF5FA]"
                      : "text-[#1E293B] hover:text-[#1D6F9E] hover:bg-[#F4F8FA]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Book Now Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[42px] px-5 sm:px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-[#1D6F9E] hover:bg-[#16587E] active:scale-[0.98] transition-all duration-150 inline-flex items-center gap-1.5 shadow-sm hover:shadow-md"
            >
              <span>Book Now</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 min-h-[44px] min-w-[44px] rounded-xl flex items-center justify-center text-[#1E293B] hover:bg-[#F4F8FA] hover:text-[#1D6F9E] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D6F9E]"
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
      </div>

      {/* Mobile Dropdown Menu (Clean full-width drawer) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E2EDF3] bg-white px-4 sm:px-6 py-4 shadow-xl animate-fadeIn max-h-[calc(100dvh-4rem)] sm:max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => handleLinkClick(item.label)}
                  className={`min-h-[44px] px-4 py-2.5 rounded-xl text-base font-semibold flex items-center transition-colors ${
                    isActive
                      ? "text-[#1D6F9E] bg-[#EBF5FA]"
                      : "text-[#1E293B] hover:bg-[#F4F8FA]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="pt-4 mt-2 border-t border-[#E2EDF3] flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[48px] px-4 py-3 rounded-xl text-base font-bold text-white bg-[#1D6F9E] hover:bg-[#16587E] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book Now on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
