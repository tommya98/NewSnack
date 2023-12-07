import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import store from "../../../localStorage";

const Redirection = () => {
  const codeQuery = window.location.search;
  const code = codeQuery.split("=")[1];
  const navigate = useNavigate();
  const isSigneUp = store.get("isSignUp");

  useEffect(() => {
    fetch(`http://localhost:8000/api/kuser/kakao/callback/${code}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        store.set("access_token", data.access_token);
      });
    navigate(isSigneUp ? "/initialsetup" : "/feed");
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
