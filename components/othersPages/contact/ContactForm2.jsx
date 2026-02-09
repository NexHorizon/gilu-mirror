"use client";
import React, { useRef, useState } from "react";

export default function ContactForm2(props) {
  const formRef = useRef();
  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const postContact = async (body) => {
    const response = await fetch("/api/contact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await response.json()
  }

  const sendMail = async (event) => {
    setShowMessage(true);
    const formData = new FormData(event.target);
    const values = Object.fromEntries(formData.entries());
    values.product = props.product;
    await postContact(values)
    setShowMessage(false);
    event.target.reset();
  };

  return (
    <section className="bg_grey-7 flat-spacing-9">
      <div className="container">
        <div className="flat-title">
          <span className="title">{props.title ? props.title : "Kontaktujte nás!"}</span>
          <p className="sub-title text_black-2">
            Zanechte nám na sebe kontakt a my se Vám ozveme.
          </p>
        </div>
        <div>
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              sendMail(e);
            }}
            className="mw-705 mx-auto text-center form-contact"
            id="contactform"
            action="./contact/contact-process.php"
            method="post"
          >
            <div className="d-flex gap-15 mb_15">
              <fieldset className="w-100">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="Jméno *"
                />
              </fieldset>
              <fieldset className="w-100">
                <input
                  type="text"
                  autoComplete="abc@xyz.com"
                  name="surname"
                  id="surname"
                  required
                  placeholder="Příjmení *"
                />
              </fieldset>
            </div>
            <div className="d-flex gap-15 mb_15">
              <fieldset className="w-100">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Email *"
                />
              </fieldset>
              <fieldset className="w-100">
                <input
                  type="text"
                  autoComplete="abc@xyz.com"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Telefon *"
                />
              </fieldset>
            </div>
            <div className="mb_15">
              <textarea
                placeholder="Message"
                name="message"
                id="message"
                required
                cols={30}
                rows={10}
                defaultValue={""}
              />
            </div>
            <div className="send-wrap">
              <div className={`tfSubscribeMsg ${showMessage ? "active" : ""}`}>
                {success ? (
                  <p style={{ color: "rgb(52, 168, 83)" }}>
                    Message has been sent successfully.
                  </p>
                ) : (
                  <p style={{ color: "red" }}>Something went wrong</p>
                )}
              </div>
              <button
                type="submit"
                className="tf-btn radius-3 btn-fill animate-hover-btn justify-content-center"
              >
                Odeslat
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
