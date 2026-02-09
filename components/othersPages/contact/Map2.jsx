import { socialLinksWithBorder } from "@/data/socials";
import React from "react";
import ContactDetails from "./ContactDetails";

export default function Map2() {
  return (
    <section className="flat-spacing-9">
      <div className="container">
        <div className="tf-grid-layout gap-0 lg-col-2">
          <div className="w-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.602108634954!2d14.4435414!3d50.1057096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95b15bd66d21%3A0x5cf770a186da0ee6!2sGILU%20designov%C3%BD%20n%C3%A1bytek!5e1!3m2!1scs!2skr!4v1743354239004!5m2!1scs!2skr" width="100%" height="650" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}
