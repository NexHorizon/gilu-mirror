import { socialLinksWithBorder } from "@/data/socials";
import Image from "next/image";
import React from "react";

export default function ContactDetails({ showMore = true, showOperator = true }) {

  return (
    <div className="tf-content-left">

      <div className="sticky-top">
        <h5 className="mb_20">Navštivte náš showroom</h5>
        <div className="mb_20">
          <p className="mb_5">
            <strong>Adresa</strong>
          </p>
          <p>Argentinská 1624/32a, Holešovice, Praha 7, 170 00</p>
        </div>
        <div className="mb_20">
          <p className="mb_5">
            <strong>Telefon</strong>
          </p>
          <a href="tel:+420602658322">+420 602 658 322</a>
        </div>
        <div className="mb_20">
          <p className="mb_5">
            <strong>Email</strong>
          </p>
          <p><a href="mailto:praha@gilu.cz">praha@gilu.cz</a></p>
        </div>

        {showMore && <>
          <div className="mb_20">
            <p className="mb_5">
              <strong>Otevírací doba</strong>
            </p>
            <p>Náš showroom je otevřen,<br />
            PO-PÁ od 10 do 18<br />
            SO od 10 do 13</p>
          </div>
          <div className="mb_20">
            <p className="mb_5">
              <strong>Kudy k nám?</strong>
            </p>
            <p>
              Parkování - U průhonu<br />
              Metro – zastávka Nádraží Holešovice, linka B<br />
              Tramvaj - 1, 14, 25 a 93
            </p>
          </div>
          {showOperator && <>
            <div className="mb_20">
              <p className="mb_5">
                <strong>Provozovatel</strong>
              </p>
            <p>
              LgK Interior Design s.r.o.<br />
              Čeljabinská 635/16,100 00, Praha<br />
              IČ: 19438095 DIČ: CZ19438095<br />
              Spisová značka C 386589/MSPH<br />
              Městský soud v Praze
            </p>
            </div>
          </>}
          <div className="mb_20">
            <div className="my-5">
              <a target="_blank" href="https://maps.app.goo.gl/Ys6mjZTgEYHo8ykV7" className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center">Navigovat<i className="m-1 icon icon-arrow1-top-left"></i></a>
            </div>
          </div>
          <div>
            <ul className="tf-social-icon d-flex gap-20 style-default">
              {socialLinksWithBorder.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`box-icon link round ${link.className} ${link.borderClass}`}
                  >
                    <i
                      className={`icon ${link.iconSize} ${link.iconClass}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>}
      </div>
    </div>
  );
}
