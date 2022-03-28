import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "momnet";
import { useState } from "react";

import { useGetCryptoNewsQuery } from "../services/coinNewsApi";
import { useGetCryptosQuery } from "../services/coinApi";

const { Text, Title } = Typography;
const { Option } = Select;
const demoImg =
  "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);

  const { data: CryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 3 : 30
  });
  if (!CryptoNews?.value) return "Loading...";
  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Search..."
            optionFilterProp="children"
            onChange={(data) => setNewsCategory(data)}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) > 0
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}>{coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}
      {CryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={6} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-img">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                <img
                  style={{ maxWidth: "200px", maxHeight: "100px" }}
                  src={news?.image?.thumbnail?.contentUrl || demoImg}
                  alt="img"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl || demoImg
                    }
                    alt="img"
                  />
                  <Text className="provider-name">
                    {news.provider[0]?.name}
                  </Text>
                  <Text>
                    {moment(news.datePubliched).startOf("ss").fromNow()}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
