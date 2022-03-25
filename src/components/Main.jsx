import Layout from "antd/lib/layout/layout";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../services/coinApi";

const Main = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStates = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <>
      <Row>
        <Col span={12}>
          <Statistic title="Total crypto" value={globalStates.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total MarketCap"
            value={`${millify(globalStates.totalMarketCap)} $`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24Volume"
            value={`${millify(globalStates.total24hVolume)} $`}
          />
        </Col>
      </Row>
    </>
  );
};

export default Main;
