import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  padding: 10px 60px;
  gap: 100px;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const WatermarkContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.black};
  font-size: 1em;

  span {
    margin-left: 5px;
  }
  @media (max-width: ${breakpoints.sm}) {
    span {
      margin-left: unset;
    }
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex: 2;
  gap: 40px;
  margin-bottom: 5px;
  @media (max-width: ${breakpoints.md}) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const LinkItem = styled.span`
  text-decoration: none;
  color: ${theme.black};
  font-size: 1em;

  &.active {
    border-color: ${theme.mainTheme};
    color: ${theme.mainTheme};
    border-bottom: 5px solid ${theme.mainTheme};
  }
`;
export const LogoutCont = styled.div`
  display: flex;
  gap: 10px;
  justify-content: baseline;
  align-items: center;
`;
