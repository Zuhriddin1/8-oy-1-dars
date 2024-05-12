import Header from "../components/Header";
import Inputs from "../components/Inputs";
import Letter from "../components/Letter";
import Slider from "../components/Slider";
import TrackingPlace from "../components/Tracking-Place";
function Tracking() {
  return (
    <>
      <Header></Header>
      <div className="w-[1,000px] rounded-[24px] border border-[#E2E2EA] mt-[30px] ml-[24px] mr-[24px] pl-[16px] pr-[16px] pt-[24px]">
        <div className="">
          <TrackingPlace></TrackingPlace>
          <hr />
        </div>
        <div className="mt-[32px] ">
          <Inputs></Inputs>
        </div>
        <div>
          <Slider></Slider>
        </div>
        <div className="bg-[#F8F8F8] w-[1,360px]  h-[648px] pl-[24px] pr-[24px] border border-[#E2E2EA]  mt-[16px]">
          <div>
            <div className="w-[762px] h-[36px] pt-[24px] pl-[24px]">
              <h1 className="font-semibold text-[24px] leading-[36px] tracking-[0.1px] text-[#171725]">
                Habarning ko’rinishi
              </h1>
            </div>
            <div className="w-[762px] h-[600px] pt-[24px] ml-[40px]">
              <Letter></Letter>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracking;
