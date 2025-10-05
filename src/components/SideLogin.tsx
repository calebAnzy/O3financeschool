"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SideLogin = () => {
  const slides = [
    {
      title: "Grow Smarter, Live Better",
      info: "Turn money stress into money strength. Continue to learn how to manage, plan, and invest with confidence so you can focus on living the life you deserve.",
      illustration: "/login/login-bg-1.svg",
    },
    {
      title: "Make Your Dream Count",
      info: "Start building the habits and knowledge that lead to financial freedom. Every course you take is an investment in the life you want tomorrow.",
      illustration: "/login/login-bg-2.svg",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section className="bg-primary rounded-2xl h-full flex items-center justify-center">
      <div className="flex flex-col justify-end items-center h-full text-center p-6 sm:p-8 text-white transition-all duration-700 ease-in-out">
        <Image
          src={current.illustration}
          alt={current.title}
          className="w-3/4 sm:w-2/3 object-contain mb-4 transition-all duration-700 ease-in-out"
          width={160}
          height={160}
          priority
        />

        <h2 className="text-xl sm:text-2xl font-bold mb-2 w-5/6 sm:w-4/5 leading-snug">
          {current.title}
        </h2>
        <p className="text-sm sm:text-base w-5/6 sm:w-4/5 leading-relaxed opacity-90">
          {current.info}
        </p>

        <div className="flex gap-2 mt-6 mb-4 justify-center items-center">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${
                i === index ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideLogin;
