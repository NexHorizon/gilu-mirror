"use client";
import ProductCard9 from "@/components/shopCards/ProductCard9";
import { useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Products({ products, title = "Produkty" }) {
  const [randomized, setRandomized] = useState([])

  const newProducts = [...products
    .filter(i => i.carouselImage?.url && i.carouselImageHover?.url)
    .map(i => ({ 
      id: i.id, 
      title: i.productName, 
      imgSrc: i.carouselImage.url, 
      imgHoverSrc: i.carouselImageHover.url, 
      itemUrlSlug: i.itemUrlSlug 
    }))]


  useEffect(() => {
    setRandomized(newProducts.map(p => ({ ...p, sort: Math.random() })).sort((a, b) => a.sort - b.sort))
  }, [])

  return (
    <section className="flat-spacing-27 bg_grey-5">
      <div className="container">
        <div className="flat-title title-upper flex-row justify-content-between px-0">
          <span className="title wow fadeInUp" data-wow-delay="0s">
            {title}
          </span>
          <div className="box-sw-navigation">
            <div className="nav-sw round nav-next-product nav-next-slider snbp254">
              <span className="icon icon-arrow-left" />
            </div>
            <div className="nav-sw round nav-prev-product nav-prev-slider snbn254">
              <span className="icon icon-arrow-right" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-full slider-layout-right">
        <Swiper
          dir="ltr"
          className="swiper sw-wrapper-right tf-sw-product-sell wrap-sw-over"
          spaceBetween={30}
          slidesPerView={4.5}
          breakpoints={{
            0: { slidesPerView: 1.5, spaceBetween: 15 },
            640: { slidesPerView: 3.5, spaceBetween: 15 },
            768: { slidesPerView: 4.5, spaceBetween: 30 },
            1024: { slidesPerView: 4.5, spaceBetween: 30 },
          }}
          modules={[Navigation]}
          navigation={{
            prevEl: ".snbp254",
            nextEl: ".snbn254",
          }}
        >
          {randomized.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard9 product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
