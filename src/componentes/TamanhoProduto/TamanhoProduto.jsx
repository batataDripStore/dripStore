import * as React from 'react';
import './TamanhoProduto.css'
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function TamanhoProduto () {
  const [alignment, setAlignment] = React.useState();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="38" key="38">
        <p>38</p>
    </ToggleButton>,
    <ToggleButton value="40" key="40">
        <p>40</p>
    </ToggleButton>,
    <ToggleButton value="42" key="42">
        <p>42</p>
    </ToggleButton>,
    <ToggleButton value="44" key="44">
        <p>44</p>
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <div className='content-shoes'>
      <h4>Tamanho</h4>
      <div className='shoe-size'>
        <Stack spacing={2} alignItems="center">
          <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
            {children}
          </ToggleButtonGroup>
        </Stack>
      </div>
    </div>
  );
}
