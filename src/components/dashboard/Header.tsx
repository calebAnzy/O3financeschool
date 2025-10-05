"use client"
import React, { useEffect, useState } from "react"
import { NotificationsIcon, ShortArrow } from "../Icons"
import { usePathname } from "next/navigation"
import Image from "next/image";

const Header = () => {
  const [headerText, setHeaderText] = useState<string>("Welcome, Bola")
  const pathname = usePathname().slice(12)

  useEffect(() => {
    if (pathname === "courses") {
      setHeaderText("Course Catalog")
    } else setHeaderText("Welcome, Bola")
  }, [pathname])

  return (
    <header className="bg-white border-b border-[#E4E7EC] px-4 py-2 flex flex-wrap justify-between items-center sticky top-0 z-10 gap-3 hidden md:block">
      {/* Left side - title */}
      <h3 className="font-medium text-lg sm:text-xl leading-none">
        {headerText}
      </h3>

      {/* Right side - notification + user */}
      <section className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
        {/* Notification icon */}
        <div className="border-[#E4E7EC] bg-[#F0F0F0] hover:bg-gray-200 transition-colors duration-200 cursor-pointer border rounded-full p-2">
          <NotificationsIcon />
        </div>

        {/* Profile section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/images/anzy.webp" alt="Profile" width={50} height={50} className="mr-2 rounded-full" />
          <div className="hidden sm:flex items-center gap-2">
            <h4 className="font-medium text-sm leading-none">Bola Ahmed</h4>
            <div>
              <ShortArrow style="" stroke="#5C5B62" />
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Header
