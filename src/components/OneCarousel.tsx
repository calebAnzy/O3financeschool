"use client";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface OneCarouselProps {
  items: string[];
}

const OneCarousel: React.FC<OneCarouselProps> = ({ items }) => {
  return (
    <Splide
      options={{
        rewind: true,
        autoplay: true,
        pauseOnHover: true,
        interval: 3000,
        speed: 600,
        arrows: false,
        pagination: false,
        type: "loop",
      }}
      className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl"
    >
      {items.map((item, index) => (
        <SplideSlide key={index} className="relative">
          <Image
            width={1200}
            height={600}
            alt={`slide-${index}`}
            src={item}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out hover:scale-105"
            priority
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default OneCarousel;
