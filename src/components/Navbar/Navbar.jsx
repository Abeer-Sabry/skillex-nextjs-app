"use client";
import style from "../../styles";
import { colors } from "@/constants";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

const Navbar = () => {
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={` relative py-8 ${style.xPaddings}`}
    >
      <div className="flex md:flex-row flex-col justify-between">
        <p className="uppercase font-extrabold">
          skills<span className="inline-block w-[4px] h-[4px] bg-[#8FB67B]"></span>
        </p>
        <ul>
          <li>
            <a className="pr-4 text-[14px] font-medium relative" href="">
              Find Position
              <div className={`absolute bottom-[1px] left-0 bg-[#8FB67B] h-[3px] w-[85%]`} />
            </a>
            <a className="pr-3 text-[14px] font-medium relative" href="">
              Categories
              {/* <div className={`absolute bottom-[1px] left-0 bg-[#8FB67B] h-[3px] w-[85%]`} /> */}
            </a>
            <a className="pr-3 text-[14px] font-medium relative" href="">
              Skills
              <div className={`absolute bottom-[1px] left-0 bg-[#8FB67B] h-[3px] w-[85%]`} />
            </a>
            <a className="pr-3 text-[14px] font-medium  relative" href="">
              Customers
              {/* <div className={`absolute bottom-[1px] left-0 bg-[#8FB67B] h-[3px] w-[85%]`} /> */}
            </a>
          </li>
        </ul>
        <div>
          <button className="capitalize text-[14px]">login</button>
          <button className="bg-[#1B1928] text-white ml-5 px-[30px] capitalize py-1 rounded-full text-[13px] ">
            free trial
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
