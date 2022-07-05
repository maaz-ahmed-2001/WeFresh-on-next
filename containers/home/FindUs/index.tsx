import Image from "next/image";
import InlineForm from "../../../components/common/InlineForm";
import SectionHeading from "../../../components/common/SectionHeading";
import styles from "./index.module.css";
import findUsImg from "../../../assests/images/findUsMainImg.svg";
import blueBgImg from "../../../assests/images/findUsBlueImg.svg";
import orangeBgImg from "../../../assests/images/findUsOrangeImg.svg";

const FindUsSection = () => {
  const pageContent = {
    heading: {
      normal: "Find us in these",
      bold: "Area",
    },
    form: {
      type: "text",
      text: "search",
      placeholder: "Enter tyour area",
    },
    image: {
      src: findUsImg,
      alt: "find-us image",
    },
    bg_1: {
      src: blueBgImg,
      alt: "blue-circle",
    },
    bg_2: {
      src: orangeBgImg,
      alt: "orange-circle",
    },
  };
  return (
    <section className={"py-48 md:pt-24 relative overflow-hidden"}>
      <div className={styles.bg1}>
        <Image src={pageContent.bg_1.src} alt={pageContent.bg_1.alt} />
      </div>
      <div className={styles.bg2}>
        <Image src={pageContent.bg_2.src} alt={pageContent.bg_2.alt} />
      </div>
      <div
        className={
          "container xs:px-4 sm:px-5 md:px-8 lg:px-14 xl:px-24 2xl:px-36 3xl:px-72 "
        }
      >
        <div className="grid md:grid-cols-1 grid-cols-2 gap-4">
          <div
            className={
              styles.content +
              " flex flex-col justify-center items-start h-full md:items-center"
            }
          >
            <SectionHeading
              bold={pageContent.heading.bold}
              normal={pageContent.heading.normal}
            />
            <div className={styles.form + " mt-5 md:mt-6 md:mb-32"}>
              <InlineForm form={pageContent.form} />
            </div>
          </div>
          <div
            className={
              "max-w-full relative flex flex-col justify-end " + styles.img
            }
          >
            <Image src={pageContent.image.src} alt={pageContent.image.alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindUsSection;
