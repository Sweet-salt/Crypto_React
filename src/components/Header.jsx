import styled from "styled-components";

const Head = styled.div`
  width: 100%;
  height: 100px;
  background-color: orange;
`;

function Header() {
  return (
    <Head>
      <h1>BitPush</h1>
      <button>Login</button>
      <button>Logout</button>
    </Head>
  );
}

export default Header;
