import styled from "styled-components";
import { theme } from "../../constants/colors";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const PaginationButton = styled.button`
  background: ${theme.mainTheme};
  border: none;
  color: ${theme.white};
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  margin: 5px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => (props.active ? theme.mainTheme : theme.whiteSmoke)};
  color: ${(props) => (props.active ? theme.white : theme.black)};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    background: ${(props) =>
      props.active ? theme.subTheme : theme.footerColor};
  }
`;

export const Dots = styled.span`
  margin: 5px;
  padding: 10px 15px;
  color: black;
`;
