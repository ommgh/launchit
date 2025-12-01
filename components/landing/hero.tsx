import Link from "next/link";
import React from "react";
import PushableButton from "@/components/PushableButton";

export default function Hero() {
  return (
    <main className="container mx-auto px-4 pt-12 md:pt-24 pb-16 text-center">
      <div
        style={{ fontFamily: "var(--font-cool-reg)" }}
        className={`inline-block px-4 md:px-6 py-2 mb-8  md:mb-16 rounded-full border border-gray-800 text-xs md:text-sm lg:text-xl tracking-wide`}
      >
        YOUR EXTERNAL IN-HOUSE TECH TEAM
      </div>

      <h1
        style={{ fontFamily: "var(--font-cool-reg)" }}
        className={`text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold mb-6 md:mb-8 lg:max-w-[18ch] mx-auto tracking-wide`}
      >
        Tech that <span className="text-orange-500">scales</span> with your
        business
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mx-auto mt-10 mb-10 md:mb-16">
        We Create Brands and Websites <br />
        Backed by Data to Drive Revenue & Growth
      </p>

      <div className="relative inline-block">
        <Link href="https://cal.com/launchitoday/15min">
          <PushableButton text="Book a 15-Min Call" />
        </Link>
      </div>
    </main>
  );
}
