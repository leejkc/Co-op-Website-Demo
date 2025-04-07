import styled from "styled-components";
import { theme } from "../../constants/colors";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: ${theme.white};
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

export const Thead = styled.thead`
  background-color: ${theme.mainTheme};
  color: ${theme.white};
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  padding: 10px;
  text-align: left;
`;
export const Th = styled.th`
  padding: 10px;
  text-align: left;
`;

export const SupportLink = styled.div`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const PaginateButton = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: ${theme.mainTheme};
  color: ${theme.white};
`;
