import Products from "@/components/homes/home-skateboard/Products";

import ShopDetailsTab from "@/components/shopDetails/ShopDetailsTab";
import React from "react";
import Link from "next/link";
import DetailsOuterZoom from "@/components/shopDetails/DetailsOuterZoom";
import Header1 from "@/components/headers/Header1";
import { ProductQuery, ProductsQuery } from "@/queries/query";
import { getClient } from "@/utlis/ApolloClient";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import Footer4 from "@/components/footers/Footer4";

export async function generateMetadata({ params }) {
  const { slug } = await params
  const { data } = await getClient().query({ query: ProductQuery, variables: { productInput: { itemUrlSlug: slug } } });

  return {
    title: data.product.productName,
    description: `GILU | Designový nábytek - ${data.product.description}`,
  };
}


export default async function page({ params }) {
  const { slug } = await params

  const { data } = await getClient().query({ query: ProductQuery, variables: { productInput: { itemUrlSlug: slug } } });
  const { data: products } = await getClient().query({ query: ProductsQuery });


  const productData = {
    id: data.product.id,
    imgSrc: data.product.productImage.url,
    imgHoverSrc: data.product.productImageHover.url,
    title: data.product.productName,
    techSpec: data.product.techSpec,
    description: data.product.description,
    price: data.product.price,
    images: data.product.images,
    subtitle: data.product.subtitle,
  }

  return (
    <>
      <Header1 />
      <div className="tf-breadcrumb category-panel">
        <div className="container">
          <div className="tf-breadcrumb-wrap d-flex justify-content-between flex-wrap align-items-center">
            <div className="tf-breadcrumb-list">
              <Link href={`/`} className="text">
                Home
              </Link>
              <i className="icon icon-arrow-right" />

              <Link href={`/kategorie/${data.product.category.categoryUrlName}`} className="text">
                {data.product.category.categoryName}
              </Link>
              <i className="icon icon-arrow-right" />

              <span className="text">
                {data.product.productName}
              </span>
            </div>
          </div>
        </div>
      </div>
      <DetailsOuterZoom product={productData} />
      <ShopDetailsTab techSpecEmpty={!productData.techSpec?.text} description={productData.description?.raw} techSpec={productData.techSpec?.raw} descriptionEmpty={!productData.description?.text} />
      <ContactForm2 title="Máte zájem o tento produkt?" product={data.product.productName} />
      <Products products={products.products} title="Další produkty" />
      <Footer4 />
    </>
  );
}
