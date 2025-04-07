import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const MainWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  place-content: center;
  place-items: center;
`;

export const HeaderWrapper = styled.div`
  margin-top: 10px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;
export const WrapperContent = styled.div`
  margin-top: 10px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;

export const NoSurveysCompletedMessage = styled.div`
  text-align: center;
  margin-top: 50px;
  color: ${theme.black};
  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  p {
    font-size: 1.8em;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

export const PaginationButton = styled.button`
  background: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;

  &:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.span`
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 4px;
  background: ${(props) => (props.active ? "#007bff" : "#f1f1f1")};
  color: ${(props) => (props.active ? "white" : "black")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};

  &:hover {
    background: ${(props) => (props.active ? "#0056b3" : "#e0e0e0")};
  }
`;
