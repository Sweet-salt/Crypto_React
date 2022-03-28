import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { useState } from "react";

import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery
} from "../services/coinApi";
import CoinChart from "./Chart";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timePeriod
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return "Loading...";
  console.log(cryptoDetails);

  const time = ["3h", "24h", "7d", "30d", "6m", "1y", "3y", "5y"];

  const supply = () => {
    if (cryptoDetails.supply.total === null) {
      return "총 공급량 데이터가 존재하지 않습니다.";
    }
    return millify(cryptoDetails.supply.total);
  };

  const circulating = () => {
    if (cryptoDetails.supply.circulating === null) {
      return "공급량 데이터가 존재하지 않습니다.";
    }
    return millify(cryptoDetails.supply.circulating);
  };

  const stats = [
    {
      title: "현재가",
      value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`
    },
    {
      title: "등락 폭",
      value: `${cryptoDetails.change} %`
    },
    { title: "시가총액 순위", value: `${cryptoDetails.rank}` },

    {
      title: "시가 총액",
      value: `${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)} $`
    },
    {
      title: "최고가",
      value: `${cryptoDetails.allTimeHigh.price} $`
    }
  ];
  const genericStats = [
    {
      title: "총 발행 갯수",
      value: supply()
    },
    {
      title: "공급 갯수",
      value: circulating()
    }
  ];
  return (
    <Col className="coin-detail">
      <Col className="coin-head">
        <Title level={3} className="coin-name">
          {cryptoDetails.name} Price
        </Title>
        <p>{cryptoDetails.name} Now Price </p>
      </Col>
      <Select
        defaultValue="7d"
        className="timePeriod"
        placeholder="Select Time"
        onChange={(value) => setTimePeriod(value)}
      >
        {time.map((date) => (
          <Option key={date}>{date}</Option>
        ))}
      </Select>
      <CoinChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails.price)}
        coinName={cryptoDetails.name}
      />
      <Col className="stats-container">
        <Col className="coin-value-static">
          <Col className="coin-value-head">
            <Title level={4} className="coin-detail">
              {cryptoDetails.name} Value statistic
            </Title>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </Col>
          {stats.map(({ title, value }) => {
            return (
              <Col className="coin-stats">
                <Col className="coin-name">
                  <Text>{title}</Text>
                  <Text>{value}</Text>
                </Col>
              </Col>
            );
          })}
        </Col>

        <Col className="other-value">
          <Col className="coin-value-head">
            <Title level={4} className="coin-detail">
              {cryptoDetails.name} Value statistic
            </Title>
            <p>An overview showing the stats of {cryptoDetails.name}</p>
          </Col>
          {genericStats.map(({ title, value }) => {
            return (
              <Col className="coin-stats">
                <Col className="coin-name">
                  <Text>{title}</Text>
                </Col>
                <Text>{value}</Text>
              </Col>
            );
          })}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row>
          <Title level={4} className="coin-details">
            {cryptoDetails.name}의 정보 더보기
            {HTMLReactParser(cryptoDetails.description)}
          </Title>
        </Row>
        <Col className="coin-link">
          <Title level={4} className="coin-details">
            {cryptoDetails.name} Links
          </Title>
          {cryptoDetails.links.map((link) => {
            return (
              <Row className="coin-link" key={link.name}>
                <Title level={2} className="link-name">
                  {link.type}
                </Title>
                <a href={link.url} target="_blank" rel="noreferrer">
                  {link.name}
                </a>
              </Row>
            );
          })}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
