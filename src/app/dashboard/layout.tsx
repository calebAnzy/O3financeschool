"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHotel, faBookOpen, faMedal, faUsers, faCreditCard, faCircleUser, faArrowRightFromBracket } from
"@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { NotificationsIcon, ShortArrow } from "../../components/Icons"

export default function DashboardLayout({
children,
}: {
children: React.ReactNode;
}) {
const [open, setOpen] = useState(false);
const [collapsed, setCollapsed] = useState(false);
const [isDesktop, setIsDesktop] = useState(false);
const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
    if (
    sidebarRef.current &&
    !sidebarRef.current.contains(event.target as Node) &&
    !isDesktop &&
    open
    ) {
    setOpen(false);
    }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isDesktop, open]);

    return (
    <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}
        <aside ref={sidebarRef} className={`fixed inset-y-0 left-0 z-50 bg-[#000B1A] shadow-lg transform transition-all
            duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full" } md:translate-x-0 ${collapsed
            ? "w-20" : "w-64" }`}>
            {/* Collapse Button */}
            <div className="flex justify-end p-2">
                <button className="p-2 text-white rounded hover:bg-gray-600" onClick={()=> setCollapsed(!collapsed)}
                    >
                    {collapsed ? (
                    <ChevronRight className="w-5 h-5" />
                    ) : (
                    <ChevronLeft className="w-5 h-5" />
                    )}
                </button>
            </div>

            {/* Step badge */}
            <div className={`flex p-5 items-center ${collapsed ? "justify-center" : "" }`}>
                <div className="w-14 h-14 text-2xl flex items-center justify-center rounded-full bg-white font-bold">
                    3
                </div>
                {!collapsed && (
                <div className="text-white p-2">
                    Finance <br /> School
                </div>
                )}
            </div>

            {/* Navigation */}
            <nav className="p-2 space-y-4">
                <Link href="/dashboard" className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faHotel} />
                {!collapsed && "Dashboard"}
                </Link>
                <Link href="/dashboard/reports"
                    className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faBookOpen} />
                {!collapsed && "Courses"}
                </Link>
                <Link href="/dashboard/transactions"
                    className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faMedal} />
                {!collapsed && "Achievements"}
                </Link>
                <Link href="/dashboard/analytics"
                    className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faUsers} />
                {!collapsed && "Community"}
                </Link>
                <Link href="/dashboard/profile"
                    className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faCreditCard} />
                {!collapsed && "Payments"}
                </Link>
                <Link href="/dashboard/settings"
                    className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faCircleUser} />
                {!collapsed && "Account"}
                </Link>
                <Link href="/dashboard/settings"
                    className="flex items-center gap-2 text-white hover:bg-gray-600 p-3 rounded">
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                {!collapsed && "Logout"}
                </Link>
            </nav>
        </aside>

        {/* Main Content */}
        <div className="flex flex-1 flex-col transition-all duration-300" style={{
          marginLeft: isDesktop
            ? collapsed
              ? "5rem"
              : "16rem"
            : "0rem",
        }}>
            {/* Mobile Navbar */}
            <header className="flex items-center justify-between bg-white shadow px-4 py-3 md:hidden">
                <button onClick={()=> setOpen(!open)}>
                    <Menu className="h-6 w-6 text-black" />
                </button>
                {/* Right side */}
                <div className="flex items-center gap-4">
                    <div
                        className="w-12 h-12 text-2xl flex items-center justify-center rounded-full bg-white text-white font-bold">
                        <NotificationsIcon />
                    </div>
                    <Image src="/images/anzy.webp" alt="Profile" width={50} height={50} className="mr-2 rounded-full" />
                    <span>Anderson Caleb</span>
                </div>
            </header>

            {/* Page content */}
            <main className="flex-1">{children}</main>
        </div>
    </div>
    );
    }