import styled from "styled-components";
import { theme } from "../../constants/colors";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  border-radius: 10%;
  width: 130px;
  height: 130px;
  background-color: white;
  place-items: center;
  place-content: center;
  cursor: pointer;
  padding: 20px;
  text-align: center;

  box-shadow: 0px 0px 3px ${(props) => (props.lowshadow ? "1px" : "3px")}
    ${theme.lightGray};
`;

export const TopText = styled.div`
  color: ${theme.mainTheme};
  font-size: 2.2em;
`;

export const BottomText = styled.div`
  color: ${theme.subTheme};
  font-size: 1.5em;
`;
