import styled from '@emotion/styled';

interface Props {
  readonly imgSrc: string;
}

function AppImage({ imgSrc }: Props) {
  return <Img src={imgSrc} />;
}

const Img = styled.img`
  width: 600px;
  height: 400px;
`;

export default AppImage;
