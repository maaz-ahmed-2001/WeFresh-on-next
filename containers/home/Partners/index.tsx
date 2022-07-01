import React from "react";
import SectionHeading from "../../../components/common/SectionHeading";
import partnerImg1 from "../../../assests/images/partner1.svg";
import partnerImg2 from "../../../assests/images/partner2.svg";
import partnerImg3 from "../../../assests/images/partner3.svg";
import partnerImg4 from "../../../assests/images/partner4.svg";
import partnerImg5 from "../../../assests/images/partner5.svg";
import partnerBgImg from "../../../assests/images/partnersBgImg.svg";
import styles from "./index.module.css";
import Image from "next/image";
const PartnersSection = () => {
  const pageContent = {
    heading: {
      normal: "Our",
      bold: "Partners",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod.",
    background_img: {
      src: partnerBgImg,
      alt: "background",
    },
  };
  return (
    <section className="py-24 md:pb-20">
      <div className="container xs:px-2 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44 ">
        <div className="grid grid-cols-2 md:grid-cols-1">
          <div className={"relative " + styles.leftSide}>
            <Image
              src={pageContent.background_img.src}
              alt={pageContent.background_img.alt}
              className={"max-w-full " + styles.bgImg}
            />

            <div className={styles.content + " "}>
              <SectionHeading
                normal={pageContent.heading.normal}
                bold={pageContent.heading.bold}
              />
              <p>{pageContent.content}</p>
            </div>
          </div>
          <div className={"relative " + styles.partnerImgs}>
            <div>
              <Image src={partnerImg1} alt="" />
            </div>
            <div>
              <Image src={partnerImg2} alt="" />
            </div>
            <div>
              <Image src={partnerImg3} alt="" />
            </div>
            <div>
              <Image src={partnerImg4} alt="" />
            </div>
            <div>
              <Image src={partnerImg5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
