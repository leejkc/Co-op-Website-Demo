import styled from "styled-components";
import { breakpoints } from "./constants/breakpoints";
import { theme } from "./constants/colors";

export const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow-y: hidden;
  flex: 1;
`;

export const ContentWrapper = styled.div`
  display: flex;
  margin-bottom: 4em;

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.sm}) {
    min-height: 65vh;
  }
`;
export const PageContentWrapper = styled.div``;
export const FooterWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${theme.footerColor};
  @media (max-width: ${breakpoints.md}) {
    position: unset;
    width: 100%;
  }
  @media (max-width: ${breakpoints.sm}) {
    position: unset;
    width: 100%;
    justify-content: unset;
  }
`;
