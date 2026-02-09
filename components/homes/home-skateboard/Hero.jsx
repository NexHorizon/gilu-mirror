"use client";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

export default function Hero({ images, showText = true }) {

  const heroImages = images.map(img => ({
    id: img.id,
    imgSrc: img.url,
    alt: img.fileName,
    title: img.fileName,
    price: ""
  }))

  return (
    <div className="tf-slideshow slider-effect-fade position-relative slider-skincare slider-skateboard ">
      <Swiper
        dir="ltr"
        slidesPerView={1} // data-preview
        spaceBetween={0} // data-space
        centeredSlides={false} // data-centered
        loop={true} // data-loop
        autoplay
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true, el: ".spd253" }}
        className="tf-sw-slideshow hero-homepage"
      // autoplay={{ delay: 0, disableOnInteraction: false }} // data-auto-play
      // speed={4000} // data-speed
      >
        {heroImages.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="wrap-slider">
              <Image
                alt={slide.alt}
                className="h-100 object-fit-cover"
                src={slide.imgSrc}
                width={1920}
                height={1080}
                priority
              />
              <div className="box-content">
                <div className="container">
                  <div className="card-box-2">
                    <div className=" title">
                      {showText && (
                        <div /* href={slide.link} */ className=" fs-1 text-light lh-sm">
                          Designové sedačky a nábytek na míru – ten komfort pocítíte.
                        </div>
                      )}
                    </div>
                    {/*   <span className="fade-item fade-item-2 price">
                      ${slide.price.toFixed(2)}
                    </span> */}
                    <div className="">
                      {/* <a
                        href={slide.link}
                        className="tf-btn btn-line collection-other-link fw-6 fs-5"
                      >
                        <span>Ponuka</span>
                        <i className="icon icon-arrow1-top-left" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="wrap-pagination sw-absolute-3">
        <div className="sw-dots style-2 sw-pagination-slider justify-content-center spd253" />
      </div>
    </div>
  );
}
