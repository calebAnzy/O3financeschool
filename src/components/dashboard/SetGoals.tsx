import React from 'react'
import IconContainer from '../IconContainer'
import { ArrowRight, GoalsIcon } from '../Icons'
import Progress from '../Progress'

const SetGoals = () => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-semibold">Set Goals</h2>
      <section className="flex flex-col sm:flex-row gap-3 items-start sm:items-center my-4 border rounded-xl border-[#E4E7EC] p-3 sm:p-4">
        <IconContainer color="bg-[#FFC145]" icon={<GoalsIcon />} />

        <div className="flex flex-col gap-1.5 flex-1 leading-none text-[#343a40ba]">
          <p className="font-medium text-base sm:text-[1rem]">Weekly Goal</p>
          <Progress percentageCompleted="w-[70%]" />

          <div className="flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.50065 3.49992V7.49992L10.1673 8.83325M14.1673 7.49992C14.1673 11.1818 11.1825 14.1666 7.50065 14.1666C3.81875 14.1666 0.833984 11.1818 0.833984 7.49992C0.833984 3.81802 3.81875 0.833252 7.50065 0.833252C11.1825 0.833252 14.1673 3.81802 14.1673 7.49992Z"
                stroke="#141416"
                strokeOpacity="0.7"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-sm leading-none">12/17 hours</p>
          </div>
        </div>

        <div className="sm:ml-4 mt-2 sm:mt-0 self-end sm:self-auto">
          <ArrowRight />
        </div>
      </section>
    </div>
  )
}

export default SetGoals
