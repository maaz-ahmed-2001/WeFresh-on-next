import store from "../../../assests/images/services1.svg";
import grocery from "../../../assests/images/services2.svg";
import cafe from "../../../assests/images/services3.svg";
import food from "../../../assests/images/services4.svg";
import SectionHeading from "../../../components/common/SectionHeading";
import StoreContent from "../../../components/common/StoreContent";
import ServicesSlider from "../../../components/ServicesSlider";
import StoreDetails from "../../../components/StoreDetails";
import StoreNavBtn from "../../../components/StoreNavBtn";
import styles from "./index.module.css";
export default function StoreSection() {
  const pageContent = {
    heading: {
      normal: "We've more",
      bold: "services",
    },
    imgContent: [
      {
        src: store,
        alt: "store-service",
        title: "Store",
      },
      {
        src: grocery,
        alt: "grocery-service",
        title: "Grocery",
      },
      {
        src: cafe,
        alt: "cafe-service",
        title: "Cafe",
      },
      {
        src: food,
        alt: "food-service",
        title: "Food",
      },
    ],
  };
  return (
    <section className="py-24 md:pb-0">
      <div className="container xs:px-3 sm:px-5 md:px-8 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44">
        <div className={styles.content}>
          <div className={styles.heading}>
            <SectionHeading
              normal={pageContent.heading.normal}
              bold={pageContent.heading.bold}
            />
          </div>
          <div className={styles.storeBtns + "block md:hidden"}>
            <StoreNavBtn imgContent={pageContent.imgContent} />
          </div>
          <div className="hidden md:block">
            <ServicesSlider imgContent={pageContent.imgContent} />
          </div>
          <div className={styles.storeDetails + " mt-36 md:mt-28"}>
            <StoreDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
