import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Fil() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ width: 320, height: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Ordernar por"
          onChange={handleChange}
        >
          <MenuItem value={10}>Menor preço</MenuItem>
          <MenuItem value={20}>Maior preço</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}