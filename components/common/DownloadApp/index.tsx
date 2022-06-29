import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
type appProps = {
  download: {
    text: string;
    image: {
      src: HTMLImageElement;
      alt: string;
    }[];
  };
};
const DownloadApp = (props: appProps) => {
  return (
    <div
      className={
        "flex-col justify-center items-center sm:gap-3 md:gap-5 w-fit " +
        styles.download
      }
    >
      <p>{props.download.text}</p>
      <div className="flex justify-center gap-5">
        {props.download.image.map((img, index) => (
          <Image
            src={img.src}
            alt={img.alt}
            key={index}
            className="cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default DownloadApp;
