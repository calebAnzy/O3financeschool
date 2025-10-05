"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    title: "Grow Smarter, Live Better",
    caption:
      "Tax money where it has more impact. Learn to manage, plan, and invest with confidence.",
    image: "/images/o3-slide.png",
  },
  {
    title: "Make Your Dream Count",
    caption:
      "Start building the habits and knowledge that lead to financial freedom.",
    image: "/images/o3-slide-2.jpg",
  },
];

export default function AuthSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    // NOTE: md:w-1/2 so left and right are equal on md+
    <div className="hidden md:flex md:w-1/2 bg-[#006AF2] items-center justify-center rounded-2xl">
      {/* Inner container caps width of the content and centers it */}
      <div className="w-full h-full flex flex-col items-center justify-center px-8 py-10">
        <div
          ref={sliderRef}
          className="keen-slider w-full max-w-3xl mx-auto text-center text-white"
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="keen-slider__slide flex flex-col items-center justify-center p-4"
            >
              {/* make image responsive and not overflow */}
              <div className="w-[420px] max-w-full mb-6">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={800}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>

              <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
              <p className="text-gray-100 text-sm max-w-md">{slide.caption}</p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full ${
                currentSlide === idx ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
