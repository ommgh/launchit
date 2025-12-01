"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Button } from "../ui/button";

interface Review {
  author: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const reviews: Review[] = [
  {
    author: "Varun Sara",
    role: "CEO",
    company: "at yardstoacres.com",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1731844271/241117_17h19m02s_screenshot_a34hlq.png",
    content:
      "Launchit delivered a sleek, modern, and highly functional website. Their attention to detail and understanding of our brand needs resulted in a seamless user experience. Their professionalism and innovative design solutions were impressive. They truly excelled in creativity and technical skills",
  },
  {
    author: "Amit Chaudhary",
    role: "CMO",
    company: "at Nexa",
    image:
      "https://res.cloudinary.com/dcwsgwsfw/image/upload/v1731844270/241117_17h19m25s_screenshot_icdyo3.png",
    content:
      "After working with Launchit, our mobile application downloads skyrocketed from 2,000 to almost 100,000. The team provided excellent project management and communication throughout the process. We felt that Launchit created unique and useful designs for our company",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (reviews.length + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length + 1) % (reviews.length + 1)
    );
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth;
      const itemWidth = scrollWidth / (reviews.length + 1);
      carouselRef.current.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`;
    }
  }, [currentIndex]);

  return (
    <section
      style={{ fontFamily: "var(--font-cool-reg)" }}
      className={` py-8 sm:py-16 md:py-24 overflow-hidden tracking-wider`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-0">
            Hear From Our Clients
          </h2>
          <div className="flex gap-4">
            <Button
              onClick={prevSlide}
              className="p-3 sm:p-4 rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              aria-label="Previous review"
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              className="p-3 sm:p-4 rounded-lg text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              aria-label="Next review"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-in-out"
          >
            {/* Rating Card */}
            <div className="w-full sm:w-[350px] md:w-[400px] flex-shrink-0 p-6 sm:p-8 bg-white rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-6xl text-black sm:text-7xl md:text-8xl font-bold mb-4 tracking-widest">
                  5.0
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 fill-orange-500 text-orange-500"
                    />
                  ))}
                </div>
                <div className="text-sm text-black">Reviews</div>
              </div>
              <div className="text-xl text-black sm:text-2xl md:text-3xl">
                Google
              </div>
            </div>

            {/* Review Cards */}
            {reviews.map((review, index) => (
              <div
                key={index}
                className="w-full sm:w-[350px] md:w-[400px] flex-shrink-0 p-6 text-black sm:p-8 bg-white rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={review.image}
                    alt={"AI"}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-black">
                      {review.author}
                    </h3>
                    <p className="text-sm sm:text-base text-black">
                      {review.role} {review.company}
                    </p>
                  </div>
                </div>
                <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed">
                  {review.content}
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
