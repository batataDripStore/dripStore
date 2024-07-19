import { Footer } from "../../componentes/Footer/Footer"
import Header from "../../componentes/Header/Header"
import GalleryHomePage from "../../componentes/GalleryHomePage/GalleryHomePage"
import ImageCarousel1 from '../../assets/img/home-slide-1.jpeg'
import ImageCarousel2 from '../../assets/img/home-slide-2.jpeg'
import ImageCarousel3 from '../../assets/img/home-slide-3.jpeg'
// import ImageCarousel4 from '../../assets/img/home-slide-4.jpeg'
// import ImageCarousel5 from '../../assets/img/home-slide-5.jpeg'
// import ImageCarousel6 from '../../assets/img/home-slide-6.jpeg'
export default function Home(){

    
    const banners = [
        ImageCarousel1,
        ImageCarousel2,
        ImageCarousel3
    ]

    return(
        
        <>
        <Header />
        <GalleryHomePage banners={banners} />
        <Footer />
        </>
    )
}