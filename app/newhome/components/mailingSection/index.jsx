import React from 'react';

// styles
import styles from "./mailingSection.scss";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";

const MailingSection = () => (
  <section className={styles.mailingSectionContainer}>
    <div className={styles.innerContainer}>
      mailingSection
    </div>
  </section>
);

export default withStyles(styles)(MailingSection);
