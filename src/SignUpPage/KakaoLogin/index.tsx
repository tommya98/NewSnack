import Button from "@mui/material/Button";
import store from "../../localStorage";

const Kakaologin = ({ type }: { type: "signup" | "signin" }) => {
  const CLIEND_ID = import.meta.env.VITE_CLIEND_ID;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIEND_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    store.set("isSignUp", type === "signup");
    window.location.href = link;
  };

  return (
    <Button
      startIcon={
        <img
          src="/kakao_button.png"
          alt="kakao"
          style={{
            width: "1.5rem",
            position: "absolute",
            left: "0.5rem",
            top: "0.5rem",
          }}
        />
      }
      style={{
        backgroundColor: "#FEE500",
        marginBottom: "2rem",
        color: "rgba(0, 0, 0, 0.85)",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        textTransform: "none",
      }}
      type="submit"
      fullWidth
      variant="contained"
      onClick={loginHandler}
    >
      {type === "signup"
        ? "카카오 계정으로 회원가입"
        : "카카오 계정으로 로그인"}
    </Button>
  );
};

export default Kakaologin;
