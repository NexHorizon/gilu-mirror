"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard9({ product }) {
  return (
    <div className="card-product style-line-hover">
      <div className="card-product-wrapper">
        <Link href={`/produkt-detail/${product.itemUrlSlug}`} className="product-img">
          <Image
            className="img-product"
            alt="image-product"
            src={product.imgSrc}
            width={360}
            height={400}
            style={{ height: 400, objectFit: 'cover' }}
          />
          <Image
            className="img-hover"
            alt="image-product"
            src={product.imgHoverSrc}
            width={360}
            height={400}
            style={{ height: 400, objectFit: 'cover' }}
          />
        </Link>
      </div>
      <div className="card-product-info">
        <Link
          href={`/product-detail/${product.itemUrlSlug}`}
          className="title link fs-14 fw-7 text-uppercase"
        >
          {product.title}
        </Link>
      </div>
    </div>
  );
}
