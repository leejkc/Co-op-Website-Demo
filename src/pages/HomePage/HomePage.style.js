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
  padding: 10px;
`;

export const OverviewWrapper = styled.div`
  position: relative;
  place-items: center;
  place-content: center;
  background-image: url(${ImgBackground});
  background-position: center;
  margin-top: 2px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px; /* Add this line to round the background */
  @media (max-width: ${breakpoints.md}) {
    display: grid;
    padding: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex: 2;
  gap: 100px;
  margin: 40px 0; // Change from margin: 150px; margin-top: 80px;
  place-items: center;
  place-content: center;
  justify-content: center;
  @media (max-width: ${breakpoints.md}) {
    display: grid;
    gap: 20px;
    margin: 20px;
  }
`;

export const InfoContainer = styled.div`
  position: relative;
  top: -10px;
  display: flex;
  flex-direction: column;
  flex: 2;
  margin: 350px;
  place-items: center;
  place-content: center;
  justify-content: space-evenly;
  @media (max-width: ${breakpoints.md}) {
    top: unset;
    margin: 20px;
    gap: 20px;
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
    gap: 20px;
    padding: 10px;
  }
`;

export const CardsCarouselWrapper = styled.div`
  display: block;
  width: 60%;
  max-width: 100%;
  overflow: hidden;
  align-self: center;
  margin: 0;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 10px;
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

export const Title = styled.div`
  color: ${theme.white};
  font-weight: 650;
  font-size: 2em;
`;

export const Description = styled.div`
  color: ${theme.white};
  font-weight: 300;
  font-size: 1em;
`;

export const TitleContainer = styled.div`
  position: relative;
  place-items: center;
  place-content: center;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 50px;
  @media (max-width: ${breakpoints.md}) {
    display: none;
  }
`;

export const VerticalContainer = styled.div`
  display: grid;
  gap: 50px;
  position: relative;
  place-items: center;
  place-content: center;
  background-position: center;
  margin-top: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: ${breakpoints.md}) {
    display: grid;
    gap: 20px;
    padding: 10px;
  }
`;

export const CircleContainer = styled.div`
  display: flex;
  flex: 2;
  gap: 50px;
  place-items: center;
  place-content: center;
  justify-content: left;
  flex-wrap: wrap;
  @media (max-width: ${breakpoints.md}) {
    display: grid;
    gap: 20px;
    padding: 10px;
  }
`;
