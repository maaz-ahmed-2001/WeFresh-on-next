import InlineForm from "../../../components/common/InlineForm";
import styles from "./index.module.css";
const BusinessSection = () => {
  const pageContent = {
    heading: {
      bold: "WeFresh",
      normal: "for business",
    },
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    form: {
      type: "tel",
      placeholder: "Enter phone number",
      text: "send",
    },
  };
  return (
    <section className={"pt-24 pb-20 md:pt-20 md:pb-24 "}>
      <div
        className={
          "container xs:px-2 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44 "
        }
      >
        <div className="flex-col justify-center items-center">
          <div className={styles.content}>
            <h2>
              <b>{pageContent.heading.bold} </b>
              {pageContent.heading.normal}
            </h2>
            <p>{pageContent.content}</p>
            <InlineForm form={pageContent.form} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
