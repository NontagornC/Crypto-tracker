import React from 'react'
import FetchEndPoint from '../../../utils/fetchEndpoint'
import { useParams } from 'react-router-dom'
import "./SingleCoin.scss"
import LineChart from './LineChart/LineChart'

const SingleCoin = () => {
    const {id} =useParams()
    const res = FetchEndPoint(`https://api.coingecko.com/api/v3/coins/${id}`)
    if(!res) return;
    const data = res.data

    const lastUpdated =(data)=> new Date(data).toLocaleString({
      timeZone: 'Asia/Bangkok',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const formatNumber=(num)=> {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

  return (
    <div className='singlecoin_container'>
        <div className='main_detail'>

          <div className='name_detail'>
            <div className="name_box">
              <img src={data.image?.thumb} alt="" />
              <span>{data.name}</span>
              <div className="symbol">{data.symbol.toUpperCase()}</div>
            </div>
            <div className="rank_update">
              <div className="rank">Rank {data.market_cap_rank}</div>
              <div>Last update : {lastUpdated(data.last_updated)}</div>
            </div>
          </div>
          <div className='price_detail'>
            <span>
              24 High : {formatNumber(data.market_data.high_24h.usd.toFixed(2))}
            </span>
            <div className="price_box">
              <h1>&#36; {formatNumber(data.market_data.current_price.usd.toFixed(2))}</h1>
              <span>{formatNumber(data.market_data.price_change_percentage_24h.toFixed(2))} &#37;</span>
            </div>
            <span>
              24 Low : {formatNumber(data.market_data.low_24h.usd.toFixed(2))}
            </span>
          </div>

        </div>

        <div className='des'>{data?.description && data?.description?.uk}</div>

        <div className='sub_detail'>
          <div className="box">
            <div className='atl_ath'>
              ATH <h5>{lastUpdated(data.market_data.ath_date.usd)}</h5>
            </div>
            <h1>&#36; {formatNumber(data.market_data.ath.usd)}</h1>
            <span className="ath_percent">{data.market_data.ath_change_percentage.usd.toFixed(3)} &#37;</span>
          </div>
          <div className="box middle_box">
            <div className='atl_ath'>
              ATL <h5>{lastUpdated(data.market_data.atl_date.usd)}</h5>
            </div>
            <h1>&#36; {formatNumber(data.market_data.atl.usd)}</h1>
            <span className="atl_percent">{formatNumber(data.market_data.atl_change_percentage.usd.toFixed(3))} &#37;</span>
          </div>
          <div className="box">
            <div className='market_detail'>
              <h1>Market Cap</h1>
              <div className='block'>
                &#36; {formatNumber(data.market_data.market_cap.usd)} <span>{formatNumber(data.market_data.market_cap_change_percentage_24h.toFixed(2))} &#37;</span>
              </div>
            </div>
            <div className='market_detail'>
              <h1>total volume</h1>
              &#36; {formatNumber(data.market_data.total_volume.usd)} 
            </div>
          </div>
        </div>

          <LineChart id={data.id}/>
    </div>
  )
}

export default SingleCoin