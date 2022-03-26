import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/coinApi";
import { Link } from "react-router-dom";
import CurrentPrice from "../components/CurrentPrice";
import News from "../components/News";

const Main = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStates = data?.data?.stats;
  console.log(globalStates);
  if (isFetching) return "Loading...";
  return (
    <>
      <Row>
        <Col span={8}>
          <Statistic title="Total crypto" value={globalStates.total} />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total MarketCap"
            value={`${millify(globalStates.totalMarketCap)} $`}
          />
        </Col>
        <Col span={8}>
          <Statistic
            title="Total 24Volume"
            value={`${millify(globalStates.total24hVolume)} $`}
          />
        </Col>
      </Row>
      <div>
        <Typography.Title level={2} className="home-title">
          Top 10 Coin
        </Typography.Title>
        <Typography.Title level={4} className="show-more">
          <Link to="/currentprice">Show More</Link>
        </Typography.Title>
      </div>
      <CurrentPrice simplified={true} />
      <div>
        <Typography.Title level={2} className="news">
          Latest Coin NEWS
        </Typography.Title>
        <Typography.Title level={4} className="show-more">
          <Link to="/news">Show More</Link>
        </Typography.Title>
      </div>
      <News simplified={true} />
    </>
  );
};

export default Main;
