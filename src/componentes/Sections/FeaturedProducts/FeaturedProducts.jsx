import './FeaturedProducts.css'
import { BlockFeaturedComponente } from '../../BlockFeaturedComponente/BlockFeaturedComponente'
import EastIcon from '@mui/icons-material/East';
export const FeaturedProducts = () => {
    return(
        <div className='section-featured-products'>
            <div className='title-section'>
                <h3>Produtos em alta</h3>
                <a href="#"> Ver todos <EastIcon /> </a>
            </div>
            <div className='featured-products'>
                <BlockFeaturedComponente />
            </div>
        </div>
    )
}