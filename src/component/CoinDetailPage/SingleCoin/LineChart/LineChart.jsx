import React from "react";
import { useState,useEffect} from "react";
import {
    Area,
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
import axios from "axios";

function LineChart({id}) {
    const [fetchData, setfetchData] = useState([]);
    const [days,setDays]=useState(365)

  const url = () => {
    return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
  };

  const lastUpdated = (data) =>
    new Date(data).toLocaleString({
      timeZone: "Asia/Bangkok",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const fetchGraphData = async () => {
    const data = await axios.get(url());
    setfetchData(data.data.prices);
  };

  const data = [
    fetchData.map((e) => {
      return {
        date: lastUpdated(new Date(e[0])),
        price: e[1].toFixed(2),
      };
    }),
  ];

  console.log("data", id);

  useEffect(() => {
    fetchGraphData();
    // eslint-disable-next-line
  }, [days]);
    

    
    return (
        <div className="main_container">
            <AreaChart
                width={730}
                height={250}
                data={data[0]}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                </defs>
                <XAxis dataKey="date" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
                />
            </AreaChart>
            <div className="btn_container">
                <button onClick={()=>setDays(1)}>1</button>
                <button onClick={()=>setDays(30)}>30</button>
                <button onClick={()=>setDays(90)}>90</button>
                <button onClick={()=>setDays(365)}>365</button>
            </div>
        </div>
        
    );
    }
    export default LineChart;