import Banner from "./Banner/Banner"
import About from "./About/About"
import CoinExample from "./CoinExample/CoinExample"
import { useState,useEffect } from "react"
import fetchData from "../../utils/fetchData"
// import axios from "axios";


const Home = () => {
    const [coinsExample,setCoinsExample] = useState([])

    useEffect(()=>{
        getCoin("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    },[])

    const getCoin = (url) => {
        fetchData(url)
          .then((result) => {
            console.log(result);
            setCoinsExample(result); 
          })
          .catch((error) => {
            console.error(error);
          });
      };

      // const fetchData = async (url) => {
      //   try {
      //     let data = await axios.get(url);
      //     return data;
      //   } catch (error) {
      //     console.error(error);
      //     return error;
      //   }
      // };

    return (
        <div>
            <Banner/>
            <About/>
            <CoinExample coinsExample={coinsExample}/>
        </div>
    )
}

export default Home