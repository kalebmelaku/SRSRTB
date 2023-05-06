import homeImg from '../assets/home-img.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function Carousal(){

    return (
        <>
              {/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        </div>
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="3000">
                <img src={homeImg} className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block">
                    <h2 className="fs-md-2">First slide label</h2>
                    <p className="fs-3 fs-md-1">Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img src={homeImg} className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block">
                    <h2>Second slide label</h2>
                    <p className="fs-3">Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
                <img src={homeImg} className="d-block w-100" alt="..." />
                <div className="carousel-caption  d-md-block">
                    <h2>Third slide label</h2>
                    <p className="fs-3">Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"><i
                    className="fa-solid fa-chevron-left fa-2x"></i></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"><i
                    className="fa-solid fa-chevron-right fa-2x"></i></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div> */}


    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 32500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
        <SwiperSlide>
        <div className="slide-container">
    <img src={homeImg} className="" alt="..." />
    <div className="text">
      <h3 className='text-center text-white'>First Slide</h3>
      <p className='text-center text-white'>Some representative placeholder content for the first slide.</p>
    </div>
  </div>
        </SwiperSlide>
        <SwiperSlide>
        <img src={homeImg} className="" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={homeImg} className="" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={homeImg} className="" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={homeImg} className="" alt="..." />
        </SwiperSlide>
        
      </Swiper>

        </>
    )
}