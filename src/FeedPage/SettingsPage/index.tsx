import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import { useUserInfo } from "../../apiHook";

const SettingsPage = () => {
  const userInfo = useUserInfo();

  return userInfo ? (
    <Container>
      <h1>임시 출력 테스트용</h1>
      <div>{`유저이름: ${userInfo.username}`}</div>
      <div>{`닉네임: ${userInfo.nickname}`}</div>
      <div>{`출생년도: ${userInfo.birthYear}`}</div>
      <div>{`이메일: ${userInfo.emailAddress}`}</div>
      <div>{`카카오이메일: ${userInfo.kakaoAddress}`}</div>
      <div>{`알림주기: ${userInfo.frequency}`}</div>
    </Container>
  ) : (
    <></>
  );
};

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: 2rem 10rem 5rem 10rem;
  gap: 60px;
`;

export default SettingsPage;
