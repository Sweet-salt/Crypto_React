import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Exchanges from "./components/Exchanges";
import CurrentPrice from "./components/CurrentPrice";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
`;
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/currentprice" element={<CurrentPrice />} />
        <Route path="/cryptodetails/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
      <Navbar />
    </div>
  );
}
