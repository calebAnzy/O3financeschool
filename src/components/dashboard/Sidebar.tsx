"use client"
import React, { ReactElement, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AchievementsIcon,
  CommunityIcon,
  CoursesIcon,
  PaymentIcon,
  DashboardIcon,
  ShortArrow,
  WhiteLogo,
  AccountIcon,
  LogoutIcon,
} from "../Icons"
import { Menu, X } from "lucide-react"

const Sidebar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const sidebarItems = [
    { name: "Dashboard", icon: <DashboardIcon />, path: "/my-courses/dashboard" },
    { name: "Courses", icon: <CoursesIcon />, path: "/my-courses/courses" },
    { name: "Achievements", icon: <AchievementsIcon />, path: "/my-courses/achievements" },
    { name: "Community", icon: <CommunityIcon />, path: "/my-courses/community" },
    { name: "Payments", icon: <PaymentIcon />, path: "/my-courses/payments" },
  ]

  return (
    <>
      {/* Mobile Nav Button */}
      <div className="sm:hidden fixed top-3 left-3 z-50 bg-darkGray p-2 rounded-md text-white">
        <button onClick={() => setOpen(!open)} aria-label="Toggle Sidebar">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-dark text-white w-64 sm:w-1/5 p-4 h-svh flex flex-col justify-between fixed sm:static top-0 left-0 z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        }`}
      >
        <div className="flex flex-col gap-8">
          <section className="flex justify-between items-center gap-4">
            <WhiteLogo />
            <div className="flex w-7 hover:bg-gray-600 transition-colors duration-200 aspect-square rounded-full cursor-pointer bg-darkGray items-center justify-center">
              <ShortArrow style="rotate-90 w-2 aspect-square" stroke="#ffffff" />
            </div>
          </section>

          <section className="flex flex-col gap-2">
            {sidebarItems.map(
              (item: { name: string; icon: ReactElement; path: string }) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)} // auto close on mobile click
                  className={`${
                    pathname === item.path && "active-nav"
                  } p-2 transition-colors duration-300 rounded-lg cursor-pointer flex gap-3 items-center w-full`}
                >
                  <span>{item.icon}</span>
                  <h4 className="font-normal">{item.name}</h4>
                </Link>
              )
            )}
          </section>
        </div>

        <section className="mt-6">
          <Link
            href={"/my-courses/account"}
            onClick={() => setOpen(false)}
            className={`${
              pathname === "/my-courses/account" && "active-nav"
            } p-2 rounded-lg cursor-pointer flex gap-3 items-center w-full`}
          >
            <span>
              <AccountIcon />
            </span>
            <h4 className="font-normal">Account</h4>
          </Link>

          <Link
            href={"/my-courses/logout"}
            onClick={() => setOpen(false)}
            className={`p-2 rounded-lg cursor-pointer flex gap-3 items-center w-full`}
          >
            <span>
              <LogoutIcon />
            </span>
            <h4 className="font-normal">Logout</h4>
          </Link>
        </section>
      </aside>

      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}

export default Sidebar
