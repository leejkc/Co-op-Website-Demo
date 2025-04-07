import styled from "styled-components";
import { theme } from "../../constants/colors";
import { breakpoints } from "../../constants/breakpoints";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  width: 500px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  @media (max-width: ${breakpoints.sm}) {
    width: 300px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.25em;
  }
`;

export const ModalContent = styled.div`
  margin-bottom: 20px;
  label {
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-size: 1em;
    color: #333;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  background: ${(props) => (props.primary ? theme.mainTheme : "#ccc")};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
`;
