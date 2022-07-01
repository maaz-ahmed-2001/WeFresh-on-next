import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import styles from "./index.module.css";
type accProps = {
  questions: {
    question: string;
    title: string;
    body: string;
  }[];
};
const AccordionComponent = (props: accProps) => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className={"flex flex-col w-full mb-3 md:mb-0 gap-3 " + styles.accCon}>
      {props.questions.map(({ question, title, body }, index) => (
        <Accordion
          className={styles.accordion}
          open={open === index + 1}
          onClick={() => handleOpen(index + 1)}
          key={index}
        >
          <AccordionHeader className={styles.accHead}>
            {question}
          </AccordionHeader>
          <AccordionBody className={styles.accBody}>
            <h3>{title}</h3>
            <p>{body}</p>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionComponent;
