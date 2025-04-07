import styled from "styled-components";
import { theme } from "../constants/colors";
import { breakpoints } from "../constants/breakpoints";
export const HeaderTitle = styled.div`
  color: ${theme.mainTheme};
  font-size: 2em;
  font-weight: 600;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1.5em;
  }
`;
export const HeaderText = styled.div`
  color: ${theme.black};
  font-size: 1.5em;
  @media (max-width: ${breakpoints.sm}) {
    font-size: 1em;
  }
`;
export const HeaderContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 20px;
`;
export const CardsCarouselWrapper = styled.div`
  display: block;
  width: 950px;
  top: 330px;
  place-items: center;
  align-self: center;
  @media (max-width: ${breakpoints.md}) {
    width: 400px;
  }
`;
export const ShowMore = styled.button`
  display: flex;
  color: ${theme.black};
  padding: 20px;
  background-color: unset;
  text-decoration: underline;
  border: none;
  cursor: pointer;
`;
export const ShowMoreCardsWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(1, minmax(0, 1fr));

  @media (min-width: 62em){
      grid-template-columns: repeat(2, minmax(0, 1fr));
  } 

  @media (min-width: 96em){
      grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: 128em){
      grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  gap: 10px;
  place-content: center;
  place-items: center;
  overflow: hidden;
  transition: max-height 0.3s ease;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    place-content: center;
    place-items: center;
  }
`;
