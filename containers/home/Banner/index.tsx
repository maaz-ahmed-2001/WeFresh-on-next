import Image from "next/image";
import phone from "../../../assests/images/phone.svg";
import DownloadApp from "../../../components/common/DownloadApp";
import InlineForm from "../../../components/common/InlineForm";
import styles from "./index.module.css";
import appleIconDark from "../../../assests/images/Apple.svg";
import playStoreIconLight from "../../../assests/images/Googleplay.svg";
import bannerImg1 from "../../../assests/images/bannerImg1.svg";
import bannerImg2 from "../../../assests/images/bannerImg2.svg";
import bannerImg3 from "../../../assests/images/bannerImg3.svg";
import bannerImg4 from "../../../assests/images/bannerImg4.svg";
import bannerImg5 from "../../../assests/images/bannerImg5.svg";

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
    <section className={"py-24 " + styles.section}>
      <div className="container xs:px-3 sm:px-5 md:px-8 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44">
        <div className="grid md:grid-cols-1 grid-cols-12 gap-4 ">
          <div
            className={
              "col-span-7 flex flex-col md:items-center md:col-span-1 justify-center" +
              styles.leftSide
            }
          >
            <h1 className={styles.bannerHeading}>
              {heading.normal}
              <br />
              <b className="">{heading.bold}</b>
            </h1>
            <div className={styles.bannerForm}>
              <InlineForm form={form} />
            </div>
            <DownloadApp download={appContent} />
          </div>
          <div
            className={
              "flex flex-row items-center justify-end md:col-span-1 md:justify-center col-span-5 " +
              styles.rightSide
            }
          >
            <div className={styles.bannerImg}>
              <Image src={phone} alt="phone" />
            </div>
          </div>
        </div>
      </div>
      <div className={"absolute top-0 max-w-full -z-10 " + styles.bannerImg1}>
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
