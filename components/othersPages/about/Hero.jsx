import React from "react";
import Image from "next/image";
export default function Hero({ heroImage }) {
  return (
    <section className="tf-slideshow about-us-page position-relative">
      <div className="banner-wrapper">
        <Image
          className="lazyload"
          src={heroImage.url ?? "/images/brand/showroom.webp"}
          data-=""
          alt="image-collection"
          width={2000}
          height={1262}
        />
        <div className="box-content text-center">
          <div className="container">
            <div className="text">

              Navštivte nás a přesvědčte se na vlastní oči.
              <br className="d-xl-block d-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


//background: rgb(193 194 203 / 66%);