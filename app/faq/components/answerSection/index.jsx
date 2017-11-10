import React from "react";
// components
import AnswerItem from "./answerItem";
import faqContent from "./faqContent";
// styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./answerSection.scss";

const AnswerSection = () => {
  return (
    <section className={styles.answerSectionContainer}>
      <div className={styles.innerContainer}>
        {faqContent.map((item, idx) => {
          return <AnswerItem isOpen={idx === 0} question={item.question} answer={item.answer} />;
        })}
      </div>
    </section>
  );
};

export default withStyles(styles)(AnswerSection);
