import Footer4 from "@/components/footers/Footer4";
import Header1 from "@/components/headers/Header1";
import ContactForm2 from "@/components/othersPages/contact/ContactForm2";
import { AboutUsQuery } from "@/queries/query";
import { getClient } from "@/utlis/ApolloClient";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

export const metadata = {
    title: "O nás",
    description: "GILU | Designový nábytek"
};

export default async function page() {
    const { data } = await getClient().query({
        query: AboutUsQuery,
    });

    // Get the first two images for the layout
    const image1 = data.aboutUs.images[0];
    const image2 = data.aboutUs.images[1];

    return (
        <>
            <Header1 />
            <div className="tf-page-title style-2 contact-header">
                <div className="container-full">
                    <div className="heading text-center">{data.aboutUs.name}</div>
                </div>
            </div>
            
            <div className="container-full">
                {/* First row: Image1 on left, Text on right */}
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="about-image-container">
                            {image1 && (
                                <Image
                                    src={image1.url}
                                    alt={image1.fileName}
                                    width={800}
                                    height={600}
                                    className="img-fluid"
                                />
                            )}
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div className="about-text-container text-center" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            <RichText content={data.aboutUs.text.raw} />
                        </div>
                    </div>
                </div>

                {/* Second row: Different layout for mobile and desktop */}
                <div className="row">
                    {/* Mobile view: Image2 then Text2 */}
                    <div className="col-12 d-md-none">
                        <div className="about-image-container mb-4">
                            {image2 && (
                                <Image
                                    src={image2.url}
                                    alt={image2.fileName}
                                    width={800}
                                    height={600}
                                    className="img-fluid"
                                />
                            )}
                        </div>
                        <div className="about-text-container text-center mb-4" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            <RichText content={data.aboutUs.text2.raw} />
                        </div>
                    </div>

                    {/* Desktop view: Text2 then Image2 */}
                    <div className="col-md-6 d-none d-md-flex align-items-center">
                        <div className="about-text-container text-center" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                            <RichText content={data.aboutUs.text2.raw} />
                        </div>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className="about-image-container">
                            {image2 && (
                                <Image
                                    src={image2.url}
                                    alt={image2.fileName}
                                    width={800}
                                    height={600}
                                    className="img-fluid"
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm2 />
            <Footer4 />
        </>
    );
}
