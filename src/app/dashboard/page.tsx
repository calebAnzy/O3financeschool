import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Header from "@/components/dashboard/Header";
import LearnerCourses from "@/components/dashboard/LearnerCourses"
import CoursePreview from "@/components/dashboard/CoursePreview"
import Schedule from "@/components/dashboard/Schedule"
import SetGoals from "@/components/dashboard/SetGoals"
import Summary from "@/components/dashboard/Summary"

export default function DashboardPage() {
return (
<div className="flex">

    {/* Main content */}
    <div className="flex-1 flex flex-col">

        {/* Desktop Navbar (hidden on mobile) */}
        <Header />

        {/* Columns */}
        <div className="flex flex-col lg:flex-row w-full">

            {/* Left Column */}
            <div className="order-1 lg:order-none lg:w-7/12 p-4">
                <h2 className="text-xl font-semibold">My Courses</h2>
                {/* Card */}
                <LearnerCourses />
                <h4 className="font-medium mb-2">Recommended for You</h4>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <CoursePreview />
                </section>
            </div>


            {/* Right Column */}
            <div className="col-span-2 order-2 lg:order-none lg:w-5/12 p-4 bg-gray-50">
                <Summary />
                <SetGoals />
                <Schedule />
            </div>

        </div>
    </div>
</div>
);
}