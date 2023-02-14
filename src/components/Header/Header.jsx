"use client";
import style from "../../styles";

const Header = () => {
  return (
    <div className={`flex md:flex-row flex-col ${style.xPaddings} items-center justify-between`}>
      <h1 className="font-bold text-[40px] ">
        Watch.
        <br />
        Learn.
        <br />
        Grow.
      </h1>
      <div>hi</div>
    </div>
  );
};

export default Header;
