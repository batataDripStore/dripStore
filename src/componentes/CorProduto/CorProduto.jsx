// import Box from '@mui/material/Box';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import NavigationIcon from '@mui/icons-material/Navigation';


import './CorProduto.css'
import { useState } from 'react';

export default function CorProduto() {
  const [color, setColor] = useState('')
  const dots = [
    {
      index: 0,
      cor: 'blue'
    },
    {
      index: 1,
      cor: 'red'
    },
    {
      index: 2,
      cor: 'pink'
    },
    {
      index: 3,
      cor: 'orange'
    }
  ]
  const bgColor = (index) =>{
    setColor(index)
    console.log(index)
  }
  return (
    <div className='dots-colors'>
      <h3>Cor</h3>
        <div>
        {dots.map((dot, index) => (
          <button key={dot.index} className={color === dot.index ? `${dot.cor}` : ''} onClick={() => bgColor(index)}></button>
        ))}
        </div>
    </div>
  )
}
