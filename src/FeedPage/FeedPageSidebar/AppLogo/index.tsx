import styled from "@emotion/styled";

function AppLogo() {
  return <Logo src="/Newsnack.png" />;
}

const Logo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  margin-right: 5px;
`;

export default AppLogo;
