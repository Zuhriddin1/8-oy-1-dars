import { OutlinedInput } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
function Inputs() {
  return (
    <>
      <div className="ml-[16px] mr-[16px] flex gap-[16px] ">
        <div className="w-[672px] h-[80px]">
          <p>Loyiha nomi</p>
          <OutlinedInput
            placeholder="Loyiha nomi"
            className="w-full h-[48px] mt-[8px]"
          ></OutlinedInput>
        </div>
        <div>
          <div className="w-[672px] h-[80px]">
            <p>Tag</p>
            <OutlinedInput
              placeholder="Tag"
              className="w-full h-[48px] mt-[8px]"
            ></OutlinedInput>
          </div>
        </div>
      </div>
      <div className="ml-[16px] mr-[16px] flex gap-[16px] ">
        <div className="w-[672px] h-[80px]">
          <div className="flex items-center translate-y-2 -translate-x-2">
            <Checkbox {...label} defaultChecked color="success" />
            <p>Boshlanish vaqti</p>
          </div>
          <OutlinedInput
            placeholder="Boshlanish vaqti"
            className="w-full h-[48px] mt-[8px]"
          ></OutlinedInput>
        </div>
        <div>
          <div className="w-[672px] h-[80px]">
            <div className="flex items-center translate-y-2 -translate-x-2">
              <Checkbox {...label} defaultChecked color="success" />
              <p>Qancha vaqtda habar yuboriladi?</p>
            </div>
            <OutlinedInput
              placeholder="O’sha zahoti"
              className="w-full h-[48px] mt-[8px]"
            ></OutlinedInput>
          </div>
        </div>
      </div>
    </>
  );
}
export default Inputs;
