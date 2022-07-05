import styles from "./index.module.css";

type contentProps = {
  details: {
    title: string;
    text: string;
  }[];
};
const StoreContent = (props: contentProps) => {
  return (
    <>
      {props.details.map(({ title, text }, index) => (
        <div className={"px-12 py-8 md:p-5 " + styles.content} key={index}>
          <h3 className="mb-3">{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </>
  );
};

export default StoreContent;
