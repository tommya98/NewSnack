import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Redirection = () => {
  const code = window.location.search;
  const navigate = useNavigate();
  console.log(code);

  useEffect(() => {
    fetch(`http://localhost:8000/api/kuser/kakao/callback/${code}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    // navigate("/feed");
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default Redirection;
