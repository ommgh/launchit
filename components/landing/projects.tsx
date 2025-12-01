"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";
import { Button } from "../ui/button";

const inter = Inter({ subsets: ["latin"] });

interface Project {
  id: number;
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Yards to Acres",
    image: "/images/yards.png",
    link: "https://yardstoacres.com/",
  },

  {
    id: 2,
    title: "Puje Group",
    image: "/images/puje.png",
    link: "https://pujegroup.com/",
  },
  {
    id: 3,
    title: "Nexa BetX",
    image: "/images/betx.png",
    link: "https://betx-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Your Mail",
    image: "/images/mail.png",
    link: "https://yourmail.vercel.app/",
  },
];

export default function Projects() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(
              (projects.length - 1) * scrollAmount,
              scrollPosition + scrollAmount
            );

      container.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={` py-16 md:py-24`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wider">
            Case Studies
          </h2>
          <div className="flex items-center gap-4">
            <Link
              href="/work"
              className="px-6 py-2 rounded-full text-white bg-orange-500 text-sm hover:bg-orange-600 transition-colors"
            >
              View all
            </Link>
            <Button
              onClick={() => scroll("left")}
              className=" hidden lg:flex p-4 rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={() => scroll("right")}
              className=" hidden lg:flex p-4 rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              aria-label="Next project"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="relative min-w-[300px] md:min-w-[400px] aspect-square rounded-2xl overflow-hidden flex-shrink-0 snap-start group"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-medium text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
