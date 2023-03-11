import React from "react";
import { Line } from "react-chartjs-2";
import { useState,useEffect } from "react";
import axios from "axios";

function LineChart({id}) {
    const [days,setDays]=useState(1)
    const [graphData,setGraphData]=useState()


    const url =( id , days) =>{
        return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`;
    }

    const fetchGraphData = async ()=>{
        const data = await axios.get(url(id,days))

        console.log("test1",data.data.prices);
        setGraphData(data.data.prices)
    }
    console.log("test2",graphData);

    useEffect(() => {
        fetchGraphData();
         // eslint-disable-next-line
      }, [days]);
    
      useEffect(() => {
        fetchGraphData();
         // eslint-disable-next-line
      }, []);



    // const [userData, setUserData] = useState({
    //     labels: [2016, 2017, 2018, 2019, 2020],
    //     datasets: [
    //       {
    //         label: "Users Gained",
    //         data: [80000, 45688, 78888, 90000, 4300],
    //         backgroundColor: [
    //           "rgba(75,192,192,1)",
    //           "#ecf0f1",
    //           "#50AF95",
    //           "#f3ba2f",
    //           "#2a71d0",
    //         ],
    //         borderColor: "black",
    //         borderWidth: 2,
    //       },
    //     ],
    //   });
    return (
        <div>
             <Line data={{
                labels: graphData?.map((e)=>{
                    let date = new Date(e[0]);
                    let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [{ 
                    data: graphData?.map((e)=>{
                        return (e[1])
                    })
                }]
             }}
             />
        </div>
    );
  }
  
  export default LineChart;