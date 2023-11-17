import styled from "@emotion/styled";

interface Props {
  readonly message: string;
}

function Description({ message }: Props) {
  return <Container>{message}</Container>;
}

const Container = styled.h3`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Description;
