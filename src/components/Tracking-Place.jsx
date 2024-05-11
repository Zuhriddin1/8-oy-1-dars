import Aroow from "../assets/arrow-right.svg";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
function TrackingPlace() {
  return (
    <>
      <div className="flex items-center mb-[16px] justify-between">
        <div className="flex gap-[24px] pt-[6px] pl-[6px] pb-[6px]">
          <img src={Aroow} alt="" />
          <h1 className="font-bold text-[22px] leading-[36px] tracking-[0.1px]">
            Subloyiha ochish
          </h1>
        </div>
        <div className="flex">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </div>
      </div>
    </>
  );
}
export default TrackingPlace;
