import styled from "@emotion/styled";

interface Props {
  readonly text: string;
}

const LoginLabel = ({ text }: Props) => {
  return <Container>{text}</Container>;
};

const Container = styled.div`
  font-size: 16px;
  line-height: 40px;
`;

export default LoginLabel;
