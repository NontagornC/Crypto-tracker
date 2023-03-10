// import React, { useState, useEffect } from 'react'
import FetchEndPoint from '../../../utils/fetchEndpoint'
import { useParams } from 'react-router-dom'

const SingleCoin = () => {
    const {id} =useParams()
    const data = FetchEndPoint(`https://api.coingecko.com/api/v3/coins/${id}`)
    console.log(data);
  return (
    <div>
        {/* <h1>{data.data.id}</h1> */}
        <h1>Hello {id} coin </h1>
    </div>
  )
}

export default SingleCoin