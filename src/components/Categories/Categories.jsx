"use client";

import { categories } from "@/constants";
import style from "@/styles";
import Link from "next/link";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className={`${style.xPaddings}`}>
      <div className="text-center text-[30px]">
        <h2 className="mb-[20px] text-[32px] ">
          Unlimited access to 100+ instructors
          <span className="inline-block w-[4px] h-[4px] bg-[#8FB67B]" />
        </h2>

        <div className="mb-[30px]">
          <ul>
            <li>
              <Link
                rel="stylesheet"
                href="/"
                className="text-[18px] border-b-[1px] border-[#1B1928] pb-1 mr-[15px]"
              >
                All Categories
              </Link>
              <Link rel="stylesheet" href="/" className="text-[20px] mr-[15px] text-gray-500">
                Entertainment
              </Link>
              <Link rel="stylesheet" href="/" className="text-[18px] mr-[15px] text-gray-500">
                Lifestyle
              </Link>
              <Link rel="stylesheet" href="/" className="text-[18px] mr-[15px] text-gray-500">
                Writing
              </Link>
              <Link rel="stylesheet" href="/" className="text-[18px] mr-[15px] text-gray-500">
                Business
              </Link>
              <Link rel="stylesheet" href="/" className="text-[18px] mr-[15px] text-gray-500">
                Food
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex md:flex-row flex-col gap-6 mb-[25px] items-end">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} {...category} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
