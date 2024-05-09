import losse from "../assets/Losse.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const LineChartComponent = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width="40%" height={400}>
        <LineChart
          className="translate-x-[900px] translate-y-14"
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="w-[500px] h-[55px] translate-x-[985px] translate-y-24  flex justify-between">
        <div>
          <h1 className="font-bold text-[24px] leading-[36px] tracking-[0.1px] text-black">
            234 ta
          </h1>
          <p className="text-[14px] leading-[17px] tracking-[0.1px] text-[#696974]">
            bu oygi feedbacklar
          </p>
        </div>
        <div className="flex pt-3">
          <p className="text-[24px] leading-[24px] tracking-[0.1px] font-extrabold text-[#FC5A5A]">
            1.5%
          </p>
          <img src={losse} className="w-[24px] h-[24px]" alt="" />
        </div>
      </div>
    </>
  );
};
export default LineChartComponent;
