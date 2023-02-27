"use client";
import Image from "next/image";

const CategoryCard = ({ index, id, imgUrl, title, time }) => {
  return (
    <div className="flex-[2] hover:text-[#97c680] transition ">
      <div
        className={` ${
          id === 1 ? "h-[250px]" : id === 2 ? "h-[270px]" : id === 3 ? "h-[290px]" : "h-[250px]"
        } w-full relative mb-[10px]`}
      >
        <Image src={imgUrl} alt={title} fill className="object-cover rounded-2xl" />
      </div>
      <div className="text-start">
        <h3 className="text-[27px]">{title}</h3>
        <p className="text-[16px] ">{time}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
