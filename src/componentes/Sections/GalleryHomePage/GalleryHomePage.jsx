import './GalleryHomePage.css'
import { useEffect, useState } from 'react'

function GalleryHomePage({banners}) {
  //useState para alterar o estado do Carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  

  //funções para passar pelas setas 
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)
  }
  const goPrev = () => {
    setCurrentIndex((prevIndex) =>{
      return prevIndex === 0 ? banners.length -1 : prevIndex - 1
    })
  }

  //autoplay carousel home
  useEffect(() => {
    const interval = setInterval(() => {
      goNext()
    }, 4000)
    return() => clearInterval(interval)
  }, [])

  //componente Carousel
  return (
    <div className='carousel'>
      <button onClick={goPrev} className='carousel-button prev-button'>&lt;</button>
      <div>
        <img src={banners[currentIndex]} alt="banner" className='carousel-image'/>
        {/* {console.log(banners[currentIndex])} */}
      </div>
      <button onClick={goNext} className='carousel-button next-button'>&gt;</button>
    </div>
    )
}

export default GalleryHomePage;