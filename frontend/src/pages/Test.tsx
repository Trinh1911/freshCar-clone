import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import React from "react";

const data = [
  {
    name: "Page A",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 278,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 189,
    pv: 4800,
    amt: 2181,
  },
];

const Test = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="uv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  );
};

export default Test;
