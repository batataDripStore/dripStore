import Header from "../../componentes/Header/Header"
import { Footer } from "../../componentes/Footer/Footer"
import { ProductCard}  from "../../ProductCard/ProductCard";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Filter from "../../componentes/Filter/Filter";



export default function Produtos(){

    return(
        <>
        <Header />
            <h1>Produtos</h1>
            
                <Filter></Filter>

            <ProductCard></ProductCard>
            
        <Footer />
        </>
    )
}