import Image from "next/image";
import { LearnersIcon, LoveIcon } from "../Icons";

const CommunityPreview = () => {
  return (
    <section className="bg-white border border-[#E4E7EC] capitalize leading-none p-3 sm:p-4 rounded-lg w-full max-w-sm mx-auto">
      {/* Image */}
      <div className="rounded-lg overflow-hidden mb-2">
        <Image
          src="https://images.unsplash.com/photo-1591382326529-b48c3132b701?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Learners"
          width={300}
          height={300}
          className="w-full h-auto object-cover aspect-[280/145] sm:aspect-[16/9]"
        />
      </div>

      {/* Title and subtitle */}
      <h3 className="text-text font-medium text-base capitalize">
        product development fams
      </h3>
      <p className="text-[#343A40] font-medium text-sm mb-2">By O3 School</p>

      {/* Stats */}
      <div className="flex flex-wrap justify-between items-center gap-2 my-2">
        <section className="flex gap-4 items-center">
          <div className="flex items-center gap-1 text-sm text-[#6C757D]">
            <LoveIcon />
            <p>500</p>
          </div>
          <div className="flex items-center gap-1 text-sm text-[#6C757D]">
            <LearnersIcon />
            <p>129</p>
          </div>
        </section>
      </div>

      {/* Button */}
      <button className="w-full bg-primary text-white rounded-xl py-3 font-medium hover:bg-darkGray transition-colors duration-200">
        Join Community
      </button>
    </section>
  );
};

export default CommunityPreview;
