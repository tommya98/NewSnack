import styled from "@emotion/styled";

interface Props {
  readonly message: string;
}

function AppDescription({ message }: Props) {
  return <Description>{message}</Description>;
}

const Description = styled.h3`
  font-size: 16px;
  font-weight: normal;
  line-height: 24px;
`;

export default AppDescription;
