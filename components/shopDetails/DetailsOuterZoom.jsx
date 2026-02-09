"use client";

import React from "react"
import Slider1ZoomOuter from "./sliders/Slider1ZoomOuter"

export default function DetailsOuterZoom({ product }) {
  const images = product?.images?.length > 0 ? product.images : undefined

  return (
    <section
      className="flat-spacing-4 pt_0"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      <div
        className="tf-main-product section-image-zoom"
        style={{ maxWidth: "100vw", overflow: "clip" }}
      >

        <div className="container">
          <div className="text-center fs-3 pt-5 pb-5 tf-product-info-title">{product.title}</div>

          <div className="row">
            <div className="">
              <div className="tf-product-media-wrap sticky-top">
                <div className="thumbs-slider">
                  <Slider1ZoomOuter
                    firstImage={product.imgSrc}
                    images={images}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="">
                    {product.subtitle}
                  </div>
                </div>
              </div>
            </div>
            {product.price && <div className="mt-5">
              <div className="tf-product-info-wrap position-relative">
                <div className="tf-zoom-main" />
                <div className="tf-product-info-list other-image-zoom">
                  <div className="fs-4 text">
                    Cena od {product.price} Kč
                  </div>
                </div>
              </div>
            </div>}
          </div>
        </div>
      </div>
    </section>
  );
}
