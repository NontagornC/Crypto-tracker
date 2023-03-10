import React from 'react'
import CoinItem from './CoinItem/CoinItem'
import {Row,Col} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./CoinExample.scss"

const CoinExample = ({coinsExample}) => {
  const navigate = useNavigate()
  return (
    <div className="coin_box">
        <Row className="big_text">
          <Col>10 Top cryptocurrencies</Col>
        </Row>
        <Row className="small_text">
          <Col>More 100+ crypto coin available in the market</Col>
        </Row>
        <CoinItem coinsExample={coinsExample}/>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate(`/detailpage`)}>See more</button>
    </div>
  )
}

export default CoinExample