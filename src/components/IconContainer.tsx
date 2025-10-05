import React from "react";

interface Prop {
  color: string;
  icon: React.ReactNode;
}

const IconContainer: React.FC<Prop> = ({ color, icon }) => {
  return (
    <div
      className={`${color} rounded-full p-3 sm:p-2 w-max aspect-square flex items-center justify-center transition-all duration-200`}
    >
      {icon}
    </div>
  );
};

export default IconContainer;
