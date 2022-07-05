import SectionHeading from "../../../components/common/SectionHeading";
import styles from "./index.module.css";
import appStoreBanner from "../../../assests/images/AppStore.svg";
import playStoreBanner from "../../../assests/images/PlayStore.svg";
import Image from "next/image";
const AppSection = () => {
  const pageContent = {
    heading: {
      normal: "Ready to",
      bold: "Get the app",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    images: [
      { src: appStoreBanner, alt: "app-store" },
      { src: playStoreBanner, alt: "play-store" },
    ],
  };
  return (
    <section className={"py-24 md:pb-20 " + styles.section}>
      <div
        className={
          "container xs:px-4 sm:px-5 md:px-8 lg:px-14 xl:px-24 2xl:px-36 3xl:px-72 "
        }
      >
        <SectionHeading
          bold={pageContent.heading.bold}
          normal={pageContent.heading.normal}
        />
        <p className={styles.text}>{pageContent.content}</p>
        <div>
          {pageContent.images.map(({ src, alt }, index) => (
            <Image src={src} alt={alt} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppSection;
