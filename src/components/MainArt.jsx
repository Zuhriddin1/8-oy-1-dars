import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const data = [
  {
    name: "SMS yuborilganlar",
    uv: 100,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Users",
    uv: 3400,
    pv: 7598,
    amt: 5910,
  },
  {
    name: "Mahsulot sahifasiga kirganlar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Sotib olganlar",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Izoh qoldirganlar",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

export default function MainArt() {
  return (
    <>
      <div>
        <h1 className="translate-y-[280px] pl-[200px] font-bold text-[22px] leading-[28px] text-[#10384F]">
          Tracking loyihasi
        </h1>
        <div className=" pl-[120px] translate-y-[300px]">
          <BarChart
            width={784}
            height={306}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#4A3AFF" background={{ fill: "#eee" }} />
          </BarChart>
        </div>
      </div>
    </>
  );
}
