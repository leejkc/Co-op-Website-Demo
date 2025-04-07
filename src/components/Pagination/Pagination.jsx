import PropTypes from "prop-types";
import {
  PaginationWrapper,
  PaginationButton,
  PageNumber,
  Dots,
} from "./Pagination.style";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageNumbers = () => {
    const pages = [];

    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PageNumber
            key={i}
            onClick={() => handlePageClick(i)}
            active={i === currentPage}
          >
            {i}
          </PageNumber>
        );
      }
    } else {
      for (let i = 1; i <= 3; i++) {
        pages.push(
          <PageNumber
            key={i}
            onClick={() => handlePageClick(i)}
            active={i === currentPage}
          >
            {i}
          </PageNumber>
        );
      }

      if (currentPage > 5) {
        pages.push(<Dots key="dots1">...</Dots>);
      }

      for (
        let i = Math.max(currentPage - 1, 4);
        i <= Math.min(currentPage + 1, totalPages - 3);
        i++
      ) {
        pages.push(
          <PageNumber
            key={i}
            onClick={() => handlePageClick(i)}
            active={i === currentPage}
          >
            {i}
          </PageNumber>
        );
      }

      if (currentPage < totalPages - 4) {
        pages.push(<Dots key="dots2">...</Dots>);
      }

      for (let i = totalPages - 2; i <= totalPages; i++) {
        pages.push(
          <PageNumber
            key={i}
            onClick={() => handlePageClick(i)}
            active={i === currentPage}
          >
            {i}
          </PageNumber>
        );
      }
    }

    return pages;
  };

  return (
    <PaginationWrapper>
      {currentPage > 1 && (
        <PaginationButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
      )}

      {renderPageNumbers()}

      {currentPage < totalPages && (
        <PaginationButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      )}
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
