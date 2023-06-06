import React from 'react';
import { LineChart, Line } from "recharts";



const Line4 = () => {

    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 7000,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 998,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 5500,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 7800,
          amt: 2181
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 11300,
          amt: 2100
        }
      ];
      
    return (
        <div className="flex justify-center">
        <div className='max-w-[450px] w-full'>

<div className=" rounded-lg  flex justify-between items-center gap-1 p-4 bg-gradient-to-r from-[#cecaf8] to-[#f4f3ff] shadow-lg">
                <div className="">
                <h1 className="text-lg font-semibold text-[#8f86f1]">Revenue</h1>
                <h1 className="text-2xl font-bold text-[#685ecc]">$15000+</h1>
                </div>
            <LineChart width={50} height={100} data={data}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>

              </div>

            
            
        </div>
        </div>
    );
};

export default Line4;