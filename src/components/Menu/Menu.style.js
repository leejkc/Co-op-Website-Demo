import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const MainMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
  padding: 15px 15px;
  @media (max-width: ${breakpoints.md}) {
    padding: 10px 10px;
  }
`;
export const ImageLogo = styled.img`
  width: 300px;
  @media (max-width: ${breakpoints.sm}) {
    width: 180px;
  }
`;
export const LogoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
  padding: 0px;
`;
export const LinksWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  flex: 2;
  gap: 25px;
  margin-bottom: 5px;
  @media (max-width: ${breakpoints.sm}) {
    display: ${(props) => (props.isshown === "false" ? "none" : "flex")};
    flex-direction: column;
    transition: all 0.35s ease-in-out;
    align-items: flex-start;
    padding: 0px 0px 0px 10px; 
  }
`;
// changed vertical screen padding of above to 10 instead of 30px
export const LinkItem = styled.span`
  cursor: pointer;
  padding: 5px;
  text-decoration: none;
  font-weight: 500;
  color: ${theme.black};
  height: 30px;
  font-size: 1.2em;
  @media (max-width: ${breakpoints.sm}) {
    height: 15px;
  }

  &.active {
    border-color: ${theme.mainTheme};
    color: ${theme.mainTheme};
    border-bottom: 3px solid ${theme.mainTheme};
  }
`;
export const LogoutCont = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

export const BurgerMenuImage = styled.img`
  height: 18px;
  width: 18px;
  display: none;
  @media (max-width: ${breakpoints.sm}) {
    display: block;
    transition: all 0.35s ease-in-out;
  }
`;
