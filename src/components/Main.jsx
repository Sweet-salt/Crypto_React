import { useEffect, useState } from "react";
import axios from "axios";
import { coinApi } from "../util/api";

const Main = () => {
  const [coinInfo, setCoinInfo] = useState();
  // useEffect(() => {
  //   const getCoin = async () => {
  //     try {
  //       await axios
  //         .get("https://api.upbit.com/v1/market/all")
  //         .then((res) => setCoinInfo(JSON.stringify(res)));
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   getCoin();
  // }, []);
  console.log(coinApi.getMarketCodes);
  return <div>{}</div>;
};

export default Main;
