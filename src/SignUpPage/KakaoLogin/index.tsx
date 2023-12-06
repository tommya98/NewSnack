import Button from "@mui/material/Button";

const Kakaologin = () => {
  const CLIEND_ID = "3532d8265b8066b66c0944a8cd9b795d";
  const REDIRECT_URI = "http://localhost:8000/api/kuser/kakao/callback/";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIEND_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    <Button type="button" fullWidth variant="contained" onClick={loginHandler}>
      카카오 로그인
    </Button>
  );
};

export default Kakaologin;
