import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationComponent = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (_, page) => {
    onPageChange(page);
  };

  return (
    <Stack direction="row" justifyContent="center" alignItems="center" mt={2}>
      {pageCount > 1 && (
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      )}
    </Stack>
  );
};

export default PaginationComponent;
