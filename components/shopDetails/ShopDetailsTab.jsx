"use client";

import { useEffect, useState } from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";


const tabs = (techSpec, description) => [
  techSpec && { title: "Popis", active: true },
  description && { title: "Technický list", active: false },
];

export default function ShopDetailsTab({ description, techSpec, descriptionEmpty, techSpecEmpty }) {
  const [currentTab, setCurrentTab] = useState(descriptionEmpty ? 2 : 1);

  return (
    <section
      className="flat-spacing-17 pt_0"
      style={{ maxWidth: "100vw", overflow: "clip" }}
    >
      {(!descriptionEmpty || !techSpecEmpty) &&
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-tabs style-has-border">
                <ul className="widget-menu-tab">
                  {tabs(techSpecEmpty, descriptionEmpty).map((elm, i) => (
                    <li
                      key={i}
                      onClick={() => setCurrentTab(i + 1)}
                      className={`item-title ${currentTab == i + 1 ? "active" : ""
                        } `}
                    >
                      <span className="inner">{elm.title}</span>
                    </li>
                  ))}
                </ul>
                <div className="widget-content-tab">
                  <div
                    className={`widget-content-inner ${currentTab == 1 ? "active" : ""
                      } `}
                  >

                    {description && <RichText content={description} renderers={{ h5: (props) => <h5 {...props} className="pb-2 pt-2" ></h5> }} ></RichText>}

                  </div>
                  <div
                    className={`widget-content-inner ${currentTab == 2 ? "active" : ""
                      } `}
                  >
                    {techSpec && <RichText content={techSpec} renderers={{ h5: (props) => <h5 {...props} className="pb-2 pt-2" ></h5> }} ></RichText>}

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>}
    </section>
  );
}
