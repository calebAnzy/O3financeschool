import React from "react";

interface ProgressProps {
  percentageCompleted: string; // e.g., "w-[75%]" or "w-3/4"
}

const Progress: React.FC<ProgressProps> = ({ percentageCompleted }) => {
  return (
    <div className="bg-[#CDD4DD] rounded-full h-2 w-full overflow-hidden">
      <div
        className={`${percentageCompleted} bg-primary h-2 rounded-full transition-all duration-500 ease-in-out`}
        aria-valuenow={parseInt(percentageCompleted.replace(/[^0-9]/g, "")) || 0}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      ></div>
    </div>
  );
};

export default Progress;
