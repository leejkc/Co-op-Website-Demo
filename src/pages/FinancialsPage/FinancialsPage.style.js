import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  place-content: center;
  place-items: center;
  padding: 20px;
  overflow-x: hidden;
`;
export const Container = styled.div`
  display: flex;
  flex: 2;
  margin: auto;
  place-items: center;
  place-content: center;
  justify-content: space-evenly;
  gap: 40px;
`;
export const HeaderWrapper = styled.div`
  margin-top: 10px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
`;
export const WrapperContent = styled.div`
  margin-top: 10px;
  width: 100%;
  padding: 10px 50px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 10px 20px;
  }
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  place-content: center;
  place-items: center;
  overflow: hidden;
  margin-top: 10px;
  width: 100%;
  padding: 10px 50px;
  transition: max-height 0.3s ease;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 10px 20px;
  }
`;
export const RewardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 90%;
`;
export const ShowMore = styled.button`
  display: flex;
  align-self: center;
  color: ${theme.black};
  padding: 20px;
  background-color: unset;
  text-decoration: underline;
  border: none;
  cursor: pointer;
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
