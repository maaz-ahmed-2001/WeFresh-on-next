import InlineForm from "../../../components/common/InlineForm";
import SectionHeading from "../../../components/common/SectionHeading";
import styles from "./index.module.css";

const FindUs = () => {
  return (
    <section className={"py-24 md:pb-20 " + styles.section}>
      <div
        className={
          "container xs:px-2 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44 "
        }
      >
        <div className="">
          {/* <div className={styles.content}>
                <SectionHeading />
                <InlineForm />
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default FindUs;
