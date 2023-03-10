import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Form,Button,Row,Col,Container,Table} from 'react-bootstrap';
import fetchData from '../../utils/fetchData';
import { AiOutlineSearch } from "react-icons/ai";
import { SiBitcoincash } from "react-icons/si";
import { BiArrowToTop,BiArrowToBottom } from "react-icons/bi";
import "./CoinDetailPage.scss"

const CoinDetailPage = () => {
  const [coinData,setCoinData]=useState({})
  const [allCoinData,setAllCoinData]=useState([])
  const navigate = useNavigate()
  
  useEffect(()=>{
    getData()
    getAlldata()
    // eslint-disable-next-line
  },[])

  const getData =()=> fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d").then((result)=>{
    console.log(result.data);
    setCoinData(result.data)
  }).catch((error)=>{
    console.error(error)
  })

  const getAlldata =()=> fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false").then((result)=>{
    console.log(result.data);
    setAllCoinData(result.data)
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
                  <Row className='price'>{result.current_price.toFixed(3)}<span>&#36;</span></Row>
              </Col>
            )
          })}
        </Row>
      </Container>
      <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search for your coins"
              className="me-2"
              aria-label="Search"
            />
            <Button >
              <AiOutlineSearch className="search-icon"/>
            </Button>
      </Form>
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
            {allCoinData.map((item)=>{
              return (
                <tr key={item.id} onClick={()=>navigate(`/singlecoin/${item.id}`)}>
                  <td>{item.market_cap_rank}</td>
                  <td className='detail_box'><img src={item.image} alt={item.name} />{item.symbol.toUpperCase()} <span>{item.name}</span></td>
                  <td>&#36; {item.current_price}</td>
                  <td className='high'>&#36; {item.high_24h}</td>
                  <td className='low'>&#36; {item.low_24h}</td>
                  <td>&#36; {item.market_cap}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
    </div>
    </div>
  )
}

export default CoinDetailPage