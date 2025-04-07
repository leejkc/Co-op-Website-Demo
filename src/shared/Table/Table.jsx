import { useState } from "react";
import PropTypes from "prop-types";
import {
  convertToMMDDYYYY,
  getCurrencySymbol,
  toTitleCase,
} from "../../utils/utils";
import { Table, Td, Th, Thead, Tr } from "./Table.style";
// import Modal from "../Modal/Modal";
// import RewardModal from "../RewardModal/RewardModal";
import Pagination from "../../components/Pagination/Pagination";

const StyledTable = ({ data }) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [rewardDetailsModal, setRewardDetailsModal] = useState(false);
  // const [selectedReward, setSelectedReward] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(data?.length / rowsPerPage);

  const currentRows = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log("11", currentRows);
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Project</Th>
            <Th>Amount</Th>
            <Th>Payment Status</Th>
          </Tr>
        </Thead>
        <tbody>
          {currentRows.map((row, index) => (
            <Tr key={index}>
              <Td>{row?.date && convertToMMDDYYYY(row?.date)}</Td>
              <Td>{row?.title}</Td>
              <Td>
                {row?.currency && getCurrencySymbol(row?.currency)}
                {row?.amount}
              </Td>
              <Td>{row?.status && toTitleCase(row?.status)}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default StyledTable;

StyledTable.propTypes = {
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
