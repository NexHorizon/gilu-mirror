import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import ContactDetails from "@/components/othersPages/contact/ContactDetails";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import ShowroomBenefits from "@/components/showroom/ShowroomBenefits";
import { ShowroomBenefitsQuery } from "@/queries/query";
import { CustomImageQuery } from "@/queries/query";
import { getClient } from "@/utlis/ApolloClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Hero from "@/components/homes/home-skateboard/Hero";

export const metadata = {
  title: "Showroom",
  description: "Navštivte nás v našem showroomu",
};
export default async function page() {

  const { data } = await getClient().query({ query: ShowroomBenefitsQuery });
  const { data: heroImages } = await getClient().query({ query: CustomImageQuery, variables: { name: "showroom-hero" } });
  return (
    <>
      <Header1 />
      <div className="tf-page-title category-panel">
        <div className="container-full">
          <div className="heading text-center">Proč nás navštívit na našem showroomu v Praze?</div>
          <p className="text-center text-2 text_black-2 mt_5">
            Můžete na vlastní kůži vyzkoušet veškerý vystavený nábytek, při kterém můžete vybírat ze stovek různých vzorků kůží a látek.
          </p>
        </div>
      </div>
      <Hero images={heroImages.customImage.images} showText={false} />
      
      <div className="mb-5"></div>
      
      {/* <div className="my-5 mx-5 d-lg-flex justify-content-center fs-4 text text-center">
        <div>
          <p className="mb-5">
            Rádi vám pomůžeme vybrat to nejlepší pro váš domov.

            Těšíme se na Vás.
          </p>

          <div className="mb-5">
            Termín návštěvy si můžete domluvit na tel. č. <a href="tel:+420 602 658 322" className="link text-decoration-underline">+420 602 658 322</a> nebo emailem na <a href="mailto:praha@gilu.cz" className="link text-decoration-underline">praha@gilu.cz</a>
          </div>

        </div>



      </div> */}

      <ShowroomBenefits benefitsContent={data.showroomBenefits} />

      <div className="my-5 mx-5 d-lg-flex justify-content-evenly">
        <div className="flex-grow-1">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.602108634954!2d14.4435414!3d50.1057096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b95b15bd66d21%3A0x5cf770a186da0ee6!2sGILU%20designov%C3%BD%20n%C3%A1bytek!5e1!3m2!1scs!2skr!4v1743354239004!5m2!1scs!2skr" width="100%" height="650" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex-grow-1">
          <div className="footer-infor mx-4">
            {/* <div className="footer-logo text-center">
              <Link href={`/`}>
                <Image
                  alt="image"
                  src="/images/logo/logo-gilu.svg"
                  width="120"
                  height="21"
                />
              </Link>
            </div> */}

            <ContactDetails showMore={true} showOperator={false} />
          </div>
        </div>

      </div>

      <ContactForm2 />

      <Footer4 />
    </>
  );
}
