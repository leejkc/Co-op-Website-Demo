import styled from "styled-components";

export const ArrowContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.direction === "left"
      ? "left: 0px;"   // Adjust as needed for alignment
      : "right: 0px;"}
  /* Optional: add a border for better visibility */
  border: 1px solid #ddd;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-top: -20px;
    display: block;
  }

  &.slick-arrow.slick-hidden {
    display: none !important;
  }
`;