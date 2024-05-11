import Header from "../components/Header";
import Inputs from "../components/Inputs";
import Slider from "../components/Slider";
import TrackingPlace from "../components/Tracking-Place";
function Tracking() {
  return (
    <>
      <Header></Header>
      <div className="w-[1,000px] rounded-[24px] border h-[500px] border-[#E2E2EA] mt-[30px] ml-[24px] mr-[24px] pl-[16px] pr-[16px] pt-[24px]">
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
      </div>
    </>
  );
}

export default Tracking;
