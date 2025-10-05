import IconContainer from "../IconContainer"
import {
CertificatesIcon,
CompletedIcon,
HoursIcon,
PointsIcon,
} from "../Icons"

const Summary = () => {
return (
<div className="w-full">
    <h3 className="text-lg font-semibold mb-2">Learning Summary</h3>

    <section className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-4 my-4 [&_div]:border [&_div]:rounded-xl [&_div]:border-[#E4E7EC] [&_div]:py-3 [&_div]:px-4 max-w-xl
          ">
        {/* Courses Completed */}
        <div className="flex items-center gap-3">
            <IconContainer color="bg-[#E6F7FE]" icon={<CompletedIcon />} />
            <section className="leading-none">
                <p className="text-[#343a40af] text-xs sm:text-sm">
                    Courses Completed
                </p>
                <h3 className="text-[#141416] text-lg font-semibold">12/22</h3>
            </section>
        </div>

        {/* Total Hours */}
        <div className="flex items-center gap-3">
            <IconContainer color="bg-[#E9C8F9]" icon={<HoursIcon />} />
            <section className="leading-none">
                <p className="text-[#343a40af] text-xs sm:text-sm">Total Hours</p>
                <h3 className="text-[#141416] text-lg font-semibold">400 hr</h3>
            </section>
        </div>

        {/* Certificates */}
        <div className="flex items-center gap-3">
            <IconContainer color="bg-[#C1FFB2]" icon={<CertificatesIcon />} />
            <section className="leading-none">
                <p className="text-[#343a40af] text-xs sm:text-sm">Certificates</p>
                <h3 className="text-[#141416] text-lg font-semibold">5</h3>
            </section>
        </div>

        {/* Game Points */}
        <div className="flex items-center gap-3">
            <IconContainer color="bg-[#D9DCFC]" icon={<PointsIcon />} />
            <section className="leading-none">
                <p className="text-[#343a40af] text-xs sm:text-sm">Game Points</p>
                <h3 className="text-[#141416] text-lg font-semibold">400</h3>
            </section>
        </div>
    </section>
</div>
)
}

export default Summary