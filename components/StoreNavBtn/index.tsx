import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { cafe, food, grocery, store } from "../../redux/slice/appSlice";

type btnProps = {
  imgContent: {
    src: string;
    alt: string;
    title: string;
  }[];
};
const StoreNavBtn = (props: btnProps) => {
  const [openTab, setOpenTab] = useState(2);
  const dispatch = useDispatch();
  const handleClick = (index: number) => {
    setOpenTab(index + 1);
    if (index === 0) {
      dispatch(store());
      console.log("store");
    }
    if (index === 1) {
      dispatch(grocery());
      console.log("grocery");
    }
    if (index === 2) {
      dispatch(cafe());
      console.log("cafe");
    }
    if (index === 3) {
      dispatch(food());
      console.log("food");
    }
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full mb-0">
          <ul
            className={
              "flex list-none flex-row lg:justify-between justify-evenly items-start " +
              styles.btnContainer
            }
          >
            {props.imgContent.map(({ src, alt, title }, index) => (
              <li key={index} className="flex-row justify-center items-start">
                <div
                  className={
                    "text-xs capitalize block text-center flex-col justify-start items-center " +
                    (openTab === index + 1 ? styles.active : styles.normal)
                  }
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  <Image src={src} alt={alt} />
                  <p>{title}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default StoreNavBtn;
