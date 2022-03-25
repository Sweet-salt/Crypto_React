import Layout from "antd/lib/layout/layout";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";

const Main = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <Statistic title="Total crypto" />
        </Col>
        <Col span={12}>
          <Statistic title="Total crypto" />
        </Col>
      </Row>
    </>
  );
};

export default Main;
