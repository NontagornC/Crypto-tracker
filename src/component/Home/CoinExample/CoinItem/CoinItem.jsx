import React from 'react'
import Table from 'react-bootstrap/Table';
import "./CoinItem.scss"
import { SiBitcoincash } from "react-icons/si";
import { BiArrowToTop,BiArrowToBottom } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const CoinItem = ({coinsExample}) => {
  const navigate = useNavigate()
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  return (
    <div className='table_box'>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='symbol'><SiBitcoincash/></th>
              <th >Currency</th>
              <th >Price</th>
              <th className='high'>24 High <BiArrowToTop/></th>
              <th className='low'>24 Low <BiArrowToBottom/></th>
              <th >Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coinsExample.map((item)=>{
              return (
                <tr key={item.id} onClick={()=>navigate(`/singlecoin/${item.id}`)}>
                  <td className='rank'>{item.market_cap_rank}</td>
                  <td className='detail_box'><img src={item.image} alt={item.name} />{item.symbol.toUpperCase()} <span>{item.name}</span></td>
                  <td>&#36; {formatNumber(item.current_price)}</td>
                  <td className='high'>&#36; {formatNumber(item.high_24h)}</td>
                  <td className='low'>&#36; {formatNumber(item.low_24h)}</td>
                  <td>&#36; {formatNumber(item.market_cap)}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
    </div>
  )
}

export default CoinItem