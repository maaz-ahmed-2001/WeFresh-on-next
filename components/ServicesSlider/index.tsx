import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";
import "swiper/css";
import { useDispatch } from "react-redux";
import { store, cafe, food, grocery } from "../../redux/slice/appSlice";

type sliderProps = {
  imgContent: {
    src: string;
    alt: string;
    title: string;
  }[];
};

const ServicesSlider = (props: sliderProps) => {
  const dispatch = useDispatch();
  const handleChange = (index: number) => {
    if (index === 0) {
      dispatch(store());
      console.log("a");
    }
    if (index === 1) {
      dispatch(grocery());
      console.log("b");
    }
    if (index === 2) {
      dispatch(cafe());
      console.log("c");
    }
    if (index === 3) {
      dispatch(food());
      console.log("d");
    }
  };
  return (
    <Swiper
      autoplay={true}
      spaceBetween={50}
      loop={true}
      slidesPerView={1}
      onSlideChange={(index) => handleChange(index.realIndex)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {props.imgContent.map(({ src, alt, title }, index) => (
        <SwiperSlide className={styles.slideCon} key={index}>
          <div className="flex flex-col items-center">
            <div className={styles.content}>
              <div>
                <Image src={src} alt={alt} />
              </div>
              <p>{title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServicesSlider;
