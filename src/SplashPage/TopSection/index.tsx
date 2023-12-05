import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import AppDescription from "./AppDescription";
import AppImage from "./AppImage";
import Heading from "./Heading";
import InputText from "./InputText";
import { useState } from "react";
import Button from "@mui/material/Button";

const TopSection = ({ img }: { img: string }) => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (text: string) => {
    setInputValue(text);
  };

  return (
    <Container>
      <LeftBox>
        <Heading message="Welcome to Newsnack" />
        <AppDescription message="Get the latest news and articles from around the web" />
        <InputText
          label="Enter your interests"
          value={inputValue}
          onChange={onChange}
        />
        <Button variant="contained" size="small">
          Submit
        </Button>
      </LeftBox>
      <RightBox>
        <AppImage imgSrc={img} />
      </RightBox>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  padding: 20px;
  gap: 120px;
`;

const LeftBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RightBox = styled(Box)``;

export default TopSection;
