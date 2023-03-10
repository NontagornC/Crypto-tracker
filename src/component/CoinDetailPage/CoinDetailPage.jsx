import React, { useEffect, useState } from 'react'
import {Form,Button,Row,Col,Container} from 'react-bootstrap';
import "./CoinDetailPage.scss"
import fetchData from '../../utils/fetchData';
import { AiOutlineSearch } from "react-icons/ai";

const CoinDetailPage = () => {
  const [coinData,setCoinData]=useState({})

  useEffect(()=>{
    getData()
    // eslint-disable-next-line
  },[])

  const getData =()=> fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d").then((result)=>{
    console.log(result.data);
    setCoinData(result.data)
  }).catch((error)=>{
    console.error(error)
  })

  return (
    <div className='detail_container'>
      <Container>
        <Row className='big_text'>Today's Cryptocurrency Prices</Row>
        <Row className='small_text'>Top 3 Cryptocurrency</Row>
        <Row className='title_container'>
          {Array.isArray(coinData) &&coinData.map((result)=>{
            return (
              <Col key={result.id}>
                  <Row className='img'><img src={result.image} alt={result.id} /></Row>
                  <Row className='name'>{result.name}</Row>
                  <Row className='price'>{result.current_price} &#36;</Row>
              </Col>
            )
          })}
        </Row>
      </Container>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">{AiOutlineSearch}</Button>
          </Form>
    </div>
  )
}

export default CoinDetailPage