import style from "@/styles";
import NeedsList from "./NeedsList";
import { BiAward, BiBrain } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
const Needs = () => {
  return (
    <div className={`${style.xPaddings} my-[100px]`}>
      <div className="flex items-center flex-col md:flex-row mb-[50px] ">
        <h3 className="text-[45px] font-semibold leading-[52px] mr-[200px]">
          Get the skills you <br /> need for a job that <br /> is in demand
          <span className="inline-block w-[4px] h-[4px] bg-[#8FB67B]" />
        </h3>
        <p className="text-[23px] font-thin">
          The modern labor market dictates its own terms. <br /> Today, to be a competitive
          specialist requires more <br /> than professional skills.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-8 items-center ">
        <div className="flex flex-col ">
          <NeedsList
            className="text-[#BF8D5C]"
            icon={<BiAward />}
            line={
              <div className="border-l-2 h-[50px] border-slate-500 border-dotted absolute bottom-[-27px] left-[12px]" />
            }
            title={"Leadership"}
            info={
              <p>
                Fully committed to <br /> the success company
              </p>
            }
          />
          <NeedsList
            className="text-[#6C749D]"
            icon={<BiBrain />}
            line={
              <div className="border-l-2 h-[50px] border-slate-500 border-dotted absolute bottom-[-27px] left-[12px]" />
            }
            title={"Responsibility"}
            info={
              <p>
                Employees will always <br /> be my top priority
              </p>
            }
          />
          <NeedsList
            className="text-[#A969A9]"
            icon={<GiElectric />}
            title={"Flexibility"}
            info={
              <p>
                The ability to switch is <br /> an important skill
              </p>
            }
          />
        </div>

        <div className="relative flex-[10] flex justify-center">
          <div className="bg-[#97c680] flex p-[25px] absolute top-[-60px]">
            <div className="flex items-center border-r-2 border-[#1B1928] pr-[15px] mr-[15px] ">
              <span className="inline-block mr-[12px] text-[40px]">10</span>
              <span className="leading-[15px] text-[12px] uppercase font-semibold">
                years
                <br />
                experience
              </span>
            </div>
            <div className="flex items-center uppercase font-semibold">
              <span className="inline-block mr-[12px] text-[40px]">250</span>
              <span className="leading-[15px] text-[12px]">
                Types Of
                <br />
                COURSES
              </span>
            </div>
          </div>
          <iframe
            width="80%"
            height="415"
            src="https://www.youtube.com/embed/aGd_Rrs-qNY"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Needs;
