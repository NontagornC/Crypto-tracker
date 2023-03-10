import { useState, useEffect } from "react";
import fetchData from "./fetchData";

const FetchEndPoint = (urlEndPoint) => {
  const [endPointData, setEndPointData] = useState(0);

  useEffect(() => {
    getData();
  }, [urlEndPoint]);

  const getData = async () => {
    const data = await fetchData(urlEndPoint);
    setEndPointData(data);
  };

  return endPointData;
};

export default FetchEndPoint;
