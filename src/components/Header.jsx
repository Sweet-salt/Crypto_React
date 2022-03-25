import styled from "styled-components";
import { Typography, Row, Col, Statistic } from "antd";

const Head = styled.div`
  width: 100%;
  height: 100px;
  background-color: orange;
`;

function Header() {
  return (
    <Head>
      <Typography.Title>Bitpush</Typography.Title>
      <button>Login</button>
      <button>Logout</button>
    </Head>
  );
}

export default Header;
