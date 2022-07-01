import React from "react";
import AccordionComponent from "../../../components/common/Accordion";

import Help from "../../../components/common/Help";
import SectionHeading from "../../../components/common/SectionHeading";
import styles from "./index.module.css";
const QuestionsSection = () => {
  const pageContent = {
    first_title: "Got questions?",
    first_titleText: "Perfect, we've got answers!",
    questions: [
      {
        question: "How to get started?",
        title: "Lorem ipsum dolor sit amet, consectetur adipis",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        question: "How to get started?",
        title: "Lorem ipsum dolor sit amet, consectetur adipis",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        question: "How to get started?",
        title: "Lorem ipsum dolor sit amet, consectetur adipis",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`,
      },
      {
        question: "How to get started?",
        title: "Lorem ipsum dolor sit amet, consectetur adipis",
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.`,
      },
    ],
    second_title: "Still have a question?",
    second_titleText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    support: [
      {
        title: "+66 8959888",
        content: "Lorem ipsum dolor sit amet, consectetur",
      },
      {
        title: "Support@service.com",
        content: "Lorem ipsum dolor sit amet, consectetur",
      },
    ],
  };
  return (
    <section className="py-24 md:pb-20">
      <div className="container sm:px-0 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44">
        <div className={"flex flex-col items-center " + styles.firstContent}>
          <SectionHeading normal={pageContent.first_title} />
          <p className="text-center mt-3 mb-11">
            {pageContent.first_titleText}
          </p>

          <AccordionComponent questions={pageContent.questions} />
        </div>
      </div>
      <div className="container xs:px-2 sm:px-5 md:px-10 lg:px-20 xl:px-32 2xl:px-36 3xl:px-44">
        <div className={"flex flex-col items-center " + styles.secondContent}>
          <SectionHeading normal={pageContent.second_title} />
          <p className="text-center mt-3 mb-11">
            {pageContent.second_titleText}
          </p>
          <Help support={pageContent.support} />
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
