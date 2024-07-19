import './GalleryHomePage.css'
import { useState } from 'react'
import ImageCarousel1 from '../../assets/img/home-slide-1.jpeg'
import ImageCarousel2 from '../../assets/img/home-slide-2.jpeg'
import ImageCarousel3 from '../../assets/img/home-slide-3.jpeg'
import ImageCarousel4 from '../../assets/img/home-slide-4.jpeg'
import ImageCarousel5 from '../../assets/img/home-slide-5.jpeg'
import ImageCarousel6 from '../../assets/img/home-slide-6.jpeg'
function GalleryHomePage({banners}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>{
      prevIndex === 0 ? banners.length -1 : prevIndex - 1
    })
  }
  return (
    <div className='carousel'>
      <button onClick={goPrev} className='carousel-button prev-button'>&lt;</button>
      <div>
        <img src={banners[currentIndex]} alt="banner" className='carousel-image'/>
        {console.log(banners[currentIndex])}
      </div>
      <button onClick={goNext} className='carousel-button next-button'>&gt;</button>
    </div>
    )
}

export default GalleryHomePage;