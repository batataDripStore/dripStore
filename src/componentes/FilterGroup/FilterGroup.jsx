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
                
                    <div className='category2'>
                        <h4 className='title'>Filtrar por</h4>
            <FormGroup sx={{marginLeft: '20px', marginBottom: '20px', backgroundColor: 'white'}}>
                <p className='category2'>Marca</p>
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Adidas" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Calenciaga" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="K-Swiss" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Nike" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Puma" />
                </FormGroup>
                    </div>
            <FormGroup sx={{marginLeft: '20px'}}>
                <p className='category2'>Categoria</p>
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Esporte e lazer" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Casual" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Utilitário" />
                  <FormControlLabel control={<Checkbox  sx={{color: '#666666','&.Mui-checked': {color: '#C92071',},}} />} label="Corrida" />
                </FormGroup>
            <FormControl sx={{marginLeft: '20px'}}>
                <FormLabel id="demo-radio-buttons-group-label"><p className='category2'>Gênero</p></FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label"defaultValue="female"name="radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio sx={{ color: '#666666', '&.Mui-checked': { color: '#C92071' } }}/>} label="Femino" />
                    <FormControlLabel value="male" control={<Radio sx={{ color: '#666666', '&.Mui-checked': { color: '#C92071' } }}/>} label="Masculino" />
                    <FormControlLabel value="other" control={<Radio sx={{ color: '#666666', '&.Mui-checked': { color: '#C92071' } }}/>} label="Unissex" />
                </RadioGroup>
                </FormControl>
                <FormControl sx={{marginLeft: '20px'}}>
                <FormLabel id="demo-radio-buttons-group-label"><p className='category2'>Estado</p></FormLabel>
                <RadioGroup aria-labelledby="demo-radio-buttons-group-label"defaultValue="female"name="radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio sx={{ color: '#666666', '&.Mui-checked': { color: '#C92071' } }}/>} label="Novo" />
                    <FormControlLabel value="male" control={<Radio sx={{ color: '#666666', '&.Mui-checked': { color: '#C92071' } }}/>} label="Usado" />
                </RadioGroup>
                </FormControl>
        </section>
        </>
    )
}