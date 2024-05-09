import send from "../assets/Letter.svg";
import task from "../assets/Money.svg";
import user from "../assets/Users.svg";
import ChartArt from "./ChartArt";
import Example from "./LineCharat";
function Navigation() {
  return (
    <>
      <div className="flex">
        <div className="bg-[#FAFAFB] flex ml-[24px] -translate-y-60 w-[350px] h-[105px]">
          <img
            src={send}
            className="w-[56px] h-[56px] translate-x-[16px] translate-y-[16px]"
            alt=""
          />
          <div className="translate-x-[38px] translate-y-[16px] text-[#92929D]">
            <p className="font-medium text-[12px] leading-[18px] tracking-[0.1px] ">
              Tracking loyihalari
            </p>
            <h1 className="text-[#0062FF] font-bold text-[24px] leading-[36px] tracking-[0.12px]">
              5 ta
            </h1>
            <p className="text-[14px] leading-[21px] tracking-[0.12px] text-[#44444F]">
              (7 ta subloyiha)
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFB] flex ml-[24px] -translate-y-60 w-[350px] h-[105px]">
          <img
            src={task}
            className="w-[56px] h-[56px] translate-x-[16px] translate-y-[16px]"
            alt=""
          />
          <div className="translate-x-[38px] translate-y-[16px] text-[#92929D]">
            <p className="font-medium text-[12px] leading-[18px] tracking-[0.1px] ">
              Sharh olish loyihalari
            </p>
            <h1 className="text-[#0062FF] font-bold text-[24px] leading-[36px] tracking-[0.12px]">
              15 ta
            </h1>
            <p className="text-[14px] leading-[21px] tracking-[0.12px] text-[#44444F]">
              (7 ta subloyiha)
            </p>
          </div>
        </div>
        <div className="bg-[#FAFAFB] flex ml-[24px] -translate-y-60 w-[350px] h-[105px]">
          <img
            src={user}
            className="w-[56px] h-[56px] translate-x-[16px] translate-y-[16px]"
            alt=""
          />
          <div className="translate-x-[38px] translate-y-[16px] text-[#92929D]">
            <p className="font-medium text-[12px] leading-[18px] tracking-[0.1px] ">
              Mijozlar
            </p>
            <h1 className="text-[#0062FF] font-bold text-[24px] leading-[36px] tracking-[0.12px]">
              12,345 ta
            </h1>
            <p className="text-[14px] leading-[21px] tracking-[0.12px] text-[#44444F]">
              (563 ta saralanmagan)
            </p>
          </div>
        </div>
        <ChartArt />
      </div>  
    </>
  );
}

export default Navigation;
