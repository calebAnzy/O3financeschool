import React from "react"
import { course } from "@/interface"
import Image from "next/image"
import Link from "next/link"
import { MotionSection } from "./MotionComponents"

const HomeCoursePreview: React.FC<course> = ({ id, title, imageUrl, text }) => {
  return (
    <MotionSection
      initial={{ y: 50, opacity: 0 }}
      transition={{ delay: 0.1, duration: 0.3, ease: "easeIn" }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl lg:rounded-3xl relative text-black p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      {/* Image Section */}
      <div>
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          loading="lazy"
          className="w-full rounded-[10px] object-cover object-center aspect-[345/194]"
        />
      </div>

      {/* Text Section */}
      <h2 className="mt-5 mb-2 text-lg md:text-xl leading-tight capitalize font-medium">
        {title}
      </h2>
      <p className="mb-8 text-sm md:text-base font-normal leading-tight text-gray-700">
        {text}
      </p>

      {/* Learn More Link */}
      <Link
        href={id ? `/courses/${id}` : "#"}
        className="absolute bottom-4 hover:font-medium hover:text-primary transition-colors"
      >
        Learn more
      </Link>
    </MotionSection>
  )
}

export default HomeCoursePreview
