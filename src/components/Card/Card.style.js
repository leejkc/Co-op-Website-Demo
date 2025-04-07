import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

// Developer comments:
// If the iscard prop is false, we will let children components dictate the width and height of a Card.

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: ${theme.white};
  border: 1px solid ${theme.white};
  width: ${(props) => (props.iscard === "false" ? "unset" : "400px")};
  box-shadow: 0px 0px 3px ${(props) => (props.lowshadow ? "1px" : "3px")} ${theme.lightGray};
  margin: 10px;
  padding: ${(props) => (props.iscard === "false" ? "20px" : " 10px 0 0 0")};
  min-height: 180px;

  @media (max-width: ${breakpoints.sm}) {
    width: 90%;
    padding: ${(props) => (props.iscard === "false" ? "10px" : " 6px 0 0 0")};
  }
`;

export const StartTag = styled.a`
  color: ${theme.white};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
`;

export const CardTitle = styled.div`
  font-weight: 600;
  font-size: 1.5em;
`;
export const CardDesc = styled.div``;
export const RowContainer = styled.div`
  display: flex;
  padding: 0 80px 0 0;
  justify-content: space-between;
`;
export const RedTitle = styled.div`
  color: ${theme.mainTheme};
`;
export const RedTitleData = styled.div`
  font-weight: 600;
`;

export const ButtonWrapper = styled.div`
  background-color: ${theme.mainTheme};
  color: ${theme.white};
  text-align: center;
  margin: 0;
  padding: 10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;
