import React from "react";
// styles
import withStyles from "isomorphic-style-loader/lib/withStyles";
import styles from "./answerItem.scss";

const AnswerItem = ({ isOpen, selectAnswerItem, index, question, answer }) => {
  return (
    <div className={`${styles.answerItem} ${isOpen ? styles.open : ""}`}>
      <div className={styles.itemContainer}>
        <div className={styles.itemTitle} onClick={() => selectAnswerItem(index)}>
          {question}
        </div>
        <div className={styles.itemContent}>{answer}</div>
      </div>
    </div>
  );
};

export default withStyles(styles)(AnswerItem);
