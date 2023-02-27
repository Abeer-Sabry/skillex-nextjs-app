import style from "@/styles";

const Footer = () => {
  return (
    <div className={`flex justify-between ${style.xPaddings} items-center mb-[20px] `}>
      <p className="uppercase font-extrabold">
        skills
        <span className="inline-block w-[4px] h-[4px] bg-[#8FB67B]" />
      </p>
      <div>
        <span>Find passion</span>
        <br />
        <span>Skills</span>
      </div>
      <div>
        <span>Categories</span>
        <br />
        <span>Customer</span>
      </div>
      <div>
        <p className="mb-[5px]">Join our community</p>
        <div className="flex items-center relative z-10">
          <input
            // type="text"
            placeholder="Enter Your Email"
            className="py-[20px] w-[200px] pl-[12px] placeholder:text-[#1B1928] focus-visible:outline-[#8FB67B]  outline-[0.5px]  hover:shadow-xl  shadow-lg shadow-[#EDE8E6] transition"
          />
          <button className="bg-[#97c680] p-[10px] text-[30px]">Go</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
