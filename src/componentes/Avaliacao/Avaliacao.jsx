import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './Avaliacao.css'

export default function Avaliacao() {
  const [value, setValue] = React.useState(4);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
     <div className='avaliacao-label'>
      <Rating name="read-only" value={value} readOnly />
      <p>90 avaliações</p>
      </div>
    </Box>
  );
}






