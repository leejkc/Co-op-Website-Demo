import styled from "styled-components";
import { theme } from "../../constants/colors";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border-radius: 10px;
  max-width: 300px;
  text-align: center;
  background-color: ${theme.white};
  box-shadow: 0px 0px 3px 3px ${theme.lightGray};
`;

export const TotalRewards = styled.div`
  font-size: 2em;
  font-weight: bold;
`;
export const DateNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TotalAmount = styled.div`
  font-size: 1em;
  color: #555;
`;

export const SurveyCount = styled.div`
  font-size: 1.5em;
  margin-top: 10px;
`;

export const SurveyItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 1em;
  gap: 20px;
  color: #333;
`;

export const SurveyDate = styled.div`
  flex: 1;
  text-align: left;
`;
export const SurveyName = styled.div`
  flex: 1;
  text-align: left;
  font-size: 1.5em;
  font-weight: bold;
`;

export const SurveyAmount = styled.div`
  flex: 1;
  text-align: right;
  color: green;
`;

export const SeeDetailsButton = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${theme.mainTheme};
  color: ${theme.white};
  padding: 10px;
  width: 100px;
  place-content: center;
  text-align: center;
  align-self: center;
`;

export const ClaimButton = styled.div`
  display: flex;
  border-radius: 8px;
  background-color: ${theme.claimColor};
  color: ${theme.white};
  padding: 10px;
  width: 100px;
  place-content: center;
  text-align: center;
  align-self: center;
`;
export const CardItemTitle = styled.div`
  color: ${theme.mainTheme};
`;
export const CardItemTitleData = styled.div`
  font-weight: 600;
  text-transform: capitalize;
`;
export const RowContainer = styled.div`
  display: flex;
  gap: 10px;
`;
