"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MobileMenu() {
  const [categories, setCategories] = useState([])

  const loadCategories = async () => {
    const response = await fetch("/api/categories", { next: { revalidate: 600 } })

    const { categories } = await response.json()

    setCategories([{
      id: "dropdown-menu-one",
      label: "Produkty",
      links: categories.map(cat => ({ href: "/kategorie/" + cat.categoryUrlName, label: cat.categoryName }))
    }])
  }

  const pathname = usePathname();


  useEffect(() => {
    loadCategories()
  }, [])


  return (
    <div className="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
      <span
        className="icon-close icon-close-popup"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
      <div className="mb-canvas-content">
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">

              <Link href="/" className="mb-menu-link">
                Úvod
              </Link>

            </li>
            {categories.map((item, i) => (
              <li key={i} className="nav-mb-item">
                <a
                  href={`#${item.id}`}
                  className={`collapsed mb-menu-link current`}
                  data-bs-toggle="collapse"
                  aria-expanded="true"
                  aria-controls={item.id}
                >
                  <span>{item.label}</span>
                  <span className="btn-open-sub" />
                </a>
                <div id={item.id} className="collapse">
                  <ul className="sub-nav-menu">
                    {item.links.map((subItem, i2) => (
                      <li key={i2}>
                        {subItem.links ? (
                          <>
                            <a
                              href={`#${subItem.id}`}
                              className={`sub-nav-link collapsed  `}
                              data-bs-toggle="collapse"
                              aria-expanded="true"
                              aria-controls={subItem.id}
                            >
                              <span>{subItem.label}</span>
                              <span className="btn-open-sub" />
                            </a>
                            <div id={subItem.id} className="collapse">
                              <ul className="sub-nav-menu sub-menu-level-2">
                                {subItem.links.map((innerItem, i3) => (
                                  <li key={i3}>
                                    <Link
                                      href={innerItem.href}
                                      className={`sub-nav-link`}
                                    >
                                      {innerItem.label}
                                      {innerItem.demoLabel && (
                                        <div className="demo-label">
                                          <span className="demo-new">New</span>
                                        </div>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </>
                        ) : (
                          <Link
                            href={subItem.href}
                            className={`sub-nav-link `}
                          >
                            {subItem.label}
                            {subItem.demoLabel && (
                              <div className="demo-label">
                                <span className="demo-new">New</span>
                              </div>
                            )}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
            <li className="nav-mb-item">

              <Link href="/showroom" className="mb-menu-link">
                Showroom
              </Link>

            </li>

            <li className="nav-mb-item">
              <Link href="/kontakt" className="mb-menu-link">
                Kontakt
              </Link>

            </li>

            <li className="nav-mb-item">
              <Link href="/onas" className="mb-menu-link">
                O nás
              </Link>
            </li>
          </ul>
          <div className="mb-other-content mb-bottom">
          </div>
        </div>
      </div>
    </div>
  );
}
