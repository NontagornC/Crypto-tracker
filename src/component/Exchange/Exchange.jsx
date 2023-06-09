import React from 'react'
import "./Exchange.scss"
import {Accordion,Row,Col,Form} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import fetchData from '../../utils/fetchData';


const Exchange = () => {

  const [data,setData]=useState([])
  const [searchWord,setSearchWord] = useState("")
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    fetchData("https://api.coingecko.com/api/v3/exchanges?per_page=250").then((result)=>{
      console.log(result.data);
      setData(result.data)
    }).catch((error)=>{
      console.error(error)
    })
  }

  return (
    <div className="main_container">
      <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search for your coins"
              className="me-2"
              aria-label="Search" value={searchWord}
              onChange={(e)=>{
                setSearchWord(e.target.value)
                console.log(searchWord);
              }}
              style={{ color: "white" }}
            />
      </Form>
      <div className='accordion_container'  style={{width: "70%"}}>
        <Accordion alwaysOpen flush>
          {data .filter((result) =>
          result.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          result.id.toLowerCase().includes(searchWord.toLowerCase())
          ).map((result)=>{
            return (
            <Accordion.Item key={result.id} eventKey={result.id}>
              
              <Accordion.Header>
                  <Row className='title_box' style={{width: "100%"}}>
                    <Col className='exchange_name'>
                      <img src={result.image} alt={result.id} />
                      <span>{result.name}</span>
                    </Col>
                    <Col className='text'>Rank : {result.trust_score_rank}</Col>
                    <Col className='text'>Trust Score : {result.trust_score}</Col>
                  </Row>
              </Accordion.Header>

              <Accordion.Body>
                <Row className='name'>
                  <span>{result.name}</span>
                </Row>
                <Row className='des'>
                  <span>{result?.description ? result.description : 
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quo est eligendi distinctio fuga, similique voluptates, aperiam iure autem, quas ipsum provident earum culpa odio. Quaerat esse fugit accusamus vel?" 
                  }</span>
                </Row>
                <Row className='more_info'>
                  <Col>Country : {result.country}</Col>
                  <Col>Year Established: {result.year_established}</Col>
                </Row>
              </Accordion.Body>
          
            </Accordion.Item>
            )
          })}
        </Accordion>

      </div>
    </div>
  )
}

export default Exchange