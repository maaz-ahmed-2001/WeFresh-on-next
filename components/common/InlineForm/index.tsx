import React from "react";
import styles from "./index.module.css";
type formProps = {
  form: {
    type: string;
    placeholder: string;
    text: string;
  };
};
const InlineForm = (props: formProps) => {
  return (
    <div className={styles.inlineForm}>
      <input type={props.form.type} placeholder={props.form.placeholder} />
      <button>{props.form.text}</button>
    </div>
  );
};

export default InlineForm;
