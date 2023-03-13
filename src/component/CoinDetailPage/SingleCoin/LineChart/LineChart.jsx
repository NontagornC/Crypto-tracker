import React from "react";
import { useState,useEffect} from "react";
import {
    Area,
    AreaChart,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from "recharts";
import axios from "axios";
import "./LineChart.scss"

function LineChart({id}) {
    const [fetchData, setfetchData] = useState([]);
    const [days,setDays]=useState(90)

  const url = () => {
    return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month}`;
  }

  const fetchGraphData = async () => {
    const data = await axios.get(url());
    setfetchData(data.data.prices);
  };

  const data = [
    fetchData.map((e) => {
      return {
        date:formatDate(new Date(e[0])),
        price: e[1].toFixed(2),
      };
    }),
  ];

  console.log("data", data);

  useEffect(() => {
    fetchGraphData();
    // eslint-disable-next-line
  }, [days]);
    

    
    return (
        <div className="chart_container">
            <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        data={data[0]}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#c31432" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#c31432" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="date" stroke="#ffffff" />
                        <YAxis stroke="#ffffff" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip
                            content={({ active, payload, label }) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div
                                            style={{
                                                background: 'black',
                                                color: 'white',
                                                padding: '10px',
                                                borderRadius: '5px',
                                                border: '1px solid white',
                                            }}
                                        >
                                            <p>{`Date : ${label} Price : ${payload[0].value}`}</p>
                                        </div>
                                    );
                                }

                                return null;
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#c31432"
                            fillOpacity={1}
                            fill="url(#colorUv)"
                        />
                    </AreaChart>
            </ResponsiveContainer>
            <div className="btn_container">
                <button onClick={()=>setDays(7)}>7 Days</button>
                <button onClick={()=>setDays(30)}>30 Days</button>
                <button onClick={()=>setDays(90)}>3 Months</button>
                <button onClick={()=>setDays(365)}>1 Year</button>
            </div>
        </div>
        
    );
    }
    export default LineChart;