import styles from "./index.module.css";
type headingProps = {
  normal: string;
  bold: string;
};
const SectionHeading = ({ normal, bold }: headingProps) => {
  return (
    <div className={styles.sectionHeading}>
      <h2>
        {normal}
        <b> {bold}</b>
      </h2>
    </div>
  );
};

export default SectionHeading;
