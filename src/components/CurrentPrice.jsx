import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/coinApi";

const CurrentPrice = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [coin, setCoin] = useState([]);
  const [search, setSearch] = useState("");

  console.log(coin);
  useEffect(() => {
    setCoin(cryptosList?.data?.coins);
    const filterCoin = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCoin(filterCoin);
  }, [cryptosList, search]);
  if (isFetching) return "Loading...";

  return (
    <div>
      {!simplified && (
        <div>
          <Input
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="coin-container">
        {coin
          ? coin.map((data) => {
              return (
                <Col xs={24} sm={12} lg={6} className="coin" key={data.id}>
                  <Link to={`/currentprice/${data.id}`}>
                    <Card
                      title={`${data.rank}. ${data.name}`}
                      // extra={<img className="coin-img" src={data.iconUrl} />}
                      hoverable
                    >
                      <p>Price: {`${millify(data.price)} $`}</p>
                      <p>Market Cap: {`${millify(data.marketCap)} $`}</p>
                      <p>Daily Change: {`${millify(data.change)} %`}</p>
                    </Card>
                  </Link>
                </Col>
              );
            })
          : null}
      </Row>
    </div>
  );
};

export default CurrentPrice;
