"use client";
import Link from "next/link";
import React from "react";

export default function Nav({ isArrow = true, textColor = "", Linkfs = "", categories, showroomImg }) {


  const links = [{
    heading: "Kategorie",
    links: categories.map(cat => ({ href: "/kategorie/" + cat.categoryUrlName, text: cat.categoryName }))
  }]

  return (
    <>
      <li className="menu-item open">
        <a
          href="#"
          className={`item-link ${Linkfs} ${textColor}`}
        >
          Produkty
          {isArrow ? <i className="icon icon-arrow-down" /> : ""}
        </a>
        <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row d-flex justify-content-center">
              {/* <div className="col-lg-6">
                <div className="collection-item hover-img h-100">
                  <div className="collection-inner h-100"> */}
              {/* <Link
                      href={`/showroom`}
                      className="collection-image img-style h-100"
                    >
                      <Image
                        className="lazyload object-cover"
                        data-src={showroomImg.url}
                        alt="showroom-img"
                        src={showroomImg.url}
                        width="1000"
                        height="1215"
                      />
                    </Link>
                    <div className="collection-content">
                      <Link
                        href={`/showroom`}
                        className="tf-btn hover-icon btn-xl collection-title fs-16"
                      >
                        <span>Showroom</span>
                        <i className="icon icon-arrow1-top-left" />
                      </Link>
                    </div> */}
              {/* </div>
                </div>
              </div> */}

              {links.map((menu, index) => (
                <div className="col-lg-2" key={index}>
                  <div className="mega-menu-item">
                    <div className="menu-heading">{menu.heading}</div>
                    <ul className="menu-list">
                      {menu.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.href}
                            className={`menu-link-text link`}
                          >
                            {link.text}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </li>

    </>
  );
}
