import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
const Eye = process.env.PUBLIC_URL + '/assets/Eye.png'
const Order = process.env.PUBLIC_URL + '/assets/Order.png'
const data = [
  { name: 'Delivered', value: 40, color: '#E5A500' },
  { name: 'Out for delivery', value: 30, color: '#956F00' },
  { name: 'Intransit', value: 20, color: '#5E4200' },
  { name: 'Pending', value: 10, color: '##FFC879' },
];

const MiddleSection = () => {
  const [activeTab, setActiveTab] = useState('Delivered');
  return (
    <div className="bg-[#fff7ee]">
    <div className="max-w-[90rem] mx-auto px-6 pt-10 pb-16">
      <h1 className="text-[24px] font-bold mb-8 text-gray-600">Instant Dive into Your Performance Metrics</h1>
      <div className="flex justify-between text-[13px] items-center mb-9">
        <div className="flex space-x-4 font-semibold text-gray-600">
          <button className="border bg-white py-2 px-4 rounded-md">Lifetime</button>
          <button className="border bg-white py-2 px-4 rounded-md">Last Week</button>
          <button className="border bg-white py-2 px-4 rounded-md">Last Month</button>
          <button className="border bg-white py-2 px-4 rounded-md">Last Year</button>
          <button className="border bg-white py-2 px-4 rounded-md">Customize Time Line</button>
        </div>
      </div>

      <div className="flex gap-6">
      <div className="bg-white w-[448px] h-[368px] overflow-hidden border-white border-24 text-gray-600 p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex font-bold text-[14px] justify-between mb-4">
        <h2 className="font-bold text-[14px]">Shipment Updates</h2>
        <p className="font-semibold">Total Orders: 394</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-6 w-[340px] overflow-hidden ">
        {['Delivered', 'Outfordelivery', 'Intransit', 'Pending', 'Exception'].map((status) => (
          <button
            key={status}
            onClick={() => setActiveTab(status)}
            className={`px-2 py-2 text-[13px] font-semibold  rounded-md ${
              activeTab === status ? "bg-yellow-200 text-gray-800" : "bg-gray-100 text-gray-500"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Pie Chart and Legend */}
      <div className="flex flex-col justify-center items-center text-[12px]">
        {/* Pie Chart */}
        <div className="w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex mt-10 gap-3">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center mb-2">
              <span className={`w-4 h-4 rounded-full mr-2`} style={{ backgroundColor: entry.color }}></span>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* Star Facts About Orders */}
        <div className="bg-[#956F00] p-6 w-[216px] h-[368px] rounded-lg shadow-md">
          <h2 className="font-semibold text-[14px] mb-4 text-white">Star Facts about your orders!!!</h2>
          <p className=" text-[13px] text-white">There are 8 shipments that have been out for delivery for more than 3 days.</p>
          <p className="my-4 text-[13px] text-white">There are 5 shipments in exception right now.</p>
          <p className="mb-4 text-[13px] text-white">The maximum chargebacks are from Miami.</p>
          <button className="bg-white mt-11 text-[12px] font-semibold py-2 px-4 rounded-lg shadow">Check Orders Page</button>
        </div>

        {/* Tracking Page Views Vs Orders */}
        <div className="bg-white p-6 rounded-lg shadow-md w-[448px] h-[368px]">
          <h2 className="font-bold text-gray-600 text-[14px] mb-4">Tracking Page Views Vs Orders</h2>
          <p className="mb-4 text-[13px]">Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
          <div className="flex flex-col justify-between mt-4 gap-10">
            <div className="flex justify-between items-center bg-[#FFEBD5] px-4 py-2 rounded-lg">
              <div className="text-[13px] font-semibold text-gray-600">
              <p>Orders</p>
              <p className="text-[36px] text-gray-600 font-bold">80</p>
              </div>
              <div className="p-3 rounded-lg mb-2">
                <span className="text-3xl"><img src={Order} /></span>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#FFC879] px-4 py-2 rounded-lg">
              <div className="text-[13px] font-semibold text-gray-600">

              <p>Tracking Page Views</p>
              <p className="text-[36px] text-gray-600 font-bold">44</p>
              </div>
              <div className="p-3 rounded-lg mb-2">
                {/* Placeholder for Tracking Icon */}
                <span className="text-3xl"><img src={Eye}/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MiddleSection;
