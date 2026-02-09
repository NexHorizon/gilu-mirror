import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Page Not Found - GILU | Designový nábytek",
  description: "GILU | Designový nábytek",
};
export default function notFound() {
  return (
    <>
      <Header1 />
      <section className="page-404-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="image">
                <Image
                  alt="image"
                  src="/images/item/404.svg"
                  width="394"
                  height="319"
                />
              </div>
              <div className="title">Oops...Tento link nefunguje.</div>
              <p>
                Omlouváme se za potíže. Vraťte se na homepage
              </p>
              <Link
                href="/"
                className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn"
              >
                Jít na úvod
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </>
  );
}
