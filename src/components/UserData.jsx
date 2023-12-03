import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PaginationComponent from "./PaginationComponent";

function UserData({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      {currentUsers.map((curUser) => {
        return (
          <tr key={curUser.id} style={{ borderBottom: "1px solid black" }}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{curUser.name}</td>
            <td>{curUser.email}</td>
            <td>{curUser.role}</td>
            <td>
              <IconButton aria-label="edit" size="small">
                <EditOutlinedIcon fontSize="inherit" />
              </IconButton>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </td>
          </tr>
        );
      })}

      {/* Pagination */}
      <PaginationComponent
        totalItems={users.length}
        itemsPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default UserData;
