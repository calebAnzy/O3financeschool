import React from "react"
import { ArrowRight } from "../Icons"
import IconContainer from "../IconContainer"

interface Props {
  name: string
  icon: React.ReactNode
  bgcolor: string
  faculties?: number
  courses?: number
}

const SideLinksContainer: React.FC<Props> = ({
  name,
  icon,
  bgcolor,
  faculties,
  courses,
}) => {
  const showStats = faculties && courses

  return (
    <div
      key={name}
      className="flex items-center justify-between gap-3 border rounded-xl border-[#E4E7EC] p-2.5 hover:shadow-sm transition-shadow duration-200"
    >
      {/* Left side */}
      <div className="flex items-center gap-2 flex-1">
        <IconContainer color={bgcolor} icon={icon} />

        <div className="flex flex-col">
          <h4
            className={`${
              showStats ? "text-lg" : "text-base"
            } leading-none font-medium`}
          >
            {name}
          </h4>

          {/* Faculties + Courses info */}
          {showStats && (
            <section className="flex gap-2 items-center [&_div]:flex [&_div]:items-center [&_div]:gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <g clipPath="url(#clip0_311_368)">
                    <path
                      d="M11.0833 3.50004H8.35392C8.12139 3.33432 7.8601 3.21327 7.58333 3.14304V2.91671L9.6425 1.95304C9.72691 1.90072 9.79657 1.82772 9.84488 1.74095C9.89319 1.65418 9.91854 1.55652 9.91854 1.45721C9.91854 1.35789 9.89319 1.26023 9.84488 1.17346C9.79657 1.08669 9.72691 1.01369 9.6425 0.961372L7.77583 0.0863722C7.63009 0.0182691 7.4695 -0.0119098 7.30898 -0.00136352C7.14845 0.00918281 6.99319 0.0601126 6.85761 0.146698C6.72203 0.233284 6.61052 0.35272 6.53343 0.493918C6.45635 0.635117 6.41618 0.793502 6.41667 0.954372V3.14304C6.14005 3.21317 5.87892 3.33423 5.64667 3.50004H2.91667C2.1434 3.50097 1.40208 3.80855 0.855295 4.35533C0.308514 4.90212 0.00092625 5.64344 0 6.41671L0 12.25C0 12.7142 0.184374 13.1593 0.512563 13.4875C0.840752 13.8157 1.28587 14 1.75 14H12.25C12.7141 14 13.1592 13.8157 13.4874 13.4875C13.8156 13.1593 14 12.7142 14 12.25V6.41671C13.9991 5.64344 13.6915 4.90212 13.1447 4.35533C12.5979 3.80855 11.8566 3.50097 11.0833 3.50004Z"
                      fill="#141416"
                      fillOpacity="0.7"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_311_368">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#141416] text-sm">{faculties} Faculties</p>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <path
                    d="M7.00033 10.6666H3.03366C2.38026 10.6666 2.05357 10.6666 1.804 10.5394C1.58448 10.4276 1.406 10.2491 1.29415 10.0296C1.16699 9.78001 1.16699 9.45331 1.16699 8.79992V3.19992C1.16699 2.54652 1.16699 2.21983 1.29415 1.97026C1.406 1.75074 1.58448 1.57226 1.804 1.46041C2.05357 1.33325 2.38026 1.33325 3.03366 1.33325H3.26699C4.57378 1.33325 5.22718 1.33325 5.7263 1.58757C6.16535 1.81127 6.5223 2.16823 6.74601 2.60727C7.00033 3.1064 7.00033 3.7598 7.00033 5.06659M7.00033 10.6666V5.06659M7.00033 10.6666H10.967C11.6204 10.6666 11.9471 10.6666 12.1966 10.5394C12.4162 10.4276 12.5946 10.2491 12.7065 10.0296C12.8337 9.78001 12.8337 9.45331 12.8337 8.79992V3.19992C12.8337 2.54652 12.8337 2.21983 12.7065 1.97026C12.5946 1.75074 12.4162 1.57226 12.1966 1.46041C11.9471 1.33325 11.6204 1.33325 10.967 1.33325H10.7337C9.42687 1.33325 8.77348 1.33325 8.27435 1.58757C7.8353 1.81127 7.47835 2.16823 7.25464 2.60727C7.00033 3.1064 7.00033 3.7598 7.00033 5.06659"
                    stroke="#141416"
                    strokeOpacity="0.7"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-[#141416] text-sm">{courses} Courses</p>
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Arrow Icon */}
      <ArrowRight />
    </div>
  )
}

export default SideLinksContainer
