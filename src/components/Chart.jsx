import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";
const { Title } = Typography;

ChartJS.register(...registerables);

const CoinChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];
  console.log(coinHistory);
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory.data.history[i].price);
    coinTimestamp.push(
      new Date(coinHistory.data.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd"
      }
    ]
  };
  var options = {
    scales: {
      y: {
        min: 0
      }
    }
  };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Chart
        </Title>
        <Col className="price">
          <Title level={4} className="price-change">
            {coinHistory?.data?.change}%
          </Title>
          <Title level={4} className="current-price">
            Current {coinName} Price: {currentPrice} $
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default CoinChart;
