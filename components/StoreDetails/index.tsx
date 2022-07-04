import Image from "next/image";
import React from "react";
import mobile from "../../assests/images/servicesPhone.svg";
import StoreContent from "../common/StoreContent";
import storeBg from "../../assests/images/servicesBgImg.svg";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

const StoreDetails = () => {
  const { heading, content } = useSelector((state: any) => state.app);
  const pageContent = {
    img: {
      src: mobile,
      alt: "mobile",
    },
    details: [
      {
        title: heading,
        text: content,
      },
      {
        title: heading,
        text: content,
      },
      {
        title: heading,
        text: content,
      },
    ],
  };
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 items-center gap-4">
      <div>
        <div
          className={
            "flex flex-row justify-center items-center relative " +
            styles.storeImg
          }
        >
          <div className={styles.storeBg}>
            <Image src={storeBg} alt="bg-img" />
          </div>
          <Image
            src={pageContent.img.src}
            alt={pageContent.img.alt}
            className="w-full"
          />
        </div>
      </div>
      <div>
        <div>
          <StoreContent details={pageContent.details} />
        </div>
      </div>
    </div>
  );
};

export default StoreDetails;
