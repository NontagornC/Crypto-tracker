import { useNavigate } from 'react-router-dom';
import { SiBitcoincash } from "react-icons/si";
import React, { useEffect, useState } from 'react'
import {Row,Col,Container,Table,Form} from 'react-bootstrap';
import { BiArrowToTop,BiArrowToBottom,BiSortAlt2 } from "react-icons/bi";
import fetchData from '../../utils/fetchData';
import "./CoinDetailPage.scss"

const CoinDetailPage = () => {

  const navigate = useNavigate()
  const [allCoinData,setAllCoinData]=useState([])
  const [searchWord,setSearchWord] = useState("")
  const [sortOrder,setSortOrder] = useState("asc")
  const [topCoins,setTopCoins] = useState([])
  var topCoins2 = []
  
  useEffect(()=>{
    // getData()
    getAlldata()
    // eslint-disable-next-line
  },[])

  // const getData =()=> fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d").then((result)=>{
  //   setCoinData(result.data)
  // }).catch((error)=>{
  //   console.error(error)
  // })

  const getAlldata =()=> fetchData("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false").then((result)=>{
    setAllCoinData(result.data)
    topCoins2 = ([])
    for (let i=0; i<4 ; i++){
      topCoins2.push(result.data[i])
    }
    setTopCoins(topCoins2)
  }).catch((error)=>{
    console.error(error)
  })


  const handleSort = (columnKey) => {
    if (sortOrder === "asc") {
      setAllCoinData((prevData) =>
        prevData.sort((a, b) => b[columnKey] - a[columnKey])
      );
      setSortOrder("desc");
    } else {
      setAllCoinData((prevData) =>
        prevData.sort((a, b) => a[columnKey] - b[columnKey])
      );
      setSortOrder("asc");
    }
  };

  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <div className='detail_container'>
      <Container>
        <Row className='big_text'>Today's Cryptocurrency Prices</Row>
        <Row className='small_text'>Top 4 Cryptocurrency</Row>
        <Row className='title_container'>
          {topCoins.map((result)=>{
            return ( 
              <Col key={result.id} onClick={()=>navigate(`/singlecoin/${result.id}`)}>
                  <Row className='img'><img src={result.image} alt={result.id} /></Row>
                  <Row className='name'>{result.name}</Row>
                  <Row className='price'>{formatNumber(result.current_price.toFixed(2))}<span>&#36;</span></Row>
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
              aria-label="Search" value={searchWord}
              onChange={(e)=>{
                setSearchWord(e.target.value)
              }}
              style={{ color: "white" }}
            />
      </Form>

      <div className='table_box'>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className='symbol'><SiBitcoincash onClick={() => handleSort("market_cap_rank")} style={{cursor: "pointer"}}/></th>
              <th >Currency</th>
              <th >Price <BiSortAlt2 onClick={() => handleSort("current_price")} style={{cursor: "pointer"}}/></th>
              <th className='high'>24 High <BiArrowToTop onClick={() => handleSort("high_24h")} style={{cursor: "pointer"}}/></th>
              <th className='low'>24 Low <BiArrowToBottom onClick={() => handleSort("low_24h")} style={{cursor: "pointer"}}/></th>
              <th >Market Cap <BiSortAlt2 onClick={() => handleSort("market_cap")} style={{cursor: "pointer"}}/></th>
            </tr>
          </thead>
          <tbody>
            {allCoinData.filter((result) =>
                result.name.toLowerCase().includes(searchWord.toLowerCase()) ||
                result.symbol.toLowerCase().includes(searchWord.toLowerCase())
                ).map((item)=>{
              return (
                <tr key={item.id} onClick={()=>navigate(`/singlecoin/${item.id}`)}>
                  <td className='rank'>{item.market_cap_rank}</td>
                  <td className='detail_box'><img src={item.image} alt={item.name} />{item.symbol.toUpperCase()} <span>{item.name}</span></td>
                  <td>&#36; {formatNumber(item.current_price)}</td>
                  <td className='high'>&#36; {item.high_24h}</td>
                  <td className='low'>&#36; {item.low_24h}</td>
                  <td>&#36; {formatNumber(item.market_cap)}</td>
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