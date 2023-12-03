import React, { useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import PaginationComponent from "./PaginationComponent";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


function UserData({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 10;

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset current page when search query changes
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
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
        totalItems={filteredUsers.length}
        itemsPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default UserData;
