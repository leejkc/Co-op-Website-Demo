import styled from "styled-components";
import ImgBackground from "../../assets/backgroundHome.jpg";
import { breakpoints } from "../../constants/breakpoints";
import { theme } from "../../constants/colors";
export const WrapperMain = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;
export const OverviewWrapper = styled.div`
  position: relative;
  place-items: center;
  place-content: center;
  background-image: url(${ImgBackground});
  background-position: center;
  margin-top: 2px;
  height: 450px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;
export const Container = styled.div`
  display: flex;
  flex: 2;
  gap: 50px;
  margin: auto;
  place-items: center;
  place-content: center;
  justify-content: center;
`;
export const InfoContainer = styled.div`
  position: relative;
  top: -10px;
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: auto;
  place-items: center;
  place-content: center;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.md}) {
    top: unset;
  }
`;
export const ContainerColumn = styled.div`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: auto;
  place-items: center;
  place-content: center;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.md}) {
    top: unset;
  }
`;

export const CardsCarouselWrapper = styled.div`
  display: block;
  width: 900px;
  align-self: center;
  @media (max-width: ${breakpoints.md}) {
    width: 400px;
  }
`;
export const PanelInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
export const PanelTitle = styled.div`
  color: ${theme.black};
  
  font-weight: 650;
  font-size: 2em;
`;
export const PanelDescription = styled.div`
  color: ${theme.black};
  font-weight: 300;
  font-size: 1em;
`;
export const VerticalContainer = styled.div`
  position: relative;
  place-items: center;
  place-content: center;
  background-position: center;
  margin-top: 2px;
  gap: 20px;
  height: 450px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;