"use client";
import style from "../../styles";
import { headerSlider } from "@/constants";
import HeaderCard from "./HeaderCard";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState(1);

  return (
    <div
      className={`relative flex md:flex-row flex-col mb-[100px] ${style.xPaddings} items-center justify-between gap-3`}
    >
      <div>
        <h1 className="font-[550] text-[80px] leading-[80px] mb-[25px]">
          Start.
          <br />
          Search.
          <br />
          Grow.
        </h1>

        <div className="flex items-center md:translate-x-[200px] relative z-10">
          <input
            // type="text"
            placeholder="Find your passion"
            className="py-[35px] w-[300px] pl-[40px] placeholder:text-[#1B1928] focus-visible:outline-[#8FB67B]  outline-[0.5px]  hover:shadow-xl  shadow-lg shadow-[#EDE8E6] transition"
          />
          <button className="bg-[#97c680] p-[25px] text-[30px]">Go</button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col gap-5 ">
        {headerSlider.map((header, index) => (
          <HeaderCard
            key={header.id}
            {...header}
            index={index}
            active={active}
            activeHandler={setActive}
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
