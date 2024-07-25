import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { cyan } from '@mui/material/colors';

const primary = cyan[200]

export default function CorProduto() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        {/* <AddIcon /> */}
      </Fab>
      <Fab color="secondary" aria-label="edit">
        {/* <EditIcon /> */}
      </Fab>
      <Fab color="danger" aria-label="edit">
        {/* <EditIcon /> */}
      </Fab>
      <Fab color="cyan" aria-label="edit">
        {/* <EditIcon /> */}
      </Fab>
    </Box>
  );
}
