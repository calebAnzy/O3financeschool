import React from "react"
import Image from "next/image"
import { ChatIcon, LoveIcon } from "../Icons"

const DiscussionPreview = () => {
  return (
    <section className="p-3 w-full bg-white rounded-lg border border-[#E4E7EC] flex flex-col sm:flex-row gap-3">
      {/* Image */}
      <div className="flex-shrink-0">
        <Image
          src={"/become-sponsor-2.png"}
          alt="course"
          width={76}
          height={76}
          className="rounded-md object-center aspect-square object-cover w-20 h-20 mx-auto sm:mx-0"
        />
      </div>

      {/* Text and Info */}
      <article className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
        <div className="capitalize leading-tight">
          <h3 className="font-bold text-base sm:text-lg">What about JS?</h3>
          <h5 className="text-[#343A40] text-sm sm:text-base mt-1">
            Basic recommendations for beginners
          </h5>
        </div>

        <section className="flex justify-center sm:justify-start gap-3 items-center mt-1">
          <div className="flex items-center gap-1 text-sm text-[#6C757D]">
            <LoveIcon />
            <p>500</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#6C757D]">
            <ChatIcon />
            <p>129</p>
          </div>
        </section>
      </article>
    </section>
  )
}

export default DiscussionPreview
