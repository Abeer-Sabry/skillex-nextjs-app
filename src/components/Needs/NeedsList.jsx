import React from "react";

const NeedsList = ({ icon, line, title, info, className }) => {
  return (
    <div className="flex  items-center mb-[20px]">
      <div className="flex items-center flex-col justify-center mr-[15px] relative">
        <span
          className={`inline-block mb-[20px] w-[40px] h-[40px] text-[25px] rounded-full bg-white leading-[40px] text-center ${className}`}
        >
          {icon}
        </span>
        {line}
      </div>
      <div>
        <h4 className="mb-[3px] font-semibold text-[18px]">{title}</h4>
        <div className="text-[#7e7e7e]">{info}</div>
      </div>
    </div>
  );
};

export default NeedsList;
