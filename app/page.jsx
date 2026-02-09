import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import Categories from "@/components/homes/home-skateboard/Categories";
import Hero from "@/components/homes/home-skateboard/Hero";
import Products from "@/components/homes/home-skateboard/Products";
import HolidayHoursPopup from "@/components/common/HolidayHoursPopup";
import FooterInfoBar from "@/components/footers/FooterInfoBar";
import { CategoriesQuery, CustomImageQuery, ProductsQuery } from "@/queries/query";
import { getClient } from "@/utlis/ApolloClient";
import React from "react";

export const metadata = {
  title: "GILU | Designový nábytek",
  description: "GILU - Váš specialista na designový nábytek. Nabízíme široký výběr moderního a klasického nábytku pro váš domov.",
  keywords: "designový nábytek, moderní nábytek, interiérový design, bytový nábytek, GILU",
  openGraph: {
    title: "GILU | Designový nábytek",
    description: "GILU - Váš specialista na designový nábytek. Nabízíme široký výběr moderního a klasického nábytku pro váš domov.",
    type: "website",
    locale: "cs_CZ",
    siteName: "GILU",
  },
  twitter: {
    card: "summary_large_image",
    title: "GILU | Designový nábytek",
    description: "GILU - Váš specialista na designový nábytek. Nabízíme široký výběr moderního a klasického nábytku pro váš domov.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default async function page() {
  const { data } = await getClient().query({ query: ProductsQuery });
  const { data: { categories } } = await getClient().query({ query: CategoriesQuery });
  const { data: heroImages } = await getClient().query({ query: CustomImageQuery, variables: { name: "homepage-hero" } });

  return (
    <>
      <HolidayHoursPopup />
      <Header1 />
      <Hero images={heroImages.customImage.images} />
      <div className="mb-5"></div>
      <Categories categories={categories} />
      <Products products={data.products} />
      {/* <FooterInfoBar /> */}
      <Footer4 />
    </>
  );
}
