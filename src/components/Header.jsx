import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import main from "../assets/Asosiy.svg";
import letter from "../assets/sms-tracking.svg";
import taklif from "../assets/Send.svg";
import down from "../assets/down.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="w-[1440px] h-[70px] ">
        <div className="pt-[23px] pb-[18px] flex">
          <img className="pl-[80px]" src={logo} alt="" />
          <div className="w-[838px] h-[21px] pt-[3px] text-[#92929D] ">
            <div className="flex cursor-pointer">
              <div className="flex flex-row pt-[3px] gap-[8px] pl-[111px] translate-x-6">
                <img src={main} alt="" />
                <Link to="/">
                  <p className="hover:text-blue-500 hover:underline font-bold text-[14px] leading-[21px] tracking-[0.1px] ">
                    Asosiy
                  </p>
                </Link>
              </div>
              <div className=" flex pt-[3px] gap-[8px] ml-[20px] translate-x-6">
                <img className="" src={user} alt="" />
                <p className="font-bold text-[14px] leading-[21px] tracking-[0.1px]">
                  Mijozlar bazasi
                </p>
              </div>
              <div className=" flex pt-[3px] gap-[8px] ml-[20px] translate-x-10">
                <img className="" src={letter} alt="" />
                <Link to={"/tracking"}>
                  <p className="hover:text-blue-500 hover:underline font-bold text-[14px] leading-[21px] tracking-[0.1px]">
                    Tracking loyihalari
                  </p>
                </Link>
              </div>
              <div className=" flex pt-[3px] gap-[8px] ml-[20px] translate-x-10">
                <img className="" src={letter} alt="" />
                <p className="font-bold text-[14px] leading-[21px] tracking-[0.1px]">
                  Sharh olish loyihalari
                </p>
              </div>
              <div className=" flex pt-[3px] gap-[8px] ml-[20px] translate-x-10">
                <img className="" src={taklif} alt="" />
                <p className="font-bold text-[14px] leading-[21px] tracking-[0.1px]">
                  Redirect loyihalari
                </p>
              </div>
            </div>
            <div className="absolute flex items-center gap-5 right-[0px] left-[1199px] top-5">
              <Stack spacing={2}>
                <Avatar alt="Remy Sharp" src="/src/assets/Profille.svg" />
              </Stack>
              <p className="font-bold text-[14px] leading-[14px] tracking-[0.1px] text-black cursor-pointer ">
                Austin Robertson
              </p>
              <img src={down} alt="" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Header;
