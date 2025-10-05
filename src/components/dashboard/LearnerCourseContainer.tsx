import React from "react"
import Image from "next/image"
import { ContinueIcon, LessonIcon } from "../Icons"
import Progress from "../Progress"

const LearnerCourseContainer: React.FC = () => {
  return (
    <section className="p-2 w-full bg-white rounded-lg border border-[#E4E7EC] flex flex-col sm:flex-row gap-3">
      {/* Image */}
      <div className="flex-shrink-0 mx-auto sm:mx-0">
        <Image
          src={"/become-sponsor-2.png"}
          alt="course"
          width={100}
          height={100}
          className="rounded-md object-center object-cover w-24 h-24 sm:w-[100px] sm:h-[100px]"
        />
      </div>

      {/* Content */}
      <article className="flex-1 flex flex-col justify-between gap-2 text-center sm:text-left">
        <div className="capitalize leading-none">
          <h3 className="font-bold text-base sm:text-lg">
            data analysis with python
          </h3>
          <h5 className="text-[#343A40] text-sm">wealth creation</h5>
        </div>

        <div>
          {/* Progress bar */}
          <Progress percentageCompleted={"w-[50%]"} />

          <div className="flex flex-col sm:flex-row text-sm justify-between text-[#343A40] items-center mt-2 gap-1">
            <div className="flex gap-1 items-center">
              <LessonIcon />
              <p>
                <span className="font-bold">4</span> out of 7 lessons
              </p>
            </div>
            <h4 className="text-sm leading-none font-bold">
              50% Completed
            </h4>
          </div>

          {/* Continue link */}
          <p className="text-sm flex font-medium items-center justify-center sm:justify-start gap-1 cursor-pointer text-primary mt-2">
            Continue learning <ContinueIcon />
          </p>
        </div>
      </article>
    </section>
  )
}

export default LearnerCourseContainer
