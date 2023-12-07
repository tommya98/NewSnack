import Button from "@mui/material/Button";

type ButtonText = 'signin' | 'signup';

interface KakaologinProps {
  type: ButtonText;
}
const Kakaologin: React.FC<KakaologinProps> = ({ type }) => {
  const CLIEND_ID = "3532d8265b8066b66c0944a8cd9b795d";
  const REDIRECT_URI = "http://localhost:8000/api/kuser/kakao/callback/";
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIEND_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return (
    
  <Button
  startIcon={<img src="/kakao_button.png" alt="kakao" style={{ width: '1.5rem', position: 'absolute', left: '0.5rem', top: '0.5rem' }}/>}
  style={{ 
    backgroundColor: '#FEE500', 
    marginBottom: '2rem', 
    color: 'rgba(0, 0, 0, 0.85)', 
    display: 'flex', 
    justifyContent: 'center', 
    position: 'relative',
    textTransform: 'none',
    // onClick={loginHandler}

  }}
  type="submit"
  fullWidth
  variant="contained"
  >
  {type === 'signup' ? '카카오 회원가입으로 계속하기' : '카카오 로그인으로 계속하기'}
  </Button>

  );
};

export default Kakaologin;
