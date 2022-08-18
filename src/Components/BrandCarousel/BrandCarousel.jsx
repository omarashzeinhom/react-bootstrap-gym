import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay, } from "swiper";
//swiper styles
import "swiper/css/pagination";
import "./BrandCarousel.scss";


const BrandCarousel = () => {
  return (
    <Swiper 
    slidesPerView={3}
    spaceBetween={27}
    pagination={{
        clickable: true,
    }}
    autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    modules={[Autoplay,Pagination]}
    className="app__brandCarousel"
    >
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy"src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846098/code/js/companyportfolio/brandlogos/Vulvo_sw3xxw.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy"src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846106/code/js/companyportfolio/brandlogos/fictional_brand_logo_IXI_variant_d_dreuaa.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy"src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846098/code/js/companyportfolio/brandlogos/Vulvo_sw3xxw.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy" src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846098/code/js/companyportfolio/brandlogos/Vulvo_sw3xxw.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy"src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846106/code/js/companyportfolio/brandlogos/fictional_brand_logo_IXI_variant_d_dreuaa.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy"src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846106/code/js/companyportfolio/brandlogos/fictional_brand_logo_IXI_variant_d_dreuaa.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy" src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846098/code/js/companyportfolio/brandlogos/Vulvo_sw3xxw.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy" src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846098/code/js/companyportfolio/brandlogos/Vulvo_sw3xxw.svg'/></SwiperSlide>
        <SwiperSlide><img className="app__brandCarousel-logo" loading="lazy" src='https://res.cloudinary.com/du9aympvd/image/upload/v1660846098/code/js/companyportfolio/brandlogos/Vulvo_sw3xxw.svg'/></SwiperSlide>


    </Swiper>
  )
}

export default BrandCarousel