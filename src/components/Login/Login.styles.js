import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 350px;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  color: #4a4a4a;
`;
export const ImageLogo = styled.img`
  width: 300px;
  margin-bottom: 20px;
  @media (max-width: ${breakpoints.sm}) {
    width: 180px;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const RememberMe = styled.label`
  align-self: flex-start;
  margin-bottom: 10px;
`;

export const ForgotPassword = styled.a`
  align-self: flex-end;
  margin-bottom: 20px;
  color: ${theme.mainTheme};
  cursor: pointer;
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${theme.mainTheme};
  color: white;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    background-color: ${theme.subTheme};
  }
`;
