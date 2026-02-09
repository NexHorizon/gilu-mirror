"use client";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Image from "next/image";
import LanguageSelect from "../common/LanguageSelect";
import CurrencySelect from "../common/CurrencySelect";
import { aboutLinks, footerLinks, paymentImages } from "@/data/footerLinks";
import Link from "next/link";
export default function Footer4({ bgColor = "" }) {
  useEffect(() => {
    const headings = document.querySelectorAll(".footer-heading-moblie");

    const toggleOpen = (event) => {
      const parent = event.target.closest(".footer-col-block");

      parent.classList.toggle("open");
    };

    headings.forEach((heading) => {
      heading.addEventListener("click", toggleOpen);
    });

    // Clean up event listeners when the component unmounts
    return () => {
      headings.forEach((heading) => {
        heading.removeEventListener("click", toggleOpen);
      });
    };
  }, []); // Empty dependency array means this will run only once on mount
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);



  const postContact = async (body) => {
    const response = await fetch("/api/newsletter", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
  }

  const sendEmail = async (event) => {
    setShowMessage(true);
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    await postContact(values)
    setShowMessage(false);
    event.target.reset();
  };

  return (
    <footer
      id="footer"
      className={`footer has-all-border has-border-full ${bgColor}`}
    >
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              {/*     <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-col footer-col-1 footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className="fs-14 text-uppercase fw-8">Help</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className="fs-14 text-uppercase fw-8">Help</h6>
                  </div>
                  <ul className="footer-menu-list tf-collapse-content">
                    {footerLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="footer-menu_item">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div> */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-col footer-col-2 footer-col-block">
                  <div className="footer-logo">
                    <Link href="/">
                      <Image
                        src="/images/logo/logo-gilu.svg"
                        alt="Company Logo"
                        width="200"
                        height="200"
                      />
                    </Link>
                    <ul className="tf-social-icon d-flex gap-20 style-default d-md-none mt-3">
                      <li>
                        <a
                          href="https://www.facebook.com/profile.php?id=61573816775638"
                          target="_blank"
                          className="box-icon round social-facebook border-line-black"
                        >
                          <i className="icon fs-28 icon-fb" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/gilu.cz"
                          target="_blank"
                          className="box-icon round social-instagram border-line-black"
                        >
                          <i className="icon fs-28 icon-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-col footer-col-3 footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className="fs-14 text-uppercase fw-8">Kontakt</h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className="fs-14 text-uppercase fw-8">Kontakt</h6>
                  </div>
                  <ul className="footer-menu-list tf-collapse-content">
                    <li>
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/32a,+Argentinsk%C3%A1+1624,+170+00+Praha+7-Hole%C5%A1ovice/@50.105696,14.443603,673m/data=!3m1!1e3!4m6!3m5!1s0x470b9505f3bcb53b:0x3e8b237e381bde9b!8m2!3d50.105696!4d14.4436033!16s%2Fg%2F11vz_669w9?hl=cs&entry=ttu&g_ep=EgoyMDI1MDMxNi4wIKXMDSoASAFQAw%3D%3D"
                        className="footer-menu_item text-decoration-underline"
                      >
                        Argentinská 1624/32a
                      </a>
                    </li>
                    <li>
                      <p className="footer-menu_item">
                        Praha 7 Holešovice 170 00
                      </p>
                    </li>
                    <li>
                      <a href="mailto:praha@gilu.cz" className="footer-menu_item">
                        praha@gilu.cz
                      </a>
                    </li>
                    <li>
                      <a href="tel:+420602658322" className="footer-menu_item">
                        +420 602 658 322
                      </a>
                    </li>
                    <li>
                      <ul className="tf-social-icon d-flex gap-20 style-default d-none d-md-flex">
                        <li>
                          <a
                            href="https://www.facebook.com/profile.php?id=61573816775638"
                            target="_blank"
                            className="box-icon round social-facebook border-line-black"
                          >
                            <i className="icon fs-28 icon-fb" />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/gilu.cz"
                            target="_blank"
                            className="box-icon round social-instagram border-line-black"
                          >
                            <i className="icon fs-28 icon-instagram" />
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6 className="fs-14 text-uppercase fw-8">
                      Odebírej newsletter
                    </h6>
                  </div>
                  <div className="footer-heading footer-heading-moblie">
                    <h6 className="fs-14 text-uppercase fw-8">
                      Odebírej newsletter
                    </h6>
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-menu_item">
                      Přihlaš se pro odběr nejnovějších informací
                    </div>
                    <div
                      className={`tfSubscribeMsg ${showMessage ? "active" : ""
                        }`}
                    >
                      {success ? (
                        <p style={{ color: "rgb(52, 168, 83)" }}>
                          Odesílám email k newsletteru.
                        </p>
                      ) : (
                        <p style={{ color: "red" }}>Something went wrong</p>
                      )}
                    </div>
                    <form
                      required
                      ref={formRef}
                      onSubmit={(e) => { e.preventDefault(); sendEmail(e) }}
                      className="form-newsletter"
                      action="#"
                      method="post"
                      acceptCharset="utf-8"
                      data-mailchimp="true"
                    >
                      <div id="subscribe-content">
                        <fieldset className="email">
                          <input
                            type="email"
                            name="email"
                            placeholder="Zadej svůj email"
                            tabIndex={0}
                            defaultValue=""
                            aria-required="true"
                            required
                            autoComplete="abc@xyz.com"
                          />
                        </fieldset>
                        <div className="button-submit">
                          <button
                            className="tf-btn btn-sm radius-3 btn-fill btn-icon animate--hover-light_skew"
                            type="submit"
                          >
                            Odběr
                            <i className="icon icon-arrow1-top-left" />
                          </button>
                        </div>
                      </div>
                      <div id="subscribe-msg" />
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">
                    © {new Date().getFullYear()} NexHorizon. All Rights
                    Reserved
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
