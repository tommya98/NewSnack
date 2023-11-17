import styled from "@emotion/styled";

interface Props {
  readonly label: string;
}

const FooterLabel = ({ label }: Props) => {
  return <Container>{label}</Container>;
};

const Container = styled.div`
  font-size: 20px;
  line-height: 20px;
`;

export default FooterLabel;
