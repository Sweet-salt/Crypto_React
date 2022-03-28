import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import { useState } from "react";

import { useGetCryptoDetailQuery } from "../services/coinApi";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailQuery(coinId);
  const cryptoDetails = data?.data?.coin;
  console.log(data, "12");
  if (isFetching) return "Loading...";
  console.log(cryptoDetails);

  const time = ["3h", "24h", "7d", "30d", "6m", "1y", "3y", "5y"];

  // const stats = [
  //   {
  //     title: "Price",
  //     value: `$ ${CryptoDetails.price && millify(CryptoDetails.price)}`
  //   },
  //   { title: "Rank", value: `$ ${CryptoDetails.rank}` },
  //   {
  //     title: "24 Volum",
  //     value: `$ ${CryptoDetails.volume && millify(CryptoDetails.volume)}`
  //   },
  //   {
  //     title: "Market Cap",
  //     value: `$ ${CryptoDetails.marketCap && millify(CryptoDetails.marketCap)}`
  //   },
  //   {
  //     title: "All-time-high(daily avg.)",
  //     value: `$ ${millify(CryptoDetails.allTimeHigh)}`
  //   }
  // ];

  const genericStats = [
    { title: "Number Of Markets", value: CryptoDetails.numberOfMarkets },
    { title: "Aprroved Supply", value: CryptoDetails.approvedSupply },
    { title: "Total Supply", value: `$ ${CryptoDetails.totalSupply}` },
    {
      title: "Circulating Supply",
      value: `$ ${CryptoDetails.circulatingSupply}`
    }
  ];
  return (
    <Col className="coin-detail">
      <Col className="coin-head">
        <Title level={3} className="coin-name">
          {/* {cryptoDetails.name} ({cryptoDetails.slug}) Price */}
        </Title>
        <p>{/* {cryptoDetails.name} Now Price $ */}</p>
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
      <Col className="stats-container">
        <Col className="coin-value-static">
          <Col className="coin-value-head">
            <Title level={4} className="coin-detail">
              {/* {cryptoDetails.name} Value statistic */}
            </Title>
            <p>{/* An overview showing the stats of {cryptoDetails.name} */}</p>
          </Col>
          {/* {stats.map(({ title, value }) => {
            return (
              <Col className="coin-stats">
                <Col className="coin-name">
                  <Text>{title}</Text>
                </Col>
                <Text>{value}</Text>
              </Col>
            );
          })} */}
        </Col>

        <Col className="other-value">
          <Col className="coin-value-head">
            <Title level={4} className="coin-detail">
              {/* {cryptoDetails.name} Value statistic */}
            </Title>
            <p>{/* An overview showing the stats of {cryptoDetails.name} */}</p>
          </Col>
          {/* {genericStats.map(({ title, value }) => {
            return (
              <Col className="coin-stats">
                <Col className="coin-name">
                  <Text>{title}</Text>
                </Col>
                <Text>{value}</Text>
              </Col>
            );
          })} */}
        </Col>
      </Col>
      <Col className="coin-desc-link">
        <Row>
          <Title level={4} className="coin-details">
            {/* {cryptoDetails.name}의 정보 더보기 */}
            {/* {HTMLReactParser(cryptoDetails.description)} */}
          </Title>
        </Row>
        <Col className="coin-link">
          <Title level={4} className="coin-details">
            {/* {cryptoDetails.name} Links */}
          </Title>
          {/* {cryptoDetails.links.map((link) => {
            <Row className="coin-link" key={link.name}>
              <Title level={6} className="link-name">
                {link.type}
              </Title>
              <a href={link.url} target="_blank" rel="noreffer">
                {link.name}
              </a>
            </Row>;
          })} */}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
