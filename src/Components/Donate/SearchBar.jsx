import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = ({ setSearchTerm }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localSearchTerm) {
      console.log("Searching for:", localSearchTerm);
      setSearchTerm(localSearchTerm);
      navigate(`/search/${localSearchTerm}`);
      setLocalSearchTerm('');
    }
    if (!localSearchTerm) {
      navigate("*");
    }
  };
  return (
    <Paper
      component='form'
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #E3E3E3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className='search-bar'
        type="text"
        placeholder='Search...'
        value={localSearchTerm}
        onChange={(e) => setLocalSearchTerm(e.target.value)}
      />
      <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
export default SearchBar;