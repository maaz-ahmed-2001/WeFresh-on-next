import Image from "next/image";
import phone from "../../assests/images/phone.svg";
import DownloadApp from "../common/DownloadApp";
import InlineForm from "../common/InlineForm";
import styles from "./index.module.css";
import appleIconDark from "../../assests/images/Apple.svg";
import playStoreIconLight from "../../assests/images/Googleplay.svg";
import bannerImg1 from "../../assests/images/bannerImg1.svg";
import bannerImg2 from "../../assests/images/bannerImg2.svg";
import bannerImg3 from "../../assests/images/bannerImg3.svg";
import bannerImg4 from "../../assests/images/bannerImg4.svg";
import bannerImg5 from "../../assests/images/bannerImg5.svg";

const BannerSection = () => {
  const form = {
    type: "tel",
    placeholder: "Enter phone number",
    text: "send",
  };
  const heading = {
    normal: "The smarter way",
    bold: "to order your food",
  };
  const appContent = {
    text: "available on",
    image: [
      {
        src: playStoreIconLight,
        alt: "playstore",
      },
      {
        src: appleIconDark,
        alt: "appstore",
      },
    ],
  };
  return (
    <section className={styles.section}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 grid-flow-row items-center">
          <div
            className={
              "flex-col sm:items-center md:items-start " + styles.leftSide
            }
          >
            <h1 className={styles.bannerHeading}>
              {heading.normal}
              <br />
              <b className="">{heading.bold}</b>
            </h1>
            <InlineForm form={form} />
            <DownloadApp download={appContent} />
          </div>
          <div
            className={
              "flex xs:justify-center sm:justify-center md:justify-center lg:justify-end " +
              styles.rightSide
            }
          >
            <Image src={phone} alt="phone" className={styles.bannerImg} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 max-w-full -z-10">
        <Image src={bannerImg1} alt="bannerBgImg1" />
      </div>
      <div
        className={
          "absolute max-w-full -z-10 top-0 right-0 " + styles.bannerImg2
        }
      >
        <Image src={bannerImg2} alt="bannerBgImg2" />
      </div>
      {/* <div className="absolute top-0 max-w-full -z-10">
        <Image src={bannerImg3} alt="bannerBgImg3" />
      </div>
      <div className="absolute top-0 max-w-full -z-10">
        <Image src={bannerImg4} alt="bannerBgImg4" />
      </div>
      <div
        className={
          "absolute top-0 right-0 max-w-full -z-10 " + styles.bannerImg5
        }
      >
        <Image src={bannerImg5} alt="bannerBgImg5" />
      </div> */}
    </section>
  );
};

export default BannerSection;
