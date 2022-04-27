import React from 'react';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SeasonSelect = ({ season, handleSeasonChange }) => {
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={season}
          label="year"
          onChange={handleSeasonChange}
        >
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SeasonSelect;
