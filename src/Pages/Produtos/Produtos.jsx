import Header from "../../componentes/Header/Header"
import { Footer } from "../../componentes/Footer/Footer"
import Filter from "../../componentes/Filter/Filter";
import { FilterGroup } from "../../componentes/FilterGroup/FilterGroup";
import './Produtos.css'
import { ProductListing } from "../../componentes/ProductListing/ProductListing";



export default function Produtos(){

    return( 
        <>
        <Header />
    <div className="AllMargin">
        <Filter />
        <div className="content-container">
            <FilterGroup />
            <div className="cards-container">
                <ProductListing />
            </div>
        </div>
    </div>
    <Footer /> 
        </> 
    )
}