import { Footer } from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import GalleryHomePage from "../../componentes/Sections/GalleryHomePage/GalleryHomePage"
import HighlightsColections from "../../componentes/Sections/HighlightsColetions/HighlightsColetions"
import ImageCarousel1 from '../../assets/img/home-slide-1.jpeg'
import ImageCarousel2 from '../../assets/img/home-slide-2.jpeg'
import ImageCarousel3 from '../../assets/img/home-slide-3.jpeg'
import ImageCarousel4 from '../../assets/img/home-slide-4.jpeg'
import ImageCarousel5 from '../../assets/img/home-slide-5.jpeg'
import ImageCarousel6 from '../../assets/img/home-slide-6.jpeg'
import { Category } from "../../componentes/Sections/Category/Category"
import { FeaturedProducts } from "../../componentes/Sections/FeaturedProducts/FeaturedProducts"
import {SpecialOffers} from '../../componentes/Sections/SpecialOffers/SpecialOffers'


export default function Home(){
   
    const banners = [
        ImageCarousel1,
        ImageCarousel2,
        ImageCarousel3,
        ImageCarousel4,
        ImageCarousel5,
        ImageCarousel6
    ]

    return(
        <>
        <Header />
        <GalleryHomePage banners={banners} />
        <HighlightsColections />
        <Category />
        <FeaturedProducts />
        <SpecialOffers />
        <Footer />
        </>
    )
}