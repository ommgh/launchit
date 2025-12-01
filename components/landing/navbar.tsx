"use client";
import Link from "next/link";
import React, { useState } from "react";
import ShinyButton from "@/components/ui/shiny-button";
import { Menu, X } from "lucide-react";
import PushableButton from "@/components/PushableButton";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="">
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl"
          style={{ fontFamily: "var(--font-broch-reg)" }}
        >
          launchit.today
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#"
            className="hover:text-orange-500 transition-colors text-lg font-bold tracking-widest"
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Work
          </Link>
          <Link
            href="#"
            className="hover:text-orange-500 transition-colors text-lg font-bold tracking-widest"
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            Insights
          </Link>
          <Link
            href="#"
            className="hover:text-orange-500 transition-colors text-lg font-bold tracking-widest"
            style={{ fontFamily: "var(--font-cool-reg)" }}
          >
            About
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/consultation">
            <ShinyButton
              style={{ fontFamily: "var(--font-cool-reg)" }}
              className="font-bold tracking-widest rounded-lg px-6 py-2 cursor-pointer"
            >
              Got an idea ?
            </ShinyButton>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden min-h-screen">
          <div className="flex flex-col items-start px-4 py-4 gap-4">
            <Link
              href="/work"
              className="hover:text-orange-500 transition-colors text-3xl font-bold tracking-widest"
              style={{ fontFamily: "var(--font-cool-reg)" }}
            >
              Work
            </Link>
            <Link
              href="/insights"
              className="hover:text-orange-500 transition-colors text-3xl font-bold tracking-widest"
              style={{ fontFamily: "var(--font-cool-reg)" }}
            >
              Insights
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-500 transition-colors text-3xl font-bold tracking-widest"
              style={{ fontFamily: "var(--font-cool-reg)" }}
            >
              About
            </Link>
          </div>
          <div className=" p-4">
            <Link href="https://cal.com/ommishra/15min">
              <PushableButton text="Let's Talk" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
