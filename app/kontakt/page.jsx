import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import Map2 from "@/components/othersPages/contact/Map2";

export const metadata = {
  title: "Kontakt",
  description: "GILU | Designový nábytek"
};
export default async function page() {


  return (
    <>
      <Header1 />
      <div className="tf-page-title style-2 contact-header">
        <div className="container-full">
          <div className="heading text-center">Kontakt</div>
        </div>
      </div>
      <Map2 />
      <ContactForm2 />
      <Footer4 />
    </>
  );
}
