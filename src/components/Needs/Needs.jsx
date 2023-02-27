import style from "@/styles";
import { icons } from "react-icons";
import NeedsList from "./NeedsList";
import { BiAward, BiBrain } from "react-icons/bi";
import { GiElectric } from "react-icons/gi";
const Needs = () => {
  return (
    <div className={`${style.xPaddings} my-[100px]`}>
      <div className="flex items-center flex-col md:flex-row mb-[20px]">
        <h3 className="text-[45px] font-semibold leading-[52px] mr-[200px]">
          Get the skills you <br /> need for a job that <br /> is in demand
          <span className="inline-block w-[4px] h-[4px] bg-[#8FB67B]" />
        </h3>
        <p className="text-[23px] font-thin">
          The modern labor market dictates its own terms. <br /> Today, to be a competitive
          specialist requires more <br /> than professional skills.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
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

        <div className="">
          <div className="bg-[#97c680] flex">
            <div className="flex items-center text-[]">
              <span className="inline-block mr-[12px] ">10</span>
              <span className="leading-[15px]">
                years
                <br />
                experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;
