import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
function ChartArt() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="ml-[25px] w-[300] gap-4 h-[384px] p-[20px] relative -translate-y-64">
      <p className="text-[14px] pt-[25px] pl-[19px] pb-[16px] leading-[17px] tracking-[0.1px] text-[#696974]">
        1 oylik SMS lar
      </p>
      <hr />
      <div className="flex flex-col pt-[16px] pl-[19px]">
        <p className="text-[14px] leading-[17px] tracking-[0.1px] text-[#696974]">
          Umumiy
        </p>
        <h1 className="mb-[20px] font-semibold text-[24px] leading-[36px] tracking-[0.1px]">
          1000 ta
        </h1>
        <hr />
        <div>
          <div className="ml-[100px] w-48 h-48 flex  relative mt-11 -translate-x-14">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="-translate-y-36 translate-x-20">
                <p className="text-[18px] leading-[27px]">70%</p>
                <p className="font-bold text-[16px] leading-[25px] tracking-[0.1px]">
                  740 ta
                </p>
                <p className="text-[14px] leading-[17px] tracking-[0.1px] text-[#696974]">
                  Yetib <br /> borgan
                </p>
              </div>
            </ResponsiveContainer>
          </div>
          <div className="ml-[100px] w-48 h-48 flex  relative mt-11 -translate-x-14">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
              <div className="-translate-y-36 translate-x-20">
                <p className="text-[18px] leading-[27px]">26%</p>
                <p className="font-bold text-[16px] leading-[25px] tracking-[0.1px]">
                  260 ta
                </p>
                <p className="text-[14px] leading-[17px] tracking-[0.1px] text-[#696974]">
                  Hatolik <br /> bo’lgan
                </p>
              </div>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartArt;