import Image from "next/image"
import { LearnersIcon, StarIcon } from "../Icons"

const CoursePreview = () => {
  return (
    <section className="bg-white border border-[#E4E7EC] capitalize leading-none p-3 rounded-lg flex flex-col">
      {/* Course Image */}
      <div className="rounded-lg overflow-hidden mb-2">
        <Image
          src="/course-preview.avif"
          alt="Learners"
          width={300}
          height={300}
          className="w-full object-center object-cover aspect-[280/145]"
        />
      </div>

      {/* Course Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-text font-bold text-base sm:text-lg">
          Compliance check
        </h3>
        <p className="text-[#343A40] font-medium text-sm sm:text-base">
          Adesola Abayomi
        </p>
      </div>

      {/* Ratings and Price */}
      <div className="flex justify-between items-center my-3 gap-3 flex-wrap">
        <section className="flex gap-3 items-center">
          <div className="flex items-center gap-1 text-sm text-[#6C757D]">
            <StarIcon />
            <p>4.3</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#6C757D]">
            <LearnersIcon />
            <p>129</p>
          </div>
        </section>

        <h3 className="font-bold text-lg sm:text-xl text-text">₦650</h3>
      </div>

      {/* Enroll Button */}
      <button className="w-full bg-primary text-white rounded-xl py-3 font-medium hover:bg-darkGray transition-colors duration-200 text-sm sm:text-base">
        Enroll
      </button>
    </section>
  )
}

export default CoursePreview
