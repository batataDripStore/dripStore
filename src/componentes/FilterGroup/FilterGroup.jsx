import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './FilterGroup.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export function FilterGroup (){

    return(
        <>
        <section className='filter_group'>
                
                    <div className='category'>
            <FormGroup>
                <p>Marca</p>
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                </FormGroup>
                    </div>
                    <FormGroup>
                <p className='category2'>Categoria</p>
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Label" />
                </FormGroup>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label"><p className='category2'>Gender</p></FormLabel>
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label"defaultValue="female"name="radio-buttons-group">
            <FormControlLabel value="female" control={<Radio sx={{ color: '#C92071', '&.Mui-checked': { color: '#C92071' } }}/>} label="Femino" />
            <FormControlLabel value="male" control={<Radio sx={{ color: '#C92071', '&.Mui-checked': { color: '#C92071' } }}/>} label="Masculino" />
            <FormControlLabel value="other" control={<Radio />} label="Unissex" />
                    </RadioGroup>
                    </FormControl>
        </section>
        </>
    )
}