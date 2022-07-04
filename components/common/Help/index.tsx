import styles from "./index.module.css";
type help = {
  support: {
    title: string | number;
    content: string;
  }[];
};
const Help = (props: help) => {
  return (
    <div className={"grid grid-cols-2 md:grid-cols-1 gap-5 " + styles.helpBox}>
      {props.support.map((item, index) => (
        <div className="flex flex-col items-center justify-end" key={index}>
          <h4 className="text-center">{item.title}</h4>
          <p className="text-center">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Help;
