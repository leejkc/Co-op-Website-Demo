import { useDispatch, useSelector } from "react-redux";
import {
  LoginContainer,
  LoginForm,
  InputField,
  LoginButton,
  ForgotPassword,
  ImageLogo,
} from "./Login.styles";
import { loginDashboard, selectUser } from "../../features/dashboardSlice";
import companyLogo from "../../assets/companyLogo.png";
import { useNavigate } from "react-router-dom";
import { config } from "../../config";
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    if (user?.token) {
      navigate("/home/");
    }
  });

  const handleLogin = () => {
    dispatch(
      loginDashboard({
        //pull panel id from env variables
        // panel: config?.PANEL_ID,
        // email: email,
        // password: password,
        panel: "64956fc679742e4b8d92f547",
        email: "roman.schoensee+1@gmail.com",
        password: "thisiscorrect",
      })
    ).then((res) => {
      if (res.payload?.requestSuccessfull) {
        localStorage.setItem("userToken", res?.payload?.data?.token);
        navigate("/home/");
      } else {
        alert(res.payload?.data?.message);
      }
    });
  };
  return (
    <LoginContainer>
      <LoginForm>
        <ImageLogo src={companyLogo} />
        <InputField
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <ForgotPassword
          href={`${window.location.origin}/panel-manager/pages/passwordReset/?panelId=${config?.PANEL_ID}`}
        >
          Forgot password?
        </ForgotPassword>
        <LoginButton onClick={handleLogin}>LOGIN</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
