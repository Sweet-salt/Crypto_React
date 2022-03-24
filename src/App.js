import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./styles.css";
import { Layout, Typography, Space } from "antd";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
