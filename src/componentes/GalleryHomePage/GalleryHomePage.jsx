import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ImageCarousel1 from '../../assets/img/home-slide-1.jpeg'
import ImageCarousel2 from '../../assets/img/home-slide-2.jpeg'
import ImageCarousel3 from '../../assets/img/home-slide-3.jpeg'
import ImageCarousel4 from '../../assets/img/home-slide-4.jpeg'
import ImageCarousel5 from '../../assets/img/home-slide-5.jpeg'
import ImageCarousel6 from '../../assets/img/home-slide-6.jpeg'


function GalleryHomePage() {
  return (
    <div>
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner h-50">
    <div className="carousel-item active ">
      <img src={ImageCarousel1} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ImageCarousel2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ImageCarousel3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ImageCarousel4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ImageCarousel5} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ImageCarousel6} className="d-block w-100 " alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
    )
}

export default GalleryHomePage;