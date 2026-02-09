import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import ShopDefault from "@/components/shop/ShopDefault";
import { CategoryQuery } from "@/queries/query";
import { getClient } from "@/utlis/ApolloClient";
import React from "react";

export async function generateMetadata({ params }) {
  const { name } = await params

  const { data } = await getClient().query({ query: CategoryQuery, variables: { categoryInput: { categoryUrlName: name } } });

  return {
    title: data.category.categoryName,
    description: `GILU | Designový nábytek - ${data.category.categoryName}`,
  };
}

export default async function page({ params }) {
  const { name } = await params

  const { data } = await getClient().query({ query: CategoryQuery, variables: { categoryInput: { categoryUrlName: name } } });

  return (
    <>
      <Header1 />
      <div className="tf-page-title category-panel">
        <div className="container-full">
          <div className="heading text-center">{data.category.categoryName}</div>
        </div>
      </div>
      <ShopDefault products={data.category.product} />
      <Footer4 />
    </>
  );
}
