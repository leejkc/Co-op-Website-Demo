import styled from "styled-components";

export const ArrowContainer = styled.div `
  position: absolute;
  top: 80px;
  z-index: 5;
  transform: translateY(-50%);
  cursor: pointer;
  border-radius: 19px;
  ${(props) =>
    props.direction === "left"
      ? "left: -50px;"
      : props.direction === "right"
      ? "right: -30px;"
      : "unset"}
  display: flex;
  aspect-ratio: 1;
  width: 36px;
  height: 36px;
  margin: auto 0;
  padding: 0 10px;
`;