import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


function Buttons() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      // Perform search logic here
      console.log('Search:', searchValue);
    }
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleSearch}
          placeholder="Enter Value.."
          style={{ paddingRight: '30px', borderRadius: '5px' }}
        />
        {searchValue && (
          <FaTimes
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
            onClick={handleClearSearch}
          />
        )}
      </div>
      <FaSearch style={{ marginLeft: '10px' }} />
            <IconButton aria-label="delete" size="large" style={{ marginLeft: '900px' }}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
    </div>
  );
}

export default Buttons;
