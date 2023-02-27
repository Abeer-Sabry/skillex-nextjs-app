import Image from "next/image";
import React from "react";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
const HeaderCard = ({ id, imgUrl, title, topics, index, active, activeHandler }) => {
  return (
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "w-[500px]  h-[450px]" : "md:w-[170px] w-[500px]  md:h-[450px] h-[150px]"
      } flex items-center justify-center   transition-all duration-[0.5s] ease-out cursor-pointer `}
      onMouseEnter={() => activeHandler(id)}
      onMouseLeave={() => activeHandler(1)}
    >
      {/* <div className="w-full h-[200px] absolute bottom-0 z-10 bg-gradient-to-t from-neutral-800 opacity-0... rounded-b-2xl" /> */}
      <Image
        src={imgUrl}
        alt={title}
        // width={400}
        // height={400}
        fill
        className="object-cover rounded-2xl"
      />
      <div className="absolute bottom-0 left-0  bg-gradient-to-t from-[rgba(0,0,0,0.6)] rounded-b-2xl w-full h-[200px] " />
      {active === id ? (
        <div className="absolute w-full bottom-[40px] flex justify-center items-center  text-white  transition-all">
          <h2 className="text-[35px] leading-9 mr-4">
            {title}
            <br />
            Courses
          </h2>
          <span className="text-[40px] leading-6 text-center font-semibold">
            {topics} <br /> <span className="text-[13px] font-light  uppercase">topics</span>
          </span>
        </div>
      ) : (
        <div className="hidden absolute w-full bottom-[40px] h-[80px] bg-[#1B1928] text-white md:flex justify-center items-center ">
          <span className="rotate-[-90deg] translate-y-[-10px] font-semibold tracking-wide text-[25px]">
            {title}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default HeaderCard;
